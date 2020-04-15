import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../domens/event";
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class EventService {
  private eventUrl : string;
  currentUser: any;

  constructor(
    private http: HttpClient,
    private token: TokenStorageService
  ) 
  {
    this.currentUser = this.token.getUser();
    this.eventUrl = "http://localhost:8181/api/auth/events";
  }
  getById(id) : Observable<Event>{
    return this.http.get<Event>(this.eventUrl + '/'+ id);
  }

  addEvent(event: Event) {
    return this.http.put<Event>(this.eventUrl, event);
  }

  deleteById(id: number) {
    return this.http.delete(this.eventUrl+'/'+id);
  }

  getAll(): Observable<Event[]>{
    return this.http.get<Event[]>(this.eventUrl);
  }
}