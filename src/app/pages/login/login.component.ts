import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  @Input() usuario: string = "";
  @Input() password: string = "";

  login(loginForm: any) {
    if (loginForm.valid) {
      // this.usuario = loginForm.value.usuario;
      // this.password = loginForm.value.password;
      if(LocalStorageService.getItem(this.usuario, this.password)){
        LocalStorageService.saveSession('session', this.usuario, this.password, 'Home');
      }
      else{
        window.alert('Usuario ou senha incorretos');
      }

    }
    else{
      window.alert('Usuario ou senha incorretos');
    }
  }
}
