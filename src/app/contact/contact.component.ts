import { Component} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
})

export class ContactComponent {
  selectedColor : string = '#2C3E50';
  contactTitle :string = 'CONTACT SECTION';
  contactForm : FormGroup = new FormGroup ({
    userName : new FormControl(null),
    userAge : new FormControl(null),
    userEmail: new FormControl(null),
    userPassword: new FormControl(null)
  })
  isUserNameFilled() {
    return this.contactForm.get('userName')?.value !== null &&
    this.contactForm.get('userName')?.value.trim() !== '';
  }
  isUserAgeFilled() {
    return this.contactForm.get('userAge')?.value !== null 
  }
  isUserEmailFilled() {
    return this.contactForm.get('userEmail')?.value !== null &&
    this.contactForm.get('userEmail')?.value.trim() !== '';
  }
  isUserPasswordFilled() {
    return this.contactForm.get('userPassword')?.value !== null &&
    this.contactForm.get('userPassword')?.value.trim() !== '';
  }

}
