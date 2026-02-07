import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrl: './home.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
    readonly cards = Array.from({ length: 6 });

    onCardMove(event: MouseEvent): void {
        const cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
            const htmlCard = card as HTMLElement;
            const rect = htmlCard.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            this.setCardMousePosition(htmlCard, x, y);
        });
    }

    private setCardMousePosition(card: HTMLElement, x: number, y: number): void {
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
}
