import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  view:boolean=false;
  product:any[]=[];
cart:any[]=[];
  constructor() {
    this.product=[{name:"printer",price:"8000",company:"hp"},{name:"scanner",price:"12000",company:"hp"},{name:"keyboard",price:"1800",company:"hp"}];
    
   }

  ngOnInit() {
  }
public Add(x){
  let data= {name:x.name,price:x.price,company:x.company}; 
 this.cart.push(data);
}
public delete(i){
  for(var j=0;j<this.cart.length;j++){
    if(j==i)
    this.cart.splice(j,1)
  }
}
public show(){
  this.view=true;
}
public hide(){
  this.view=false;
}

}
