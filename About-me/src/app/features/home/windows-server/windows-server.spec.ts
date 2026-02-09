import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsServer } from './windows-server';

describe('WindowsServer', () => {
  let component: WindowsServer;
  let fixture: ComponentFixture<WindowsServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsServer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
