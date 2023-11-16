import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iservice } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services-service.service';

interface Response {
  content: any[];
}

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})

export class MyServicesComponent implements OnInit{
  services: Iservice[] = [];
  value = '';
  userType: any;
  currentid: any;
  response: Response = {content: []}

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentid=sessionStorage.getItem('userid');
    this.fetchServices(this.currentid);
    this.userType=sessionStorage.getItem('userType');
    console.log(this.userType);
  }

  fetchServices(id:number) {
    this.servicesService.getAgencyServiceById(id).subscribe((data) => {
      this.response = data;
      console.log(this.response);
      this.services = this.response.content;
      console.log(this.services.length);
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
