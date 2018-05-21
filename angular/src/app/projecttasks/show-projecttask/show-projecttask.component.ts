import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProjecttaskService } from '../../services/projecttask.service';

@Component({
  selector: 'app-show-projecttask',
  templateUrl: './show-projecttask.component.html',
  styleUrls: ['./show-projecttask.component.css']
})
export class ShowProjecttaskComponent implements OnInit {

  constructor(private projecttaskService: ProjecttaskService) { }
  projecttasks;

  ngOnInit() {

    this.projecttaskService.getAllProjecttask();

    this.projecttaskService.projecttasks$.subscribe(
      data=>{
        this.projecttasks = data;
        console.log(this.projecttasks);
      }
    );
    this.projecttaskService.ErrorResponse$.subscribe(
      message=>{
        console.log(message);
        alert(message);
      }
    );
    
  }
 
}
