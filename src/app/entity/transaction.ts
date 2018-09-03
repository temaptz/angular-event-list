import { TYPE_TRANSACTION } from '../constants';
import { generateId }       from '../lib';

/*
* Сущность транзанкции
*/

export class Transaction {
  public id : number = generateId();

  public amount      : number;         // Сумма транзакции
  public currency    : string;         // Валюта
  public source      : string;         // От кого транзакция
  public description : string;         // Описание
  public isAdvent    : boolean = true; // Приход или расход

  public date : Date = new Date();         // Дата
  public type : string = TYPE_TRANSACTION; // Тип события

  public deleted : boolean = false; // Удалена
}