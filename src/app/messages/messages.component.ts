import { Component }       from '@angular/core';
import { MessagesService } from '../services/messages.service';

/*
* Компонент вывода всплывающих сообщений
*/

@Component({
  selector    : 'app-messages',
  templateUrl : './messages.component.html',
  styleUrls   : ['./messages.component.scss'],
})
export class MessagesComponent {

  constructor (
    public messagesService: MessagesService,
  ) { }

}
