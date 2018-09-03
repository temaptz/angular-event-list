import { News }      from './entity/news';
import { TYPE_NEWS } from './constants';

export const NEWS: News[] = [
  {
    id      : 0,
    title   : 'Отличная новость!',
    content : 'Сегодня произошло просто удивительное событие.',
    date    : new Date(2018, 3, 28, 11, 0, 0),
    type    : TYPE_NEWS,
    read    : false,
  },
  {
    id      : 1,
    title   : 'Праздничная новость',
    content : 'Приглашаем всех принять участие в праздничном розыгрыше.',
    date    : new Date(2018, 3, 28, 12, 0, 0),
    type    : TYPE_NEWS,
    read    : true,
  },
  {
    id      : 2,
    title   : 'Удивительное событие',
    content : 'Невероятное событие о котором должны узнать все!',
    date    : new Date(2018, 3, 28, 17, 0, 0),
    type    : TYPE_NEWS,
    read    : false,
  },
];