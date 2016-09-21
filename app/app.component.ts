import {Component} from '@angular/core';
import {CoursesComponent} from './courses.component'
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <h2>{{hero.name}} 详情!</h2>
                <div>
                    <label>id: </label>{{hero.id}}
                </div>
                <div>
                    <input [(ngModel)]="hero.name" placeholder="给你的英雄起个名字吧！">
                </div>`
})
export class AppComponent {
    title = '英雄编辑器';
    hero: Hero = {
        id: 1,
        name: '暴风城的勇士'
    };
}

export class Hero {
    id: number;
    name: string;
}