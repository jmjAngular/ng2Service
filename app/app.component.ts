import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {stringify} from "querystring";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    // providers: [HeroService] // this already included in app.module.ts
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes:Hero[];
    selectedHero:Hero;

    constructor(private heroService:HeroService) {
    }

    getHeroes() {
        // this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        console.log('getHeroes list...');
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
        console.log(hero);
    }
}
