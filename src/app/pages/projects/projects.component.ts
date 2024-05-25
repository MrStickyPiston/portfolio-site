import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-projects',
    standalone: true,
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
                },
                {
                    icon: 'install_desktop',
                    text: 'App',
                    url: 'https://github.com/StickyPiston-development/typegreek-windows/releases/latest/download/TypeGreek-installer.exe'
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
            icon: 'https://www.informaticaolympiade.nl/wp-content/uploads/2016/08/cropped-NIO_logo_website_blauw-32x32.png',
            title: 'NIO 2024 round 1&2',
            subtitle: 'Dutch olympiad of informatics',

            banner: 'https://www.codecup.nl/images/logo_nio_tekst.png',
            banner_alt: 'Project NIO round 1, 2; nederlandse informaticaolympiade banner',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus orci non nulla scelerisque eleifend. Fusce non sodales lorem. Praesent aliquet nulla ac iaculis varius. Quisque venenatis, augue scelerisque vehicula luctus, augue justo posuere ex, convallis tempor sem dui vitae ex. Nam suscipit leo libero, at tincidunt erat ultricies quis. Aliquam et congue eros, vitae suscipit eros. Aenean varius dui nunc, vitae facilisis massa semper ac. Sed sed purus vitae lorem aliquam hendrerit et id dui. Quisque sagittis pellentesque quam, in pharetra tellus ultricies sed. ',

            buttons: [
                {
                    icon: 'code',
                    text: 'Source',
                    url: 'https://github.com/MrStickyPiston/NIO-1-2024',
                },
                {
                    icon: 'web',
                    text: 'NIO Site',
                    url: 'https://www.informaticaolympiade.nl/',
                }
            ]
        },
        {
            icon: 'https://cdn.modrinth.com/data/ihpnEd80/1b6e859ac168a44ad383e36252ad6c563a245056.png',
            title: 'Builders Jetpack',
            subtitle: 'Minecraft fabric jetpack mod',

            banner: 'https://cdn.modrinth.com/data/ihpnEd80/images/0c623573f25a99f5174a479514ff925d19738073.png',
            banner_alt: 'Minecraft fabric create cobblestone mod cobblestone generator',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus orci non nulla scelerisque eleifend. Fusce non sodales lorem. Praesent aliquet nulla ac iaculis varius. Quisque venenatis, augue scelerisque vehicula luctus, augue justo posuere ex, convallis tempor sem dui vitae ex. Nam suscipit leo libero, at tincidunt erat ultricies quis. Aliquam et congue eros, vitae suscipit eros. Aenean varius dui nunc, vitae facilisis massa semper ac. Sed sed purus vitae lorem aliquam hendrerit et id dui. Quisque sagittis pellentesque quam, in pharetra tellus ultricies sed. ',

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
            icon: '',
            title: 'Sudoku Solver',
            subtitle: 'Frontend & backend sudoku solver webapp',

            banner: '/assets/SudokuSolver_banner.png',
            banner_alt: 'Project SudokuSolver webui',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus orci non nulla scelerisque eleifend. Fusce non sodales lorem. Praesent aliquet nulla ac iaculis varius. Quisque venenatis, augue scelerisque vehicula luctus, augue justo posuere ex, convallis tempor sem dui vitae ex. Nam suscipit leo libero, at tincidunt erat ultricies quis. Aliquam et congue eros, vitae suscipit eros. Aenean varius dui nunc, vitae facilisis massa semper ac. Sed sed purus vitae lorem aliquam hendrerit et id dui. Quisque sagittis pellentesque quam, in pharetra tellus ultricies sed. ',

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
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus orci non nulla scelerisque eleifend. Fusce non sodales lorem. Praesent aliquet nulla ac iaculis varius. Quisque venenatis, augue scelerisque vehicula luctus, augue justo posuere ex, convallis tempor sem dui vitae ex. Nam suscipit leo libero, at tincidunt erat ultricies quis. Aliquam et congue eros, vitae suscipit eros. Aenean varius dui nunc, vitae facilisis massa semper ac. Sed sed purus vitae lorem aliquam hendrerit et id dui. Quisque sagittis pellentesque quam, in pharetra tellus ultricies sed. ',

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
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus orci non nulla scelerisque eleifend. Fusce non sodales lorem. Praesent aliquet nulla ac iaculis varius. Quisque venenatis, augue scelerisque vehicula luctus, augue justo posuere ex, convallis tempor sem dui vitae ex. Nam suscipit leo libero, at tincidunt erat ultricies quis. Aliquam et congue eros, vitae suscipit eros. Aenean varius dui nunc, vitae facilisis massa semper ac. Sed sed purus vitae lorem aliquam hendrerit et id dui. Quisque sagittis pellentesque quam, in pharetra tellus ultricies sed. ',

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
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus orci non nulla scelerisque eleifend. Fusce non sodales lorem. Praesent aliquet nulla ac iaculis varius. Quisque venenatis, augue scelerisque vehicula luctus, augue justo posuere ex, convallis tempor sem dui vitae ex. Nam suscipit leo libero, at tincidunt erat ultricies quis. Aliquam et congue eros, vitae suscipit eros. Aenean varius dui nunc, vitae facilisis massa semper ac. Sed sed purus vitae lorem aliquam hendrerit et id dui. Quisque sagittis pellentesque quam, in pharetra tellus ultricies sed. ',

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
