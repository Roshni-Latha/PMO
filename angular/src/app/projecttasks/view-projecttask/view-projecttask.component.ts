import { Component, OnInit } from '@angular/core';
import { ProjecttaskService } from '../../services/projecttask.service';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-view-projecttask',
  templateUrl: './view-projecttask.component.html',
  styleUrls: ['./view-projecttask.component.css']
})
export class ViewProjecttaskComponent implements OnInit {

  formData: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');

  projecttasks = {

    taskId:null,
    startDate:"",
    endDate:"",
    completion:"",
    empId:null,
    userStoryId:null,
    
  };  

  ngOnInit() {

    this.loadProjecttasks();
  }

  loadProjecttasks(){
    this.http.get(`http://localhost:50840/api/Task/${this.id}`).subscribe(
      data => {
        console.log(data);

        this.projecttasks.taskId = data['taskId'];
        this.projecttasks.startDate = data['startDate'];
        this.projecttasks.endDate = data['endDate'];
        this.projecttasks.completion = data['completion'];
        this.projecttasks.empId = data['empId'];
        this.projecttasks.userStoryId = data['userStoryId'];
        
        this.formData = new FormGroup({
          taskId: new FormControl(this.projecttasks.taskId, []),
          startDate: new FormControl(this.projecttasks.startDate, []),
          endDate: new FormControl(this.projecttasks.endDate, []),
          completion: new FormControl(this.projecttasks.completion, []),
          empId: new FormControl(this.projecttasks.empId, []),
          userStoryId: new FormControl(this.projecttasks.userStoryId, []),
        });

      }
    )
  }

}
