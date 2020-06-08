import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Thing } from '../domens/thing';
import { ThingService } from '../services/thing.service';

@Component({
    templateUrl: './dayThingsPage.html',
    styleUrls: ['./app.dayThingsPageComponent.css']
  })

  export class DayThingsPageComponent implements OnInit {
    things: Thing[];
    listId: number;
    thingId: number;
    indexInArr: number;
    visibility: boolean = true;
    name;
    description;
    date;
    daydate;
  
  
    constructor(
    private thingService: ThingService,
    )
    {
    }
  
    ngOnInit() {
      console.log("hhhh" + sessionStorage.getItem("dayThings"));
      this.things = JSON.parse(sessionStorage.getItem("dayThings"));
      this.daydate =  this.things[0].date;
    }
  
    close(){
      this.visibility=!this.visibility;
    }
  
    toggle(i){
      this.visibility=!this.visibility;
      this.name = this.things[i].name;
      this.description = this.things[i].description;
      this.date = this.things[i].date;
      this.thingId = this.things[i].id;
      this.listId = this.things[i].list.id;
      this.indexInArr = i;
    }
    changeThingFalse(){
      sessionStorage.setItem("changeThing", JSON.stringify(false));
  }
    delete(){
      this.thingService.deleteById(this.thingId, this.listId).subscribe(data =>console.log(data));
      this.things.splice(this.indexInArr, 1);
      sessionStorage.setItem("things", JSON.stringify(this.things));
      this.visibility=!this.visibility;
    }
    changeThing(){
      sessionStorage.setItem("changeThing", JSON.stringify(true));
      sessionStorage.setItem("thing", JSON.stringify(this.things[this.indexInArr]));
      }
      
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