import { ModuleWithProviders }  from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ContactComponent }     from './contact.component';

const contactRouters = [
     { path: 'contact', component: ContactComponent}
]
export const routing: ModuleWithProviders = RouterModule.forChild(contactRouters);
