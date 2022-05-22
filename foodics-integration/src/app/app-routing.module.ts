import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'foodics', loadChildren: () => import('./integration/foodics/foodics.module').then(m => m.FoodicsModule) }, { path: 'foodics', loadChildren: () => import('./integration/foodics/foodics.module').then(m => m.FoodicsModule) }, { path: 'cashup', loadChildren: () => import('./integration/cashup/cashup.module').then(m => m.CashupModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
