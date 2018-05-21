import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManagercommentService {

 baseUrl ='http://localhost:50840'
 
 private comments =new Subject<any> ();
 comments$ = this.comments.asObservable();

 private comment = new Subject<any> ();
 comment$ = this.comment.asObservable();

 private response = new Subject<any>();
 response$=this.response.asObservable();

 private ErrorResponse = new Subject<any>();
 ErrorResponse$=this.ErrorResponse.asObservable();

 constructor(private crudService: CrudService){ }

 getAllComments(){
   const url =`${this.baseUrl}/api/ManagerComment`;
   this.crudService.Read(url).subscribe(
     data=>{
       this.comments.next(data);
     },
     error=> {
      console.log(error);
      this.ErrorResponse.next(error);
  }
  );

 }


 getAllCommentsById(id) {
  const url = `${this.baseUrl}/api/ManagerComment/${id}`;
  this.crudService.Read(url).subscribe(
    data => {
      this.comment.next(data);
    }
  );
}

 getAllCommentsByTaskId(id){
  const url =`${this.baseUrl}/api/ManagerComment/GetByTaskId/${id}`;
   this.crudService.Read(url).subscribe(
     data=>{
       this.comments.next(data);
     }
    );
 }
 
 createComment(object){
  const url= `${this.baseUrl}/api/ManagerComment`;
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
EditComment(id,object){
  const url= `${this.baseUrl}/api/ManagerComment/${id}`;
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
DeleteComment(id){
  const url= `${this.baseUrl}/api/ManagerComment/${id}`;
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
}

 
