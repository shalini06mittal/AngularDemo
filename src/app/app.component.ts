import { Component ,ViewEncapsulation, OnInit,OnChanges,AfterViewInit,AfterViewChecked} from '@angular/core';
import { nearer } from 'q';

@Component({
  selector: 'app-root',
  /*template:`<h2>{{title}}</h2>
  <p>This is the main content</p>
  `,
  styles:[`
    p{color:red;}
  `]*/
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.Native
})

//typescript
export class AppComponent implements OnInit,OnChanges,AfterViewInit,AfterViewChecked{
  title:string = 'Shalini';
  submitted:boolean = true;
  content ='see if its added';
  textcolor = 'green';
  isspecial:boolean = true;
  style1 = 's1';
  style2 = 's2';
  name:string = 'Guest!!';
  employee = {'name':"Shalini"};
  people: any[] = [
    {
    "name": "Douglas Pace",
    "age": 35,
    "country": 'MARS'
    },
    {
    "name": "Mcleod Mueller",
    "age": 32,
    "country": 'USA'
    },
    {
    "name": "Aguirre Ellis",
    "age": 34,
    "country": 'UK'
    },
    {
    "name": "Cook Tyson",
    "age": 32,
    "country": 'USA'
    }
    ];
    
  constructor()//services are injected in the constructor
  {
    console.log("app component constructor");
  }
  //any calling of service for any long running op
  ngOnInit()
  {
    console.log("app component oninit");
  }
  ngOnChanges()
  {
    console.log("app component onchanges");
  }
  ngAfterViewInit()
  {
    console.log("app component viewinit");
  }
  ngAfterViewChecked()
  {
    console.log("app component view checked");
  }
  show(val:string)
  {
    console.log("show called");
    alert("show called , enterred value "+val);
  }
  login(n:string)
  {
    //this.name = n;
   console.log("name passed in login click "+n);
    this.employee.name = n;
  }
  subscribed(data)
  {
    alert('subscribed data '+data);
  }
}
