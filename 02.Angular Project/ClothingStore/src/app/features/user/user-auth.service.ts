import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../interfaces/user-login';
import { BehaviorSubject, tap } from 'rxjs';
import { RegisterInfo } from '../interfaces/register-info';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private user$$ = new BehaviorSubject<UserLogin | undefined>(undefined);
  public user$ = this.user$$.asObservable();


  USER_KEY:string ='[user]';


  constructor(private http: HttpClient) { }


  login(email:string, password: string){

   return this.http
   .post<UserLogin>('/users/login', {email, password})
   .pipe(tap(user =>{
    this.user$$.next(user);
   }));
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }


  register(email:string, firstName: string, lastName:string, password: string, country: string, city: string, profileImg: string){

    return this.http
    .post<RegisterInfo>('/users/register', {email, firstName, lastName, password, country, city, profileImg})
    .pipe(tap(user =>{
      this.user$$.next(user);
    }));

  }

  logOut(){

    this.user$$.next(undefined);
    this.http.get('users/logout');
  }
}
