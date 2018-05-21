import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ManagercommentService } from '../../services/managercomment.service';


@Component({
  selector: 'app-show-manager-comments',
  templateUrl: './show-manager-comments.component.html',
  styleUrls: ['./show-manager-comments.component.css']
})
export class ShowManagerCommentsComponent implements OnInit {

  constructor(private managerCommentService: ManagercommentService, private route: ActivatedRoute, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');
  comments;

  ngOnInit() {
    
    this.managerCommentService.getAllCommentsByTaskId(this.id);
    
    this.managerCommentService.comments$.subscribe(
      data => {
        this.comments = data;
        console.log(this.comments);
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
