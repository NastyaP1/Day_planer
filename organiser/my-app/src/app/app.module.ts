import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, ElementRef, NgZone} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AmazingTimePickerModule } from 'amazing-time-picker'; 
import { MyDatePickerModule } from 'mydatepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ColorSketchModule } from 'ngx-color/sketch';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import {AgmCoreModule, MapsAPILoader, MouseEvent, AgmMap  } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { ThingService } from 'src/app/services/thing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardUserComponent } from './board-user/board-user.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/app.loginComponent';
import {RegistrationPageComponent} from './register/app.registrationComponent';
import {ProfilePageComponent} from './profile/app.profilePageComponent';
import {SideBarComponent} from './sideBar/app.sideBarComponent';
import {AllThingsPageComponent} from './allThings/app.allThingsPageComponent';
import {DayThingsPageComponent} from './dayThings/app.dayThingsPageComponent';
import {FooterComponent} from './footer/app.footerComponent';
import {HeaderComponent} from './header/app.headerComponent';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import {AddThingPageComponent} from './addThing/app.addThingPageComponent';
import {AddListPageComponent} from './addList/app.addListPageComponent';
import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";

import {DataService} from 'src/app/services/data.service';

import {HttpService} from 'src/app/services/http.service';
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
    HeaderComponent,
    ProfilePageComponent,
    BoardUserComponent,
    AllThingsPageComponent,
    DayThingsPageComponent,
    AddThingPageComponent,
    AddListPageComponent
  ],
  imports: [
    BrowserModule,
    AmazingTimePickerModule,
    MyDatePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ColorSketchModule,
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
  providers: [DataService, UserService, HttpService,ThingService,authInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
