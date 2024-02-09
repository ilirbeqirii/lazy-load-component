import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'defer-block',
        loadComponent: () => import("./demos/defer-block/user-profile.component").then(c => c.UserProfileComponent)
    },
    {
        path: 'non-defer-block',
        loadComponent: () => import("./demos/non-defer-block/user-profile.component").then(c => c.UserProfileComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
