import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direc',
  templateUrl: './direc.component.html',
  styleUrls: ['./direc.component.css']
})
export class DirecComponent implements OnInit {
  listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  show=false;
  j=-1;
    constructor() { }

  ngOnInit(): void {
  }
  showMsg(k:any){
    this.j=k;
    this.show=true;
  }
increaseLike(k:any){
  this.listProdcut[k].like++;
}
decreaseQ(p:any){
let ind=this.listProdcut.indexOf(p);
this.listProdcut[ind].quantity--;
}
}
