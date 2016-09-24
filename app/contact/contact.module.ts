import { NgModule }           from '@angular/core';



import { SharedModule }       from '../shared/shared.module';

// CommonModule 和 FormsModule 已经放入SharedModule中了，不需要多次导入
// import { CommonModule }       from '@angular/common';
// import { FormsModule }        from '@angular/forms';

// 同样，一些可复用的指令也在已经放入SharedModule中了，无需要多次导入
// import { AwesomePipe }        from './awesome.pipe';
// import { HighlightDirective } from './highlight.directive';
import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';

import { routing }            from './contact.routing'

@NgModule({
    imports:      [ SharedModule, routing ],
    declarations: [ ContactComponent ],
    providers:    [ ContactService ]
})
export class ContactModule { }
