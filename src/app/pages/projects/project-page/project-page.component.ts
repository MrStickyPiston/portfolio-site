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
                name: 'Inspiration',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'When i got to the upper part of secondary school i got a lot of gaps in my schedule. Not 3-4 much, but at least 7 and even more if lessons were cancelled. This inspired me to making this app, that allows you to quick and easily access see your gaps for this and coming weeks. But the best is that the app allows to add multiple users, and computes the common gaps between those users. Using this you can easily plan to work on a common project with your friends, move a lesson if your whole class has a common gap (resulting in a later start or an earlyer end), or just do something fun in those otherwise lost hours'
                  }
                ]
              },
              {
                name: 'Developers',
                items: [
                  {
                    type: ItemType.Text,
                    text: "Sticky Hours was developed primarily by MrStickyPiston (mr.sticky.piston@gmail.com). No contributions to the code have been made by other people yet. If you want to contribute, see the link to the source code on github below."
                  }
                ]
              },
              {
                name: 'Source code',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'The app was build with the OSS (Open Source Software) principles in mind and licensed under MIT. Open source means that everyone can view and improve the projects code, leading to non-profit community driven development. Because nobody is looking for an app with ads and tracking, no ads or tracking will be implemented ever, and everyone is allowed to use the app free of cost. If you are interested in the project and like to see something added, create an issue on the projects issue tracker linked below. If you have experience with coding in python you can also try to fork the project and add it yourself. If you think others are also interested in your feature, you can create a pull request. If you are interested in OSS in general, visit wikipedia.'
                  },
                  {
                    type: ItemType.Buttons,
                    buttons: [
                      {
                        url: 'https://github.com/MrStickyPiston/CommonFreeHours-app',
                        text: 'Source code',
                        icon: 'code'
                      },
                      {
                        url: 'https://github.com/MrStickyPiston/CommonFreeHours-app/issues',
                        text: 'Issue tracker',
                        icon: 'adjust'
                      },
                      {
                        url: 'https://en.wikipedia.org/wiki/Open-source_software',
                        text: 'OSS - Wikipedia',
                        icon: 'book'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: 'Features',
            id: 'features',
            subsections: [
              {
                name: 'Finding gaps in schedules'
              },
              {
                name: 'Always up to date schedule data'
              },
              {
                name: 'Computing common gaps'
              },
              {
                name: 'Cross platform support'
              },
              {
                name: 'Easy to use interface',
                items: [
                  {
                    type: ItemType.Images,
                    images: [
                      {
                      url: 'StickyHours-screenshot-common_hours_menu',
                      alt: 'Sticky Hours android app icon, used as banner for the project page',
                      width: 3120,
                      height: 1440,
                    }
                    ]
                  }
                ]
              },
              {
                name: 'Open source',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'Sticky Hours is open source under the MIT license. Open source helps improve the app as anyone can contribute fixes and features. See about -> open source above for more information about open source.'
                  }
                ]
              }
            ]
          },
          {
            name: 'Downloads',
            id: 'downloads',
            subsections: [
              {
                name: 'Stable',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'A fully tested and stable version of Sticky Hours, good for regular usage. If you dont know what version you should pick, use this one. Please select your platform below proceed to the installation guide.'
                  },
                  {
                    type: ItemType.Buttons,
                    buttons: [
                      {
                        url: 'https://play.google.com/store/apps/details?id=dev.mrstickypiston.stickyhours',
                        text: 'Android',
                        icon: 'android'
                      },
                      {
                        url: 'https://github.com/MrStickyPiston/CommonFreeHours-app/releases/latest/download/StickyHours-Windows.zip',
                        text: 'Windows',
                        icon: 'desktop_windows'
                      },
                      {
                        url: 'https://github.com/MrStickyPiston/CommonFreeHours-app/releases/latest/download/StickyHours-macOS.zip',
                        text: 'MacOS',
                        icon: 'desktop_mac'
                      },
                      {
                        url: 'https://github.com/MrStickyPiston/CommonFreeHours-app/releases/latest/download/StickyHours-Flatpak.zip',
                        text: 'Linux Flatpak',
                        icon: 'lock'
                      },
                      {
                        url: 'https://github.com/MrStickyPiston/CommonFreeHours-app/releases/latest/download/StickyHours-Ubuntu-24.04.zip',
                        text: 'Ubuntu 24.04 LTS',
                        icon: 'computer'
                      },
                      {
                        url: 'https://github.com/MrStickyPiston/CommonFreeHours-app/releases/latest/download/StickyHours-Fedora-40.zip',
                        text: 'Fedora 40',
                        icon: 'computer'
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Nigthly build',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'A nightly build for Sticky Hours is available on github actions. This build will contain the newest features, but is not (properly) tested and still in development. Only use this version if you want to test the app or try out new features before they are realeased, but know what you are doing. Report any issues you encounter on the issue tracker on the github page. Because of apple requiring you to build iOS apps on a physical computer running Xcode i will not be providing nightly iOS builds. Please build the code from source yourself if you want to test out the iOS version.'
                  }
                ]
              }
            ]
          },
          {
            name: 'Installation',
            id: 'installation',
            subsections: [
              {
                name: 'Android',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'First, download the app from the play store.'
                  },
                  {
                    type: ItemType.Buttons,
                    buttons: [
                      {
                        url: 'https://play.google.com/store/apps/details?id=dev.mrstickypiston.stickyhours',
                        text: 'Google Play',
                        icon: 'install_mobile'
                      }
                    ]
                  },
                  {
                    type: ItemType.Text,
                    text: 'After that, '
                  }
                ]
              },
              {
                name: 'Windows setup'
              },
              {
                name: 'MacOS setup'
              },
              {
                name: 'Linux setup'
              },
              {
                name: 'iOS setup'
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
                    text: 'Linkcodes are optainable through the Zermelo web portal of your school. If you don\'t know your school`s web portal url, see "What is my Zermelo portal name" above for more details. Once you are logged in on the Zermelo web portal, please open the settings. You will see the option "Link external application" among some other options. Please click on it, you will see a pop up modal containing an QR code, your portal name under it, and below that your one time link code.'
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
