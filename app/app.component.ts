import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <app-title [subtitle]="subtitle"></app-title>
        <nav>
            <a routerLink="/hero/dashboard" routerLinkActive="active">仪表盘</a>
            <a routerLink="/hero/all" routerLinkActive="active">英雄列表</a>
            <a routerLink="/contact" routerLinkActive="active">英雄通讯录</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent {
    subtitle: string = '(v4)';
}