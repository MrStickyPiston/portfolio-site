import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from "./components/nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        // Angular
        RouterOutlet,
        // Components
        NavbarComponent,
        // Material
        MatCardModule,
        NavComponent
    ]
})
export class AppComponent {
  title = 'portfolio';
}
