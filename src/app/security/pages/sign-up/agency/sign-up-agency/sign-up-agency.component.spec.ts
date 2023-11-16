import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAgencyComponent } from './sign-up-agency.component';

describe('SignUpAgencyComponent', () => {
  let component: SignUpAgencyComponent;
  let fixture: ComponentFixture<SignUpAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
