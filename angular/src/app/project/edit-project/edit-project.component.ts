import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';



@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  formData: FormGroup;
  constructor(private route:ActivatedRoute, private router:Router, private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id');
  project;
  ngOnInit() {
    this.loadProject();

    this.formData = new FormGroup({
      projName: new FormControl('', []),
      startDate: new FormControl('', []),
      endDate: new FormControl('', []),
      clientName: new FormControl('', []),
    });

  }

  loadProject() {
    
    this.http.get(`http://localhost:50840/api/Project/${this.id}`).subscribe(
      data => {
        console.log(data);
        
        this.project = data;
        this.formData = new FormGroup({
          projName: new FormControl(this.project.projName, []),
          startDate: new FormControl(this.project.startDate, []),
          endDate: new FormControl(this.project.endDate, []),
          clientName: new FormControl(this.project.clientName, []),
        });

      }
    )
  }

  onClickSubmit(project){
    this.http.put(`http://localhost:50840/api/Project/${this.id}`,project).subscribe(
      data => {
        console.log("Saved Successfully");
        this.router.navigate(['/project/show'])
      }
    )

  }

}