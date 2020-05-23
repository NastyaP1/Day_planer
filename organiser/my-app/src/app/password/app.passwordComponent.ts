import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { MessageBox, MessageBoxService, ButtonType } from 'message-box-plugin';

@Component({
  templateUrl: './password.html',
    styleUrls: ['./app.passwordComponent.css']
})
export class PasswordChangeComponent implements OnInit {
  form: any = {};
  isSetNewPassFailed = false;
  isLoggedIn = false;
  errorMessage = '';
  
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
    private messageBoxService: MessageBoxService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.isSetNewPassFailed = true;
    }
  }

  onSubmit() {
    this.authService.oldpassword(this.form).subscribe(
      data => {
        console.log(data);
        this.authService.password(this.form).subscribe(
          data => {
            this.isSetNewPassFailed = true;
            let messageBox = MessageBox
            .Create('Хэй)','Твой пароль успешно изменен!')
            this.messageBoxService.present(messageBox);
            window.scroll(0,0);
            console.log(data);
          },
          err => {
            this.isSetNewPassFailed = false;
            this.errorMessage = err.error.message;
          }
        );
      },
      err => {
        this.isSetNewPassFailed = false;
        this.errorMessage = err.error.message;
      }
    );
  }
}