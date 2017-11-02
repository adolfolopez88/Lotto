import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ChartDoughnutComponent } from './chart-doughnut/chart-doughnut.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import { ChartRadarComponent } from './chart-radar/chart-radar.component';

const routes: Routes = [
  { path: 'global', component: GlobalComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routing,
    ChartsModule
  ],
  declarations: [GlobalComponent, ChartDoughnutComponent, ChartBarComponent, ChartRadarComponent]
})
export class StatisticModule { }
