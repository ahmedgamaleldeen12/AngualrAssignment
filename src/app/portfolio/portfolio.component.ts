import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(private el: ElementRef) { }



  selectedColor: string = '#2C3E50';
  portolioTilte: string = 'PORTFOLIO COMPONENT'
  flagVarToShow: boolean = false;
  imgSrc: string = ''

  displayImg(url: string) {
    this.imgSrc = url;
    this.flagVarToShow = true;
  }
  closeImg(event: MouseEvent) {
    const displayedImgID = this.el.nativeElement.querySelector('#dipalyedImgID');
    if (this.flagVarToShow && event.target && event.target !== displayedImgID) {
      this.flagVarToShow = false;
      this.imgSrc = '';
    }
  }
}



