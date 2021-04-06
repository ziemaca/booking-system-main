import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  data: { Data: unknown; Id: string; }[];

  constructor(private _service: MainService) { }

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords() {
    this._service.getRecord().subscribe(data => {
      this.data = data.map(e => {
        return {
          Data: e.payload.doc.data(),
          Id: e.payload.doc.id
        };

      });

      console.log(this.data)
      //Sort by Date & Time
      // this.sortedData = this.data.sort((a,b) => ((a.Data.date + a.Data.time) > ( b.Data.date + b.Data.time)) ? 1 : (((b.Data.date + b.Data.time) > (a.Data.date + a.Data.time)) ? -1 : 0));
    });
  }

}
