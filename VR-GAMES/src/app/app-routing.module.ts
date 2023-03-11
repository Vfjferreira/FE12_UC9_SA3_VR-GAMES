import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { MenuComponent } from './views/menu/menu.component';
const routes: Routes = [
  {path:"header", component: HeaderComponent},
  {path:"footer", component: FooterComponent},
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"jogos", component: JogosComponent},
  {path:"menu", component: MenuComponent},
  {path:"", redirectTo:'/home',pathMatch:'full'}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
