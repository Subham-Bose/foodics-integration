import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FoodicsDialogComponent } from './foodics-dialog/foodics-dialog.component';

@Component({
  selector: 'app-foodics',
  templateUrl: './foodics.component.html',
  styleUrls: ['./foodics.component.css']
})
export class FoodicsComponent implements OnInit {

  restaurantId:string = '';

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    this.restaurantId = localStorage.getItem('restaurantId');
  }

  openDialog() {
      console.warn("Open dialog")
      const dialogRef = this.dialog.open(FoodicsDialogComponent);

      dialogRef.afterClosed().subscribe({
        next: res => console.log(res)
        
      })
  }

}
