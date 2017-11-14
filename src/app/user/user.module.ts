
import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './shared/user.service';
import { FacebookLoginService } from './shared/facebook-login.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterializeModule } from 'ng2-materialize';
import { FacebookModule } from 'ngx-facebook';


import { StatisticModule } from './../statistic/statistic.module';
import { ChartBarComponent } from './../statistic/chart-bar/chart-bar.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routing,
    FacebookModule.forRoot(),
    MaterializeModule.forRoot(),
    StatisticModule

  ],
  declarations: [
    LoginComponent,
    ProfileComponent,
  ],
  providers: [
    FacebookLoginService,
    UserService
  ],
})
export class UserModule {


}
