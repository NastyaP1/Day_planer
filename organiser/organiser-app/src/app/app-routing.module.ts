import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationPageComponent} from './registrationPage/app.registrationComponent';
import { LoginPageComponent } from './loginPage/app.loginComponent';
const routes: Routes = [{
  path: 'loginPage',
  component: LoginPageComponent
},

{
  path: 'registrationPage',
  component: RegistrationPageComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
