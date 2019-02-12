import { Component ,ViewEncapsulation} from '@angular/core';
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
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})

//typescript
export class AppComponent {
  title:string = 'Shalini';
  submitted:boolean = true;
  content ='see if its added';
  textcolor = 'green';
  isspecial:boolean = true;
  style1 = 's1';
  style2 = 's2';
  name:string = 'Guest!!';
  show(val:string)
  {
    console.log("show called");
    alert("show called , enterred value "+val);
  }
  login(n:string)
  {
    this.name = n;
  }
  subscribed(data)
  {
    alert('subscribed data '+data);
  }
}
