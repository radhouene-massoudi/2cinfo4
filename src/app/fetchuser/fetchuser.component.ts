import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-fetchuser',
  templateUrl: './fetchuser.component.html',
  styleUrls: ['./fetchuser.component.css']
})
export class FetchuserComponent implements OnInit {
users!:any;
  constructor(private s:UserService) { }

  ngOnInit(): void {
this.s.getUsers().subscribe(
  (data)=>{
    //console.log(data)
    this.users=data;
    //console.log(data);
  }
);
  }

}
