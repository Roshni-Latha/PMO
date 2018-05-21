import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjecttaskService {

  baseUrl="http://localhost:50840";

  private projecttasks = new Subject<any>();
  projecttasks$ = this.projecttasks.asObservable();

  private projecttask = new Subject<any>();
  projecttask$ = this.projecttask.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  constructor(private crudService: CrudService) { }

  getAllProjecttask(){
    const url= `${this.baseUrl}/api/Task`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.projecttasks.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error);
    }
  );
  }

  getAllProjecttaskById(id){
    const url= `${this.baseUrl}/api/Task/${id}`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.projecttask.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  createProjecttask(object){
    const url= `${this.baseUrl}/api/Task`;
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

  EditProjecttask(id,object){
    const url= `${this.baseUrl}/api/Task/${id}`;
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

  DeleteProjecttask(id){
    const url= `${this.baseUrl}/api/Task/${id}`;
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
  ViewProjecttask(id){
    const url= `${this.baseUrl}/api/Task/${id}`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.projecttask.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  
}



