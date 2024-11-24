import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../pages/home/header/header.component";
import { HomeProjectsComponent } from "./projects/projects.component";
import { TestinominalsComponent } from "./testinominals/testinominals.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        MatCardModule,
        HeaderComponent,
        MatIconModule,
        HomeProjectsComponent,
        TestinominalsComponent,
        MatButtonModule,
        RouterModule
    ]
})
export class HomeComponent {
    
}
