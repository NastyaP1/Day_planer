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
    }
    delete(thingId, i){
      console.log(thingId + ' ' + i)
      console.log(thingId + ' ' + this.things[i].listId);
      
      //this.things = JSON.parse(sessionStorage.getItem("things"));
      this.thingService.deleteById(thingId, this.things[i].listId).subscribe(data =>console.log(data));
      this.things.splice(i, 1);
      sessionStorage.setItem("things", JSON.stringify(this.things));
      //this.thingService.getAll().subscribe(data => {
      //this.things = data;
      //sessionStorage.removeItem("things");
      //sessionStorage.setItem("things", JSON.stringify(this.things));
      //});
      
      }
  }
