import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: "root"
})
export class BookshelfService {
  private myBooks: Book[] = [
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

  getBooks() {
    return this.myBooks.slice();
  }

  saveBook(book: Book) {
    this.myBooks.push(book)
    this.bookListChanged.emit(this.myBooks.slice())
  }

  removeBook(idx: number) {
    if (idx !== -1) {
      this.myBooks.splice(idx, 1)
      this.bookListChanged.emit(this.myBooks.slice());
    }
  }

  bookSelected = new EventEmitter<Book>();

  bookListChanged = new EventEmitter<Book[]>();
}
