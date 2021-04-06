import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MainService {
  
  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  addRecord(obj) {
    return this.firestore.collection('bookings').add(obj);
  }

  // get all records for admin
  getRecord() {
    return this.firestore.collection('bookings').snapshotChanges();
  }
}