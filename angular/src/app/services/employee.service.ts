import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl="http://localhost:50840";

  private employees = new Subject<any>();
  employees$ = this.employees.asObservable();

  private employee = new Subject<any>();
  employee$ = this.employee.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  constructor(private crudService: CrudService) { }

  getAllEmployees(){
    const url= `${this.baseUrl}/api/Employee`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.employees.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error);
    }
  );
  }

  getAllEmployeeById(id){
    const url= `${this.baseUrl}/api/Employee/${id}`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.employee.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  createEmployee(object){
    const url= `${this.baseUrl}/api/Employee`;
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

  EditEmployee(id,object){
    const url= `${this.baseUrl}/api/Employee/${id}`;
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

  DeleteEmployee(id){
    const url= `${this.baseUrl}/api/Employee/${id}`;
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
  ViewEmployee(id){
    const url= `${this.baseUrl}/api/Employee/${id}`;
    this.crudService.Read(url).subscribe(data=>
      {
        this.employee.next(data);
      },
      error=> {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
    }
  );
  }

  
}



