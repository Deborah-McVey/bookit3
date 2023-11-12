import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: "root"
})
export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();

  private allBooks: Book[] = [
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
    return this.allBooks.slice();
  }
}
