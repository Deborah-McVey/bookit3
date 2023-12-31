import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  book: Book;
  idx: number;

  constructor(
    private bookshelfService: BookshelfService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.book = this.bookshelfService.getBook(this.idx);
    });
  }

  getBook(idx: number) {
    return this.myBooks.slice()[idx]
  }
}
