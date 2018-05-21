import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  constructor(private http:HttpClient) { }

  projects;
  ngOnInit() {
  this.loadProjects();
  }
  loadProjects() {
  
    this.http.get('http://localhost:50840/api/Project').subscribe(
      data => {
        console.log(data);
        this.projects = data;
      }
    )
  }

}
