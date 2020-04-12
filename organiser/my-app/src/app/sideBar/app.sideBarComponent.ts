import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'sideBar',
    templateUrl: './sideBar.html',
    styleUrls: ['./app.sideBarComponent.css']
})
export class SideBarComponent implements OnInit{
    constructor(){}
    ngOnInit(){}
<<<<<<< HEAD
    
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
=======
    public logOut(){
        sessionStorage.removeItem("authHeader");
        console.log("You have been successfully log out");
      }
    
>>>>>>> bcf8ed0097801a464953ed43eeff67d5fa91eae9
}