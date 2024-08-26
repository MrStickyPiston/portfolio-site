import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from "../../pages/home/header/header.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeProjectsComponent } from "./projects/projects.component";
import { TestinominalsComponent } from "./testinominals/testinominals.component";
import { RouterModule } from '@angular/router';

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
