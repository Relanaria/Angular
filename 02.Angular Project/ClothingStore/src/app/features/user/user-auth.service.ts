import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../interfaces/user-login';
import { BehaviorSubject, tap } from 'rxjs';
import { RegisterInfo } from '../interfaces/register-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private user$$ = new BehaviorSubject<UserLogin | null>(null);
  private user$ = this.user$$.asObservable();


  USER_KEY:string ='[user]';
  user: UserLogin | null = null;

  constructor(private http: HttpClient) {
    const savedUser = localStorage.getItem(this.USER_KEY);
    if (savedUser) {
      this.user$$.next(JSON.parse(savedUser));
    }

    this.user$.subscribe((data) => {
      this.user = data;
    });
   }

   
  getUser$(): Observable<UserLogin | null> {
    return this.user$;
  }

  login(email:string, password: string){

   return this.http
   .post<UserLogin>('/users/login', {email, password})
   .pipe(tap(user =>{
    this.user$$.next(user);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
   }));
  }


  register(email:string, firstName: string, lastName:string, password: string, country: string, city: string, profileImg: string){

    return this.http
    .post<RegisterInfo>('/users/register', {email, firstName, lastName, password, country, city, profileImg})
    .pipe(tap(user =>{
      this.user$$.next(user);
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }));

  }

  logOut(){

    this.user$$.next(null);
    localStorage.removeItem(this.USER_KEY);
    this.http.get('users/logout');
  }
}
