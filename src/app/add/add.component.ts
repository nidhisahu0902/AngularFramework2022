import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public crudService:CrudService) { }
  users:any=[];
  isShow:boolean = false;
  Name:string="";
  Mail:string="";
  id= null;
  ngOnInit(): void {
  }

  onCreateUser(uName:any,mail:any)
  {
      console.log(uName.value,mail.value)
      let userName = uName.value;
      let Email = mail.value;
      this.users.push({
        Name:userName,
        Mail : Email
      });
    
  }
  onDeleteUser(item:any)
  {
    console.log(item)
    this.users.splice(item,1)
  }
  onEditUser(id:any,user:any)
  {
    console.log(id,user.Name,user.Mail)
    
    this.isShow=true;
    this.Name=user.Name;
    this.Mail=user.Mail;
    this.id=id
    console.log(this.Name,this.Mail)
  }
  onCancel()
  {
    this.isShow=false;
  }
  onChanges(id:any,uName:any,mail:any)
  {
    console.log(id,uName.value,mail.value)
    this.users[id].pop({
        Name:uName.value,
        Mail:mail.value
    });
    this.isShow=false;
  }
}
