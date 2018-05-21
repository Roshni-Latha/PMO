import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserstoryService {
  baseUrl="http://localhost:50840";

  private userstory = new Subject<any>();
  userstory$ = this.userstory.asObservable();

  private userstories = new Subject<any>();
  userstories$ = this.userstories.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  constructor(private crudService: CrudService) { }

  getAllUserStory(){
    
    const url= `${this.baseUrl}/api/UserStory`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.userstories.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error);
    }
  );
  }

  getAllUserstoryById(id){
    const url= `${this.baseUrl}/api/UserStory/${id}`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.userstory.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  createUserstory(object){
    const url= `${this.baseUrl}/api/UserStory`;
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

  EditUserstory(id,object){
    const url= `${this.baseUrl}/api/UserStory/${id}`;
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

  DeleteUserstory(id){
    const url= `${this.baseUrl}/api/UserStory/${id}`;
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
  ViewUserstory(id){
    const url= `${this.baseUrl}/api/UserStory/${id}`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.userstories.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  
}



