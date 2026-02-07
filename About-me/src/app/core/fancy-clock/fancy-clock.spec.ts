import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyClock } from './fancy-clock';

describe('FancyClock', () => {
    let component: FancyClock;
    let fixture: ComponentFixture<FancyClock>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FancyClock],
        }).compileComponents();

        fixture = TestBed.createComponent(FancyClock);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
