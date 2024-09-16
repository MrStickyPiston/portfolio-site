import { IMAGE_CONFIG, NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectPageHeaderComponent } from "./header/header.component";
import { platform } from 'os';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { E404Component } from '../../error/e404/e404.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ProjectPageHeaderComponent,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    E404Component
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  providers: [
    provideCloudinaryLoader('https://res.cloudinary.com/dvtmkwimv/'),
  ]
})

export class ProjectPageComponent {

  itemType: typeof ItemType = ItemType

  projectId!: string;
  data!: any;

  error_404: boolean = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
    });

    if (this.projectId == "sticky-hours") {
      this.data = {
        header: {
          title: "Sticky hours",
          text: "A app for finding common free hours, allowing to use them for something usefull. build on top of the Zermelo api.",
          buttons: [

          ]
        },
        name: "Sticky Hours",
        sections: [
          {
            name: 'About',
            id: 'about',
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
                  },
                  {
                    type: ItemType.Images,
                    images: [{
                      url: 'StickyHours-screenshot-common_hours_menu',
                      alt: 'Sticky Hours android app icon, used as banner for the project page',
                      width: 3120,
                      height: 1440,
                    },
                    {
                      url: 'StickyHours-screenshot-common_hours_menu',
                      alt: 'Sticky Hours android app icon, used as banner for the project page',
                      width: 3120,
                      height: 1440,
                    }]
                  }
                ]
              }
            ]
          },
          {
            name: 'Frequently asked questions',
            id: 'faq',
            subsections: [
              {
                name: 'How can i log in?',
                id: 'faq-how-to-log-in',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'When you open the app for the first time, you will see a login screen. The Sticky Hours app gets your schedule data from your schools Zermelo portal. To link the app to Zermelo, only your Zermelo portal id and linkcode are needed. See below for more information on how to do this.'
                  }
                ]
              },
              {
                name: 'What is my Zermelo portal id?',
                id: 'faq-zermelo-portal-id',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'A Zermelo portal id is assigned to your school if your school uses Zermelo. You can find it by going to your school`s web portal, and looking at the url in your browsers url field. The Zermelo portal id is the value between "https://" and ".zportal.nl". For example, if the link is "https://sticky-hours.zportal.nl/app", the portal id would be "sticky-hours". If you don\'t know the url of your school`s Zermelo portal, look on the site of your school, or ask your school.'
                  }
                ]
              },
              {
                name: 'How do i get a linkcode?',
                id: 'faq-zermelo-get-linkcode-for-login',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'Link codes are optainable through the Zermelo web portal of your school. If you don\'t know your school`s web portal url, see "What is my Zermelo portal name" above for more details. Once you are logged in on the Zermelo web portal, please open the settings. You will see the option "Link external application" among some other options. Please click on it, you will see a pop up modal containing an QR code, your portal name under it, and below that your one time link code.'
                  }
                ]
              }
            ]
          }
        ]
      }
    } else {
      this.error_404 = true
    }
  }

}

enum ItemType {
  Text,
  Images,
  Buttons,
  Chips
}
