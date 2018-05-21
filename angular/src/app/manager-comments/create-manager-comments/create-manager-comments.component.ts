import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ManagercommentService } from '../../services/managercomment.service';
import { ProjecttaskService } from '../../services/projecttask.service';


@Component({
  selector: 'app-create-manager-comments',
  templateUrl: './create-manager-comments.component.html',
  styleUrls: ['./create-manager-comments.component.css']
})
export class CreateManagerCommentsComponent implements OnInit {

  formData: FormGroup;
  constructor(private managerCommentService : ManagercommentService,  private route: ActivatedRoute, private projecttaskService: ProjecttaskService , private http: HttpClient, private router: Router) { }
  id = this.route.snapshot.paramMap.get('id');
  tasks;

  ngOnInit() {

    this.projecttaskService.getAllProjecttask();

    this.projecttaskService.projecttask$.subscribe(
      data => {
        this.tasks = data;
        console.log(this.tasks);
      }
    ); 

    this.projecttaskService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

    this.formData = new FormGroup({
      comment: new FormControl('', [Validators.required]),
    });
    console.log(this.formData);
  }

  onClickSubmit(comment) {

    comment.projTaskId = this.id;
    this.managerCommentService.createComment(comment);

    this.managerCommentService.response$.subscribe(
      data => {
        console.log("Comment Created successfully");
        this.router.navigate(['/projecttask/show'])
      }
    );

    this.managerCommentService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

  }
}

