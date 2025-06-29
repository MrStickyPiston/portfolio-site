import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponent
  ]
})
export class ProjectsComponent {
  projects = [
    {},
    {
      icon: 'https://flathub.org/_next/image?url=https%3A%2F%2Fdl.flathub.org%2Fmedia%2Fio%2Fgithub%2Fmrstickypiston.stickyhours%2Feb18c196950dc036186d6f0326384d9b%2Ficons%2F128x128%2Fio.github.mrstickypiston.stickyhours.png&w=128&q=100',
      title: 'Sticky Hours',
      subtitle: 'App for finding common schedule gaps',

      banner: 'https://res.cloudinary.com/dvtmkwimv/image/upload/f_auto,q_auto,w_3840/StickyHours-screenshot-android-common_hours_menu',
      banner_alt: 'Sticky Hours android app main menu oriented landscape english light mode',
      text: 'Sticky Hours is an app designed to find common gaps in secondary school schedules. Useful for finding time to speak someone or work on a project. Do note that the app requires that your school uses Zermelo to schedule, and you need access to it. The app is built in python and is compatible with Android, MacOS, Windows and Linux. On top of that the app uses only one codebase to serve all these platforms, resulting in less code having to be written multiple times and the app functioning the same on every device.',

      buttons: [
        {
          url: 'https://github.com/MrStickyPiston/StickyHours',
          text: 'Source',
          icon: 'code'
        },
        {
          icon: 'web',
          text: 'Site',
          url: '/projects/sticky-hours',
        }
      ]
    },
    {
      icon: 'https://www.fcbo.nl/favicon.ico',
      title: 'Fotoclub Borger-Odoorn',
      subtitle: 'Frontend & backend for a dutch Photo club',

      banner: 'https://www.fcbo.nl/socialCard.png',
      banner_alt: 'Project photo club borger odoorn social card',
      text: 'This site was made for a photo club in the Netherlands, the text on the site is Dutch. The site has an advanced admin panel for uploading photos, editing blogs, club meeting notes and users that can view that notes. All photos automatically get processed to reduce disk space and keep the site snappy, but on a way that all quality is preserved.',

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
      text: 'TypeGreek Windows is an open source and very customizable program to type ancient Greek on a Windows PC. It supports all diacritics, even multiple diacritics on one letter.',

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
    },
    {
      icon: 'https://cdn.modrinth.com/data/ihpnEd80/3b04d5b3830e1f685d78fa765f928d94f11f5d65_96.webp',
      title: 'Create Cobblestone',
      subtitle: 'Cobblestone generators for the Minecraft Create mod',

      banner: 'https://cdn.modrinth.com/data/ihpnEd80/images/0c623573f25a99f5174a479514ff925d19738073.png',
      banner_alt: 'Minecraft fabric create cobblestone mod cobblestone generator',
      text: 'Create cobblestone is a Create addon mod, an addon mod for the Minecraft Create mod that focusses on reducing the lag generated by cobblestone generators. Ideal for server wanting to keep the tps above 10 without buying a very expensive server. The mod does not only add cobblestone generators, but also stone generators, basalt generators, limestone generators and scoria generators. ',

      buttons: [
        {
          icon: 'code',
          text: 'Source',
          url: 'https://github.com/StickyPiston-development/CreateCobblestone'
        },
        {
          icon: 'build_circle',
          text: 'Modrinth',
          url: 'https://modrinth.com/mod/create-cobblestone'
        },
      ]
    },
    {
      title: 'Sudoku Solver',
      subtitle: 'Frontend & backend sudoku solver webapp',

      banner: '/assets/SudokuSolver_banner.png',
      banner_alt: 'Project SudokuSolver webui',
      text: 'Sudoku\'s are an interesting puzzle to solve. But even more interesting is finding a way to solve them automatically, and fast. If that is accomplished, it is also needs to be user friendly enough to actually use. This was accomplished by building a web interface using the angular framework. The actual processing is done on a server based on the spring framework, using an algoritm that runs a pruned complete-search.',

      buttons: [
        {
          icon: 'code',
          text: 'Source',
          url: 'https://github.com/MrStickyPiston/sudoku-solver'
        },
      ]
    },
    {
      icon: 'https://cdn.modrinth.com/data/L524D8Os/c942e8abe8992daad1275d8d3878346e4a318821.png',
      title: 'Builders Jetpack',
      subtitle: 'Minecraft fabric jetpack mod',

      banner: 'https://cdn.modrinth.com/data/L524D8Os/images/a314cb72ef142e6ab91d8976a59610f33611dc4a.png',
      banner_alt: 'Minecraft fabric builders jetpack mod floating jetpack',
      text: 'Builders Jetpack is a minecraft mod that adds a jetpack to the game. Most jetpack mods are made to be very much like a real-life jetpack, resulting in a very wobbly flight. It is almost impossible to build with that. This mod fixes that problem and keeps the player stable in the air.',

      buttons: [
        {
          icon: 'code',
          text: 'Source',
          url: 'https://github.com/StickyPiston-development/BuildersJetpack'
        },
        {
          icon: 'build_circle',
          text: 'Modrinth',
          url: 'https://modrinth.com/mod/builders-jetpack'
        },
      ]
    },
    {
      icon: '/assets/hangman_icon.png',
      title: 'Bilingual hangman',
      subtitle: 'Hangman in 2 languages, desktop app',

      banner: '/assets/BilingualHangman_banner.png',
      banner_alt: 'Bilingual hangman window 4 correct 2 errors',
      text: 'Bilingual hangman is a educative hangman game designed to use for learning languages. The way it works is both the word in the first language and the word in the second language are put on the screen but with all letters swapped with "_". After that, the player can guess a letter. If it is in one of the two translations it will replace the "_" on the place of that letter in both translations. Else the player loses a live.',

      buttons: [
        {
          icon: 'code',
          text: 'Source',
          url: 'https://github.com/StickyPiston-development/bilingual-hangman'
        },
      ]
    },
    {
      icon: '/assets/stickyclicker_icon.ico',
      title: 'StickyClicker',
      subtitle: 'Python auto clicker desktop app with GUI',

      banner: '/assets/stickyclicker_banner.png',
      banner_alt: 'Stickyclicker autoclicker GUI on kubuntu 22.04 LTS',
      text: 'StickyClicker is an autoclicker tool for Windows and Linux with an interface written in customtkinter. It allows clicking for a specefied amount of time on keybind press or until the next keybind press. The autoclicker also has options for randomnes and clicks-per-second. This allows using the autoclicker for various things.',

      buttons: [
        {
          icon: 'code',
          text: 'Source',
          url: 'https://github.com/StickyPiston-development/StickyClicker'
        },
      ]
    },
  ];

}
