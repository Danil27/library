import { Component, OnInit } from '@angular/core';
import books_json from '../_data/books.json';
import { Books } from '../_models/books';
@Component({
  selector: 'app-take-book',
  templateUrl: './take-book.component.html',
  styleUrls: ['./take-book.component.css']
})
export class TakeBookComponent implements OnInit {
  bookslist: Books[] = books_json;
  issueBooks: Books[] = [];
  constructor() {
    for (var i = 0; i < this.bookslist.length; i++) {
      if (localStorage.getItem(i.toString()) != null) {
        this.issueBooks.push(this.bookslist[i]);
      }
    }
  }

  takeBook(bookId: number) {
    this.bookslist[bookId].status = "в наличии";
    this.bookslist[bookId].reder = "";
    localStorage.removeItem(bookId.toString());

  }
  ngOnInit() {
  }

}
