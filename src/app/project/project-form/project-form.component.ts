import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

submit(f: NgForm) {
  console.log(f.value);
}
 
}
