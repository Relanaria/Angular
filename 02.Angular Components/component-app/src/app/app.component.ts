import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ManClothesPageComponent } from './man-clothes-page/man-clothes-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent, MainComponent, 
    LoginPageComponent, FooterComponent, RegisterPageComponent,
    ManClothesPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-app';
}
