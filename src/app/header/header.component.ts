import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() username:string;
  @Input() emp = {'name':this.username};
  @Output() subs : EventEmitter<string> = new  EventEmitter();
  constructor() { 
  }
  
  ngOnInit() {
  }
  
  subscribe(subs)
  {
    this.subs.emit(subs);
  }
}
