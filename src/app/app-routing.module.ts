import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ReadersComponent } from './readers/readers.component';
import { RatigBooksComponent } from './ratig-books/ratig-books.component';
import { RatingReadersComponent } from './rating-readers/rating-readers.component';
import { GiveBookComponent } from '../app/give-book/give-book.component';
import { TakeBookComponent } from '../app/take-book/take-book.component';
import { BookReviewComponent } from '../app/book-review/book-review.component';

const routes: Routes = [
  { path: 'booklist', component: BookListComponent },
  { path: 'readers', component: ReadersComponent },
  { path: 'ratingBooks', component: RatigBooksComponent },
  { path: 'ratingReaders', component: RatingReadersComponent },
  { path: 'giveBook', component: GiveBookComponent },
  { path: 'takeBook', component: TakeBookComponent },
  { path: 'bookReview/:bookId', component: BookReviewComponent },
  { path: '**', component: BookListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
