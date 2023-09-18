import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",title:"Home",component:HomeComponent},
  {path:"about",title:"About" ,component:AboutComponent},
  {path:"portfolio",title:"Portfolio",component:PortfolioComponent},
  {path:"contact",title:"Contact", component:ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
