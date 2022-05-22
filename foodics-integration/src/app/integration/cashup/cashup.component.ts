import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cashup',
  templateUrl: './cashup.component.html',
  styleUrls: ['./cashup.component.css']
})
export class CashupComponent implements OnInit {

  code:string;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params['code'];
      console.log(this.code);
      
    })
  }

}
