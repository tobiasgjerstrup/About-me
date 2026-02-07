import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalFancyClock } from './digital-fancy-clock';

describe('DigitalFancyClock', () => {
  let component: DigitalFancyClock;
  let fixture: ComponentFixture<DigitalFancyClock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalFancyClock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalFancyClock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
