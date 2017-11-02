import { StatisticModule } from './statistic/statistic.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GlobalService } from './services/global.service';
import { MaterializeModule } from 'ng2-materialize';
import { LoginComponent } from './user/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

const routes: Routes =  [
  { path: '', component: HomeComponent  },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'game', loadChildren: './game/game.module#GameModule' },
  { path: 'statistic', loadChildren: './statistic/statistic.module#StatisticModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    routing,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    // apps modules
    GameModule,
    UserModule,
    StatisticModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
