import { Transaction }      from './entity/transaction';
import { TYPE_TRANSACTION } from './constants';

export const TRANSACTIONS: Transaction[] = [
  {
    id          : 0,
    amount      : 1000,
    currency    : 'RUB',
    source      : 'Иванов Иван',
    description : 'Перевод',
    isAdvent    : true,
    date        : new Date(2018, 3, 28, 9, 0, 0),
    type        : TYPE_TRANSACTION,
    deleted     : false,
  },
  {
    id          : 1,
    amount      : 5000,
    currency    : 'RUB',
    source      : 'Сергей Петров',
    description : 'Зарплата',
    isAdvent    : true,
    date        : new Date(2018, 3, 28, 11, 20, 0),
    type        : TYPE_TRANSACTION,
    deleted     : false,
  },
  {
    id          : 2,
    amount      : 10000,
    currency    : 'RUB',
    source      : 'Ирина Иванова',
    description : 'Налоги',
    isAdvent    : false,
    date        : new Date(2018, 3, 28, 12, 30, 0),
    type        : TYPE_TRANSACTION,
    deleted     : false,
  },
];