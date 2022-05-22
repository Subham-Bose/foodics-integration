import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodicsRoutingModule } from './foodics-routing.module';
import { FoodicsComponent } from './foodics.component';
import { FoodicsDialogComponent } from './foodics-dialog/foodics-dialog.component';
import { restaurantService } from 'src/service/restaurant.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FoodicsComponent,
    FoodicsDialogComponent
  ],
  providers:[restaurantService],
  imports: [
    CommonModule,
    FoodicsRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class FoodicsModule { }
