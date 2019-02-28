import { Component, OnInit } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service:MyService) { }

  ngOnInit() {
  }

}
