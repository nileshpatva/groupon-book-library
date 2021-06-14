import { Component, VERSION } from '@angular/core';
import { BookService } from './book.service';
import { IBook } from './book/book.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  allbooks: IBook[];
  filtered: IBook[];
  searchTerm: string = '';
  constructor(private bookSvc: BookService) {
    this.allbooks = this.bookSvc.getBooks();
  }

  addBook(book: IBook) {
    this.bookSvc.addBook(book);
  }
  searchBooks(e: any) {
    this.filtered = this.allbooks.filter(b => {
      return Object.values(b)
        .join(' ')
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
    });
  }
}
