import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  constructor() { }

  
  frontend:Project[] = [
    {
      title: 'todosApp',
      description: 'My first ِAngularJS application.',
        image: 'assets/projectImages/todosApp.png',
        category: 'front end',
        technology: ['angularJS', 'ngx-toastr', 'Bootstrap'],
        liveSite: 'https://todosapp-aca91.web.app/',
        code: 'https://github.com/Rabie-Abdullah/angular-todo-app'
      },
      {
        title: 'E-commerce website',
          description: 'E-shop with angularJS',
          image: 'assets/projectImages/e-commerce.png',
          category: 'front end',
          technology: ['angularJS', 'ngx-toastr', 'Bootstrap' ],
          liveSite: 'https://e-commerce-d285c.web.app/',
          code: 'https://github.com/Rabie-Abdullah/amazon-clone-angular'
        }
  ]

  backend:Project[] = [
   
      {
        title: 'Students app api',
        description: 'E-commerce api with NodeJS',
          image: 'assets',
          category: 'back end',
          technology: ['NodJA', 'ExpressJS', 'Mongodb' ],
          code: 'https://github.com/Rabie-Abdullah/students-app'
        },
      {
        title: 'News app api',
        description: 'News api with NodeJS',
          image: 'assets',
          category: 'back end',
          code: 'https://github.com/Rabie-Abdullah/news-app-api'
        },
      {
        title: 'E-commerce app api',
        description: 'E-commerce api with NodeJS',
          image: 'assets',
          category: 'back end',
          technology: ['NodJA', 'ExpressJS', 'Mongodb' ],
          code: ''
        },
        {
          title: 'Taskmanager app api',
          description: 'Taskmanager api with NodeJS',
            image: 'assets',
            category: 'back end',
          technology: ['NodJA', 'ExpressJS', 'Mongodb' ],
            code: ''
          }
  ]



  ngOnInit(): void {
 
  }

}
