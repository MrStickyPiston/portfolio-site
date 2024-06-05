import { ComponentType } from '@angular/cdk/portal';
import { Component, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    // Angular material
    MatCardModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
