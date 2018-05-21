import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';


@Component({
  selector: 'app-edit-projecttasks',
  templateUrl: './edit-projecttasks.component.html',
  styleUrls: ['./edit-projecttasks.component.css']
})
export class EditProjecttasksComponent implements OnInit {

  formData: FormGroup;
  constructor(private route:ActivatedRoute, private router:Router, private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id');
  projecttask;
  ngOnInit() {
    this.loadProjecttask();

    this.formData = new FormGroup({
    
      startDate: new FormControl('', []),
      endDate: new FormControl('', []),
      completion: new FormControl('', []),
      empId:new FormControl('', []),
      userStoryId:new FormControl('', []),
      
    });

  }

  loadProjecttask() {
    
    this.http.get(`http://localhost:50840/api/Task/${this.id}`).subscribe(
      data => {
        console.log(data);
        
        this.projecttask = data;
        this.formData = new FormGroup({
         
          startDate: new FormControl(this.projecttask.startDate, []),
          endDate: new FormControl(this.projecttask.endDate, []),
          completion: new FormControl(this.projecttask.completion, []),
          empId: new FormControl(this.projecttask.empId, []),
          userStoryId: new FormControl(this.projecttask.userStoryId, []),
          
        });

      }
    )
  }

  onClickSubmit(projecttask){
    this.http.put(`http://localhost:50840/api/Task/${this.id}`,projecttask).subscribe(
      data => {
        console.log("Saved Successfully");
        this.router.navigate(['/projecttask/show'])
      }
    )

  }

}