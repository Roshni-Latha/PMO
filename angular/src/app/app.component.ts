import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';

  iscondition = false;
  clickme(){
    this.iscondition = this.iscondition?false:true;
    
  }
}
