import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineComponent }        from './timeline/timeline.component';
import { AddNewsComponent }         from './add-news/add-news.component';
import { AddTransactionComponent }  from './add-transaction/add-transaction.component';
import { NewsFullComponent }        from './news/news-full.component';
import { TransactionFullComponent } from './transaction/transaction-full.component';

const routes: Routes = [
  { path: '', redirectTo: '/timeline', pathMatch: 'full' },
  { path: 'timeline', component: TimelineComponent },
  { path: 'add-news', component: AddNewsComponent },
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'news/:id', component: NewsFullComponent },
  { path: 'transaction/:id', component: TransactionFullComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}