import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BookComponent } from './shared/book/book.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookEditComponent } from './bookshelf/book-edit/book-edit.component';
import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    LibraryComponent,
    BookListComponent,
    BookDetailsComponent,
    BookResultsComponent,
    BookSearchComponent,
    NavigationComponent,
    BookComponent,
    BookshelfHomeComponent,
    BookEditComponent,
    BookshelfEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
