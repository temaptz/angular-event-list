import { NgModule }    from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddNewsComponent } from './add-news.component';

@NgModule({
  declarations: [
    AddNewsComponent,
  ],
  imports: [
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AddNewsComponent,
  ],
})

export class AddNewsModule { }
