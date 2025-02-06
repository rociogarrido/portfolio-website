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
      description:
        'CRUD application to manage hotel reservations built with Angular',
      image: 'assets/images/hotel-app.jpg',
      link: 'https://rociogarrido.github.io/hotel-app/',
    },
    {
      title: 'Cooking planner',
      description: 'Meal planning app built with Angular and NgRx',
      image: 'assets/images/cooking-planner.jpg',
      link: 'https://rociogarrido.github.io/cooking-planner/',
    },
    {
      title: 'Shopping cart',
      description:
        'E-commerce application made with React, TypeScript and Material-UI',
      image: 'assets/images/shopping-cart.jpg',
      link: 'https://rociogarrido.github.io/shopping-cart/',
    },
  ];
}
