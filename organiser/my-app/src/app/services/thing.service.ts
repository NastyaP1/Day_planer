import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Thing} from "../domens/thing";
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ThingService {
    private thingUrl : string;

    currentUser: any;

    constructor(
        private http: HttpClient,
        private token: TokenStorageService
    ) 
    {
        this.currentUser = this.token.getUser();
        this.thingUrl = "http://localhost:8181/api/auth/lists/";
    }
    getById(listId, id) : Observable<Thing>{
        return this.http.get<Thing>(this.thingUrl + listId + '/things/'+ id);
    }

    addthing(thing: Thing, listId) {
        return this.http.put<Thing>(this.thingUrl + listId + '/things', thing);
    }

    deleteById(id: number, listId) {
        return this.http.delete(this.thingUrl + listId + '/things/'+ id);
    }

    getAllByListId(listId): Observable<Thing[]>{
        return this.http.get<Thing[]>(this.thingUrl + listId + '/things');
    }
}