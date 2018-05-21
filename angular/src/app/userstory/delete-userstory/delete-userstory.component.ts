import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import{Router, ActivatedRoute, ParamMap} from '@angular/router';
import { UserstoryService } from '../../services/userstory.service';


@Component({
  selector: 'app-delete-userstory',
  templateUrl: './delete-userstory.component.html',
  styleUrls: ['./delete-userstory.component.css']
})
export class DeleteUserstoryComponent implements OnInit {

  formData: FormGroup;
  constructor(private userStoryService: UserstoryService, private route:ActivatedRoute, private router:Router, private http: HttpClient) { }
  
  id = this.route.snapshot.paramMap.get('id');
  story ={
    story:"",
    projId:null,
  };

  ngOnInit() {
    
    this.userStoryService.getAllUserstoryById(this.id);

    this.userStoryService.userstory$.subscribe(
      data => {
        this.story.story = data['story'];
        this.story.projId = data['projId'];
        this.formData = new FormGroup({         
          story: new FormControl(this.story.story, []),
          projId: new FormControl(this.story.projId, []),
        });

      }
    );

    this.userStoryService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

    this.formData = new FormGroup({      
      story: new FormControl('', []),
      projId: new FormControl('', []),
    });

  }

  onClickSubmit(){

    this.userStoryService.DeleteUserstory(this.id);

    this.userStoryService.response$.subscribe(
      data => {
        console.log("User story Deleted successfully");
        this.router.navigate(['/userstory/show'])
      }
    );

    this.userStoryService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

  }

}