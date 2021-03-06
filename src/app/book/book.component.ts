import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() selected: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {

    //debugger;
  }

  ngOnInit() {
  }
  bookClicked(data) {
    console.log(data);
    this.selected.emit(this.book);
  }

}
