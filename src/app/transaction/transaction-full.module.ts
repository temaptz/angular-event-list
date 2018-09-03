import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { TransactionFullComponent } from './transaction-full.component';
import { BoolToStrPipeModule }      from '../pipe/bool-to-str-pipe.module';

@NgModule({
  declarations: [
    TransactionFullComponent,
  ],
  imports: [
    BrowserModule,
    BoolToStrPipeModule,
  ],
  providers: [],
  bootstrap: [
    TransactionFullComponent,
  ],
})
export class TransactionFullModule { }
