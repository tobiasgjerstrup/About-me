import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendDevelopment } from './frontend-development';

describe('FrontendDevelopment', () => {
  let component: FrontendDevelopment;
  let fixture: ComponentFixture<FrontendDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendDevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
