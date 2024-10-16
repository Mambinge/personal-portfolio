import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  name = 'Your Name';
  email = '';

  onSubmit() {
    console.log('Submitted email:', this.email);
    // Here you would typically send the email to your server
    this.email = ''; // Clear the input after submission
  }

}
