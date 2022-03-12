import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
id:any;
  constructor(private service:UserService,
    private acr:ActivatedRoute,
    private r:Router) { }

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id'];

    this.service.deleteUser(this.id).subscribe(
      ()=>{
       // alert('deleted');
        this.r.navigate(['us'])
      },
      (error)=>{
       alert("error")
      },
      ()=>{
        //alert('complete')
      }
    );
  }

}
