import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';

import { TimelineComponent }    from './timeline.component';
import { NewsComponent }        from './news/news.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BoolToStrPipeModule }  from '../pipe/bool-to-str-pipe.module';


@NgModule({
  declarations: [
    TimelineComponent,
    NewsComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    BoolToStrPipeModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [
    TimelineComponent,
  ],
})
export class TimelineModule { }
