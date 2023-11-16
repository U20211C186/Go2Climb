import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-agency',
  templateUrl: './sign-up-agency.component.html',
  styleUrls: ['./sign-up-agency.component.css']
})
export class SignUpAgencyComponent implements OnInit{
  signUpAgencyForm: FormGroup;

  constructor(public builder: FormBuilder, private service: AuthService, private router: Router) {
    this.signUpAgencyForm = this.builder.group({
      email: this.builder.control('',Validators.compose([Validators.email, Validators.required])),
      password: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(8)])),
      name: this.builder.control('',Validators.compose([Validators.required])),
      phoneNumber: this.builder.control('',Validators.compose([Validators.required, Validators.maxLength(9)])),
      location: this.builder.control('',Validators.compose([Validators.required])),
      ruc: this.builder.control('',Validators.compose([Validators.required])),
      description: 'holaa',
      score: 0,
      photo:'https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg'
    })

  }


  get email(){
    return this.signUpAgencyForm.controls['email'];
  }

  get password(){
    return this.signUpAgencyForm.controls['password'];
  }

  get name(){
    return this.signUpAgencyForm.controls['name'];
  }

  get phoneNumber(){
    return this.signUpAgencyForm.controls['phoneNumber'];
  }

  get location(){
    return this.signUpAgencyForm.controls['location'];
  }

  get ruc(){
    return this.signUpAgencyForm.controls['ruc'];
  }


  proceedregister() {
    if (this.signUpAgencyForm.valid) {
      console.log(this.signUpAgencyForm.value);
      this.service.RegisterAgency(this.signUpAgencyForm.value).subscribe(result => {
        alert("Please contact admin for enable access.','Registered successfully")
        this.router.navigate(['sign-in'])
      });
      console.log("im not here baby")
    } else {
      alert("Please enter valid data.")
    }
  }

  ngOnInit(): void {

  }

  cancelSignUp(){
    console.log("Cancelled")
  }
  signUp(){}

}
