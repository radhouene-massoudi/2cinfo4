import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
id!:any;
  constructor(private ac:ActivatedRoute,private user:UserService) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];

    this.user.getUserByID(this.id).subscribe(
      (d)=>{
        
        console.log(d);
      }
    );
  }

}
