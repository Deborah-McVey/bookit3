import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

@Output() currentSelectedBook = new EventEmitter<Book>();

  myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'On the Road',
      'Jack Kerouac',
      'Literary Fiction',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Tom Sawyer',
      'Mark Twain',
      'Adventure',
      'https://source.unsplash.com/50x50/?mystery,book'
    )
  ];

  handleBookSelected(book: Book) {
    this.currentSelectedBook.emit(book);
  }
}
