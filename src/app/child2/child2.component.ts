import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
@Input()p:any;
@Output()msg=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
sendnotif(i:any){
  this.msg.emit(i);
}
}
