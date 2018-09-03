import { Component, OnInit }           from '@angular/core';
import { NewsService }                 from '../services/news.service';
import { TransactionsService }         from '../services/transactions.service';
import { News }                        from '../entity/news';
import { Transaction }                 from '../entity/transaction';
import { TYPE_NEWS, TYPE_TRANSACTION } from '../constants';

/*
* Компонент вывода и сортировки списка событий
*/

@Component({
  selector    : 'app-timeline',
  templateUrl : './timeline.component.html',
  styleUrls   : ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  public news: News[] = [];
  public transactions: Transaction[] = [];
  public events: (News|Transaction)[] = [];
  public TYPE_NEWS: string = TYPE_NEWS;
  public TYPE_TRANSACTION: string = TYPE_TRANSACTION;
  public sortBy: string = 'date';

  constructor(
    private newsService: NewsService,
    private transactionsService: TransactionsService,
    ) { }

  ngOnInit() {
    this.getEvents();
  }

  // Обновить списбок всех событий
  private getEvents(): void {
    this.getNews();
    this.getTransactions();
  }

  // Обновить новости
  private getNews(): void {
    this.newsService
      .get()
      .subscribe((news: News[]) => {
        this.news = news;
        this.events = this.getSortedEvents([...this.news, ...this.transactions]);
      });
  }

  // Обновить транзакции
  private getTransactions(): void {
    this.transactionsService
      .get()
      .subscribe((transactions: Transaction[]) => {
        this.transactions = transactions;
        this.events = this.getSortedEvents([...this.news, ...this.transactions]);
      });
  }

  // Переключение сортировки списка событий
  public sortEventsBy(sortBy?: string): void {
    if ( sortBy ) {
      this.sortBy = sortBy;
    }

    this.events = this.getSortedEvents(this.events);
  }

  // Сортировать список событий
  private getSortedEvents(events: (News|Transaction)[]): (News|Transaction)[] {
    let result = [];
    switch (this.sortBy) {
      case 'date' :
        result = events.sort(this.compareByDate);
        break;

      case 'type' :
        result = events.sort(this.compareByType);
        break;

      default :
        break;
    }

    return result;
  }

  // Сравнение событий по типу
  private compareByType(a: (News|Transaction), b: (News|Transaction)): number {
    if ( a.type < b.type ) return -1;
    if ( a.type > b.type ) return 1;
    return 0;
  }

  // Сравнение событий по дате
  private compareByDate(a: (News|Transaction), b: (News|Transaction)): number {
    return a.date.getTime() - b.date.getTime();
  }

}
