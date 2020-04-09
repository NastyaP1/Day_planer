import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'sideBar',
    templateUrl: './sideBar.html',
    styleUrls: ['./app.sideBarComponent.css']
})
export class SideBarComponent implements OnInit{
    constructor(){}
    ngOnInit(){}
    public logOut(){
        sessionStorage.removeItem("authHeader");
        console.log("You have been successfully log out");
      }
    
}