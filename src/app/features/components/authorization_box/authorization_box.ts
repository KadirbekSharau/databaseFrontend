import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/core/services/authorization_service';

/* Authorization Box component */
@Component({
  selector: 'authorization-box',
  templateUrl: './authorization_box.ng.html',
  styleUrls: ['./authorization_box.scss']
})
export class AuthorizationBox implements OnInit, OnDestroy {
    form!: FormGroup;
    authSubLogin!: Subscription;
    authSubRegister!: Subscription;

    title = 'Hospital Database';
    @Input() mode = "";

    constructor(private auth: AuthorizationService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            name: new FormControl(null, [Validators.required]),
            surname: new FormControl(null, [Validators.required]),
            salary: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.required]),
            cname: new FormControl(null, [Validators.required])
        });

        this.route.queryParams.subscribe(
            (params: Params) => {
                if (params['registered']) {
                    // You are registered and ready to go
                }
                else if (params['accessDenied']) {
                    // You have to register first 
                }
            }
        );
    }

    ngOnDestroy() {
        if (this.authSubLogin) {
            this.authSubLogin.unsubscribe();
        }
        if (this.authSubRegister) {
            this.authSubRegister.unsubscribe();
        }
    }

    // Function called to login
    // onSubmitLogin() {
    //     this.form.disable();
    //     this.authSubLogin = this.auth.login(this.form.value).subscribe(
    //         () => this.router.navigate(['../']),
    //         error => {
    //             console.warn();
    //             this.form.enable();
    //         }
    //     );
    // }

    // Function called to register
    onSubmitRegister() {
        this.form.disable();
        this.authSubRegister = this.auth.register(this.form.value).subscribe(
            () => {
                this.router.navigate(['../'], {
                queryParams: {
                    email: this.form.get('email')
                }
            });},
            error => {
                console.warn();
                this.form.enable();
            }
        )

    }

    // Function to check in which state you are
    isLoginMode(mode: string) {
        if (mode === "Register here") {
            return true;
        }
        return false;    
    }

}