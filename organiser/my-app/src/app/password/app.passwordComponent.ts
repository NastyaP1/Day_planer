import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  templateUrl: './password.html',
    styleUrls: ['./app.passwordComponent.css']
})
export class PasswordChangeComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    this.authService.password(this.form).subscribe(
      data => {
        this.tokenStorage.signOut();
        window.location.replace("http://localhost:4200/login");
      },
      err => {
      }
    );
  }

  reloadPage() {
    //window.location.reload();
    window.location.replace("http://localhost:4200/profile");
    
  }
}