import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookit3';

  pageDisplayed = "bookshelf"

  onNavigatePage(page: string) {
    this.pageDisplayed = page;
  }
}
