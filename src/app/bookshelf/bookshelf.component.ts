import { Component } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent {

  selectedBook: Book;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.bookshelfService.bookSelected.subscribe((book: Book) => {
      this.selectedBook = book;
    });
  }
}
