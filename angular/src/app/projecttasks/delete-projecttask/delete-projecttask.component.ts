import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Router, ActivatedRoute, ParamMap} from '@angular/router';
import { ProjecttaskService } from '../../services/projecttask.service';


@Component({
  selector: 'app-delete-projecttask',
  templateUrl: './delete-projecttask.component.html',
  styleUrls: ['./delete-projecttask.component.css']
})
export class DeleteProjecttaskComponent implements OnInit {

  formData: FormGroup;

  constructor(private projecttaskService: ProjecttaskService,private route:ActivatedRoute, private router:Router, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');
  projecttask = {
  
    startDate:"",
    endDate:"",
    completion:"",
    empId:null,
    userStoryId:null
  };  
  ngOnInit() {
    this.projecttaskService.projecttask$.subscribe(
      data => {
        this.projecttask = data;
      
        this.projecttask.startDate = data['startDate'];
        this.projecttask.endDate = data['endDate'];
        this.projecttask.completion = data['completion'];
        this.projecttask.empId = data['empId'];
        this.projecttask.userStoryId = data['userStoryId'];
       
        console.log(this.projecttask);

        this.formData = new FormGroup({
        
          startDate: new FormControl(this.projecttask.startDate, []),
          endDate: new FormControl(this.projecttask.endDate, []),
          completion: new FormControl(this.projecttask.completion, []),
          empId: new FormControl(this.projecttask.empId, []),
          userStoryId: new FormControl(this.projecttask.userStoryId, []),
        });
      }
    );
    this.projecttaskService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.projecttaskService.getAllProjecttaskById(this.id);

  this.formData = new FormGroup({
  
    startDate: new FormControl('', []),
    endDate: new FormControl('', []),
    completion: new FormControl('', []),
    empId: new FormControl('', []),
    userStoryId: new FormControl('', []),
    
  });
  console.log(this.formData);

}

onClickSubmit(){
  this.projecttaskService.response$.subscribe(
    data => {
      console.log("Project Task Deleted successfully");
      this.router.navigate(['/projecttask/show'])

    }
  );
  this.projecttaskService.ErrorResponse$.subscribe(
    message => {
      console.log(message);
      alert(message);
    }
  );
  this.projecttaskService.DeleteProjecttask(this.id);

}
}


  
  