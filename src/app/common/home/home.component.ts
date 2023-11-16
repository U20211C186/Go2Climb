import { Component, OnInit } from '@angular/core';
import { Iservice } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services-service.service';

import { Router } from '@angular/router';

interface Response {
  content: any[];
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  services: Iservice[] = [];
  value = '';
  userType: any;
  response: Response = {content: []}

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchServices();
    this.userType=sessionStorage.getItem('userType');
    console.log(this.userType);
  }

  fetchServices() {
    this.servicesService.getServices().subscribe((data) => {
      this.response = data;
      console.log(this.response);
      this.services = this.response.content;
    });
  }

  serviceDetail(id: number) {
    this.router.navigate(['/service-detail', id]);
  }

  search(value: String) {
    console.log('searching ' + value);
    this.router.navigate(['/search', value]);
  }

  handleGoToAddService() {
    this.router.navigate(['/add-service']);
  }
}
