import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodicsComponent } from './foodics.component';

const routes: Routes = [{ path: '', component: FoodicsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodicsRoutingModule { }
