import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-middle-lines',
  templateUrl: './middle-lines.component.html',
  styleUrls: ['./middle-lines.component.css']
})
export class MiddleLinesComponent {
   @Input() color!: string; 
   @Input() title!:string;
}
