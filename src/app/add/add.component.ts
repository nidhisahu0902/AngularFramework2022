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
}
