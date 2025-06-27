import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips'
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AboutHeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs'
import { UtilsService } from '../../services/utils.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [MatExpansionModule, MatCardModule, MatButtonModule, MatIconModule, AboutHeaderComponent, MatChipsModule, MatButtonToggleModule, MatTabsModule]
})
export class AboutComponent {
  scrollTo!: Function;

  constructor(
    utilsService: UtilsService
  ){
    this.scrollTo = utilsService.scrollTo
  };

  experiences = [
    {
      title: "Coderdojo",
      time: "2016 - 2019",
      text: `Coderdojo is an event for children about programming and other tech. I started going there when i was 7, and continued until I was 10. My first "programming language" at Coderdojo was scratch, and later on I continued with python. This event could no longer be organized during the pandemic, and thus I had to stop. I did continue programming on myself though.`,
      buttons: [
        {
          icon: 'web',
          text: 'Coderdojo Site',
          url: 'https://coderdojo.com/en',
        }
      ],
    },
    {
      title: `"Centrum voor talentontwikkeling"`,
      time: "2016 - 2019",
      text: `After I programmed an app that let my classmates practice their multiplication tables my school decided that I should get supported developing my talents. Because of this, my school asked the "Centrum voor talentontwikkeling" to help with that. One afternoon a week someone would teach me logic and programming in JavaScript. This also stopped with the pandemic.`,
    },
    {
      title: "Honours Programme",
      time: "2023 - NOW",
      text: `Halfway through secondary school i once again got the opportunity to show talent by joining the Honours Programme (HPG). The HPG allows students to do something beyond the usual, not necessarily related to the subjects taught at school. The topic of my HPG was, of course, software. This HPG allowed me to get into an internship at a government organisation, the DUO.`,
      buttons: [
        {
          icon: 'web',
          text: 'HPG Site',
          url: 'https://www.gymnasia.nl/activiteiten/honours-programma-hpg/',
        }
      ],
    },
    {
      title: "Internship at DUO",
      time: "2023 - NOW",
      text: `DUO is a Dutch government organisation responsible for the execution of education. This internship taught me good standards and best practices, and introduced me to major frameworks. I also learned to cooperate in a team, and other communicational skills.`,
      buttons: [
      ],
    },
    {
      title: "Comission: Fotoclub Borger-odoorn",
      time: "2023 - 2024",
      text: `This site was my first paid commission. The site consists out of a backend and a frontend. The backend is written in python and flask, and the frontend using typescript and angular. In addition to the programming I also learned a lot about requirements engineering and making an application user friendly.`,
      buttons: [
        {
          icon: 'web',
          text: 'Finished Site',
          url: 'https://www.fcbo.nl',
        }
      ],
    },
    {
      title: "NIO: Dutch olympiad of informatics",
      time: "2024 & 2025",
      text: "NIO is the dutch olympiad of informatics, a contest for informatica students in secondary school. My school does not offer informatica as a subject, but thanks to the Honours Programme (see above) i can self study informatica and still participate in the olympiad. Around 350 students participate in the first round of the olympiad each year, from which 100 can enter the second round. Both of the times I participated in round one I also participated in round two, but i was not able to get to the third round and international competitions."
    }
  ]

  languages = [
    {
      lang: "Java",
      types: [
        "native", "backend"
      ]
    },
    {
      lang: "Kotlin",
      types: [
        "native", "backend"
      ]
    },
    {
      lang: "C++",
      types: [
        "native"
      ]
    },
    {
      lang: "Python",
      types: [
        "native", "backend", "scripting"
      ]
    },
    {
      lang: "C",
      types: [
        "native"
      ]
    },
    {
      lang: "JavaScript",
      types: [
        "frontend"
      ]
    },
    {
      lang: "TypeScript",
      types: [
        "frontend"
      ]
    },
    {
      lang: "Bash",
      types: [
        "scripting"
      ]
    },
    {
      lang: "Sh",
      types: [
        "scripting"
      ]
    },
    {
      lang: "NodeJS",
      types: [
        "scripting", "frontend"
      ]
    },
    {
      lang: "MySQL",
      types: [
        "database"
      ]
    },
    {
      lang: "SQLite",
      types: [
        "database"
      ]
    },
    {
      lang: "AutoHotKey",
      types: [
        "scripting", "native"
      ]
    },
    {
      lang: "CSS",
      types: [
        "frontend"
      ]
    },
    {
      lang: "SASS",
      types: [
        "frontend"
      ]
    },
    {
      lang: "Rust",
      types: [
        "backend", "native"
      ]
    }
  ]
}
