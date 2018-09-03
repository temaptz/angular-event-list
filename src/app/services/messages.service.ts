import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';

import { MESSAGE_SUCCESS } from '../constants';
import { Message }         from '../entity/message';

@Injectable()
export class MessagesService {

  public messages: Message[] = [];
  private messagesTtl: number = 5*1000;

  constructor() { }

  // Добавление сообщения
  public create(text: string, type: string = MESSAGE_SUCCESS): Observable<Message> {
    const message = new Message(text, type);
    this.messages.push(message);
    setTimeout(() => {
      this.remove(message.id);
    }, this.messagesTtl);


    return of(message);
  }

  // Удаление сообщения
  private remove(id: number): Observable<Message> {
    let removedMessage: Message;
    this.messages.map((message: Message) => {
      if ( message.id === id ) {
        removedMessage = message;
        message.visible = false;
      }
    });

    return of(removedMessage);
  }

}
