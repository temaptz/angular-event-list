import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }          from './app.component';
import { AppRoutingModule }      from './app-routing.module';
import { TimelineModule }        from './timeline/timeline.module';
import { AddNewsModule }         from './add-news/add-news.module';
import { AddTransactionModule }  from './add-transaction/add-transaction.module';
import { NewsService }           from './services/news.service';
import { TransactionsService }   from './services/transactions.service';
import { MessagesService }       from './services/messages.service';
import { MessagesModule }        from './messages/messages.module';
import { NewsFullModule }        from './news/news-full.module';
import { TransactionFullModule } from './transaction/transaction-full.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelineModule,
    AddNewsModule,
    AddTransactionModule,
    MessagesModule,
    NewsFullModule,
    TransactionFullModule,
  ],
  providers: [
    NewsService,
    TransactionsService,
    MessagesService,
  ],
  bootstrap: [
    AppComponent,
  ],
  exports: [],
})

export class AppModule { }
