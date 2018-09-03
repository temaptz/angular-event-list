import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';

import { Transaction }  from '../entity/transaction';
import { TRANSACTIONS } from '../mock-transactions';

@Injectable()
export class TransactionsService {

  private transactions: Transaction[] = TRANSACTIONS;

  constructor() { }

  // Получение списка транзакций
  public get(): Observable<Transaction[]> {
    return of(this.transactions);
  }

  // Получение одной транзакции
  public getById(id: number): Observable<Transaction> {
    return of(this.transactions.find((transaction: Transaction) => {
      return (transaction.id === id);
    }));
  }

  // Создание транзакции
  public create(transaction: Transaction): Observable<Transaction> {
    this.transactions.push(transaction);
    return of(transaction);
  }

  // Удаление транзакции
  public remove(id: number): Observable<Transaction> {
    let removedTransaction: Transaction;
    this.transactions.map((transaction: Transaction) => {
      if ( transaction.id === id ) {
        removedTransaction = transaction;
        transaction.deleted = true;
      }
    });

    return of(removedTransaction);
  }

}
