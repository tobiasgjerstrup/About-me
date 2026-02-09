import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwarePassion } from './hardware-passion';

describe('HardwarePassion', () => {
  let component: HardwarePassion;
  let fixture: ComponentFixture<HardwarePassion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwarePassion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwarePassion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
