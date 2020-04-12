import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationPageComponent} from './register/app.registrationComponent';
import { LoginPageComponent } from './login/app.loginComponent';
import {ProfilePageComponent} from './profile/app.profilePageComponent';
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
