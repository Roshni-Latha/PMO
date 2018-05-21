import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { ProjecttasksComponent } from './projecttasks/projecttasks.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { CreateProjecttaskComponent } from './projecttasks/create-projecttask/create-projecttask.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { ManagerCommentsComponent } from './manager-comments/manager-comments.component';
import { CreateManagerCommentsComponent } from './manager-comments/create-manager-comments/create-manager-comments.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { ServicesComponent } from './services/services.component';
import { EmployeeService } from './services/employee.service';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { DeleteProjectComponent } from './project/delete-project/delete-project.component';
import { ShowProjecttaskComponent } from './projecttasks/show-projecttask/show-projecttask.component';
import { ViewProjecttaskComponent } from './projecttasks/view-projecttask/view-projecttask.component';
import { EditProjecttasksComponent } from './projecttasks/edit-projecttasks/edit-projecttasks.component';
import { DeleteProjecttaskComponent } from './projecttasks/delete-projecttask/delete-projecttask.component';
import { CreateUserStoryComponent } from './userstory/create-userstory/create-userstory.component';
import { ShowUserstoryComponent } from './userstory/show-userstory/show-userstory.component';
import { EditUserstoryComponent } from './userstory/edit-userstory/edit-userstory.component';
import { ViewUserstoryComponent } from './userstory/view-userstory/view-userstory.component';
import { DeleteUserstoryComponent } from './userstory/delete-userstory/delete-userstory.component';
import { ShowManagerCommentsComponent } from './manager-comments/show-manager-comments/show-manager-comments.component';
import { ProjectService } from './services/project.service';
import { ProjecttaskService } from './services/projecttask.service';
import { UserstoryService } from './services/userstory.service';
import { ManagercommentService } from './services/managercomment.service';
import { EditComponent } from './manager-comments/edit/edit.component';
import { DeleteManagercommentComponent } from './manager-comments/delete-managercomment/delete-managercomment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ProjectComponent,
    ProjecttasksComponent,
    HeaderComponent,
    FooterComponent,
    CreateEmployeeComponent,
    ShowEmployeeComponent,
    EditEmployeeComponent,
    CreateProjectComponent,
    CreateProjecttaskComponent,
    UserstoryComponent,
    CreateUserStoryComponent, 
    ManagerCommentsComponent,
    CreateManagerCommentsComponent,
    ShowProjectComponent,
    ViewEmployeeComponent,
    DeleteEmployeeComponent,
    EditProjectComponent,
    ServicesComponent,
    ViewProjectComponent,
    DeleteProjectComponent,
    ShowProjecttaskComponent,
    ViewProjecttaskComponent,
    EditProjecttasksComponent,
    DeleteProjecttaskComponent,
    ShowUserstoryComponent,
    EditUserstoryComponent,
    ViewUserstoryComponent,
    DeleteUserstoryComponent,
    ShowManagerCommentsComponent,
    EditComponent,
    DeleteManagercommentComponent
    

  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
    ProjectService,
    ProjecttaskService,
    UserstoryService,
    ManagercommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
