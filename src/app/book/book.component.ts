import { Component, Input } from '@angular/core';

export interface IBook {
  name: string;
  description: string;
  count: number;
  author: string;
  id: number;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: IBook;
}
