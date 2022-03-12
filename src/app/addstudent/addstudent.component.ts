import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }
  save(t:any){
this.user.adduser(t).subscribe(
  ()=>{
    alert('goooooddd');
  }
);
  }
}
