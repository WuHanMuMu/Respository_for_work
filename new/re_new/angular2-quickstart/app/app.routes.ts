/**
 * Created by jlch on 16/8/29.
 */
import { Routes,RouterModule }  from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { WeChatComponent } from 'weChat.component';
import { FirstComponent } from 'first.component';

const appRoutes: Routes = [
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
        component: FirstComponent,
    },
    {
        path: 'weChat',
        component: WeChatComponent,
    },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);