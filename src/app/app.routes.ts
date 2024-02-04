import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'defer-block',
        loadComponent: () => import("./demos/defer-block/defer-block.component").then(c => c.DeferBlockComponent)
    },
    {
        path: 'non-defer-block',
        loadComponent: () => import("./demos/non-defer-block/non-defer-block.component").then(c => c.NonDeferBlockComponent)
    },
    {
        path: '',
        redirectTo: 'non-defer-block',
        pathMatch: 'full'
    }
];
