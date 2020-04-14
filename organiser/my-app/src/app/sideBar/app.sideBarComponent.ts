import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from '../_services/token-storage.service';
import { ListToDo } from '../domens/listToDo';
import { ListToDoService } from '../services/listToDo.service';

@Component({
    selector: 'sideBar',
    templateUrl: './sideBar.html',
    styleUrls: ['./app.sideBarComponent.css']
})
export class SideBarComponent implements OnInit{
    currentUser: any;
    lists:ListToDo[];
    str: any;

constructor(private token: TokenStorageService,
private listService:ListToDoService
) { }

ngOnInit() {
this.currentUser = this.token.getUser();
this.listService.getAll().subscribe(data =>{this.lists = data;});
}

reloadPage() {
window.location.reload();
}
    
    logout() {
        this.token.signOut();
        window.location.reload();
    }
}