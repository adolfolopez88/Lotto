import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersGeneratorComponent } from './numbers-generator/numbers-generator.component';

const routes: Routes =  [
  { path: 'list', component: ListComponent },
  { path: 'generator', component: NumbersGeneratorComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    routing,
    MaterializeModule,
    FormsModule
  ],
  declarations: [ListComponent, NumbersGeneratorComponent]
})
export class GameModule { }
