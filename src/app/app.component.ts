import { Component, OnInit } from '@angular/core';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name :number;
  Books: Book[];

  constructor() {
    console.log("test test");

  }

  ngOnInit() {
    console.log("test test init");
    this.Books = [{
      Code: 'B001',
      Name: 'Loved ‘Sacred Games’? Binge on 6 other TV series adapted from books',
      Author: 'Some Author',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/511OlWRkwfL._SX376_BO1,204,203,200_.jpg'
    },
    {
      Code: 'B001',
      Name: 'Loved ‘Sacred Games’? Binge on 6 other TV series adapted from books',
      Author: 'Some Author',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/511OlWRkwfL._SX376_BO1,204,203,200_.jpg'
    }]

  }

  onBookselected(data: Book) {
    console.log(data);
  }
  clickName(){
    console.log(this.name);
  }

}
