import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
id:any;
user!:any;
name:any;
surnamr:any;
age:any;

  constructor(private s:UserService,
    private ac:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
this.id=this.ac.snapshot.params['id'];
this.s.getUserByID(this.id).subscribe(
  (d)=>{
    this.user=d;
    this.name=this.user.name;
    this.surnamr=this.user.surname;
    this.age=this.user.age;
  }
  );

  }

  Update(data:any){
    this.s.updateUser(this.id,data).subscribe(
      ()=>{
        this.router.navigate(['us'])
        alert('updated');
      }
    );
  }
}
