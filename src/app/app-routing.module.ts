import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path:'home',
  component: HomeComponent
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },{
    path:'login',
  component: LoginComponent
  },{
    path:'signup',
  component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
