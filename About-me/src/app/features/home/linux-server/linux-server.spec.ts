import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxServer } from './linux-server';

describe('LinuxServer', () => {
  let component: LinuxServer;
  let fixture: ComponentFixture<LinuxServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxServer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinuxServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
