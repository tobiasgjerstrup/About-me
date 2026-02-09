import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        children: [
            {
                path: 'backend-development',
                loadComponent: () =>
                    import('./features/home/backend-development/backend-development').then((m) => m.BackendDevelopment),
            },
            {
                path: 'system-development',
                loadComponent: () =>
                    import('./features/home/system-development/system-development').then((m) => m.SystemDevelopment),
            },
            {
                path: 'frontend-development',
                loadComponent: () =>
                    import('./features/home/frontend-development/frontend-development').then((m) => m.FrontendDevelopment),
            },
            {
                path: 'hardware-passion',
                loadComponent: () =>
                    import('./features/home/hardware-passion/hardware-passion').then((m) => m.HardwarePassion),
            },
            {
                path: 'linux-server',
                loadComponent: () =>
                    import('./features/home/linux-server/linux-server').then((m) => m.LinuxServer),
            },
            {
                path: 'windows-server',
                loadComponent: () =>
                    import('./features/home/windows-server/windows-server').then((m) => m.WindowsServer),
            },
        ],
    },
];
