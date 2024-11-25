import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/user/login-page/login-page.component';
import { RegisterPageComponent } from './features/user/register-page/register-page.component';
import { MainComponent } from './features/main-page/main/main.component';
import { ManClothesPageComponent } from './features/clothes/man-clothes-page/man-clothes-page.component';
import { WomanClothesPageComponent } from './features/clothes/woman-clothes-page/woman-clothes-page.component';
import { KidsClothesPageComponent } from './features/clothes/kids-clothes-page/kids-clothes-page.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ProfilePageComponent } from './features/user/profile-page/profile-page.component';
import { CreateProductComponent } from './features/main-page/create-product/create-product.component';
import { DetailsComponent } from './features/main-page/product-details/details.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: MainComponent},
    { path: 'home/details/:id', component:  DetailsComponent},
    { path: 'details/:id', component:  DetailsComponent},
    {
        path: "clothes", 
        children: [
            {path: "mens", component: ManClothesPageComponent},
            {path: "woman", component: WomanClothesPageComponent},
            {path: "kids", component: KidsClothesPageComponent},
        ]
    },
    {path:"create-product", component:CreateProductComponent},
    {path: "profile", component: ProfilePageComponent},
    {path: "login", component: LoginPageComponent},
    {path: "register", component: RegisterPageComponent},
    {path: "**", component: NotfoundComponent}
];
