import { Component } from '@angular/core';
import { transaction } from 'src/app/models/transaction';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  transaction: any[];
  constructor() {
    let session = LocalStorageService.getSession();
    this.transaction = LocalStorageService.getTransaction(session.usuario);
    this.transaction = this.transaction.sort((a, b) => {
      const dataA = new Date(a.date.year, a.date.month - 1, a.date.day);
      const dataB = new Date(b.date.year, b.date.month - 1, b.date.day);

      return dataB.getTime() - dataA.getTime();
    });
  }

  convertToDate(item: any): String {
    return item.day + '/' + item.month + '/' + item.year;
  }
}
