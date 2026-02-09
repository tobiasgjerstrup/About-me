import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDevelopment } from './system-development';

describe('SystemDevelopment', () => {
  let component: SystemDevelopment;
  let fixture: ComponentFixture<SystemDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemDevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
