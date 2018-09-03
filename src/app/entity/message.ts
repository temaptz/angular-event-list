import { MESSAGE_SUCCESS } from '../constants';
import { generateId }      from "../lib";

/*
* Сущность сообщения
*/

export class Message {

  constructor(
    text: string,
    type: string = MESSAGE_SUCCESS,
  ) {
    this.text = text;
    this.type = type;
  }

  public id      : number = generateId();
  public text    : string = '';              // Текст сообщения
  public type    : string = MESSAGE_SUCCESS; // Тип сообщения
  public visible : boolean = true            // Видно ли сообщение
}