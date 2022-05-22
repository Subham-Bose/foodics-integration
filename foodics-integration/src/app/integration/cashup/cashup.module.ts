import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashupRoutingModule } from './cashup-routing.module';
import { CashupComponent } from './cashup.component';


@NgModule({
  declarations: [
    CashupComponent
  ],
  imports: [
    CommonModule,
    CashupRoutingModule
  ]
})
export class CashupModule { }
