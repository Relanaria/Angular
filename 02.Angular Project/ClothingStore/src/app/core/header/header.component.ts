import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserAuthService } from '../../features/user/user-auth.service';
import { UserLogin } from '../../features/interfaces/user-login';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedIn:UserLogin | null = null;
  private subscription!: Subscription;

  constructor(private userService: UserAuthService){
    // this.userService.user$.subscribe(data =>{
    //   this.loggedIn = data;
    // })
    this.subscription = this.userService.getUser$().subscribe((data) => {
      this.loggedIn = data;
    });
  }

  logOutHandle():void {
    this.userService.logOut();
  }



//  setLoggedIn() {
//   this.loggedIn = !this.loggedIn
//  }
}
