import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
    selector: 'own-header',
    templateUrl: './header.html',
    styleUrls: ['./app.headerComponent.css']
})
export class HeaderComponent implements OnInit{
    isLoggedIn = false;
    username: string;
  
    constructor(private tokenStorageService: TokenStorageService) { }
  
    ngOnInit() {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
  
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.username = user.username;
      }
    }
  
    logout() {
      this.tokenStorageService.signOut();
      window.location.replace("http://localhost:4200/login");
  }  
}