import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectFormComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
