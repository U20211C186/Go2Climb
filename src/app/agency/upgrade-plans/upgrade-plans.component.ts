import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-upgrade-plans',
  templateUrl: './upgrade-plans.component.html',
  styleUrls: ['./upgrade-plans.component.css']
})
export class UpgradePlansComponent {

  constructor(private router:Router) {}

  redirectToPaymentDetails(){
    this.router.navigate(['account-payment-details']);
  }

}
