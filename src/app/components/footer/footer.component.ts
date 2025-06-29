import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-footer',
  imports: [
    // Angular material
    MatCardModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
