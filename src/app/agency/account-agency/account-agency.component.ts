import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import { agency } from 'src/app/models/agency';
import { AgencyAccountService } from 'src/app/services/agency-account.service';


@Component({
  selector: 'app-account-agency',
  templateUrl: './account-agency.component.html',
  styleUrls: ['./account-agency.component.css']
})
export class AccountAgencyComponent implements OnInit{

  userId = sessionStorage.getItem('userid') as string;

  currentAgency: agency | undefined = undefined;

  agencyData = this.formBuilder.group({
    name: '',
    email: '',
    phoneNumber: '',
    description: '',
    location: '',
    ruc: '',
    score: '',



  });

  photo = '../../../assets/user-icon.webp';

  constructor(
    private agencyService: AgencyAccountService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.agencyService.getById(this.userId).subscribe((agency) => {
      this.currentAgency = agency;

      this.agencyData.setValue({
        name: agency.name.toString(),
        email: agency.email.toString(),
        phoneNumber: agency.phoneNumber.toString(),
        description: agency.description.toString(),
        location: agency.location.toString(),
        ruc: agency.ruc.toString(),
        score: agency.score.toString(),
      });

      this.photo = agency.photo.toString();
    });
  }

  updateTourist(): void {
    const { name, email, phoneNumber, description,location,ruc,score } = this.agencyData.value;

    if (!this.currentAgency) return;

    this.agencyService
      .update({
        ...this.currentAgency,
        name: String(name),
        email: String(email),
        phoneNumber: Number(phoneNumber),
        description: String(description),
        location: String(location),
        ruc: Number(ruc),
        score: Number(score)
      })
      .subscribe();
  }


  // constructor(private agencyAccountService: AgencyAccountService,private router: Router) {
  //   this.agencyAccountService = agencyAccountService;
  // }





  // redirectToChangePassword() {
  //   this.router.navigate(['/account-change-password']);
  // }
  // redirectToUpgradePlans(){
  //   this.router.navigate(['account-upgrade-plan']);
  // }
  //
  // changeEditable() {
  //   this.isEditable = !this.isEditable;
  // }
  // onSaveClick() {
  //   this.isEditable=false;
  // }
  //
  //
  //
  //
  //
  // uploadPhoto() {
  //   this.image = "";
  //   const fileInput = document.querySelector('input[type=file]') as HTMLInputElement;
  //   fileInput.click();
  //
  // }
  //
  // onFileSelected(event: any) {
  //   if(event.target.files){
  //     var reader=new FileReader()
  //     reader.readAsDataURL(event.target.files[0])
  //     reader.onload=(event:any)=>{
  //       this.image=event.target.result
  //     }
  //
  //   }
  //
  // }

}
