import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeRoute:string='';
  constructor(){
   let activeRoute = window.location.href.slice(window.location.origin.length+2)
   this.activeRoute = activeRoute
  }
}
