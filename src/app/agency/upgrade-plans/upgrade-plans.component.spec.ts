import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradePlansComponent } from './upgrade-plans.component';

describe('UpgradePlansComponent', () => {
  let component: UpgradePlansComponent;
  let fixture: ComponentFixture<UpgradePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradePlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
