import { Component, OnInit } from '@angular/core';
import { Readers } from '../_models/readers';
import readers_json from '../_data/readers.json';

@Component({
  selector: 'app-rating-readers',
  templateUrl: './rating-readers.component.html',
  styleUrls: ['./rating-readers.component.css']
})
export class RatingReadersComponent implements OnInit {

  //создание независимой копии объекта
  readerList: Readers[] = JSON.parse(JSON.stringify(readers_json));
  topReadersList: Readers[] = [];

  constructor() {
    var max: number;

    for (var i = 0; i < 5; i++) {
      max = 0;
      var maxindex = 0;
      for (var j = 0; j < this.readerList.length; j++) {
        if (max < this.readerList[j].count) {
          max = this.readerList[j].count;
          maxindex = j;
        }
      }
      this.topReadersList.push(this.readerList[maxindex]);
      this.readerList.splice(maxindex, 1);
    }

    this.readerList = null;
  }

  ngOnInit() {
  }

}
