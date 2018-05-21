import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl="http://localhost:50840";

  private projects = new Subject<any>();
  projects$ = this.projects.asObservable();

  private project = new Subject<any>();
  project$ = this.project.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  constructor(private crudService: CrudService) { }

  getAllProject(){
    const url= `${this.baseUrl}/api/Project`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.projects.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error);
    }
  );
  }

  getAllProjectById(id){
    const url= `${this.baseUrl}/api/Project/${id}`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.project.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  createProject(object){
    const url= `${this.baseUrl}/api/Project`;
    this.crudService.create(url,object).subscribe(data=>
      {
        this.response.next(true);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  EditProject(id,object){
    const url= `${this.baseUrl}/api/Project/${id}`;
    this.crudService.update(url,object).subscribe(data=>
      {
        this.response.next(true);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  DeleteProject(id){
    const url= `${this.baseUrl}/api/Project/${id}`;
    this.crudService.delete(url).subscribe(data=>
      {
        this.response.next(true);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }
  ViewProject(id){
    const url= `${this.baseUrl}/api/Project/${id}`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.project.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  
}



