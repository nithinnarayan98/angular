import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  cust_name:String;
  view:boolean=false;
  view1:boolean=false;
  view2:boolean=false;
  view3:boolean=false;
  view4:boolean=false;
  m1:any;
m:number;
  n1:any;
  n2:any;
  s:number;
d:number

  constructor() { }

  ngOnInit() {
  }
public welcome(){
this.view=true;
}
public add(){
  this.s=parseInt(this.n1)+parseInt(this.n2)
this.view1=true;
}
public sub(){
  this.d=parseInt(this.n1)-parseInt(this.n2)
this. view2=true;
}
public mark(){
  this.m=parseInt(this.m1);
  if(this.m>50)
  {this.m1="passed";
this.view3=true}
else{
  this.m1="failed";
  this.view4=true
}
}
}
