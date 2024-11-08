import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, importProvidersFrom } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
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
export class HomeComponent {
  // experiences = [
  //   {
  //     role: 'Intermediate Software Developer',
  //     company: 'Afrosoft Holdings',
  //     period: '2024 - Present',
  //     responsibilities: [
  //       'Led development of frontend applications using Angular',
  //       'Mentor junior developers and conducted code reviews',
  //       'Implemented CI/CD pipelines reducing deployment time by 40%',
  //     ],
  //   },
  //   {
  //     role: 'Junior Software Developer',
  //     company: 'Afrosoft Holdings',
  //     period: '2020 - 2022',
  //     responsibilities: [
  //       'Built and maintained web applications',
  //       'Assisted in project design sessions and implementation',
  //       'Participated in daily scrum meetings and sprint planning',
  //     ],
  //   },
  // ];
  experiences = [
    {
      role: 'Software Developer',
      company: 'Example Company',
      period: '2020 - Present',
      responsibilities: [
        'Developed and maintained web applications using Angular and Node.js',
        'Implemented CI/CD pipelines using GitHub Actions',
        'Led team of 3 developers in successful project delivery'
      ]
    }
  ];

  engagements = [
    {
      type: 'talk',
      icon: 'fas fa-microphone',
      title: 'Modern Web Development with Angular',
      date: 'June 2023',
      description: 'Delivered a keynote presentation on building scalable web applications using Angular and modern development practices at AngularConnect 2023.',
      tags: ['Angular', 'Web Development', 'Performance'],
      link: 'https://example.com/talk'
    },
    {
      type: 'volunteer',
      icon: 'fas fa-heart',
      title: 'Code Mentor - Women Who Code',
      date: 'Jan 2023 - Present',
      description: 'Mentoring aspiring female developers, conducting weekly coding sessions, and providing career guidance in web development.',
      tags: ['Mentoring', 'Web Development', 'Community'],
      link: 'https://www.womenwhocode.com'
    },
    {
      type: 'podcast',
      icon: 'fas fa-podcast',
      title: 'The Future of TypeScript',
      date: 'March 2023',
      description: 'Featured guest on DevTalk podcast discussing TypeScript best practices and its impact on modern web development.',
      tags: ['TypeScript', 'JavaScript', 'Development'],
      link: 'https://example.com/podcast'
    },
    {
      type: 'talk',
      icon: 'fas fa-microphone',
      title: 'Building Accessible Web Apps',
      date: 'April 2023',
      description: 'Workshop presenter at A11y Conference, teaching developers how to create inclusive web applications.',
      tags: ['Accessibility', 'Web Development', 'Inclusion'],
      link: 'https://example.com/workshop'
    }
  ];

}
