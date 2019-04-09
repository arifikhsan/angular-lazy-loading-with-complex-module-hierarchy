import { Sub1Component, Sub2Component } from './sub.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sub1',
    component: Sub1Component,
  },
  {
    path: 'sub2',
    component: Sub2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubRoutingModule { }