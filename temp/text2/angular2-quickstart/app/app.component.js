"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jlch on 16/8/4.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import 语句告诉系统，它能从附近名叫 hero.service 的文件中获得 HeroService 组件。 模块名 ( 又叫模块 ID) 通常和去掉扩展名后的文件名相同。
var hero_service_1 = require('./hero.service');
require('./rxjs-extensions');
// import { HeroesComponent } from './heroes.component';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes(AppComponent文件中)';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <!--\u544A\u8BC9\u5E94\u8BE5\u5BFC\u822A\u5230\u54EA\u91CC-->\n    <nav>\n        <a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a>\n        <a [routerLink]=\"['/heroes']\">heroes</a>\n    </nav>\n    <my-heroes></my-heroes>\n    <router-outlet></router-outlet>\n  ",
            // directives: [HeroesComponent],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [hero_service_1.HeroService],
            styleUrls: ['app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map