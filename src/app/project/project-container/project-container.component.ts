import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '@app/models/Project';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {
  selectedProject!: Project;

  projects: Project[] = [
    {
      id: 1,
      code: 'NHusYJl',
      name: 'Progetto Alpha',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },
    {
      id: 2,
      code: 'SJieYKl',
      name: 'Progetto Beta',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 3, 30),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: []
    },
    {
      id: 3,
      code: 'POjeGBs',
      name: 'Progetto Gamma',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 8, 15),
      priority: 'low',
      done: false,
      tasks: []
    },
    
  ];
     
  constructor() {
    setTimeout(() => this.projects[0].done = false, 3000) 
    
  }

  ngOnInit(): void {
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  submitProjectForm (project: Project) {
    this.projects.push({
      ...project,
      id: this.projects.length,
      code: Math.random().toString(36).replace('0.', '').substring(2, 9),
      done: false,
      tasks: [],
    });
  }

}
