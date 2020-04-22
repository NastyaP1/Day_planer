import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
selector: 'app-login',
templateUrl: './logInPage.html',
styleUrls: ['./app.loginComponent.css']
})
export class LoginPageComponent implements OnInit {
form: any = {};
isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
roles: string[] = [];
needSideBar = false;

constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

ngOnInit() {
sessionStorage.setItem("false", JSON.stringify(this.needSideBar));
if (this.tokenStorage.getToken()) {
this.isLoggedIn = true;
this.roles = this.tokenStorage.getUser().roles;
}
}

onSubmit() {
this.authService.login(this.form).subscribe(
data => {
console.log(data);
this.tokenStorage.saveToken(data.accessToken);
this.tokenStorage.saveUser(data);
this.isLoginFailed = false;
this.isLoggedIn = true;
this.roles = this.tokenStorage.getUser().roles;
this.reloadPage();
},
err => {
this.errorMessage = err.error.message;
this.isLoginFailed = true;
}
);
}

reloadPage() {
//window.location.reload();
window.location.replace("http://localhost:4200/profile");

}
}