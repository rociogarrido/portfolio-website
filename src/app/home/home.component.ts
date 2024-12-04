import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ResumeComponent } from "../resume/resume.component";
import { ContactComponent } from "../contact/contact.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, ResumeComponent, ContactComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
