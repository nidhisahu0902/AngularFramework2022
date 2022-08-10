import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { CrudService } from '../service/crud.service';
import { map } from 'rxjs/operators';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  constructor(public crudService:CrudService,public service:ServiceService ) { 
    this.service.getUserFromDb().subscribe(res=>{
      console.log(res)
      this.users = res
    })
  }
  users:any=[];
  isShow:boolean = false;
  Name:string="";
  Mail:string="";
  id= null;
  ngOnInit( ): void {
  }
 
  onCreateUser(uName:any,mail:any)
  {
      console.log(uName.value,mail.value)
      // let userName = uName.value;
      // let Email = mail.value;
      // this.users.push({
      //   Name:userName,
      //   Mail : Email
      // });
      let user={Name:uName.value,Mail:mail.value}
      this.service.addUserToDb(user)
      uName.value="";
      mail.value="";
  }
  onDeleteUser(id:any)
  {
    // console.log(item)
    // this.users.splice(item,1)
    this.service.deleteUserFromDb(id)
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
 
  onChanges(id:any,uName:any,mail:any)
  {
    console.log(this.users[id].Name,this.users[id].Mail)
   // this.Name = uName.value;
    //this.Mail =mail.value;
    console.log(id,uName.value,mail.value)
    console.log(this.Name,this.Mail)
    //this.users[id]={Name:uName.value,Mail:mail.value}
    console.log(id,uName.value,mail.value)
    let editedData={Name:this.users.Name,Mail:this.users.Mail}
    console.log()
   // this.service.editUserInDb(id,editedData)
    this.isShow=false;
  }

}

