import { Component, Input } from '@angular/core';
import { News }             from '../../entity/news';

/*
* Компонент сокращенной карточки новости для вывода в общем списке событий
*/

@Component({
  selector    : 'app-news',
  templateUrl : './news.component.html',
  styleUrls   : ['./news.component.scss'],
})
export class NewsComponent {

  @Input() news: News;

}
