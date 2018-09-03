import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AddTransactionComponent } from './add-transaction.component';

@NgModule({
  declarations: [
    AddTransactionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AddTransactionComponent,
  ],
})

export class AddTransactionModule { }
