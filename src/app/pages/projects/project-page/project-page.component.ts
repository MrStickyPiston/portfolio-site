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
          text: "An app for finding common free hours, allowing to use them for something usefull.",
          buttons: [
            {
              scroll: 'about',
              text: 'About',
              icon: 'info'
            },
            {
              scroll: 'installation',
              text: 'Download',
              icon: 'download'
            },
            {
              scroll: 'faq',
              text: 'FaQ',
              icon: 'help'
            }
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
                    text: 'When I got to the upper part of secondary school I got a lot of gaps in my schedule. This inspired me to make this app, that allows you to quick and easily see your gaps for this and the next weeks. The added value of the app is that it allows to add multiple users, and computes the common gaps between those users. Using this you can easily plan to work on a common project with your friends, make an appointment with your teacher, or just do something fun with your friends in those otherwise lost hours.'
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
                name: 'Quickly finding (common) gaps in schedules',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'The Sticky Hours app allows you to check your own schedule for gaps and even check which gaps overlap with other people.',
                  }
                ]
              },
              {
                name: 'Always up to date schedule data',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'Schedule data is fetched from Zermelo every time you use the app, ensuring your schedule gaps are never outdated.'
                  }
                ]
              },
              {
                name: 'Familiar looks, consistent functionality',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'The app is available for Android, Windows, MacOS and Linux (Flatpak, Ubuntu, Fedora) allowing you to check your gaps always and everywhere. Sticky Hours uses the same codebase for every platform but with native UI elements, resulting in a streamlined uniform experience that blends in good with other apps.'
                  },
                  {
                    type: ItemType.Images,
                    images: [
                      {
                        url: 'StickyHours-screenshot-windows-common_hours_menu',
                        alt: 'Sticky Hours Windows app main menu dutch light mode',
                        width: 642,
                        height: 512
                      },
                      {
                        url: 'StickyHours-screenshot-linux-common_hours_menu',
                        alt: 'Sticky Hours Linux app main menu english dark mode round theme',
                        width: 646,
                        height: 521,
                        priority: true
                      },
                      {
                        url: 'StickyHours-screenshot-android-common_hours_menu',
                        alt: 'Sticky Hours android app main menu oriented landscape english light mode',
                        width: 3120,
                        height: 1440,
                      },
                    ]
                  }
                ]
              },
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
                    type: ItemType.Images,
                    images: [
                      {
                        url: 'GetItOnGooglePlay_Badge_Web_color_English',
                        href: 'https://play.google.com/store/apps/details?id=io.github.mrstickypiston.stickyhours',
                        width: 140,
                        height: 41.5,
                        resize: false
                      },
                    ]
                  },
                  {
                    type: ItemType.Text,
                    text: 'On Android you can install the app on Google Play using the link above. After you click install the play store will install the app for you. Once the app is installed, you can continue to the "Quick start" section below.'
                  }
                ]
              },
              {
                name: 'Windows',
                items: [
                  {
                    type: ItemType.Buttons,
                    buttons: [
                      {
                        url: 'https://github.com/MrStickyPiston/StickyHours/releases/latest/download/StickyHours-Windows.zip',
                        text: 'Sticky Hours for Windows',
                        icon: 'download'
                      }
                    ]
                  },
                  {
                    type: ItemType.Text,
                    text: 'The StickyHours app for Windows is packaged as an .msi installer in a zip file, and supports 64 bit Windows 10 and 11. Please download the latest version of the app by using the download button above. Save the zip file in your downloads folder and extract the .msi file. Then, run the msi file. It will let you choose between user installation and system wide installation. If you want more people one this computer to use the program than just you, choose system wide. Do note that this option requires admin rights though. Click install after that. The installer will take a few seconds to half a minute to install Sticky Hours depending on your device. Once the installer says it is done click finish. The app is installed on your computer now and accessible via the start menu. The installer does not pin the app yo your desktop or taskbar at default but you can do that by yourself if you want to by dragging the app to the place you want it to be.'
                  }
                ]
              },
              {
                name: 'Sticky Hours for MacOS',
                items: [
                  {
                    type: ItemType.Buttons,
                    buttons: [
                      {
                        url: 'https://github.com/MrStickyPiston/StickyHours/releases/latest/download/StickyHours-macOS.zip',
                        text: 'MacOS',
                        icon: 'download'
                      },
                    ]
                  },
                  {
                    type: ItemType.Text,
                    text: 'On MacOS you can install Sticky Hours by downloading the .dmg installer using the button above. Save the file to your Downloads folder. While the .dmg file is zipped, safari automatically unzips files it downloads. If you are not using safari you must unzip the file manually before proceeding. Once you have done that, open the location of the file in finder, and right click it. In the context menu, select "open". A modal will pop up now, telling you apple could not verify the devloper of the file. Apple will show this warning when opening any software that was not paid for 100$/year to Apple. Luckily, you can just click "open" and ignore them.'
                  },
                  {
                    type: ItemType.Text,
                    text: 'Once you click "open" the .dmg file will open and you can now drag the Sticky Hours app to your Applications folder, just like any other app for MacOS. After that you can open the app by opening Launchpad  and searching for "Sticky Hours". When you start the app for the first time you will get a popup again. This time because "Sticky Hours is an app that was downloaded from the internet". And again the solution is to just click "open". And that\'s it, you have installed the Sticky Hours app on MacOS!'
                  }
                ]
              },
              {
                name: 'Linux',
                items: [
                  {
                    type: ItemType.Buttons,
                    buttons: [
                      
                      
                      {
                        url: 'https://flathub.org/apps/io.github.mrstickypiston.stickyhours',
                        text: 'Sticky Hours Flatpak (Flathub)',
                        icon: 'download'
                      },
                      {
                        url: 'https://github.com/MrStickyPiston/StickyHours/releases/latest/download/StickyHours-Ubuntu-24.04.zip',
                        text: 'Sticky Hours for Ubuntu 24.04 LTS',
                        icon: 'download'
                      },
                      {
                        url: 'https://github.com/MrStickyPiston/StickyHours/releases/latest/download/StickyHours-Fedora-40.zip',
                        text: 'Sticky Hours for Fedora 40',
                        icon: 'download'
                      }
                    ]
                  },
                  {
                    type: ItemType.Text,
                    text: 'On Linux you can install Sticky Hours sandboxed using flatpak and using Ubuntu/Fedora system packages. Please pick the package you want to use and download it from the download section above. Install the package using your package manager and open the app. You will see the login screen, where you can enter your Zermelo portal id and linkcode (NOT your username and password). For instructions on how to find your Zermelo portal id or linkcode, see the FaQ below.'
                  }
                ]
              },
            ]
          },
          {
            name: "Quick start",
            subsections: [
              {
                name: 'Logging in',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'When you open the app for the first time, you will see a login screen. The app asks for your Zermelo portal id and linkcode (NOT your username and password). To find your portal id and linkcode, you first need access to your Zermelo portal.',
                  },
                ]
              },
              {
                name: 'Accessing your Zermelo portal',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'To access your Zermelo portal, navigate to your schools website and search for "Zermelo" or roosters. Click on the link to check where it leads you. If you found your Zermelo portal, it will ask you to log in with your school credentials. If you see something like the image below, you have succesfully found and logged in into your Zermelo portal.'
                  },
                  {
                    type: ItemType.Images,
                    images: [
                      {
                        url: 'Screenshot_2024-11-03_at_10-40-03_Zermelo_a911mf',
                        alt: 'Screenshot of zermelo',
                        width: 2560,
                        height: 1269
                      }
                    ]
                  },
                ]
              },
              {
                name: 'Generating a linkcode',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'On the zermelo portal, click on the "settings" ("instellingen") menu option in the sidebar left like the image below. This will open the "settings" menu.'
                  },
                  {
                    type: ItemType.Images,
                    images: [
                      {
                        url: 'Screenshot_2024-11-03_at_10-40-03_Zermelo_nav-settings_ckewgm',
                        alt: 'Screenshot of zermelo',
                        width: 2560,
                        height: 1269
                      },
                    ]
                  },
                  {
                    type: ItemType.Text,
                    text: 'In the "settings" menu, click on the button "Connect external application" ("Koppel externe applicatie") as marked in the image on the left side below. This will open a popup modal with a QR code, your Zermelo instance id and your generated linkcode, like the image on the right. You can ignore the QR code. The above red-boxed text is your instance id, the lower text your linkcode. Sadly those values can not be copied so you have to type them over by yourself.'
                  },
                  {
                    type: ItemType.Images,
                    images: [
                      {
                        url: 'Screenshot_2024-11-03_at_10-48-34_Zermelo_nav-settings_gxxn2r',
                        alt: 'Screenshot of zermelo',
                        width: 2560,
                        height: 1269
                      },
                      {
                        url: 'Screenshot_2024-11-03_at_10-48-44_Zermelo_nav-settings_cuyjyf',
                        alt: 'Screenshot of zermelo',
                        width: 2560,
                        height: 1269
                      }
                    ]
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
                name: 'How can I log in?',
                id: 'faq-how-to-log-in',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'When you open the app for the first time, you will see a login screen. The Sticky Hours app gets your schedule data from your schools Zermelo portal. To link the app to Zermelo, only your Zermelo portal id and linkcode are needed. See the section above for more information on how to do this.'
                  }
                ]
              },
              {
                name: 'What is my Zermelo portal id?',
                id: 'faq-zermelo-portal-id',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'Please take a look at the "Quick start" section above.'
                  }
                ]
              },
              {
                name: 'How do I get a linkcode?',
                id: 'faq-zermelo-get-linkcode-for-login',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'Please take a look at the "Quick start" section above.'
                  }
                ]
              },
              {
                name: 'Why is there no iOS version?',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'Unfortunately iOS requires apps to pay 100 USD yearly to even build a production ready .ipa (iOS app installation bundle), so no official release build is provided. However, you can try building the app yourself for your own iPhone or iPad.'
                  }
                ]
              }
            ]
          },
          {
            name: 'Technical',
            subsections: [
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
                        url: 'https://github.com/MrStickyPiston/StickyHours',
                        text: 'Source code',
                        icon: 'code'
                      },
                      {
                        url: 'https://github.com/MrStickyPiston/StickyHours/issues',
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
              },
              {
                name: 'Nigthly build',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'A nightly build for Sticky Hours is available on github actions. This build will contain the newest features, but is not (properly) tested and still in development. Only use this version if you want to test the app or try out new features before they are realeased, but know what you are doing. Report any issues you encounter on the issue tracker on the github page. Because of apple requiring you to build iOS apps on a physical computer running Xcode, I will not be providing nightly iOS builds. Please build the code from source yourself if you want to test out the iOS version.'
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
                name: 'Technical setup',
                items: [
                  {
                    type: ItemType.Text,
                    text: 'The app is written in Python 3.12 with the main goal of running the same code on every device. For the ui, the cross platform native UI framework Toga by the BeeWare project was used. This allowed building the app\'s interface with platform native elements reusing the same code for every platform, reducing the amount of platform dependent bugs. For packaging the app another tool of the BeeWare project was used, Briefcase. Briefcase allows to package any Python project as an app for most platforms. To learn more about Toga, Briefcase or the BeeWare project, use the links below.'
                  },
                  {
                    type: ItemType.Buttons,
                    buttons: [
                      {
                        url: 'https://beeware.org/project/projects/libraries/toga/',
                        text: 'Toga',
                        icon: 'book'
                      },
                      {
                        url: 'https://beeware.org/project/projects/tools/briefcase/',
                        text: 'Briefcase',
                        icon: 'book'
                      },
                      {
                        url: 'https://beeware.org/',
                        text: 'BeeWare',
                        icon: 'book'
                      }
                    ]
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
  Chips,
}
