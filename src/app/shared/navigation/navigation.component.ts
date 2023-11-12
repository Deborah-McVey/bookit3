import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {

  collapsed: boolean = true;
  show: boolean = false;
  currentPage: any;

  constructor() {}

  ngOnInit(): void {}

  onSelectPage(page: string) {
    this.currentPage.emit(page);
  }

}
