import { Component, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
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

  @ViewChild('sidenavContent', {read: MatSidenavContent}) sidenavContentScrollable!: MatSidenavContent;

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationStart))
      .subscribe(() => {
        setTimeout(() => {
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
