import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IBook } from '../book/book.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class BookFormComponent {
  formGrp: FormGroup;

  @Output() book: EventEmitter<IBook> = new EventEmitter();

  constructor() {
    this.formGrp = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      author: new FormControl(''),
      count: new FormControl('')
    });
  }

  addBook() {
    console.log('addBook', this.formGrp, this.book);
    this.book.emit(this.formGrp.value);
  }
}
