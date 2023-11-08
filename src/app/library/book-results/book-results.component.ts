import { Component } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent {
  allBooks: Book[] = [
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
}
