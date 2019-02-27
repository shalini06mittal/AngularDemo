import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  fname:FormControl;
  lname:FormControl;
  address:FormGroup;
  street:FormControl;
  city:FormControl;
  fg:FormGroup;

  createControls()
  {
        this.fname = new FormControl('',[
          Validators.required,
          Validators.minLength(5)
      ]);
      this.lname = new FormControl('',[
        Validators.required,
        Validators.minLength(5)
     ])
      this.street = new FormControl();
      this.city = new FormControl();
  }
  constructor() { 
    this.createControls();
    this.fg = new FormGroup({
      fname:this.fname ,
      lname:this.lname,
      address:new FormGroup({
        street:this.street,
        city:this.city
      })
    });
    // this.fg = new FormGroup({
    //   fname:new FormControl('',[
    //     Validators.required,
    //     Validators.minLength(5)
    // ])
      
    // });
  }
  
  submit()
  {
    console.log(this.fg.value);
  }
  ngOnInit() {
  }

}
