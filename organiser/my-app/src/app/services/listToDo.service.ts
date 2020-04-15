import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListToDo} from "../domens/listToDo";
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class ListToDoService {
  private listToDoUrl : string;
  currentUser: any;

  constructor(
    private http: HttpClient,
    private token: TokenStorageService
  ) 
  {
    this.currentUser = this.token.getUser();
    this.listToDoUrl = "http://localhost:8181/api/auth/lists";
  }
  getById(id) : Observable<ListToDo>{
    return this.http.get<ListToDo>(this.listToDoUrl + '/'+ id);
  }

  addList(list: ListToDo) {
    return this.http.put<ListToDo>(this.listToDoUrl, list);
  }

  deleteById(id: number) {
    return this.http.delete(this.listToDoUrl+'/'+id);
  }

  getAll(): Observable<ListToDo[]>{
    return this.http.get<ListToDo[]>(this.listToDoUrl);
  }
}