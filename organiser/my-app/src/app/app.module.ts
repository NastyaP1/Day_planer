import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, ElementRef, NgZone} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import 'flatpickr/dist/flatpickr.css'; // you may need to adjust the css import depending on your build tool

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { HttpClientModule } from '@angular/common/http';
import { ThingService } from 'src/app/services/thing.service';
import { BoardUserComponent } from './board-user/board-user.component';
import { MyDatePickerModule } from 'mydatepicker';

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
import {NgxSimpleCalendarModule} from 'ngx-simple-calendar';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NpUiColorPickerModule } from "np-ui-color-picker";

import {DataService} from 'src/app/services/data.service';

import {HttpService} from 'src/app/services/http.service';
import {RouterModule} from '@angular/router';
import { AddListPageComponent } from './addList/app.addListPageComponent';

import { AddThingPageComponent } from './addThing/app.addThingPageComponent';
import { AddEventPageComponent } from './addEvent/app.addEventPageComponent';
import { PasswordChangeComponent } from './password/app.passwordComponent';

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
AddListPageComponent,
AddEventPageComponent,
CalendarComponent,
PasswordChangeComponent
],
imports: [
FullCalendarModule,
CommonModule,
NgbModalModule,
FlatpickrModule.forRoot(),
CalendarModule.forRoot({
provide: DateAdapter,
useFactory: adapterFactory,
}),
BrowserModule,
AmazingTimePickerModule,
MyDatePickerModule,
AppRoutingModule,
NpUiColorPickerModule,
MyDatePickerModule,
AmazingTimePickerModule,
BrowserModule,
HttpClientModule,
BrowserAnimationsModule,
MDBBootstrapModule.forRoot(),
SidebarModule.forRoot(),
FormsModule,
Ng5SliderModule,
NgxSimpleCalendarModule,
NgbModule,
RouterModule.forRoot([{
path: 'redirect',
component: AppComponent
}]),
],
providers: [DataService, HttpService,ThingService,authInterceptorProviders ],
bootstrap: [AppComponent]
})
export class AppModule { }
