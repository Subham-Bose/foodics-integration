import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashupComponent } from './cashup.component';

const routes: Routes = [{ path: '', component: CashupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashupRoutingModule { }
