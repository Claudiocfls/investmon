import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

@Injectable()

export class FirebaseDataProvider {

 constructor(private db: AngularFirestore) {
   console.log('Hello TodosProvider Provider');
 }

 list() {
   return this.db.collection('/monitoring', ref => ref.orderBy('symbol')).valueChanges();
 }

 add(ticker) {
   const id = this.db.createId();
   ticker['id'] = id;
   ticker['createdAt'] = firebase.firestore.FieldValue.serverTimestamp();
   ticker['updatedAt'] = firebase.firestore.FieldValue.serverTimestamp();
   return this.db.collection('monitoring').doc(id).set(ticker);
 }

 complete(todo) {
   return this.db.collection('todos').doc(todo.id).update({
     complete: todo.complete,
     updatedAt: firebase.firestore.FieldValue.serverTimestamp()
   });
 }

 delete(todo) {
   return this.db.collection('todos').doc(todo.id).delete();
 }

}