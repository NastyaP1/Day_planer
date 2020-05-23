import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8181/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private tokenStorage: TokenStorageService) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password,
      avatar: credentials.avatar
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      avatar: ''
    }, httpOptions);
  }

  oldpassword(credentials):  Observable<any>{
    console.log(credentials);
    return this.http.post(AUTH_API + 'oldpassword', {
      password: credentials.oldpassword
    }, httpOptions);
  }

  password(credentials):  Observable<any>{
    console.log(credentials);
    return this.http.post(AUTH_API + 'password', {
      password: credentials.password
    }, httpOptions);
  }

  updateUser(user): Observable<any>  {
    return this.http.post(AUTH_API + 'updateprofile',{username: user.username, email:  user.email} , httpOptions);

  }

  updateAvatar(avatar): Observable<any>  {
    return this.http.post(AUTH_API + 'updateavatar',{avatar: avatar} , httpOptions);
  }



}
