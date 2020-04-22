import { Component, OnInit } from "@angular/core";
import { User } from '../domens/user';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { Event } from '../domens/event';
import { EventService } from '../services/event.service';

@Component({
templateUrl: './addEventPage.html',
styleUrls: ['./app.addEventPageComponent.css']
})
export class AddEventPageComponent implements OnInit{
events:Event[];
constructor(
private eventService:EventService
) { }

ngOnInit() {
}

createEvent(form: NgForm) {
    if(form.controls['start_date'].value.date.month < 10)
    {
    var month_st = '0' + form.controls['start_date'].value.date.month;
    }
    else {
        month_st = form.controls['start_date'].value.date.month;
    }

    if(form.controls['start_date'].value.date.day < 10)
    {
    var day_st = '0' + form.controls['start_date'].value.date.day;
    }
    else {
        day_st = form.controls['start_date'].value.date.day;
    }

    if(form.controls['end_date'].value.date.day < 10)
    {
    var day_end = '0' + form.controls['end_date'].value.date.day;
    }
    else {
        day_end = form.controls['end_date'].value.date.day;
    }

    if(form.controls['end_date'].value.date.month < 10)
    {
    var month_end = '0' + form.controls['end_date'].value.date.month;
    }
    else {
        month_end = form.controls['end_date'].value.date.month;
    }

var start_date = form.controls['start_date'].value.date.year + '-' + month_st + '-' + day_st;
var end_date = form.controls['end_date'].value.date.year + '-' + month_end + '-' + day_end;
console.log("color" + form.controls['color'].value);
var event = new Event( form.controls['color'].value,end_date, form.controls['name'].value,  start_date);
this.eventService.addEvent(event).subscribe(
    data =>{
    console.log(data);
    console.log(event);
    window.location.replace("http://localhost:4200/calendar");
    });
    }
}
