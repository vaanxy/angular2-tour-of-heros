import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';


import { routing } from './app.routing';
import { AppComponent} from './app.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
// core module
import { CoreModule }     from './core/core.module';
// shared module
import { SharedModule }   from './shared/shared.module';
// contact module
import { ContactModule }  from './contact/contact.module';
// hero codule
import { HeroModule }     from './hero/hero.module';


@NgModule({
    imports: [ 
        BrowserModule, 
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        SharedModule,
        CoreModule.forRoot({userName: 'Mr. 花'}),
        HeroModule,
        ContactModule,
        routing
    ],
    declarations: [ 
        AppComponent
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {

}

