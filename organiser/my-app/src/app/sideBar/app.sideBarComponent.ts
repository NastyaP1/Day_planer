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
    list: ListToDo = new ListToDo("list2");

constructor(private token: TokenStorageService,
private listService:ListToDoService
) { }

ngOnInit() {
this.currentUser = this.token.getUser();
this.listService.getAll().subscribe(data =>{this.lists = data;});
}

deleteList(){
//this.listService.deleteById(1).subscribe(data =>{this.str = data;});
//this.listService.getAll().subscribe(data =>{this.lists = data;});
}

addList(){
this.listService.addList(this.list).subscribe(data =>{this.str = data;});
}

getByIdList(){
this.listService.getById(100).subscribe(data =>{ this.lists = []; this.lists[0] = data;});
}

reloadPage() {
window.location.reload();
}
    
    logout() {
        this.token.signOut();
        window.location.reload();
    }
}