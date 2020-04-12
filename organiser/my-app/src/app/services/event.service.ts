import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../domens/event";

@Injectable({
    providedIn: 'root'
  })
export class EventService {
private eventUrl : string;

constructor(private http: HttpClient) {
this.eventUrl = "http://localhost:8182/api/user/3/events/"; 
}
getById(id) : Observable<Event>{
return this.http.get<Event>(this.eventUrl + id);
}
getAll(): Observable<Event[]>{
return this.http.get<Event[]>(this.eventUrl);
}
}