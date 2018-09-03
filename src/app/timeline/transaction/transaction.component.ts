import { Component, Input } from '@angular/core';
import { Transaction }      from '../../entity/transaction';

/*
* Компонент сокращенной карточки транзакции для вывода в общем списке событий
*/

@Component({
  selector    : 'app-transaction',
  templateUrl : './transaction.component.html',
  styleUrls   : ['./transaction.component.scss'],
})

export class TransactionComponent {

  @Input() transaction: Transaction;

}
