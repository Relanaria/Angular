import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserAuthService } from '../../features/user/user-auth.service';
import { UserLogin } from '../../features/interfaces/user-login';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedIn:UserLogin | undefined = undefined;

  constructor(private userService: UserAuthService){
    this.userService.user$.subscribe(data =>{
      this.loggedIn = data;
    })
  }

  logOutHandle():void {
    this.userService.logOut();
  }



//  setLoggedIn() {
//   this.loggedIn = !this.loggedIn
//  }
}
