import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { AsyncPipe, isPlatformServer } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { NavigationEnd, NavigationStart, Router, RouterEvent, RouterModule } from '@angular/router';
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
    AsyncPipe,
    MatCard,
    RouterModule,
    FooterComponent
  ]
})
export class NavComponent {
  navpages = data.nav;
  app_name = data.app_name

  dark_mode = true;

  @ViewChild('sidenavContent', { read: MatSidenavContent }) sidenavContentScrollable!: MatSidenavContent;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {
    angulartics2GoogleAnalytics.startTracking();
  }

  ngAfterViewInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
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
}
