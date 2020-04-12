import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationPageComponent} from './registrationPage/app.registrationComponent';
import { LoginPageComponent } from './logInPage/app.loginComponent';
import {ProfilePageComponent} from './profilePage/app.profilePageComponent';
import { BoardUserComponent } from './board-user/board-user.component';
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

{ path: 'user', component: BoardUserComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
