import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
id!:any;
surname!:any;
  constructor(private ac:ActivatedRoute,private t:TestService) { }

  ngOnInit(): void {
//this.id=this.ac.snapshot.params['id'];
//id selct * from product where id =this.id
//this.surname=this.ac.snapshot.params['surname'];
this.ac.params.subscribe(
  (d)=>{
    this.surname=d['name'];
    this.t.msg();
   console.log(d['name']);
  }
);

  }
 
}
