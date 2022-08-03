import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  name:string="";
  address:string="";
  mobileNo:number=0;
  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
  }
  // addData(formdata:FormData)
  // {
  //   console.log(formdata)
  //   let newUser = {name:this.name,address:this.address,mobileNo:this.mobileNo}
  //  // this.crudService.Add(newUser)

  //   this.name=""
  //   this.address=""
  //   this.mobileNo=""
  // }
  addData()
  {
      let newUser = {Name:this.name,Address:this.address,MobilNo:this.mobileNo}
      console.log(newUser)   
      //this.crudService.Add(newUser)   
  }
}
