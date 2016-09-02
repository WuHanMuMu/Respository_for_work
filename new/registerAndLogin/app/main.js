/**
 * Created by jlch on 16/8/3.
 */
// import { bootstrap }    from '@angular/platform-browser-dynamic';
// import { HTTP_PROVIDERS } from '@angular/http';
//
// import { AppComponent } from './app.component';
// import {appRouterProviders} from './app.routes';//导入组件路由器,并且把他添加到bootstrap的数组参数中让它在此应用中可用
//
// bootstrap(AppComponent,[
//     appRouterProviders,
//     HTTP_PROVIDERS
// ]);
"use strict";
// Imports for loading & configuring the in-memory web api
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
// import { InMemoryDataService }               from './in-memory-data.service';
// The usual bootstrapping imports
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    http_2.HTTP_PROVIDERS,
    { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
]);
/*
* 定出程序的主界面
*
* bootstrap( 引导 ) 函数
* */ 
//# sourceMappingURL=main.js.map