/**
 * Created by jlch on 16/8/29.
 */
// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule }   from '@angular/forms';
// import { HttpModule }    from '@angular/http';
// // Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
// import { AppComponent }         from './app.component';
// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroService }          from './hero.service';
// import { HeroSearchComponent }  from './hero-search.component';
// import { routing }              from './app.routing';
// @NgModule({
//     imports: [
//         BrowserModule,
//         FormsModule,
//         HttpModule,
//         InMemoryWebApiModule.forRoot(InMemoryDataService),
//         routing
//     ],
//     declarations: [
//         AppComponent,
//         DashboardComponent,
//         HeroDetailComponent,
//         HeroesComponent,
//         HeroSearchComponent
//     ],
//     providers: [
//         HeroService,
//     ],
//     bootstrap: [ AppComponent ]
// })
// export class AppModule {
// }



// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent }  from './app.component';
// @NgModule({
//     imports:      [ BrowserModule ],
//     declarations: [ AppComponent ],
//     bootstrap:    [ AppComponent ]
// })
// export class AppModule { }

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
