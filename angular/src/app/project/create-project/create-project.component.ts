import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  formData: FormGroup;
  constructor(private projectService: ProjectService,private http:HttpClient, private router:Router) { }

  project;
  ngOnInit() {
    this.projectService.project$.subscribe(
      data => {
        this.project = data;
        console.log(this.project);
      }
    );
    this.projectService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.projectService.getAllProject();

   
    this.formData = new FormGroup({
      projName: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      clientName: new FormControl('', [Validators.required]),
    });
  }

  onClickSubmit(project) {

    this.projectService.response$.subscribe(
      data => {
        console.log("Project created successfully");
        this.router.navigate(['/employee/show'])

      }
    );
    this.projectService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.projectService.createProject(project);

  }

}
