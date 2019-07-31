import { Component, OnInit } from '@angular/core';
import { Readers } from '../_models/readers'
import readers_json from '../_data/readers.json';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {
  readersList: Readers[];
  constructor() {
    this.readersList = readers_json;
  }

  ngOnInit() {
  }

}
