import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { AuthorizationService } from "../services/authorization_service";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {
    constructor(private auth: AuthorizationService, 
                private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (this.auth.isAuthenticated()) {
            return of(true);
        }
        else {
            this.router.navigate(['login'], {
                queryParams: {
                    accessDenied: true
                }
            });
        }
        return of(false);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }
}