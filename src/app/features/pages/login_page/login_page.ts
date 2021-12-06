import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services/authorization_service';

/* Login page component */
@Component({
  selector: 'login-page',
  templateUrl: './login_page.ng.html',
  styleUrls: ['./login_page.scss']
})
export class LoginPage implements OnInit{
  title = 'Login';

  constructor(private auth: AuthorizationService) {

  }

  ngOnInit() {}
}