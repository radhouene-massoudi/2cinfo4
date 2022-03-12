import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
id!:any;
  constructor(private activatedroute: ActivatedRoute ) { }

  ngOnInit(): void {
    //this.id=this.activatedroute.snapshot.params.get('id');
    console.log(this.activatedroute.snapshot.params['id']);
    //request to data base select * from product where id= id
  }

}
