import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})
export class SamComponent implements OnInit {
name:String
  constructor() {
    this.name="sam";
   }

  ngOnInit() {
  }

}
