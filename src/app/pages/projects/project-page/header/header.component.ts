import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UtilsService } from '../../../../services/utils.service';

@Component({
    selector: 'app-project-page-header',
    imports: [MatIconModule, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    providers: []
})
export class ProjectPageHeaderComponent {
  @Input({required: true}) data!: any;
  scrollTo: Function;

  constructor(
    utilsService: UtilsService
  ){
    this.scrollTo = utilsService.scrollTo;
  }
}
