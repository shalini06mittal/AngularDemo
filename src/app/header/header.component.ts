import { Component, OnInit,Input, EventEmitter, Output,OnChanges,DoCheck} from '@angular/core';
import { MyService } from '../service/my.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  @Input() username:string;
  //json
  @Input() emp = {'name':'temp'};
  @Output() subs : EventEmitter<string> = new  EventEmitter();
  constructor(private service:MyService) { 
    // console.log("header component constructor "+this.username);
    // console.log("header component constructor "+this.emp.name);
  }
  
  // ngOnInit() {
  //   // console.log("header component ng on init "+this.username);
  //   console.log("header component ng on init "+this.emp.name);
  // }
  // ngOnChanges()
  // {
  //   //console.log("header component onchanges "+this.username);
  //   console.log("header component onchanges "+this.emp.name);
  // }
  // ngDoCheck()
  // {
  //   console.log("header component docheck "+this.emp.name);

  // }
  subscribe(subs)
  {
    this.subs.emit(subs);
  }
}
