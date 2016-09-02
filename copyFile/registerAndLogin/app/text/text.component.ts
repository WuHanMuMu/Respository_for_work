/**
 * Created by jlch on 16/8/17.
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'my-text',
    templateUrl: 'app/text/text.component.html',
    styleUrls: ['app/text/text.component.css'],
})

export class textComponent{

    constructor(private router:Router){

    }
    popToLogin(){
        let link = ['register-login'];
        this.router.navigate(link);
    }
    popToMember(){
        let link = ['member'];
        this.router.navigate(link);
    }

}