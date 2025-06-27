import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UtilsService } from '../../../services/utils.service';

@Component({
    selector: 'app-projects-header',
    imports: [
        MatIconModule,
        MatButtonModule
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrollTo: Function;

  constructor(
    utilsService: UtilsService
  ){
    this.scrollTo = utilsService.scrollTo;
  }
}
