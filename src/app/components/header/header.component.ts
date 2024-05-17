import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { data } from '../../../environments/data';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('valueUpdated', [
      state('void => *', style({ opacity: 0, transform: 'translateX(-50px)' })),
      transition('void => *', []),
      transition('* => *', [
        style({ opacity: 0, transform: 'translateX(-5%)' }),
        animate("400ms 0ms ease", style({ opacity: 1, transform: 'translateX(0px)' })) // Slides in from the left
      ])
    ]),
  ],
})
export class HeaderComponent {
  
  scrollTo: Function;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    utilsService: UtilsService,
  ) {
    this.scrollTo = utilsService.scrollTo;
  }

  


  function = data.home.functions[0]
  functions = data.home.functions
  functionId = 1;
  functions_len = this.functions.length

  isOpen = true;

  functionSwapInterval!: NodeJS.Timeout;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.functionSwapInterval = setInterval(() => { this.nextTitle() }, 2.5 * 1000);
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
