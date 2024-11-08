import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('socialLinks', [
      transition(':enter', [
        query('.social-link', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ContactMeComponent {
  name = 'Your Name';
  email = '';
  hoveredEmail = false;
  onSubmit() {
    console.log('Submitted email:', this.email);
    // Here you would typically send the email to your server
    this.email = ''; // Clear the input after submission
  }

}
