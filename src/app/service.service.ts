import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public dataBase:AngularFirestore) { }

  addUserToDb(data:any)
  {
    this.dataBase.collection("Sample").add(data)
  }
  getUserFromDb(){

      return this.dataBase.collection("Sample").snapshotChanges().pipe(
        map(actions => actions.map(a =>{
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    
  }
  getSingleUserFromDb(id:any)
  {
      return this.dataBase.collection("Sample").doc(id).valueChanges()
  }
  deleteUserFromDb(id:any)
  {
    this.dataBase.collection("Sample").doc(id).delete()
  }
  editUserInDb(id:any,data:any)
  {
    this.dataBase.collection("Sample").doc(id).update(data)
  }
}
