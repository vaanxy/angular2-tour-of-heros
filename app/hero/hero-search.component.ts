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
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { HeroSearchService } from './hero-search.service';
import { Hero }              from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero/hero-search.component.html',
    styleUrls:  [ 'app/hero/hero-search.component.css' ],
    animations: [
        trigger(
            'expand',
            [
                state('focused', style({width: '50%', backgroundColor: 'white'})),
                state('blured', style({width: '*', backgroundColor: '*'})),
                transition(
                    'focused <=> blured', [animate(200)]
                )
            ]
        ),
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

    ],
    providers: [ HeroSearchService ]
})
export class HeroSearchComponent implements OnInit {
    focusState: string = 'blured';
    focus(): void { this.focusState = 'focused' }
    blur(): void { this.focusState = 'blured' }
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) {}
  // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
    this.heroes = this.searchTerms
        .debounceTime(300)        // wait for 300ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
        .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
        });
    }
    gotoDetail(hero: Hero): void {
        let link = ['/hero', hero.id];
        this.router.navigate(link);
    }
}
