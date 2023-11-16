import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  types = ['tourist', 'agency'];
  typeSelect = '';
  tried = false;

  //image?: "assethttps://as1.ftcdn.net/v2/jpg/01/51/15/00/1000_F_151150048_iw9b4g2EivCwQVWZCJC789zoYklr4Utc.jpg";

  constructor(private builder: FormBuilder, private service: AuthService,
              private router: Router) {
    sessionStorage.clear();

  }
  result: any;

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });


  proceedlogin() {
    if (this.loginform.valid) {
      try {
        this.loginTourist();
      } catch (e: any){
        console.log(e);
      } finally {
        this.loginAgency()
        console.log('finally');
      }}
    else{
      alert('Please enter valid data.')
    }
  }

  loginTourist(){
    this.service.GetUserByEmailAndPasswordTourist(this.loginform.value.email,this.loginform.value.password).subscribe(item => {
      this.result = item;
      console.log(this.result)
      if (this.result) {
        sessionStorage.setItem('userid', this.result.id);
        sessionStorage.setItem('userType', 'tourist');
        console.log('funciono')
        this.router.navigate(['home']);
      }});
  }

  loginAgency(){
    this.service.GetUserByEmailAndPasswordAgency(this.loginform.value.email,this.loginform.value.password).subscribe(item => {
      this.result = item;
      console.log(this.result)
      if (this.result) {
        sessionStorage.setItem('userid', this.result.id);
        sessionStorage.setItem('userType', 'agency');
        console.log('funciono')
        this.router.navigate(['home']);
      }});
  }

  placeRegister(){
    switch (this.typeSelect) {
      case 'tourist' : this.router.navigate(['sign-up-tourist']); break;
      case 'agency' : this.router.navigate(['sign-up-agency']); break;
    }
  }


}

