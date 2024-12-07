import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { UserLogin } from '../../interfaces/user-login';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit{
  userData: UserLogin | null = null;

  constructor(
    private userService: UserAuthService
  ){}

  ngOnInit(): void {
    this.userService.getUser$().subscribe(data =>{
      this.userData = data;
      console.log(data);
      
    })
  }
  
}
