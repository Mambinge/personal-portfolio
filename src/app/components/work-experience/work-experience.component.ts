import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
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
export class WorkExperienceComponent {
  experiences = [
    {
      role: 'Intermediate Software Developer',
      company: 'Afrosoft Holdings',
      period: '2024 - Present',
      responsibilities: [
        'Led development of frontend applications using Angular',
        'Mentor junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
      ],
    },
    {
      role: 'Junior Software Developer',
      company: 'Afrosoft Holdings',
      period: '2020 - 2022',
      responsibilities: [
        'Built and maintained web applications',
        'Assisted in project design sessions and implementation',
        'Participated in daily scrum meetings and sprint planning',
      ],
    },
  ];

}
