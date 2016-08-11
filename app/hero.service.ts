import {Injectable} from '@angular/core';
// import {HEROES} from './mock-heroes';
import {Http}     from '@angular/http';
import {contentHeaders} from './common/headers';
import 'rxjs/add/operator/toPromise';

import {Hero} from "./hero";


@Injectable()
export class HeroService {
    /* getHeroes() {
     // return HEROES;
     return Promise.resolve(HEROES);
     }*/

    private heroesUrl = 'http://localhost/json/heros.php';  // URL to web api

    constructor(private http:Http) {
    }

    /**  Using Http.get */
    getHeroes() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    sendHeroes(hero) {
        let body = JSON.stringify(hero);
        console.log(body);
        this.http.post('http://localhost/json/create.php', body, {headers: contentHeaders})
            .subscribe(
                response => {
                    console.log(response.json());
                    localStorage.setItem('token', response.json().token);
                    // this.router.navigate(['/home']);
                },
                error => {
                    // alert(error.text());
                    console.log(error.text());
                }
            );
    }
}
