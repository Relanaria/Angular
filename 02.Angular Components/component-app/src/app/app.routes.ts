import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/clothes/login-page/login-page.component';
import { RegisterPageComponent } from './features/clothes/register-page/register-page.component';
import { MainComponent } from './features/main-page/main/main.component';
import { ManClothesPageComponent } from './features/clothes/man-clothes-page/man-clothes-page.component';
import { WomanClothesPageComponent } from './features/clothes/woman-clothes-page/woman-clothes-page.component';
import { KidsClothesPageComponent } from './features/clothes/kids-clothes-page/kids-clothes-page.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: MainComponent},
    {
        path: "clothes", 
        children: [
            {path: "mens", component: ManClothesPageComponent},
            {path: "woman", component: WomanClothesPageComponent},
            {path: "kids", component: KidsClothesPageComponent},
        ]
    },
    {path: "login", component: LoginPageComponent},
    {path: "register", component: RegisterPageComponent},
    {path: "**", component: NotfoundComponent}
];
