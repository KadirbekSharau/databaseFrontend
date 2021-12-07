import { Component, OnInit } from '@angular/core';

/* Registration page component */
@Component({
  selector: 'registration-page',
  templateUrl: './registration_page.ng.html',
  styleUrls: ['./registration_page.scss']
})
export class RegistrationPage implements OnInit{
  title = 'Register here';

  constructor() {

  }

  ngOnInit() {}
}