import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { Transaction }                 from '../entity/transaction';
import { TransactionsService }         from '../services/transactions.service';
import { MessagesService }             from '../services/messages.service';
import { CURRENCIES, MESSAGE_SUCCESS } from '../constants';

/*
* Компонент добавления новой транзанкции
*/

@Component({
  selector    : 'app-add-transaction',
  templateUrl : './add-transaction.component.html',
  styleUrls   : ['./add-transaction.component.scss'],
})

export class AddTransactionComponent {

  public transaction: Transaction = new Transaction();
  public CURRENCIES: string[] = CURRENCIES;

  constructor(
    private transactionService: TransactionsService,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  // Сохранение транзакции
  public saveTransaction(): void {
    this.transaction.date = new Date();
    this.transactionService
      .create(this.transaction)
      .subscribe(() => {
        this.transaction = new Transaction();
        this.messagesService.create('Транзакция добавлена', MESSAGE_SUCCESS);
        setTimeout(() => {
          this.goHome();
        }, 500);
      });
  }

  // Назад по маршруту
  public goHome(): void {
    this.router.navigate(['/']);
  }

}
