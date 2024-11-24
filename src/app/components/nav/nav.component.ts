import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { data } from '../../../environments/data';
import { FooterComponent } from "../footer/footer.component";
import { filter } from 'rxjs';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    FooterComponent
  ]
})
export class NavComponent {
  navpages = data.nav;
  app_name = data.app_name

  dark_mode;

  @ViewChild('sidenavContent', { read: MatSidenavContent }) sidenavContentScrollable!: MatSidenavContent;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {
    angulartics2GoogleAnalytics.startTracking();
if (isPlatformServer(this.platformId)) {
    this.dark_mode = true
return
}

    if (localStorage.getItem('dark_mode') === null){
      this.dark_mode = true

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        this.dark_mode = false;
      }
    } else {
      this.dark_mode = localStorage.getItem('dark_mode') === 'true' ? true : false;
    }
  }

  ngAfterViewInit() {
    this.router.events.subscribe(() => {
        setTimeout(() => {
          if (isPlatformServer(this.platformId)) {
            return
          }
          const url = this.router.url;
          const anchorIndex = url.indexOf('#');

          const anchor = url.substring(anchorIndex + 1);
          const element = document.getElementById(anchor);

          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })

            history.replaceState(null, '', window.location.href.split('#')[0]);
          }
          else {
            this.sidenavContentScrollable.scrollTo({ top: 0, behavior: 'smooth' });
          }

        });
      });
  }

  toggle_dark_mode() {
    this.dark_mode = !this.dark_mode;
    localStorage.setItem('dark_mode', this.dark_mode.toString());
  }
}
