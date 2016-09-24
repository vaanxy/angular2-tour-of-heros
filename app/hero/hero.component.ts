import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';


import { Hero }              from './hero';
import { UserService }       from '../core/user.service'

@Component({
    selector: 'my-hero',
    template: 
    `
        <h2>{{user}}的英雄们</h2>
        <router-outlet></router-outlet>
    `
})
export class HeroComponent {
    user: string;
    constructor(private userService: UserService,
                private router: Router) {
                    this.user = userService.userName;
                }

}