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
  constructor() { this.Name="arun";
  this.age=56;
  this.email="abc@gmail.com";
  this.address={houseno:"dsh709",street:"avb",dist:"ktm"};
this.hobbies=["reading","chess","dance"]
}

  ngOnInit() {
  }

}
