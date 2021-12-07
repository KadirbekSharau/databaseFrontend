import { Component, OnInit } from '@angular/core';

/* App component */
@Component({
  selector: 'app-component',
  templateUrl: './app_component.ng.html',
  styleUrls: ['./app_component.scss',]
})
export class AppComponent implements OnInit {
  title = 'BookIt';
  constructor() {

  }
  ngOnInit() {}
}