/**
 * Created by jlch on 16/8/29.
 */
import { NgModule}       from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders }  from './app.routes';
import { AppComponent }  from './app.component';


@NgModule({
    imports:      [ BrowserModule,routing,FormsModule ],
    declarations: [ AppComponent ],
    // providers:    [ appRoutingProviders ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
