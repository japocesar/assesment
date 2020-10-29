import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  account: any = {};

  constructor() { }

  ngOnInit() {
      this.account.type = 'Free Checking';
      this.account.id =  4692;
      this.account.balance = 5824.76;
    }

}
