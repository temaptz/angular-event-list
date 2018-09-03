import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { NewsFullComponent } from './news-full.component';

@NgModule({
  declarations: [
    NewsFullComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    NewsFullComponent,
  ],
})
export class NewsFullModule { }
