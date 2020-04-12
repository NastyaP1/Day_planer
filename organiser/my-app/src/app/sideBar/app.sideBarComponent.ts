import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'sideBar',
    templateUrl: './sideBar.html',
    styleUrls: ['./app.sideBarComponent.css']
})
export class SideBarComponent implements OnInit{
    constructor(){}
    ngOnInit(){}
    
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
}