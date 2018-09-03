import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { News }            from '../entity/news';
import { NewsService }     from '../services/news.service';
import { MessagesService } from '../services/messages.service';
import { MESSAGE_SUCCESS } from '../constants';

/*
* Компонент добавления новости
*/

@Component({
  selector    : 'app-add-news',
  templateUrl : './add-news.component.html',
  styleUrls   : ['./add-news.component.scss'],
})

export class AddNewsComponent {

  public news: News = new News();

  constructor (
    private newsServcie: NewsService,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  // Сохранение новости
  public saveNews(): void {
    this.news.date = new Date();

    this.newsServcie
      .create(this.news)
      .subscribe(() => {
        this.news = new News();
        this.messagesService.create('Новость добавлена', MESSAGE_SUCCESS);
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
