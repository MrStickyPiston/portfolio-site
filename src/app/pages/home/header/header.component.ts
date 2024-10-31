import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { data } from '../../../../environments/data';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

import { slideInLeftOnEnterAnimation, fadeInOnEnterAnimation,
   slideOutRightOnLeaveAnimation, fadeOutOnLeaveAnimation } from "angular-animations";

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    slideInLeftOnEnterAnimation({translate: '5em', duration: 700, delay: 350}),
    fadeInOnEnterAnimation({duration: 700, delay: 350}),
    slideOutRightOnLeaveAnimation({translate: '5em', duration: 700}),
    fadeOutOnLeaveAnimation({duration: 700}),
  ],
})
export class HeaderComponent {
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {  }

  function = data.home.functions[0]
  functions = data.home.functions
  functionId = 0;
  functions_len = this.functions.length

  isOpen = true;

  functionSwapInterval!: NodeJS.Timeout;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.functionSwapInterval = setInterval(() => { this.nextTitle() }, 3 * 1000);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      clearInterval(this.functionSwapInterval)
    }
  }

  nextTitle() {
    this.functionId += 1;
    this.functionId %= this.functions_len;
    this.function = this.functions[this.functionId]
  }
}
