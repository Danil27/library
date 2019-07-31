import { Component, OnInit } from '@angular/core';
import { Books } from '../_models/books';
import books_json from '../_data/books.json';

@Component({
  selector: 'app-ratig-books',
  templateUrl: './ratig-books.component.html',
  styleUrls: ['./ratig-books.component.css']
})
export class RatigBooksComponent implements OnInit {

  //создание независимой копии объекта
  bookList: Books[] = JSON.parse(JSON.stringify(books_json));
  topBooks: Books[] = [];

  constructor() {
    var max: number;

    //добавление данных из localestorage в массив книг
    for (var i = 0; i < this.bookList.length; i++) {
      if (localStorage.getItem(i.toString()) != null) {
        this.bookList[i].reder = JSON.parse(localStorage.getItem(i.toString())).readerName;
        this.bookList[i].returnDate = JSON.parse(localStorage.getItem(i.toString())).returnDate;
        this.bookList[i].count = JSON.parse(localStorage.getItem(i.toString())).count;
        this.bookList[i].status = "выдано";
      } else {
        this.bookList[i].reder = "";
        this.bookList[i].status = "в наличии";
      }
    }

    //сортировка по рейтингу 5 самых читаемых книг
    for (var i = 0; i < 5; i++) {
      max = 0;
      var maxindex = 0;
      for (var j = 0; j < this.bookList.length; j++) {
        if (max < this.bookList[j].count) {
          max = this.bookList[j].count;
          maxindex = j;
        }
      }
      this.topBooks.push(this.bookList[maxindex]);
      this.bookList.splice(maxindex, 1);
    }


  }

  ngOnInit() { }

}
