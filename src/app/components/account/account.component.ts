import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Tourist } from 'src/app/models/tourist';
import { TouristService } from 'src/app/services/tourist.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  userId = sessionStorage.getItem('userid') as string;

  currentTourist: Tourist | undefined = undefined;

  touristData = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  imgUrl = '../../../assets/user-icon.webp';

  constructor(
    private touristService: TouristService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.touristService.getById(this.userId).subscribe((tourist) => {
      this.currentTourist = tourist;

      this.touristData.setValue({
        name: tourist.name,
        email: tourist.email,
        phone: String(tourist.phoneNumber),
        location: tourist.address,
      });

      this.imgUrl = tourist.photo;
    });
  }

  updateTourist(): void {
    const { name, email, location, phone } = this.touristData.value;

    if (!this.currentTourist) return;

    this.touristService
      .update({
        ...this.currentTourist,
        name: String(name),
        email: String(email),
        phoneNumber: Number(phone),
        address: String(location),
      })
      .subscribe();
  }
}
