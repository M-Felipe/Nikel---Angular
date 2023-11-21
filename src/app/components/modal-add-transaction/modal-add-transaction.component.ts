import { Component, Input } from '@angular/core';
import { transaction } from 'src/app/models/transaction';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-transaction',
  templateUrl: './modal-add-transaction.component.html',
  styleUrls: ['./modal-add-transaction.component.css']
})
export class ModalAddTransactionComponent {
  @Input() descValue: number = 0;
  @Input() descTransaction: string = "";
  @Input() dateOfTransaction: Date = new Date();
  @Input() Tipo: string = '1';

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save() {
    let transaction: transaction = {
      description: this.descTransaction,
      value: this.descValue,
      date: this.dateOfTransaction,
      type: this.Tipo
    }
    let session = LocalStorageService.getSession();
    let data = LocalStorageService.getItem(session.usuario, session.password);
    data.transactions.unshift(transaction);
    LocalStorageService.setItem(session.usuario, data);
    location.reload();
  }
}
