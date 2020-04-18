import { Component, OnInit } from "@angular/core";
import { User } from '../domens/user';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { ListToDo } from '../domens/listToDo';
import { ListToDoService } from '../services/listToDo.service';
import { ThingService } from '../services/thing.service';

@Component({
templateUrl: './addListPage.html',
styleUrls: ['./app.addListPageComponent.css']
})

export class AddListPageComponent implements OnInit{
lists:ListToDo[];
constructor(
private listService:ListToDoService,
) { }

ngOnInit() {
this.listService.getAll().subscribe(data =>{this.lists = data; console.log("liiiists" + JSON.stringify(data))});
}
createList(form: NgForm) {
console.log("username" + form.controls['name'].value);
var list = new ListToDo(form.controls['name'].value);
this.listService.addList(list).subscribe(data =>console.log(data));;
}
}