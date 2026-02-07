import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-home',
    imports: [NgOptimizedImage],
    templateUrl: './home.html',
    styleUrl: './home.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
    readonly cards = [
        {
            imageSrc: '/images/card-placeholder.svg',
            imageAlt: 'Abstract gradient with geometric shapes',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Backend Development',
            description: 'Creating robust and scalable server-side applications that power modern web experiences.',
        },
        {
            imageSrc: '/images/card-placeholder.svg',
            imageAlt: 'Abstract gradient with geometric shapes',
            imageWidth: 600,
            imageHeight: 360,
            title: 'System Development',
            description: 'Building efficient and reliable software solutions tailored to meet complex business needs.',
        },
        {
            imageSrc: '/images/card-placeholder.svg',
            imageAlt: 'Abstract gradient with geometric shapes',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Frontend Development',
            description: 'Crafting visually appealing and responsive interfaces that engage users effectively.',
        },
        {
            imageSrc: '/images/card-placeholder.svg',
            imageAlt: 'Abstract gradient with geometric shapes',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Hardware Passion',
            description: 'Exploring components, tuning performance, and building reliable rigs for real-world workloads.',
        },
        {
            imageSrc: '/images/card-placeholder.svg',
            imageAlt: 'Abstract gradient with geometric shapes',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Linux Server',
            description: 'Deploying secure, automated Linux services with clean monitoring and maintenance practices.',
        },
        {
            imageSrc: '/images/card-placeholder.svg',
            imageAlt: 'Abstract gradient with geometric shapes',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Windows Server',
            description: 'Managing Windows infrastructure, Internet Information Services, and services to support business needs.',
        },
    ];

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
