import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    localStorage.setItem("restaurantId", "ecc38940-0189-4f6d-9ce8-53c82e369bd3");
  }

  onClick() {
    this.router.navigate(['foodics']);
  }
  goToCashUp(){
    this.router.navigate(['cashup']);
  }

  isHomeRoute() {
    return this.router.url == "/";
  }

}
