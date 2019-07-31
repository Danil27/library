import { Component, OnInit } from '@angular/core';
import { Books } from '../_models/books';
import { Readers } from '../_models/readers';
import readers_json from '../_data/readers.json';
import books_json from '../_data/books.json';

@Component({
  selector: 'app-give-book',
  templateUrl: './give-book.component.html',
  styleUrls: ['./give-book.component.css']
})
export class GiveBookComponent implements OnInit {
  booklist: Books[] = books_json;
  readerlist: Readers[] = readers_json;
  constructor() { }

  ngOnInit() {
  }

  giveBook(bookId: string, readerId: string, returnDate: string) {
    this.booklist[bookId].count++;
    this.booklist[bookId].status = "выдано";
    localStorage.setItem(bookId, JSON.stringify({ "readerName": this.readerlist[readerId].name, "returnDate": returnDate, "count": this.booklist[bookId].count }));
    this.readerlist[readerId].count++;
  }
}
