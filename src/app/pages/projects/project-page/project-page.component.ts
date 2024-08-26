import { IMAGE_CONFIG, NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectPageHeaderComponent } from "./header/header.component";
import { platform } from 'os';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ProjectPageHeaderComponent,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  providers: [
    provideCloudinaryLoader('https://res.cloudinary.com/dvtmkwimv/'),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048]
      }
    },
  ]
})

export class ProjectPageComponent {

  itemType: typeof ItemType = ItemType
  
  projectId!: string;
  data!: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
    });

    this.data = {
      header: {
        title: "Sticky hours",
        text: "A app for finding common free hours, allowing to use them for something usefull. build on top of the Zermelo api.",
        buttons: [

        ]
      },
      name: "Sticky Hours",
      platforms: [
        {
          name: "Android",
          url: ""
        },
        {
          name: "Linux",
          url: ""
        }
        , {
          name: "Windows",
          url: ""
        }

      ],
      images: [{
        url: 'StickyHours-screenshot-common_hours_menu',
        alt: 'Sticky Hours android app icon, used as banner for the project page',
        width: 3120,
        height: 1440,
      }],
      sections: [
        {
          name: 'About',
          subsections: [
            {
              name: 'How it started',
              items: [
                {
                  type: ItemType.Text, 
                  text: 'When i got to the upper part of secondary school i got a lot of gaps in my schedule. Not 3-4 much, but at least 7 and even more if lessons were cancelled. This inspired me to making this app, that allows you to quick and easily access see your gaps for this and coming weeks. But the best is that the app allows to add multiple users, and computes the common gaps between those users. Using this you can easily plan to work on a common project with your friends, move a lesson if your whole class has a common gap (resulting in a later start or an earlyer end), or just do something fun in those otherwise lost hours'
                }
              ]
            },
            {
              name: 'Open source',
              items: [
                {
                  type: ItemType.Text,
                  text: 'Open source helps improve the app as anyone can contribute fixes and features.'
                }
              ]
            }
          ]
        },
        {
          name: 'Pig'
        }
      ]
    }
  }

}

enum ItemType {
  Text,
  Images,
  Buttons,
  Chips
}