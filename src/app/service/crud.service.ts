import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
users=[]
  constructor() { }

  Add(user:{name:string,address:string,mobileNo:number})
  {
    // this.users.push(user)
    // console.log(this.users)
  }
}
