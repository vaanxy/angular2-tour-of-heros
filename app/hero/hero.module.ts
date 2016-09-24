import { NgModule }            from '@angular/core';
import { SharedModule }        from '../shared/shared.module';

import { HeroComponent }       from './hero.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService }         from './hero.service';
import { HeroSearchService }   from './hero-search.service';
import { routing }             from './hero.routing';

@NgModule({
    imports: [ SharedModule, routing ],
    declarations: [
        HeroComponent,
        HeroesComponent, 
        HeroDetailComponent, 
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService,
        HeroSearchService
    ]
})
export class HeroModule {

}