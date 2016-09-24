import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf }        from '@angular/core';

import { SharedModule }        from '../shared/shared.module';
import { TitleComponent }       from './title.component';
import { UserService }          from './user.service';
import { UserServiceConfig }    from './user.service';


import './rxjs-extensions';

@NgModule({
    imports:      [ SharedModule ],
    declarations: [ TitleComponent ],
    exports:      [ TitleComponent ],
    providers:    [ UserService ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
            'CoreModule已加载. 仅需在AppModule中导入它');
        }
    }
    static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        };
    }
}
