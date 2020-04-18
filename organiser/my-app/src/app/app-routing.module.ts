import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationPageComponent} from './register/app.registrationComponent';
import { LoginPageComponent } from './login/app.loginComponent';
import {ProfilePageComponent} from './profile/app.profilePageComponent';
import { BoardUserComponent } from './board-user/board-user.component';
import {AllThingsPageComponent} from './allThings/app.allThingsPageComponent';
import {DayThingsPageComponent} from './dayThings/app.dayThingsPageComponent';
import {AddThingPageComponent} from './addThing/app.addThingPageComponent';
import {AddListPageComponent} from './addList/app.addListPageComponent';

const routes: Routes = [{
  path: 'login',
  component: LoginPageComponent
},

{
  path: 'register',
  component: RegistrationPageComponent
},

{
  path: 'profile',
  component: ProfilePageComponent
},

{
  path: 'allThings',
  component: AllThingsPageComponent
},

{
  path: 'dayThings',
  component: DayThingsPageComponent
},
{
  path:'addList',
  component: AddListPageComponent
},
{
  path:'addThing',
  component: AddThingPageComponent
},

{
  path: 'addThing',
  component: AddThingPageComponent
},

{
  path: 'addList',
  component: AddListPageComponent
},

{ path: 'user', component: BoardUserComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
