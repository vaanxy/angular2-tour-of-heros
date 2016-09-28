import { 
    Component,
    trigger,
    state,
    style,
    transition,
    animate }          from '@angular/core';
import { Router }      from '@angular/router';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
    selector:    'my-dashboard',
    templateUrl: 'app/hero/dashboard.component.html',
    styleUrls: [ 'app/hero/dashboard.component.css' ],
    animations: [
        trigger('fadeInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({opacity: 0}),
                animate('0.2s 100ms ease-out')
            ]),
            transition('* => void', [
                animate(200, style({opacity: 1}))
            ])
        ])

  ]
  
})
export class DashboardComponent { 
    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/hero', hero.id];
        this.router.navigate(link);
    }
}