/**
 * Created by jlch on 16/8/9.
 */
//仪表盘 能够导航到一个选定的英雄
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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//装饰器
var JlchRegisterLoginComponent = (function () {
    function JlchRegisterLoginComponent(router) {
        this.router = router;
    }
    JlchRegisterLoginComponent.prototype.linkToLogin = function () {
        var ua = navigator.userAgent.toLowerCase();
        var isWeixin = ua.indexOf('micromessenger') != -1;
        var isAndroid = ua.indexOf('android') != -1;
        var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
        if (!isWeixin) {
            document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/connect/zh_CN/htmledition/style/wap_err1a9853.css">';
            document.body.innerHTML = '<div class="page_msg"><div class="inner"><span class="msg_icon_wrp"><i class="icon80_smile"></i></span><div class="msg_content"><h4>请在微信客户端打开链接</h4></div></div></div>';
        }
        else {
            var linkUrl = 'http://m.ane56.com'; // var在运行的时候可以多次赋值，let只能赋值一次，再次赋值会报错.
            window.open(linkUrl); // window.location.href = linkUrl;//刷新本页面跳转
        }
    };
    JlchRegisterLoginComponent.prototype.gotoMember = function () {
        var link = ['/member']; //两个元素,目标路由的路径和一个路由参数对象
        this.router.navigate(link);
    };
    JlchRegisterLoginComponent = __decorate([
        core_1.Component({
            selector: 'my-jlch-register-login',
            templateUrl: 'app/jlch-register-login.component.html',
            styleUrls: ['app/jlch-register-login.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], JlchRegisterLoginComponent);
    return JlchRegisterLoginComponent;
}());
exports.JlchRegisterLoginComponent = JlchRegisterLoginComponent;
//# sourceMappingURL=Jlch-register-login.component.js.map