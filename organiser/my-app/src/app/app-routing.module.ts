import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationPageComponent} from './registrationPage/app.registrationComponent';
import { LoginPageComponent } from './loginPage/app.loginComponent';
import {ProfilePageComponent} from './profilePage/app.profilePageComponent';
const routes: Routes = [{
  path: 'logInPage',
  component: LoginPageComponent
},

{
  path: 'registrationPage',
  component: RegistrationPageComponent
},

{
  path: 'profilePage',
  component: ProfilePageComponent
},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
