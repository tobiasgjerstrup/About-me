import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [NgOptimizedImage, RouterOutlet, RouterLinkWithHref],
    templateUrl: './home.html',
    styleUrl: './home.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
    readonly cards = [
        {
            imageSrc: '/images/card-backend.svg',
            imageAlt: 'Backend systems dashboard with signal line',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Backend Development',
            description: 'Creating robust and scalable server-side applications that power modern web experiences.',
            route: 'backend-development',
            theme: 'green',
        },
        {
            imageSrc: '/images/card-system.svg',
            imageAlt: 'Modular system blocks connected by lines',
            imageWidth: 600,
            imageHeight: 360,
            title: 'System Development',
            description: 'Building efficient and reliable software solutions tailored to meet complex business needs.',
            route: 'system-development',
            theme: 'orange',
        },
        {
            imageSrc: '/images/card-frontend.svg',
            imageAlt: 'Frontend interface with code editor and design tools',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Frontend Development',
            description: 'Crafting visually appealing and responsive interfaces that engage users effectively.',
            route: 'frontend-development',
            theme: 'blue',
        },
        {
            imageSrc: '/images/card-hardware.svg',
            imageAlt: 'Hardware chip with pins and circuitry',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Hardware Passion',
            description:
                'Exploring components, tuning performance, and building reliable rigs for real-world workloads.',
            route: 'hardware-passion',
            theme: 'orange',
        },
        {
            imageSrc: '/images/card-linux.svg',
            imageAlt: 'Linux terminal with command line interface and system monitoring tools',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Linux Server',
            description: 'Deploying secure, automated Linux services with clean monitoring and maintenance practices.',
            route: 'linux-server',
            theme: 'green',
        },
        {
            imageSrc: '/images/card-windows.svg',
            imageAlt: 'Windows server with Internet Information Services and system management tools',
            imageWidth: 600,
            imageHeight: 360,
            title: 'Windows Server',
            description:
                'Managing Windows infrastructure, Internet Information Services, and services to support business needs.',
            route: 'windows-server',
            theme: 'blue',
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

    public onKeydown($event: KeyboardEvent) {
        if ($event.key === 'Enter' || $event.key === ' ') {
            const target = $event.target as HTMLElement;
            target.click();
        }
    }
}
