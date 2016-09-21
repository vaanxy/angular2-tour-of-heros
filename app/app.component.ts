import {Component} from '@angular/core';
import {CoursesComponent} from './courses.component'
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <h2>我的英雄们</h2>
                <ul class="heroes">
                    <li *ngFor="let hero of heroes" 
                    [class.selected]="hero === selectedHero"
                    (click)="onSelect(hero)">
                        <span class="badge">{{hero.id}}</span> {{hero.name}}
                    </li>
                </ul>
                <div *ngIf="selectedHero">
                    <h2>{{selectedHero.name}} 详情!</h2>
                    <div>
                        <label>id: </label>{{selectedHero.id}}
                    </div>
                    <div>
                        <input [(ngModel)]="selectedHero.name" placeholder="给你的英雄起个名字吧！">
                    </div>
                </div>`,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
        `]
})
export class AppComponent {
    title = '英雄编辑器';
    selectedHero: Hero;
    heroes = HEROES;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };
}

export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
  { id: 1,  name: '暴风城的勇士'},
  { id: 11, name: 'Mr. 赖斯' },
  { id: 12, name: '漩涡鸣人' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr 脑残' },
  { id: 19, name: 'Magma' },
  { id: 20, name: '龙卷风' }
];