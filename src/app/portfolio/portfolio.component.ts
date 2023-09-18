import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  selectedColor : string = '#2C3E50';
  portolioTilte :string = 'PORTFOLIO COMPONENT'
}
