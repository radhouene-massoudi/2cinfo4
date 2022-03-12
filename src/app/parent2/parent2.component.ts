import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {
users:any;
  constructor(private s:UserService) { }

  ngOnInit(): void {
    this.s.getUsers().subscribe(
      (d)=>{
this.users=d;
console.log(this.users);
      }
    );
  }
  after(p:any){
//console.log(p);
this.s.deleteUser(p).subscribe(
  ()=>{
    alert('deleed')
  }
);

  }
}
