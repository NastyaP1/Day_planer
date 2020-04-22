import { Component, OnInit } from "@angular/core";
import { User } from '../domens/user';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { ListToDoService } from '../services/listToDo.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ThingService } from '../services/thing.service';
import { ListToDo } from '../domens/listToDo';
import { Thing } from '../domens/thing';

@Component({
templateUrl: './addThingPage.html',
styleUrls: ['./app.addThingPageComponent.css']
})
export class AddThingPageComponent implements OnInit{
lists:ListToDo[];
thing: Thing;
changeThingBool: boolean = false;

constructor(
private listService:ListToDoService,
private thingService: ThingService
) { }

ngOnInit() {
this.listService.getAll().subscribe(data =>{this.lists = data; console.log("liiiists" + JSON.stringify(data))});
this.thing = JSON.parse(sessionStorage.getItem("thing"));
this.changeThingBool = JSON.parse(sessionStorage.getItem("changeThing"));
console.log(this.thing);
}

createThing(form: NgForm) {
if(form.controls['date'].value.date.month < 10)
{
var month = '0' + form.controls['date'].value.date.month;
}
else {
month = form.controls['date'].value.date.month;
}

if(form.controls['date'].value.date.day < 10)
{
var day = '0' + form.controls['date'].value.date.day;
}
else {
day = form.controls['date'].value.date.day;
}
var date = form.controls['date'].value.date.year + '-' + month + '-' + day;
var thing = new Thing(form.controls['name'].value, form.controls['description'].value, date, 'notdone');
// this.thingService.addthing(thing,form.controls['listname'].value).subscribe(data =>console.log(data));;
this.thingService.addthing(thing,form.controls['listname'].value).subscribe(
data =>this.thingService.getAll().subscribe(data =>
{
sessionStorage.setItem("things", JSON.stringify(data))
window.location.replace("http://localhost:4200/allThings");
})
)
}

changeThingF(form: NgForm){
if(form.controls['date'].value.date.month < 10)
{
var month = '0' + form.controls['date'].value.date.month;
}
else {
month = form.controls['date'].value.date.month;
}

if(form.controls['date'].value.date.day < 10)
{
var day = '0' + form.controls['date'].value.date.day;
}
else {
day = form.controls['date'].value.date.day;
}
var date = form.controls['date'].value.date.year + '-' + month + '-' + day;
var thing = new Thing(form.controls['name'].value, form.controls['description'].value, date, "false");
this.thingService.changeThing(this.thing.id,thing).subscribe(data =>console.log(data));
window.location.replace("http://localhost:4200/allThings");
}

}
