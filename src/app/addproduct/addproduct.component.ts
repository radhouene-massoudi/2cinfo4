import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product/product.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private t:TestService,private p:ProductService) { }

  ngOnInit(): void {
  }
  showform(form:any){
    console.log(form)
   
  }
  save(d:any){
this.p.addProduct(d).subscribe(
  ()=>{
    alert('good');
  }
);
  }
}
