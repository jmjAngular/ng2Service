/**
 * Created by jmj on 11/8/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import {AppComponent}  from './app.component';
import {HeroService} from "./hero.service";

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [HeroService]
})
export class AppModule {
}
