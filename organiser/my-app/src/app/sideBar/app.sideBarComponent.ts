import { Component, OnInit, Injectable } from "@angular/core";
import { TokenStorageService } from '../_services/token-storage.service';
import { ListToDo } from '../domens/listToDo';
import { ListToDoService } from '../services/listToDo.service';
import { Thing } from '../domens/thing';
import { ThingService } from '../services/thing.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { DataService } from '../services/data.service';

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
isLoggedIn$: Observable<boolean>;
public avatarShown$ = this.data.linkName$.asObservable();
avatar;
private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

thingsToday: Array<Thing> = new Array<Thing>();
thingsThisWeek: Array<Thing> = new Array<Thing>();
thingsLater: Array<Thing> = new Array<Thing>();

constructor(private token: TokenStorageService,
private authService: AuthService,
private listService:ListToDoService,
private thingService: ThingService,
private data: DataService
) { }

ngOnInit() {
if (this.token.getToken()) {
this.loggedIn.next(true);
}
this.currentUser = this.token.getUser();
this.isLoggedIn$ = this.loggedIn.asObservable();
this.avatarShown$ = this.data.linkName$.asObservable();
//this.avatarShown$ = this.data.linkName$.asObservable();
//this.data.linkName$.next(sessionStorage.getItem("avatar"));
//console.log(this.avatarShown$);
this.avatar = sessionStorage.getItem("avatar");
this.listService.getAll().subscribe(data =>{this.lists = data; console.log("liiiists" + JSON.stringify(data))});
}

sendAllThings(){
this.thingService.getAll().subscribe(data =>
{
sessionStorage.setItem("things", JSON.stringify(data))
sessionStorage.setItem("header", "Все дела");
sessionStorage.removeItem("listId");
window.location.replace("http://localhost:4200/allThings");
}
);
}

logout() {
this.token.signOut();
window.location.replace("http://localhost:4200/login");
}

sendThings(id, i){
console.log(id);
this.thingService.getAllByListId(id).subscribe(data =>
{console.log(data);
sessionStorage.setItem("things", JSON.stringify(data));
sessionStorage.setItem("header", this.lists[i].name);
sessionStorage.setItem("listId", JSON.stringify(this.lists[i].id));
sessionStorage.setItem("list", JSON.stringify(this.lists[i].name));
//window.location.replace("http://localhost:4200/allThings");
}
);
}
changeList(){
sessionStorage.setItem("changeList", JSON.stringify(false));
}
changeThing(){
sessionStorage.setItem("changeThing", JSON.stringify(false));
}

}