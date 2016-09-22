import { Component } from '@angular/core';
import { Input }      from '@angular/core';
import { Hero }      from './hero';


@Component({
    selector:   'my-hero-detail',
    template:   `                
        <div *ngIf="hero">
            <h2>{{hero.name}} 详情!</h2>
            <div>
                <label>id: </label>{{hero.id}}
            </div>
            <div>
                <input [(ngModel)]="hero.name" placeholder="给你的英雄起个名字吧！">
            </div>
        </div>`
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}