import { Component, OnInit }        from '@angular/core';
import { Router }         from '@angular/router';


import { Hero }           from './hero';
import { HeroService } from './hero.service'

@Component({
    selector: 'my-heroes',
    template: `
        <h2>我的英雄们</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" 
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <div *ngIf="selectedHero">
        <h2>
            {{selectedHero.name | uppercase}} 是我的英雄
        </h2>
        <button (click)="gotoDetail()">察看英雄详情</button>
        </div>
        `,
    styleUrls: [ 'app/heroes.component.css' ]
})
export class HeroesComponent implements OnInit {

    constructor(private heroService: HeroService,
                private router: Router) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    selectedHero: Hero;
    heroes: Hero[];
    

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };

    getHeroes(): void {
        // this.heroService.getHeroes()
        //     .then(heroes => this.heroes = heroes);
        this.heroService.getHeroesSlowly()
            .then(heroes => this.heroes = heroes);;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
};