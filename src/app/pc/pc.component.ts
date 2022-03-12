import { Component, OnInit } from '@angular/core';
import { AmineService } from '../amine.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
  listProdcut=[
    {id: 1, title: "pc 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "pc 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "pc 3", price: 16, quantity: 8, like: 0}, ];
  
  constructor(private s:AmineService) { }

  ngOnInit(): void {
    this.s.msg1();
  }

}
