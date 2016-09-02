"use strict";
/**
 * Created by jlch on 16/8/29.
 */
var router_1 = require('@angular/router');
var weChat_component_1 = require('weChat.component');
var first_component_1 = require('first.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/firstComponent',
        pathMatch: 'full'
    },
    // {
    //     //英雄详情界面
    //     //配置带参数的路由
    //     path: 'detail/:id',//冒号是一个占位符,当导航到这个组件的时候,它将被填入一个特定英雄的id
    //     component: HeroDetailComponent
    // },
    {
        path: 'firstComponent',
        component: first_component_1.FirstComponent,
    },
    {
        path: 'weChat',
        component: weChat_component_1.WeChatComponent,
    },
];
// export const appRoutingProviders: any[] = [
//
// ];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map