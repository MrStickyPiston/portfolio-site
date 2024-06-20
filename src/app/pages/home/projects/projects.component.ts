import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-projects',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeProjectsComponent {
  projects = [
    {
      icon: 'https://www.fcbo.nl/favicon.ico',
      title: 'Fotoclub Borger-Odoorn',
      subtitle: 'Frontend & backend for a dutch Photo club',

      banner: 'https://www.fcbo.nl/socialCard.png',
      banner_alt: 'Project photo club borger odoorn social card',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus orci non nulla scelerisque eleifend. Fusce non sodales lorem. Praesent aliquet nulla ac iaculis varius. Quisque venenatis, augue scelerisque vehicula luctus, augue justo posuere ex, convallis tempor sem dui vitae ex. Nam suscipit leo libero, at tincidunt erat ultricies quis. Aliquam et congue eros, vitae suscipit eros. Aenean varius dui nunc, vitae facilisis massa semper ac. Sed sed purus vitae lorem aliquam hendrerit et id dui. Quisque sagittis pellentesque quam, in pharetra tellus ultricies sed. ',

      buttons: [
        {
          icon: 'web',
          text: 'Site',
          url: 'https://www.fcbo.nl',
        }
      ]
    },
    {
      icon: 'https://raw.githubusercontent.com/StickyPiston-development/tgw-lib/gh-pages/images/icon.ico',
      title: 'Typegreek Windows',
      subtitle: 'Frontend & desktop app for a ancient Greek typing app',

      banner: 'https://github.com/StickyPiston-development/typegreek-windows/blob/gh-pages/public/playground_assets/helpmenu-1500w.png?raw=true',
      banner_alt: 'Project typegreek windows app screenshot with a colored background',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus orci non nulla scelerisque eleifend. Fusce non sodales lorem. Praesent aliquet nulla ac iaculis varius. Quisque venenatis, augue scelerisque vehicula luctus, augue justo posuere ex, convallis tempor sem dui vitae ex. Nam suscipit leo libero, at tincidunt erat ultricies quis. Aliquam et congue eros, vitae suscipit eros. Aenean varius dui nunc, vitae facilisis massa semper ac. Sed sed purus vitae lorem aliquam hendrerit et id dui. Quisque sagittis pellentesque quam, in pharetra tellus ultricies sed. ',

      buttons: [
        {
          icon: 'code',
          text: 'Source',
          url: 'https://github.com/StickyPiston-development/TypeGreek-Windows'
        },
        {
          icon: 'web',
          text: 'Site',
          url: 'https://stickypiston-development.github.io/typegreek-windows/',
        }
      ]
    },
    {
      icon: '/assets/CGBNvote_icon.png',
      title: 'CGBNvote',
      subtitle: 'Frontend & backend made for a school voting webapp',

      banner: '/assets/CGBNvote_banner.png',
      banner_alt: 'Project CGBNvote voting website admin panel',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus orci non nulla scelerisque eleifend. Fusce non sodales lorem. Praesent aliquet nulla ac iaculis varius. Quisque venenatis, augue scelerisque vehicula luctus, augue justo posuere ex, convallis tempor sem dui vitae ex. Nam suscipit leo libero, at tincidunt erat ultricies quis. Aliquam et congue eros, vitae suscipit eros. Aenean varius dui nunc, vitae facilisis massa semper ac. Sed sed purus vitae lorem aliquam hendrerit et id dui. Quisque sagittis pellentesque quam, in pharetra tellus ultricies sed. ',

      buttons: [
        {
          icon: 'code',
          text: 'Source',
          url: 'https://github.com/MrStickyPiston/CGBNvote'
        },
      ]
    }
  ];
}
