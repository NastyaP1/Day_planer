import { Component, OnInit } from "@angular/core";
import { User } from '../domens/user';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
    templateUrl: './addThingPage.html',
    styleUrls: ['./app.addThingPageComponent.css']
})
export class AddThingPageComponent implements OnInit{  
    ngOnInit() {
    } 
    
  }