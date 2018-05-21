import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Router, ActivatedRoute, ParamMap} from '@angular/router';
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  formData: FormGroup;

  constructor(private projectService: ProjectService,private route:ActivatedRoute, private router:Router, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');
  project = {
    projName:"",
    startDate:"",
    endDate:"",
    clientName:"",
  };  
  ngOnInit() {
    this.projectService.project$.subscribe(
      data => {
        this.project = data;
        this.project.projName = data['projName'];
        this.project.startDate = data['startDate'];
        this.project.endDate = data['endDate'];
        this.project.clientName = data['clientName'];
       
        console.log(this.project);

        this.formData = new FormGroup({
          projName: new FormControl(this.project.projName, []),
          startDate: new FormControl(this.project.startDate, []),
          endDate: new FormControl(this.project.endDate, []),
          clientName: new FormControl(this.project.clientName, []),
        });
      }
    );
    this.projectService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.projectService.getAllProjectById(this.id);

  this.formData = new FormGroup({
    projName: new FormControl('', []),
    startDate: new FormControl('', []),
    endDate: new FormControl('', []),
    clientName: new FormControl('', []),
    
  });
  console.log(this.formData);

}

onClickSubmit(){
  this.projectService.response$.subscribe(
    data => {
      console.log("Project Deleted successfully");
      this.router.navigate(['/project/show'])

    }
  );
  this.projectService.ErrorResponse$.subscribe(
    message => {
      console.log(message);
      alert(message);
    }
  );
  this.projectService.DeleteProject(this.id);

}
}


  
  