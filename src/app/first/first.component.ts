import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
name='test';
test='red';
enabled=false;
  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngonint');
  }
  //algo
showMSg(c:any){
  this.test=c;
  console.log(c);
}
getColor(){

  if(this.enabled==true){
    return 'red'
  }else {
    return 'green';
  }
}
}
