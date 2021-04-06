import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {

  dataObject = {location: null, destination: null, name: null, contact: null};

  constructor(private service: MainService, private http: HttpClient) { }

  ngOnInit(): void {
  }

    // Sending sms when booking
    Sendsms() {
      let message = '' + this.dataObject.name + ' is looking for lift from ' + this.dataObject.location + ' to ' + this.dataObject.destination
      + ' contact number: ' + this.dataObject.contact;  
  
      let params = new HttpParams({
        fromObject: { To: '+27662887459', From: '+12569071595', Body: message }
      });
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + environment.auth
        })
      };
  
      this.http.post('https://api.twilio.com/2010-04-01/Accounts/AC6d6a44a0c1f8ea7d5c1c30b809f92f6e/Messages.json', params, httpOptions)
        .subscribe(response => {
        });

    }
  

  submitBooking(obj){

    if(this.dataObject.location && this.dataObject.contact && this.dataObject.destination && this.dataObject.name){
      this.service.addRecord(obj);
      this.Sendsms();
      alert("Booking Success. We'll contact you soon.")
      this.dataObject = {location: null, destination: null, name: null, contact: null};

    }else{
      alert("Booking Failed...Check Form and Try Again.")
    }
    
  }
}
