import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, ElementRef, NgZone} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import {AgmCoreModule, MapsAPILoader, MouseEvent, AgmMap  } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './loginPage/app.loginComponent';
import {RegistrationPageComponent} from './registrationPage/app.registrationComponent';
import {ProfilePageComponent} from './profilePage/app.profilePageComponent';
import {SideBarComponent} from './sideBar/app.sideBarComponent';
import {FooterComponent} from './footer/app.footerComponent';

import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";

import {DataService} from 'src/app/services/data.service';
import {RouterModule} from '@angular/router';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "951523443973-82b3n43cgkbntlrv9gcucinukkl5n36a.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  ux_mode: "redirect",
  //redirect_uri: "https://ng-gapi-example.stackblitz.io/redirect",
  scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    SideBarComponent,
    FooterComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    SidebarModule.forRoot(),
    FormsModule,
    Ng5SliderModule,
    NgbModule,
    RouterModule.forRoot([{
      path: 'redirect',
      component: AppComponent
    }]),
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
