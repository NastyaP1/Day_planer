import { Component, OnInit } from "@angular/core";
import { User } from '../domens/user';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './registrationPage.html',
    styleUrls: ['./app.registrationComponent.css']
})
export class RegistrationPageComponent implements OnInit{
    urlReg: string;
    username = '';
    password = '';

    constructor(private http: HttpClient){ }
   
    registrater(form: NgForm){
        this.username = form.controls.username.value;
        this.password = form.controls.password.value;

        this.urlReg = 'http://localhost:8182/api/auth/registration';
        const requestReg = new XMLHttpRequest();

        requestReg.open('POST', this.urlReg, false );
        const CryptoJS = require('crypto-js');
        //this.userNew = new User(" ", this.username, " ", CryptoJS.MD5(this.password).toString());
        //var t = this.http.post(this.urlReg, this.userNew); 
        //console.log(t);
        //console.log(JSON.stringify({name: this.username, password: CryptoJS.MD5(this.password).toString(),email:" ", avatar: " "}));
        requestReg.setRequestHeader('Content-Type','application/json');
        requestReg.send(JSON.stringify({name: this.username, password: CryptoJS.MD5(this.password).toString() ,email:" ",
         avatar: " ", accountNonExpired: true ,accountNonLocked: true, credentialsNonExpired: true, enabled: true}));
        console.log("response" + requestReg.response);
    }
    ngOnInit(){
    }
}