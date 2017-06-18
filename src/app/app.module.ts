import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Card} from '../directives/card/card';
import {CardSetsProvider} from '../providers/card-set/card-set';
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        Card
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CardSetsProvider
    ]
})
export class AppModule {
}
