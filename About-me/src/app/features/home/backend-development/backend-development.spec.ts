import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendDevelopment } from './backend-development';

describe('BackendDevelopment', () => {
  let component: BackendDevelopment;
  let fixture: ComponentFixture<BackendDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendDevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
