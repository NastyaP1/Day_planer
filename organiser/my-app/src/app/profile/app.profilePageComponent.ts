import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/domens/user';
import { HttpService } from '../services/http.service';
import { Thing } from '../domens/thing';
import { ThingService } from '../services/thing.service';
import { ListToDo } from '../domens/listToDo';
import { TokenStorageService } from '../_services/token-storage.service';
import { ListToDoService } from '../services/listToDo.service';

@Component({
  templateUrl: './profilePage.html',
  styleUrls: ['./app.profilePageComponent.scss'],
  providers: [DataService]
})
@Injectable()
export class ProfilePageComponent implements OnInit {
  currentUser: any;
  lists:ListToDo[];

  constructor(private token: TokenStorageService,
    private listService:ListToDoService
    ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.listService.getAll().subscribe(data =>{this.lists = data;});
  } 
}
