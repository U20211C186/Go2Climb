import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTouristComponent } from './sign-up-tourist.component';

describe('SignUpTouristComponent', () => {
  let component: SignUpTouristComponent;
  let fixture: ComponentFixture<SignUpTouristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpTouristComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
