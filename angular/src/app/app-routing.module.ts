import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { ProjecttasksComponent } from './projecttasks/projecttasks.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { DeleteProjectComponent } from './project/delete-project/delete-project.component';
import { CreateProjecttaskComponent } from './projecttasks/create-projecttask/create-projecttask.component';
import { ShowProjecttaskComponent } from './projecttasks/show-projecttask/show-projecttask.component';
import { ViewProjecttaskComponent } from './projecttasks/view-projecttask/view-projecttask.component';
import { EditProjecttasksComponent } from './projecttasks/edit-projecttasks/edit-projecttasks.component';
import { DeleteProjecttaskComponent } from './projecttasks/delete-projecttask/delete-projecttask.component';
import { CreateUserStoryComponent } from './userstory/create-userstory/create-userstory.component';
import { ShowUserstoryComponent } from './userstory/show-userstory/show-userstory.component';
import { EditUserstoryComponent } from './userstory/edit-userstory/edit-userstory.component';
import { ViewUserstoryComponent } from './userstory/view-userstory/view-userstory.component';
import { DeleteUserstoryComponent } from './userstory/delete-userstory/delete-userstory.component';
import { ManagerCommentsComponent } from './manager-comments/manager-comments.component';
import { CreateManagerCommentsComponent } from './manager-comments/create-manager-comments/create-manager-comments.component';
import { ShowManagerCommentsComponent } from './manager-comments/show-manager-comments/show-manager-comments.component';
import { EditComponent } from './manager-comments/edit/edit.component';
import { DeleteManagercommentComponent } from './manager-comments/delete-managercomment/delete-managercomment.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'

  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: 'show',
        component: ShowEmployeeComponent,
        children: []
      },
      {
        path: 'create',
        component: CreateEmployeeComponent,
        children: []
      },
      {
        path: 'edit/:id',
        component: EditEmployeeComponent,
        children: []
      },
      {
        path: 'view/:id',
        component: ViewEmployeeComponent,
        children: []
      },
      {
        path: 'delete/:id',
        component: DeleteEmployeeComponent,
        children: []
      },
      {
        path: '',
        redirectTo: '/employee/show',
        pathMatch: 'full'
      },
      
    ]
  },

  {
    path: 'project',
    component: ProjectComponent,
    children: [
      {
        path: 'show',
        component: ShowProjectComponent,
        children: []
      },
      {
        path: 'create',
        component: CreateProjectComponent,
        children: []
      }, 
      {
        path: 'edit/:id',
        component: EditProjectComponent,
        children: []
      },
      {
        path: 'view/:id',
        component: ViewProjectComponent,
        children: []
      },
      {
        path: 'delete/:id',
        component: DeleteProjectComponent,
        children: []
      },
      {
        path: '',
        redirectTo: '/project/show',
        pathMatch: 'full'
      },
      
    ]

  },

  {
    path: 'projecttask',
    component: ProjecttasksComponent,
    children: [
      {
        path: 'show',
        component: ShowProjecttaskComponent,
        children: []
      },
      {
        path: 'create',
        component: CreateProjecttaskComponent,
        children: []
      }, 
      {
        path: 'view/:id',
        component: ViewProjecttaskComponent,
        children: []
      }, 
      {
        path: 'edit/:id',
        component: EditProjecttasksComponent,
        children: []
      }, 
      {
        path: 'delete/:id',
        component: DeleteProjecttaskComponent,
        children: []
      },
      {
        path: '',
        redirectTo: '/projecttask/show',
        pathMatch: 'full'
      },
      

    ]
  },
  {
    path: 'userstory',
    component: UserstoryComponent,
    children: [
  
      {
        path: 'create',
        component: CreateUserStoryComponent ,
        children: []
      }, 
      {
        path: 'show',
        component: ShowUserstoryComponent ,
        children: []
      }, 
      {
        path: 'edit/:id',
        component: EditUserstoryComponent ,
        children: []
      }, 
      {
        path: 'view/:id',
        component: ViewUserstoryComponent,
        children: []
      }, 
      {
        path: 'delete/:id',
        component: DeleteUserstoryComponent,
        children: []
      },
      {
        path: '',
        redirectTo: '/userstory/show',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'managercomment',
    component: ManagerCommentsComponent,
    children: [
  
      {
        path: 'create/:id',
        component: CreateManagerCommentsComponent ,
        children: []
      }, 
      {
        path: 'show/:id',
        component: ShowManagerCommentsComponent ,
        children: []
      }, 
      {
        path: 'edit/:id',
        component: EditComponent,
        children: []
      }, 
      {
        path: '',
        redirectTo: '/projecttask/show',
        pathMatch: 'full'
      },
      {
        path: 'delete/:id',
        component: DeleteManagercommentComponent,
        children: []
      },
    ]
  },



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
