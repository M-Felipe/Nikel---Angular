import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-subscribe.component.html',
})
export class NgbdModalBasic {
  closeResult = '';

  @Input() login_sub: string = "";
  @Input() senha_sub: string = "";

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save() {
    if (LocalStorageService.FuncaoparaverificarseJaExite(this.login_sub)) {
      LocalStorageService.setItem(this.login_sub, { password: this.senha_sub, transactions: [], login: this.login_sub });
      window.alert('Seu usuario foi salvo!');
    }
    else {
      window.alert('Esse usuario ja existe!');
    }
  }

}