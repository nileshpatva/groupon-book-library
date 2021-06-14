import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBook } from './book/book.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: IBook[];
  listOfBooks: BehaviorSubject<IBook[]> = new BehaviorSubject([]);
  constructor() {
    this.books = [
      {
        name: 'Eelements of Mechanical Engineering',
        author: 'Some Author',
        count: 5,
        description: 'Long description',
        id: 1
      },
      {
        name: 'Eelements of Electrecal Engineering',
        author: 'Some Author',
        count: 10,
        description: 'Long description',
        id: 2
      }
    ];
  }

  getListOfBooks() {
    return this.listOfBooks.asObservable();
  }

  getBooks() {
    return this.books;
  }

  addBook(book: IBook) {
    this.books.push(book);
    this.listOfBooks.next(this.books);
  }

  removeBook(book: IBook) {
    // to-do
  }
}
