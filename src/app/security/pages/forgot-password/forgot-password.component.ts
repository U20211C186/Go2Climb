import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public builder: FormBuilder, private router: Router) {
    this.firstFormGroup = this.builder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.secondFormGroup = this.builder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  redirectToSignIn(){
    this.router.navigate(['sign-in']);
  }

  ngOnInit(): void {
  }

}
