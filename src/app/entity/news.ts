import { TYPE_NEWS }  from '../constants';
import { generateId } from '../lib';

/*
* Сущность новости
*/

export class News {
  public id : number = generateId();

  public title   : string; // Заголовок новости
  public content : string; // Содержание новости

  public date : Date = new Date();  // Дата
  public type : string = TYPE_NEWS; // Тип события

  public read : boolean = false; // Прочитано
}