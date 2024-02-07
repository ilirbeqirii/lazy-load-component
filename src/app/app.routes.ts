import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'defer-block',
        loadComponent: () => import("./demos/defer-block/defer-block.component").then(c => c.DeferBlockComponent)
    },
    {
        path: 'non-defer-block',
        loadComponent: () => import("./demos/non-defer-block/user-profile.component").then(c => c.UserProfileComponent)
    },
    {
        path: '',
        redirectTo: 'non-defer-block',
        pathMatch: 'full'
    }
];
