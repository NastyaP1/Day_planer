import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/domens/user';
import { HttpService } from '../services/http.service';
import { Thing } from '../domens/thing';
import { Event } from '../domens/event';
import { ThingService } from '../services/thing.service';
import { ListToDo } from '../domens/listToDo';
import { TokenStorageService } from '../_services/token-storage.service';
import { ListToDoService } from '../services/listToDo.service';
import { EventService } from '../services/event.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  templateUrl: './profilePage.html',
  styleUrls: ['./app.profilePageComponent.css'],
  providers: [DataService]
})
@Injectable()
export class ProfilePageComponent implements OnInit {

  imgURL = ["/assets/img/man.png", "/assets/img/woman.png"];
  avatar ;
  showAvatars: boolean = false;
  currentUser: any;
  form: any = {};
  constructor(private token: TokenStorageService,
    private authService: AuthService,
    private data: DataService
    ) { }
  ngOnInit() {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
    console.log(this.imgURL);
    this.showAvatars = false;
    this.avatar = sessionStorage.getItem("avatar");
  } 

  onSubmit() {
    this.authService.updateUser(this.form).subscribe(
      data => {
        this.token.signOut();
        window.location.replace("http://localhost:4200/login");
      },
      err => {
      }
    );
  }

  chooseAvatar(i){
    sessionStorage.setItem("avatar", i);
    this.data.linkName$.next(i);
    console.log(this.data.linkName$.asObservable());
    this.avatar = sessionStorage.getItem("avatar");
    this.showAvatars = false;
    this.authService.updateAvatar(this.avatar).subscribe(
      data => {

        //this.token.signOut();
        //window.location.replace("http://localhost:4200/login");
      },
      err => {
      }
    );
  }

  toShowAvatars(){
    this.showAvatars = true;
  }

  onSubmitAvatar(){
    
  }

  
}
