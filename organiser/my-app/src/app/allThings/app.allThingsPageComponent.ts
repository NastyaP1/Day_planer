import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Thing } from '../domens/thing';
import { TokenStorageService } from '../_services/token-storage.service';
import { ThingService } from '../services/thing.service';

@Component({
    templateUrl: './allThingsPage.html',
    styleUrls: ['./app.allThingsPageComponent.css']
  })

  export class AllThingsPageComponent implements OnInit {
    things: Thing[];
    listId: number;
    thingId: number;
    index: number;
    visibility: boolean = true;
    name;
    description;
    date;
    header;
    // currentUser: any;
  
    constructor(
      private token: TokenStorageService,
      private thingService: ThingService
    ) 
    {
    }
    ngOnInit() {
      console.log(sessionStorage.getItem("things"));
      this.header = sessionStorage.getItem("header");
      this.things = JSON.parse(sessionStorage.getItem("things"));
    //   this.currentUser = this.token.getUser();
    } 
    toggle(i){
      //sessionStorage.setItem("thing", JSON.stringify(this.things[i]));
      
      this.visibility=!this.visibility;
      this.name = this.things[i].name;
      this.description = this.things[i].description;
      this.date = this.things[i].date;
      this.thingId =  this.things[i].id;
      this.listId =  this.things[i].listId;
      this.index = i;
    }
    delete(){
      
      //this.things = JSON.parse(sessionStorage.getItem("things"));
      this.thingService.deleteById(this.thingId, this.listId).subscribe(data =>console.log(data));
      this.things.splice(this.index, 1);
      sessionStorage.setItem("things", JSON.stringify(this.things));
      //this.thingService.getAll().subscribe(data => {
      //this.things = data;
      //sessionStorage.removeItem("things");
      //sessionStorage.setItem("things", JSON.stringify(this.things));
      //});
      
      }
  }
