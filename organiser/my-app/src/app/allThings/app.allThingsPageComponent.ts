import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Thing } from '../domens/thing';
import {formatDate} from '@angular/common';
import { TokenStorageService } from '../_services/token-storage.service';
import { ThingService } from '../services/thing.service';
import { ListToDoService } from '../services/listToDo.service';
import { checkServerIdentity } from 'tls';

@Component({
templateUrl: './allThingsPage.html',
styleUrls: ['./app.allThingsPageComponent.css']
})

export class AllThingsPageComponent implements OnInit {
things: Thing[];

thingsToday: Array<Thing> = new Array<Thing>();
thingsThisWeek: Array<Thing> = new Array<Thing>();
thingsLater: Array<Thing> = new Array<Thing>();

listId: number;
thingId: number;
index: number;
indexInArr: number;
visibility: boolean = true;
name;
description;
date;
header;
needToDelete = false;
arrInd;

alias:string;

// currentUser: any;

constructor(
private token: TokenStorageService,
private thingService: ThingService,
private listService: ListToDoService
)
{
}



ngOnInit() {

console.log(sessionStorage.getItem("things"));
this.header = sessionStorage.getItem("header");
this.things = JSON.parse(sessionStorage.getItem("things"));
if(JSON.parse(sessionStorage.getItem("listId"))){
this.needToDelete = true;
}

this.things.forEach(th =>
{
let dateFormat = require('dateformat');
let now = new Date();
if(dateFormat(new Date(th.date),"yyyy-mm-dd") == dateFormat(now, "yyyy-mm-dd")){
console.log("today");
this.thingsToday.push(th);
}
console.log(now.getDate()+6);
if(new Date(th.date).getDate() <= now.getDate()+6)
{
this.thingsThisWeek.push(th);
console.log("this week");
}
if(new Date(th.date).getDate() > now.getDate()+6)
{
this.thingsLater.push(th);
console.log("later");
}
});

}
toggle(i, arrInd){
if(arrInd == 0){
this.visibility=!this.visibility;
this.name = this.thingsToday[i].name;
this.description = this.thingsToday[i].description;
this.date = this.thingsToday[i].date;
this.thingId = this.thingsToday[i].id;
this.listId = this.thingsToday[i].listId;
this.index = this.things.indexOf(this.thingsToday[i]);
}
if(arrInd == 1){
this.visibility=!this.visibility;
this.name = this.thingsThisWeek[i].name;
this.description = this.thingsThisWeek[i].description;
this.date = this.thingsThisWeek[i].date;
this.thingId = this.thingsThisWeek[i].id;
this.listId = this.thingsThisWeek[i].listId;
this.index = this.things.indexOf(this.thingsThisWeek[i]);
}
if(arrInd == 2){
this.visibility=!this.visibility;
this.name = this.thingsLater[i].name;
this.description = this.thingsLater[i].description;
this.date = this.thingsLater[i].date;
this.thingId = this.thingsLater[i].id;
this.listId = this.thingsLater[i].listId;
this.index = this.things.indexOf(this.thingsLater[i]);
}
this.arrInd = arrInd;
this.indexInArr = i;
}

close(){
this.visibility=!this.visibility;
}
delete(){
this.thingService.deleteById(this.thingId, this.listId).subscribe(data =>console.log(data));
this.things.splice(this.index, 1);
if(this.arrInd == 0){
this.thingsToday.splice(this.indexInArr, 1);
}
if(this.arrInd == 1){
this.thingsThisWeek.splice(this.indexInArr, 1);
}
if(this.arrInd == 2){
this.thingsLater.splice(this.indexInArr, 1);
}
sessionStorage.setItem("things", JSON.stringify(this.things));
this.visibility=!this.visibility;
}
deleteList(){
var id = JSON.parse(sessionStorage.getItem("listId"));
this.listService.deleteById(id).subscribe(data => console.log(data));
sessionStorage.removeItem("listId");
this.header = sessionStorage.setItem("header", "Все дела");
window.location.replace("/allThings");
}

changeList(){
sessionStorage.setItem("changeList", JSON.stringify(true));
//window.location.replace("/addList");
}

changeThing(){

sessionStorage.setItem("changeThing", JSON.stringify(true));
if(this.arrInd == 0){
sessionStorage.setItem("thing", JSON.stringify(this.thingsToday[this.indexInArr]));
}
if(this.arrInd == 1){
 
sessionStorage.setItem("thing", JSON.stringify(this.thingsThisWeek[this.indexInArr]));
}
if(this.arrInd == 2){
sessionStorage.setItem("thing", JSON.stringify( this.thingsLater[this.indexInArr]));
}
//window.location.replace("/addList");
}
check: boolean = false;

changeState(thing: Thing){
if(thing.state == "true"){
thing.state = "false";
}
else{
thing.state = "true";
}
this.thingService.changeThing(thing.id,thing).subscribe(data =>console.log(data));
}
}