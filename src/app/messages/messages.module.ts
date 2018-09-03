import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    MessagesComponent,
  ],
  exports: [
    MessagesComponent,
  ],
})

export class MessagesModule { }
