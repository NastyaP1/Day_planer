import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Thing} from "../domens/thing";

{
providedIn: 'root'
}
export class ThingService {
private thingUrl : string;

constructor(private http: HttpClient) {
this.thingUrl = "http://localhost:8182/api/user/3/lists/2/things/";
}
getById(id) : Observable<Thing>{
return this.http.get<Thing>(this.thingUrl + id);
}
getAll(): Observable<Thing[]>{
return this.http.get<Thing[]>(this.thingUrl);
}

}