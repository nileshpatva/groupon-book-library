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
        author: 'V. K. MANGLIK',
        count: 5,
        description: `This book provides a comprehensive and wide-ranging introduction to the fundamental principles of mechanical engineering in a distinct and clear manner.`,
        id: 1
      },
      {
        name: 'Eelements of Electrical Engineering',
        author: 'U.A.Bakshi',
        count: 10,
        description: `D. C. CircuitConcept of EMF, P.D. and current, Resistance, Effect of temperature of resistance, resistance-temperature co-efficient, Classification of electric network`,
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
