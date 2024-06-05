import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet, Scroll } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from "./components/nav/nav.component";
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        // Angular
        RouterOutlet,
        // Components
        NavComponent
    ]
})
export class AppComponent {
  title = 'portfolio';
}
