import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MainComponent } from './main/main.component';
import { ManClothesPageComponent } from './man-clothes-page/man-clothes-page.component';
import { WomanClothesPageComponent } from './woman-clothes-page/woman-clothes-page.component';
import { KidsClothesPageComponent } from './kids-clothes-page/kids-clothes-page.component';

export const routes: Routes = [
    {path: "", component: MainComponent},
    {path: "clothes/mens", component: ManClothesPageComponent},
    {path: "clothes/woman", component: WomanClothesPageComponent},
    {path: "clothes/kids", component: KidsClothesPageComponent},
    {path: "login", component: LoginPageComponent},
    {path: "register", component: RegisterPageComponent},
];
