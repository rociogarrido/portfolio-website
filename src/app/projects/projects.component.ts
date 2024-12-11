import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Hotel App',
      description: 'CRUD application to manage hotel reservations',
      image: 'assets/images/hotel-app.jpg',
      link: 'https://rociogarrido.github.io/hotel-app/',
    },
    {
      title: 'Project 2',
      description: 'This is the description of project 2.',
      image: 'assets/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'This is the description of project 3.',
      image: 'assets/images/project3.jpg',
      link: 'https://example.com/project3',
    },
  ];
}
