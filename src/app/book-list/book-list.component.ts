import { Component, OnInit } from '@angular/core';
import { Books } from '../_models/books';
import books_json from '../_data/books.json';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Books[] = books_json;
  constructor() {
    for (var i = 0; i < this.bookList.length; i++) {
      if (localStorage.getItem(i.toString()) != null) {
        this.bookList[i].reder = JSON.parse(localStorage.getItem(i.toString())).readerName;
        this.bookList[i].returnDate = JSON.parse(localStorage.getItem(i.toString())).returnDate;
        this.bookList[i].count = JSON.parse(localStorage.getItem(i.toString())).count;
        this.bookList[i].status = "выдано";
      }
    }
  }

  ngOnInit() {
  }
}
