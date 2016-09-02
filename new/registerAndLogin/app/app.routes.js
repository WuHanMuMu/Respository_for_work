/**
 * Created by jlch on 16/8/4.
 */
"use strict";
// Angular 路由器是由多个服务 (ROUTER_PROVIDERS) 和多个指令 (ROUTER_DIRECTIVES) 以及一个配置装饰器 (RouteConfig) 组成的
var router_1 = require('@angular/router');
// import { HeroesComponent }              from './heroes.component';
// import { DashboardComponent }           from './dashboard.component';
// import { HeroDetailComponent }          from './hero-detail.component';
var Jlch_register_login_component_1 = require('./Jlch-register-login.component');
var Jlch_member_component_1 = require('./Jlch-member.component');
var text_component_1 = require('./text/text.component');
//Angular路由器的组成,(directive;provider;routerConfig)
var routes = [
    // {
    //     //英雄板
    //     path: 'heroes',//路径
    //     component: HeroesComponent//组件
    // },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },
    // {
    //     path: '',
    //     redirectTo: '/heroes',//如果没有这个地址,就指向dashboard
    //     pathMatch: 'full'
    // },
    {
        path: '',
        redirectTo: '/register-login',
        pathMatch: 'full'
    },
    // {
    //     //英雄详情界面
    //     //配置带参数的路由
    //     path: 'detail/:id',//冒号是一个占位符,当导航到这个组件的时候,它将被填入一个特定英雄的id
    //     component: HeroDetailComponent
    // },
    {
        path: 'register-login',
        component: Jlch_register_login_component_1.JlchRegisterLoginComponent,
    },
    {
        path: 'member',
        component: Jlch_member_component_1.JlchMemberComponent,
    },
    {
        path: 'text',
        component: text_component_1.textComponent,
    },
];
// 定义第一个路由——到 HeroesComponent 的路由
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map