import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nikel';

  VerificarLogger(): boolean {
    if (LocalStorageService.getSession() != null) {
      return false;
    }
    return true;
  }
  VerficarPage(page: string): boolean {
    if (LocalStorageService.getSession().page != null && LocalStorageService.getSession().page == page) {
      return true;
    }
    return false;
  }
}
