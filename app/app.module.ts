import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent} from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from './hero.service'

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule, 
        routing 
    ],
    declarations: [ 
        AppComponent, 
        HeroesComponent, 
        HeroDetailComponent, 
        DashboardComponent 
    ],
    bootstrap: [ AppComponent ],
    providers: [ HeroService ]
})
export class AppModule {

}

