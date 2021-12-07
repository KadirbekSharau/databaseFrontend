import { Component, Input } from '@angular/core';

/* Header component */
@Component({
  selector: 'header',
  templateUrl: './header.ng.html',
  styleUrls: ['./header.scss']
})
export class Header {
  title = 'BookIt';
  @Input() user_status = "Log in";
}