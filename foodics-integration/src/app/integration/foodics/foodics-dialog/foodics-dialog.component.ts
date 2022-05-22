import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { restaurantService } from 'src/service/restaurant.service';

@Component({
  selector: 'app-foodics-dialog',
  templateUrl: './foodics-dialog.component.html',
  styleUrls: ['./foodics-dialog.component.css']
})
export class FoodicsDialogComponent implements OnInit {

  form:FormGroup;

  constructor(private dialogRef:MatDialogRef<FoodicsDialogComponent>,  private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      clientId : new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    window.location.href = `https://console-sandbox.foodics.com/authorize?client_id=${this.form.get('clientId').value}&state=random_state`
    this.dialogRef.close();
  }

}
