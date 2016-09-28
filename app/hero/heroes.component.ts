import { 
    Component,
    OnInit,    
    trigger,
    state,
    style,
    transition,
    animate
 } from '@angular/core';
import { Router }            from '@angular/router';


import { Hero }              from './hero';
import { HeroService }       from './hero.service'

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/hero/heroes.component.html',
    styleUrls: [ 'app/hero/heroes.component.css' ],
    animations: [
        trigger('flyInOut', [
            // state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({opacity: 0, transform: 'translateX(-100%)'}),
                animate('0.2s 0 ease-out')
            ]),
            transition('* => void', [
                animate('0.2s 0 ease-in', style({opacity: 1, transform: 'translateX(-100%)'}))
            ])
        ])
    ]
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
        this.router.navigate(['/hero', this.selectedHero.id]);
    }
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
        .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
        });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
        });
    }

};