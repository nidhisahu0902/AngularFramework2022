import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
user:any
index:any;
  constructor(public service:ServiceService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.paramMap.get("id");
    this.service.getSingleUserFromDb(this.index).subscribe(res=>{
      this.user=res
      console.log(this.user)
    })
  }
  edit()
  {
    let editedData ={Name:this.user.Name,Mail:this.user.Mail}
    this.service.editUserInDb(this.index,editedData)
    this.router.navigateByUrl("")
  }

}
