import { Component } from '@angular/core';
import { transaction } from 'src/app/models/transaction';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ammout: number = 0.00;
  transaction: any[];
  constructor() {
    let session = LocalStorageService.getSession();
    this.transaction = LocalStorageService.getTransaction(session.usuario);
    this.transaction = this.transaction.sort((a, b) => {
      const dataA = new Date(a.date.year, a.date.month - 1, a.date.day);
      const dataB = new Date(b.date.year, b.date.month - 1, b.date.day);

      return dataB.getTime() - dataA.getTime();
    });
    this.transaction.forEach((element) => {
      if (element.type == '1') {
        this.ammout += element.value;
      } else {
        this.ammout -= element.value;
      }
    });
  }

  convertToDate(item: any): String {
    return item.day + '/' + item.month + '/' + item.year;
  }

  getTransactionsOfTypeOne(type: string): any[] {
    // Filtra apenas os itens do tipo '1' e limita para os primeiros 5
    return this.transaction.filter(item => item.type === type).slice(0, 5);
  }

  ChangePage(page: string) {
    let data = LocalStorageService.getSession();
    data.page = page;
    LocalStorageService.saveSession('session', data.usuario, data.password, data.page);
    location.reload();
  }
}
