import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer-section',
  templateUrl: './volunteer-section.component.html',
  styleUrl: './volunteer-section.component.css',
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
export class VolunteerSectionComponent {
  engagements = [
    {
      type: 'podcast',
      icon: '🎙️',
      title: 'Afrocodemy,Tech Events, Ladies in Tech ',
      date: 'October 2024',
      description: 'Featured guest on "Tech-Tonic" podcast discussing my journey in tech and career growth tips.',
      tags: ['Career Growth', 'Technology', 'Podcast']
    },
    {
      type: 'talk',
      icon: '🎤',
      title: 'Panelist',
      date: 'August 2024',
      description: 'I was honored to be part of the panelist team at the Deep Learning IndabaX Zimbabwe 2024 symposium. During the event, I contributed to discussions on responsible practices and the ethical use of AI, emphasizing the importance of accountability and sustainable AI integration.',
      tags: ['AI', 'Ethical Use', 'Public Speaking']
    },
    {
      type: 'volunteer',
      icon: '💻',
      title: 'Master of Ceremonies',
      date: 'May 2023',
      description: 'I was delighted to serve as the master of ceremonies at the DataXplore event hosted by Data Wired. This event was designed to bring together women who are interested in data science, those who are already working in the field, those who are looking to switch careers, and those who need guidance on how to navigate their careers.',
      tags: ['Mentoring', 'Community', 'Education']
    },
    {
      type: 'talk',
      icon: '🎤',
      title: 'Guest Speaker',
      date: 'January 2023',
      description: 'Guest speaker on the Data Science 101: The Necessary Skills talk show hosted by Sherilyn under Zindi. Discussed on the necessary skills and career journey of becoming a data scientist, as well as the different jobs involved in data.',
      tags: ['Data Science', 'Machine Learning', 'Public Speaking']
    },
    {
      type: 'talk',
      icon: '🎤',
      title: 'Guest Speaker',
      date: 'November 2022',
      link: 'https://www.linkedin.com/posts/data-science-zimbabwe_dsz-big-data-conference-activity-7001062058658050048-ZJFt?utm_source=share&utm_medium=member_android',
      description: 'Speaker for Big Data Conference Zimbabwe, held by Data Science Zimbabwe. took place on the 23rd -24th of November. Spoke on the Introduction to Data Science.',
      tags: ['Data Science', 'Machine Learning', 'Public Speaking']
    },
    {
      type: 'talk',
      icon: '📱',
      title: 'AI Tech Talk Organizer',
      date: 'September 2022',
      description: 'I had the honor of serving as the lead organizer for monthly AI-powered AI TedTalks at my workplace. These sessions were designed to introduce new AI techniques that could enhance the organizations efficiency and accelerate work processes and development.',
      tags: ['AI', 'Frontend', 'Backend', 'Software Development']
    }
  ];

}
