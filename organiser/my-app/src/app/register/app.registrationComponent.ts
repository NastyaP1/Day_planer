import { Component, OnInit } from "@angular/core";
import { User } from '../domens/user';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
    templateUrl: './registrationPage.html',
    styleUrls: ['./app.registrationComponent.css']
})
export class RegistrationPageComponent implements OnInit{
    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
  
    constructor(private authService: AuthService) { }
  
    ngOnInit() {
    }
  
    onSubmit() {
      this.authService.register(this.form).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }