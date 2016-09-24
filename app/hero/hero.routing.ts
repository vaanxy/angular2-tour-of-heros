import { ModuleWithProviders }  from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeroComponent }        from './hero.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
    
const heroRouters = [
    { 
        path: 'hero',
        component: HeroComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'all', component: HeroesComponent },
            { path: ':id', component: HeroDetailComponent }
        ] 
    }
]
export const routing: ModuleWithProviders = RouterModule.forChild(heroRouters);