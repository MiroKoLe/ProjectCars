import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/authGuard.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'index', component: IndexComponent, canActivate: [AuthGuard]},
  {path: 'create', component: AddComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["https://localhost:5000"],
        blacklistedRoutes: []
      }
      })],
      providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule { }
