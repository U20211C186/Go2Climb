import {Component, OnInit} from '@angular/core';
import { hiredservice } from 'src/app/models/hiredservice';
import { HiredServiceService } from 'src/app/services/hired-service.service';
import {Iservice} from "../../models/service";
import {ServicesService} from "../../services/services-service.service";

interface Response {
  content: any[];
}

@Component({
  selector: 'app-request-agency',
  templateUrl: './request-agency.component.html',
  styleUrls: ['./request-agency.component.css']
})
export class RequestAgencyComponent implements OnInit{

  services: hiredservice[] = [];
  filtered : hiredservice[] = [];
  response: Response = {content: []}
  currentid: any
  value: any;

  constructor(private hiredServices: HiredServiceService) {
  }

  ngOnInit(): void {
    this.currentid = sessionStorage.getItem('userid')
    this.fetchServices();
  }

  fetchServices() {
    this.hiredServices.getHiredServices().subscribe((data) => {
        this.response = data;
        console.log(this.response);
        this.services = this.response.content;
      this.filtered = this.services.filter(result => {
        return result.service.agency.id == this.currentid;
      })
    });
  }

}
