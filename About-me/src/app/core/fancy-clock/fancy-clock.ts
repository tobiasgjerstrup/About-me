import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    PLATFORM_ID,
    computed,
    inject,
    signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-fancy-clock',
    imports: [],
    templateUrl: './fancy-clock.html',
    styleUrl: './fancy-clock.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FancyClock implements OnInit, OnDestroy {
    private readonly platformId = inject(PLATFORM_ID);
    private readonly now = signal(environment.customDate ?? new Date());
    private timerId: number | null = null;

    readonly hourTransform = computed(() => {
        const now = this.now();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const angle = hours * 30 + minutes * 0.5 - 90;
        return `rotate(${angle}deg)`;
    });

    readonly minuteTransform = computed(() => {
        const now = this.now();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const angle = minutes * 6 + seconds * 0.1 - 90;
        return `rotate(${angle}deg)`;
    });

    readonly secondTransform = computed(() => {
        const seconds = this.now().getSeconds();
        return `rotate(${seconds * 6 - 90}deg)`;
    });

    ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.timerId = window.setInterval(() => this.now.set(environment.customDate ?? new Date()), 1000);
    }

    ngOnDestroy(): void {
        if (this.timerId !== null) {
            window.clearInterval(this.timerId);
        }
    }
}
