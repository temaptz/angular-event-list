import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Location }          from '@angular/common';

import { News }            from '../entity/news';
import { NewsService }     from '../services/news.service';
import { MessagesService } from '../services/messages.service';
import { MESSAGE_SUCCESS } from '../constants';

/*
* Компонент расширенной карточки новости для вывода отдельным роутом
*/

@Component({
  selector    : 'app-news-full',
  templateUrl : './news-full.component.html',
  styleUrls   : ['./news-full.component.scss'],
})

export class NewsFullComponent implements OnInit {

  public news: News;

  constructor (
    private route: ActivatedRoute,
    private location: Location,
    private newsService: NewsService,
    private messagesService: MessagesService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.newsService
      .getById(id)
      .subscribe((news: News) => {
        this.news = news;
      });
  }

  // Отметить новость как прочитанную
  public markAsRead(): void {
    this.newsService
      .markAsRead(this.news.id)
      .subscribe(() => {
        this.messagesService.create('Отмечено как прочитанное', MESSAGE_SUCCESS);
      });
  }

  // Назад по маршруту
  public goBack(): void {
    this.location.back();
  }

}
