import { Component } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '0.5s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('staggerList', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ],})

export class ProjectsComponent {
  name = 'Your Name';
  email = '';
  currentYear = new Date().getFullYear();
  projects = [
        {
      title: 'Funeral Management System',
      description: 'Created a system for tracking claims, commissions, and remittances for a funeral service.',
      technologies: ['Angular', 'Java', 'Flowbite'],
      image: 'https://picsum.photos/id/60/600/400',
      demoUrl: 'https://task-manager-ai.example.com',
      githubUrl: 'https://github.com/username/task-manager-ai',
    },
        {
      title: 'PrepPal',
      description: 'PrepPal is a recipe generation web application that helps you discover delicious meals based on the ingredients you have, your desired cuisine, and the type of meal.',
      technologies: ['Python', 'Streamlit', 'OpenAI'],
      image: 'https://picsum.photos/id/180/600/400',
      demoUrl: 'https://task-manager-ai.example.com',
      githubUrl: 'https://github.com/username/task-manager-ai',
    },
  ];
  // projects: Project[] = [
  //   {
  //     title: 'Love Chronicles',
  //     description: 'An application that generates personalized cartoon-like love stories for special occasions.',
  //     technologies: ['Angular', 'Node.js', 'Hugging Face'],
  //     image: 'https://picsum.photos/id/3/600/400',
  //     link: '#'
  //   },
  //   {
  //     title: 'Funeral Management System',
  //     description: 'Created a system for tracking claims, commissions, and remittances for a funeral service.',
  //     technologies: ['Angular', 'Java', 'Flowbite'],
  //     image: 'https://picsum.photos/id/60/600/400',
  //     link: '#'
  //   },
  //   {
  //     title: 'Event Invitation',
  //     description: 'A web app for creating and sharing event invites with QR code-based access control.',
  //     technologies: ['Angular', 'Node.js'],
  //     image: 'https://picsum.photos/id/106/600/400',
  //     link: '#'
  //   },
  //   {
  //     title: 'PrepPal',
  //     description: 'PrepPal is a recipe generation web application that helps you discover delicious meals based on the ingredients you have, your desired cuisine, and the type of meal.',
  //     technologies: ['Python', 'Streamlit', 'OpenAI'],
  //     image: 'https://picsum.photos/id/180/600/400',
  //     link: '#'
  //   },
  //   {
  //     title: 'Nisikie ',
  //     description: 'A depression Prediction Application that aims to provide a valuable resource in saving lives.',
  //     technologies: ['Python', 'Streamlit', 'Machine Learning'],
  //     image: 'https://picsum.photos/id/180/600/400',
  //     link: '#'
  //   }
  // ];

  onSubmit() {
    console.log('Submitted email:', this.email);
    // Here you would typically send the email to your server
    this.email = ''; // Clear the input after submission
  }
}


interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}