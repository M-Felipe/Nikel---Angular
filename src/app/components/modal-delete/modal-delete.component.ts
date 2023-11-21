import { Component, Input } from '@angular/core';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {
  @Input() senha_sub: string = "";
  constructor(private modalService: NgbModal, LocalStorageService: LocalStorageService, private location: Location) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save() {
    if (LocalStorageService.removeItem(LocalStorageService.getSession(), this.senha_sub)) {
      window.alert('Seu usuario foi apagado!');
      this.location.go(this.location.path());
    }
    else {
      window.alert('Senha incorreta!');
    }
  }

}

