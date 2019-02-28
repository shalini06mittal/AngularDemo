import { Component, OnInit } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers:[MyService]
})
export class ServiceComponent implements OnInit {

  constructor(private service:MyService) { }

  ngOnInit() {
  }

}
