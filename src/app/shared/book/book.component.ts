import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book;

  @Output() bookSelected = new EventEmitter<void>();

  onBookSelected() {
    this.bookSelected.emit();
  }

}
