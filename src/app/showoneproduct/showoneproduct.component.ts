import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-showoneproduct',
  templateUrl: './showoneproduct.component.html',
  styleUrls: ['./showoneproduct.component.css']
})
export class ShowoneproductComponent implements OnInit {
@Input()product!:any;
@Output()notif=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
senddatatoparent(p:any){
  this.notif.emit(p)
}
}
