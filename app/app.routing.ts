import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './hero/heroes.component';
import { DashboardComponent }   from './hero/dashboard.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
import { ContactComponent }     from './contact/contact.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'hero',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        loadChildren: 'app/contact/contact.module#ContactModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);