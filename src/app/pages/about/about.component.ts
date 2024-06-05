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
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [MatExpansionModule, MatCardModule, MatButtonModule, MatIconModule, AboutHeaderComponent, MatChipsModule, MatButtonToggleModule, MatTabsModule]
})
export class AboutComponent {
  panelOpenState = false;
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
      text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis erat, pellentesque quis aliquet et, euismod in ex. In malesuada sed ante id sodales. Vivamus nec diam sit amet leo pharetra viverra. Sed vitae dolor nisi. Integer accumsan, nisi id egestas vulputate, dolor purus congue metus, eget semper libero arcu non augue. Praesent tempor velit neque, et ultricies elit pharetra quis. Phasellus in felis at tellus rhoncus interdum. Nam porttitor non magna quis tempus. Pellentesque dignissim, purus sed molestie venenatis, neque mi blandit ipsum, id mattis libero lorem sed ipsum. Cras et cursus nunc.

      Sed id mauris ullamcorper, eleifend libero eget, dapibus dui. Phasellus gravida est vitae nisi porttitor, quis blandit lectus porta. Quisque leo diam, finibus eget tempus at, pretium at nibh. Fusce luctus nibh ut suscipit efficitur. Donec tortor tortor, luctus sed dapibus facilisis, venenatis at nibh. Ut pharetra erat in purus fermentum sodales. Donec posuere convallis velit, id scelerisque dolor. Fusce blandit, tellus sit amet dapibus tristique, mauris ligula venenatis diam, ut faucibus nulla lectus a metus. Nam tincidunt vel sapien sit amet molestie. Vivamus accumsan sem enim, et elementum purus interdum at. Aliquam vitae arcu in nulla varius tempor. Quisque leo velit, lacinia maximus iaculis id, accumsan in leo. Aliquam pharetra interdum lorem eu sagittis. Integer tristique turpis eget velit dignissim tempor. Maecenas commodo aliquam erat, sed tempor magna pretium imperdiet. `,
      buttons: [
        {
          icon: 'web',
          text: 'Coderdojo Site',
          url: 'https://coderdojo.com/en',
        }
      ],
    },
    {
      title: `"Centrum voor talentontwikkeling" `,
      time: "2016 - 2019",
      text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis erat, pellentesque quis aliquet et, euismod in ex. In malesuada sed ante id sodales. Vivamus nec diam sit amet leo pharetra viverra. Sed vitae dolor nisi. Integer accumsan, nisi id egestas vulputate, dolor purus congue metus, eget semper libero arcu non augue. Praesent tempor velit neque, et ultricies elit pharetra quis. Phasellus in felis at tellus rhoncus interdum. Nam porttitor non magna quis tempus. Pellentesque dignissim, purus sed molestie venenatis, neque mi blandit ipsum, id mattis libero lorem sed ipsum. Cras et cursus nunc.

      Sed id mauris ullamcorper, eleifend libero eget, dapibus dui. Phasellus gravida est vitae nisi porttitor, quis blandit lectus porta. Quisque leo diam, finibus eget tempus at, pretium at nibh. Fusce luctus nibh ut suscipit efficitur. Donec tortor tortor, luctus sed dapibus facilisis, venenatis at nibh. Ut pharetra erat in purus fermentum sodales. Donec posuere convallis velit, id scelerisque dolor. Fusce blandit, tellus sit amet dapibus tristique, mauris ligula venenatis diam, ut faucibus nulla lectus a metus. Nam tincidunt vel sapien sit amet molestie. Vivamus accumsan sem enim, et elementum purus interdum at. Aliquam vitae arcu in nulla varius tempor. Quisque leo velit, lacinia maximus iaculis id, accumsan in leo. Aliquam pharetra interdum lorem eu sagittis. Integer tristique turpis eget velit dignissim tempor. Maecenas commodo aliquam erat, sed tempor magna pretium imperdiet. `,
      buttons: [
        {
          icon: 'web',
          text: 'Coderdojo Site',
          url: 'https://coderdojo.com/en',
        }
      ],
    },
    {
      title: "Honours Programme",
      time: "2023 - NOW",
      text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis erat, pellentesque quis aliquet et, euismod in ex. In malesuada sed ante id sodales. Vivamus nec diam sit amet leo pharetra viverra. Sed vitae dolor nisi. Integer accumsan, nisi id egestas vulputate, dolor purus congue metus, eget semper libero arcu non augue. Praesent tempor velit neque, et ultricies elit pharetra quis. Phasellus in felis at tellus rhoncus interdum. Nam porttitor non magna quis tempus. Pellentesque dignissim, purus sed molestie venenatis, neque mi blandit ipsum, id mattis libero lorem sed ipsum. Cras et cursus nunc.

      Sed id mauris ullamcorper, eleifend libero eget, dapibus dui. Phasellus gravida est vitae nisi porttitor, quis blandit lectus porta. Quisque leo diam, finibus eget tempus at, pretium at nibh. Fusce luctus nibh ut suscipit efficitur. Donec tortor tortor, luctus sed dapibus facilisis, venenatis at nibh. Ut pharetra erat in purus fermentum sodales. Donec posuere convallis velit, id scelerisque dolor. Fusce blandit, tellus sit amet dapibus tristique, mauris ligula venenatis diam, ut faucibus nulla lectus a metus. Nam tincidunt vel sapien sit amet molestie. Vivamus accumsan sem enim, et elementum purus interdum at. Aliquam vitae arcu in nulla varius tempor. Quisque leo velit, lacinia maximus iaculis id, accumsan in leo. Aliquam pharetra interdum lorem eu sagittis. Integer tristique turpis eget velit dignissim tempor. Maecenas commodo aliquam erat, sed tempor magna pretium imperdiet. `,
      buttons: [
        {
          icon: 'web',
          text: 'HPG Site',
          url: 'https://www.gymnasia.nl/activiteiten/honours-programma-hpg/',
        }
      ],
    },
    {
      title: "Traineeship at DUO",
      time: "2023 - NOW",
      text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis erat, pellentesque quis aliquet et, euismod in ex. In malesuada sed ante id sodales. Vivamus nec diam sit amet leo pharetra viverra. Sed vitae dolor nisi. Integer accumsan, nisi id egestas vulputate, dolor purus congue metus, eget semper libero arcu non augue. Praesent tempor velit neque, et ultricies elit pharetra quis. Phasellus in felis at tellus rhoncus interdum. Nam porttitor non magna quis tempus. Pellentesque dignissim, purus sed molestie venenatis, neque mi blandit ipsum, id mattis libero lorem sed ipsum. Cras et cursus nunc.

      Sed id mauris ullamcorper, eleifend libero eget, dapibus dui. Phasellus gravida est vitae nisi porttitor, quis blandit lectus porta. Quisque leo diam, finibus eget tempus at, pretium at nibh. Fusce luctus nibh ut suscipit efficitur. Donec tortor tortor, luctus sed dapibus facilisis, venenatis at nibh. Ut pharetra erat in purus fermentum sodales. Donec posuere convallis velit, id scelerisque dolor. Fusce blandit, tellus sit amet dapibus tristique, mauris ligula venenatis diam, ut faucibus nulla lectus a metus. Nam tincidunt vel sapien sit amet molestie. Vivamus accumsan sem enim, et elementum purus interdum at. Aliquam vitae arcu in nulla varius tempor. Quisque leo velit, lacinia maximus iaculis id, accumsan in leo. Aliquam pharetra interdum lorem eu sagittis. Integer tristique turpis eget velit dignissim tempor. Maecenas commodo aliquam erat, sed tempor magna pretium imperdiet. `,
      buttons: [
      ],
    },
    {
      title: "Comission: Fotoclub Borger-odoorn",
      time: "2023 - 2024",
      text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis erat, pellentesque quis aliquet et, euismod in ex. In malesuada sed ante id sodales. Vivamus nec diam sit amet leo pharetra viverra. Sed vitae dolor nisi. Integer accumsan, nisi id egestas vulputate, dolor purus congue metus, eget semper libero arcu non augue. Praesent tempor velit neque, et ultricies elit pharetra quis. Phasellus in felis at tellus rhoncus interdum. Nam porttitor non magna quis tempus. Pellentesque dignissim, purus sed molestie venenatis, neque mi blandit ipsum, id mattis libero lorem sed ipsum. Cras et cursus nunc.

      Sed id mauris ullamcorper, eleifend libero eget, dapibus dui. Phasellus gravida est vitae nisi porttitor, quis blandit lectus porta. Quisque leo diam, finibus eget tempus at, pretium at nibh. Fusce luctus nibh ut suscipit efficitur. Donec tortor tortor, luctus sed dapibus facilisis, venenatis at nibh. Ut pharetra erat in purus fermentum sodales. Donec posuere convallis velit, id scelerisque dolor. Fusce blandit, tellus sit amet dapibus tristique, mauris ligula venenatis diam, ut faucibus nulla lectus a metus. Nam tincidunt vel sapien sit amet molestie. Vivamus accumsan sem enim, et elementum purus interdum at. Aliquam vitae arcu in nulla varius tempor. Quisque leo velit, lacinia maximus iaculis id, accumsan in leo. Aliquam pharetra interdum lorem eu sagittis. Integer tristique turpis eget velit dignissim tempor. Maecenas commodo aliquam erat, sed tempor magna pretium imperdiet. `,
      buttons: [
        {
          icon: 'web',
          text: 'Finished Site',
          url: 'https://www.fcbo.nl',
        }
      ],
    },
  ]

  languages = [
    {
      lang: "Java",
      frameworks: [
        "Spring boot", "Minecraft fabric"
      ],
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
      lang: "SASS",
      types: [
        "frontend"
      ]
    }
  ]
}
