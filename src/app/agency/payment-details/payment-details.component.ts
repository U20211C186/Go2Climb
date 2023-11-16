import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent {
  cardNumber!: string;

  constructor(private router:Router) {}

  redirectToPlans(){
    this.router.navigate(['account-upgrade-plan']);
  }
  redirectToAccount(){
    this.router.navigate(['account-agency']);
  }

}
