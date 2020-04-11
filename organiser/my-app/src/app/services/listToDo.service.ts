import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListToDo} from "../domens/listToDo";

@Injectable({
    providedIn: 'root'
  })
export class ListToDoService {
private listToDoUrl : string;

constructor(private http: HttpClient) {
this.listToDoUrl = "http://localhost:8182/api/user/3/lists/"; 
}
getById(id) : Observable<ListToDo>{
return this.http.get<ListToDo>(this.listToDoUrl + id);
}
getAll(): Observable<ListToDo[]>{
return this.http.get<ListToDo[]>(this.listToDoUrl);
}
}