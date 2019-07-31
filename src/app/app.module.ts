import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { RatigBooksComponent } from './ratig-books/ratig-books.component';
import { ReadersComponent } from './readers/readers.component';
import { RatingReadersComponent } from './rating-readers/rating-readers.component';
import { GiveBookComponent } from './give-book/give-book.component';
import { TakeBookComponent } from './take-book/take-book.component';
import { BookReviewComponent } from './book-review/book-review.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    RatigBooksComponent,
    ReadersComponent,
    RatingReadersComponent,
    GiveBookComponent,
    TakeBookComponent,
    BookReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
