import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isToggle: boolean = false;
  constructor() { }
  toggleMenu() {
    this.isToggle = !this.isToggle;
  }

  onVisited() {
    this.isToggle = !this.isToggle;
  }
}
