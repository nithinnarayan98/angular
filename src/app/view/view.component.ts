import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
Name:String;
age:Number;
email;
address;
hobbies:String[];
projects:any[]=[];
  constructor() { this.Name="arun";
  this.age=56;
  this.email="abc@gmail.com";
  this.address={houseno:"dsh709",street:"avb",dist:"ktm"};
this.hobbies=["reading","chess","dance"];
this.projects=[{name:"p1",duration:"20",enddate:"12/12"},{name:"p2",duration:"20",enddate:"12/12"}];
}

  ngOnInit() {
  }
public Add(){
 let data= {name:"p31",duration:"30",enddate:"13/12"}; 
 this.projects.push(data);
}
}
