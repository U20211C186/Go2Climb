import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-tourist',
  templateUrl: './sign-up-tourist.component.html',
  styleUrls: ['./sign-up-tourist.component.css']
})
export class SignUpTouristComponent implements OnInit{
  signUpTouristForm: FormGroup;

  constructor(public builder: FormBuilder, private service: AuthService, private router: Router) {
    this.signUpTouristForm = this.builder.group({
      email: this.builder.control('',Validators.compose([Validators.email, Validators.required])),
      password: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(8)])),
      name: this.builder.control('',Validators.compose([Validators.required])),
      phoneNumber: this.builder.control('',Validators.compose([Validators.required, Validators.maxLength(9)])),
      address: this.builder.control('',Validators.compose([Validators.required])),
      lastName:this.builder.control('',Validators.compose([Validators.required])),
      photo:'https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg'

    })
  }

  get email(){
    return this.signUpTouristForm.controls['email'];
  }

  get password(){
    return this.signUpTouristForm.controls['password'];
  }

  get name(){
    return this.signUpTouristForm.controls['name'];
  }

  get phoneNumber(){
    return this.signUpTouristForm.controls['phoneNumber'];
  }

  get lastName(){
    return this.signUpTouristForm.controls['lastName'];
  }

  get address(){
    return this.signUpTouristForm.controls['address'];
  }

  proceedregister() {
    if (this.signUpTouristForm.valid) {
      console.log(this.signUpTouristForm.value);
      this.service.RegisterUser(this.signUpTouristForm.value).subscribe(result => {
        alert("Please contact admin for enable access.','Registered successfully")
        this.router.navigate(['sign-in'])
      });
    } else {
      alert("Please enter valid data.")
    }
  }

  ngOnInit(): void {

  }

  cancelSignUp(){
    console.log("Cancelled")
  }
  signUp(){
    this.proceedregister()
  }
}
