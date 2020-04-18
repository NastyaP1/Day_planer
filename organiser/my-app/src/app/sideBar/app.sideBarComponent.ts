import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from '../_services/token-storage.service';
import { ListToDo } from '../domens/listToDo';
import { ListToDoService } from '../services/listToDo.service';
import { Thing } from '../domens/thing';
import { ThingService } from '../services/thing.service';

@Component({
selector: 'sideBar',
templateUrl: './sideBar.html',
styleUrls: ['./app.sideBarComponent.css']
})
export class SideBarComponent implements OnInit{
currentUser: any;
lists:ListToDo[];
things: Thing[];
str: any;

constructor(private token: TokenStorageService,
private listService:ListToDoService,
private thingService: ThingService
) { }

ngOnInit() {
this.currentUser = this.token.getUser();
this.listService.getAll().subscribe(data =>{this.lists = data; console.log("liiiists" + JSON.stringify(data))});
}

sendAllThings(){
this.thingService.getAll().subscribe(data =>
{
sessionStorage.setItem("things", JSON.stringify(data))
window.location.replace("http://localhost:4200/allThings");
}
);
}

logout() {
this.token.signOut();
window.location.replace("http://localhost:4200/login");
}

sendThings(id){
console.log(id);
this.thingService.getAllByListId(id).subscribe(data =>
{console.log(data);
sessionStorage.setItem("things", JSON.stringify(data));
window.location.replace("http://localhost:4200/allThings");
}

);
}
}
