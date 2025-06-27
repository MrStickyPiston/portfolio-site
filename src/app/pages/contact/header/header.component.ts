import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UtilsService } from '../../../services/utils.service';

@Component({
    selector: 'app-contact-header',
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class ContactHeaderComponent {
  scrollTo: Function;

  constructor(
    utilsService: UtilsService
  ){
    this.scrollTo = utilsService.scrollTo;
  }
 }
