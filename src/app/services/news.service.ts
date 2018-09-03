import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';

import { News } from '../entity/news';
import { NEWS } from '../mock-news';

@Injectable()
export class NewsService {

  private news: News[] = NEWS;

  constructor() { }

  // Получение списка новостей
  public get(): Observable<News[]> {
    return of(this.news);
  }

  // Получение одной новости
  public getById(id: number): Observable<News> {
    return of(this.news.find((news: News) => {
      return (news.id === id);
    }));
  }

  // Создание новости
  public create(news: News): Observable<News> {
    this.news.push(news);
    return of(news);
  }

  // Отметить новость как прочитанную
  public markAsRead(id: number): Observable<News> {
    let markedNews: News;
    this.news.map((news: News) => {
      if ( news.id === id ) {
        markedNews = news;
        news.read = true;
      }
    });

    return of(markedNews);
  }

}
