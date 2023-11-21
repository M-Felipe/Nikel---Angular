import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private location: Location) { }
  VerificarLogger(): boolean {
    if (LocalStorageService.getSession() == null) {
      return false;
    }
    return true;
  }

  OutSession() {
    LocalStorageService.clearSession();
    this.location.go(this.location.path());
  }

  ChangePage(page: string) {
    let data = LocalStorageService.getSession();
    data.page = page;
    LocalStorageService.saveSession('session', data.usuario, data.password, data.page);
    location.reload();
  }
}

