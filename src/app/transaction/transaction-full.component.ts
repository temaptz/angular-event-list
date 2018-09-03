import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Location }          from '@angular/common';

import { Transaction }         from '../entity/transaction';
import { TransactionsService } from '../services/transactions.service';
import { MessagesService }     from '../services/messages.service';
import { MESSAGE_SUCCESS }     from '../constants';

/*
* Компонент расширенной карточки транзакции для вывода отдельным роутом
*/

@Component({
  selector    : 'app-transaction-full',
  templateUrl : './transaction-full.component.html',
  styleUrls   : ['./transaction-full.component.scss'],
})

export class TransactionFullComponent implements OnInit {

  public transaction: Transaction = new Transaction();

  constructor (
    private route: ActivatedRoute,
    private location: Location,
    private transactionsService: TransactionsService,
    private messagesService: MessagesService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.transactionsService
      .getById(id)
      .subscribe((transaction: Transaction) => {
        this.transaction = transaction;
      });
  }

  // Удаление транзакции
  public removeTransaction(): void {
    this.transactionsService
      .remove(this.transaction.id)
      .subscribe(() => {
        this.messagesService.create('Транзакция удалена', MESSAGE_SUCCESS);
        this.goBack();
      });
  }

  // Назад по маршруту
  public goBack(): void {
    this.location.back();
  }

}
