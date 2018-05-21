import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ProjecttaskService } from '../../services/projecttask.service';

@Component({
  selector: 'app-create-projecttask',
  templateUrl: './create-projecttask.component.html',
  styleUrls: ['./create-projecttask.component.css']
})
export class CreateProjecttaskComponent implements OnInit {

  formData: FormGroup;
  constructor(private projecttaskService: ProjecttaskService,private http:HttpClient, private router:Router) { }

  projecttasks;
  ngOnInit() {
    this.projecttaskService.projecttasks$.subscribe(
      data => {
        this.projecttasks = data;
        console.log(this.projecttasks);
      }
    );
    this.projecttaskService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.projecttaskService.getAllProjecttask();

    this.formData = new FormGroup({      
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      completion: new FormControl('', [Validators.required]),
      empId: new FormControl('', [Validators.required]),
      userStoryId: new FormControl('', [Validators.required]),
    });
    console.log(this.formData);
  }

  onClickSubmit(task){
    this.projecttaskService.response$.subscribe(
      data => {
        console.log("Project Task created successfully");
        this.router.navigate(['/projecttask/show'])

      }
    );
    this.projecttaskService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.projecttaskService.createProjecttask(task);

  }

}

