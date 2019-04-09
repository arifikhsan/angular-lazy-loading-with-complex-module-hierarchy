import { Sub1Component, Sub2Component } from './sub.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubRoutingModule } from './sub-routing.module';

@NgModule({
  declarations: [Sub1Component, Sub2Component],
  imports: [SubRoutingModule]
})
export class SubModule { }