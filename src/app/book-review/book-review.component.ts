import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../_models/books';
import { Readers } from '../_models/readers';
import readers_json from '../_data/readers.json';
import books_json from '../_data/books.json';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {

  bookId: number;
  books: Books[] = books_json;
  readers: Readers[] = readers_json;
  comments: any;

  constructor(private activateRoute: ActivatedRoute) {
    this.bookId = activateRoute.snapshot.params['bookId'];
    if (localStorage.getItem("comments") != null) {
      this.comments = JSON.parse(localStorage.getItem("comments"));
    }
  }

  ngOnInit() {
  }

  addReview(readerName: string, rating: number, comment: string) {
      //т.к. версия тестовая доступнка возможность оствлять только 1 комментарий
      localStorage.setItem("comments", JSON.stringify([{ "readerName": readerName, "rating": rating, "comment": comment }]));
  }
}
