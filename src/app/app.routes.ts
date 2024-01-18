import { Routes } from '@angular/router';
import { Imperatively } from './imperatively/imperatively';
import { Defer } from './defer/defer';
import { Viewport } from './viewport/viewport';

export const routes: Routes = [
    {
        path: 'imperatively',
        component: Imperatively
    },
    {
        path: 'defer',
        component: Defer
    },
    {
        path: 'defer-viewport',
        component: Viewport
    }
];
