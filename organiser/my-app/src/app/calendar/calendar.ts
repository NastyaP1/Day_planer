import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.calendar.html',
  styleUrls: [ './app.calendar.css' ]
})
export class CalendarComponent  implements OnInit {
    eventsDB = [];
    events: Array<any> = new Array<any>();

    options1 = {
        outline: false,
    };

    constructor(
        private eventService: EventService
        ) { }

    ngOnInit() {
        this.eventService.getAll().subscribe(data =>{
            this.eventsDB = data;
            console.log("events" + JSON.stringify(data));
            sessionStorage.setItem("events", JSON.stringify(data)); 
            this.eventsDB.forEach(e => {
                this.events.push({
                    startDateTime: new Date(e.start_date),
                    endDateTime: new Date(e.end_date),
                    data: {
                        name: e.name,
                        color: e.colour
                    }
                });
            });
        });
    }

    deleteEvent(i){
        console.log(i);
        console.log(this.eventsDB);
        var ind = this.events.indexOf(i);
        this.eventService.deleteById(this.eventsDB[ind].id).subscribe(data =>console.log(data));
        this.events.splice(i, 1);
        window.location.replace("http://localhost:4200/calendar");
    }
}
