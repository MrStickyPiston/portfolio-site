import { Component } from '@angular/core';
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    // Angular
    // Components
    NavComponent
  ]
})
export class AppComponent {}
