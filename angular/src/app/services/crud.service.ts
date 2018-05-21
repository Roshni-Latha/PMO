import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpHeaderResponse}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  Read(path){
    const headers=new HttpHeaders({'content-Type':'application/json'});
    const httpOption={headers:headers};
    return this.http.get(path);
  }
  create(path,object){
    const headers=new HttpHeaders({'content-Type':'application/json'});
    const httpOption={headers:headers};
    return this.http.post(path,object);
  }
  update(path,object){
    const headers=new HttpHeaders({'content-Type':'application/json'});
    const httpOption={headers:headers};
    return this.http.put(path,object);
  }
  delete(path){
    const headers=new HttpHeaders({'content-Type':'application/json'});
    const httpOption={headers:headers};
    return this.http.delete(path);
  }
}
