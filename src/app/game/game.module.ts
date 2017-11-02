import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes =  [
  { path: 'list', component: ListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ListComponent]
})
export class GameModule { }
