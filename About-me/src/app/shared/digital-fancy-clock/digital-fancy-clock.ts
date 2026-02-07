import { Component, signal } from '@angular/core';
import { digits } from './digits';

type ClockHands = {
    primary: number;
    secondary: number;
};

type ClockState = {
    hands: ClockHands;
};

type ClockShapes = Array<' ' | '┘' | '└' | '┐' | '┌' | '-' | '|'>;

@Component({
    selector: 'app-digital-fancy-clock',
    standalone: true,
    imports: [], // Add CommonModule if needed
    templateUrl: './digital-fancy-clock.html',
    styleUrl: './digital-fancy-clock.scss',
})
export class DigitalFancyClock {
    clockGrids = signal<Array<ClockState[]>>([]);
    intervalId?: number;
    clockShapes: any = {
        ' ': [135, 135],
        '┘': [180, 270],
        '└': [0, 270],
        '┐': [90, 180],
        '┌': [0, 90],
        '-': [0, 180],
        '|': [90, 270],
    };

    ngOnInit() {
        const clockGrids: Array<ClockState[]> = [];
        for (let j = 0; j < 6; j++) {
            clockGrids[j] = [];
            for (let i = 0; i < 4 * 6; i++) {
                clockGrids[j].push({
                    hands: { primary: (i * 6) % 360, secondary: (i * 6 + 15) % 360 },
                });
            }
        }
        console.log(clockGrids);
        this.clockGrids.set(clockGrids);

        this.intervalId = window.setInterval(() => {
            this.updateClocks();
        }, 1000);
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    updateClocks() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const toTwoDigits = (n: number) => {
            const s = n.toString().padStart(2, '0');
            return [Number(s[0]), Number(s[1])];
        };
        const timeDigits: number[] = [...toTwoDigits(hours % 24), ...toTwoDigits(minutes), ...toTwoDigits(seconds)];

        const oldGrids = this.clockGrids();
        const newGrids = oldGrids.map((row, gridId) =>
            row.map((clock, clockId) => ({
                hands: { primary: this.clockShapes[digits[timeDigits[gridId]][clockId][0]][0], secondary: this.clockShapes[digits[timeDigits[gridId]][clockId][0]][1] }
            }))
        );

        this.clockGrids.set(newGrids);
    }
}
