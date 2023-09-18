import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isScrolled = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY === 0;
  }
}
