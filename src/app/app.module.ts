import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book-form/form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BookComponent,
    BookFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
