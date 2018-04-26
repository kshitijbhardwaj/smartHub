import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {UserRegister} from "../pages/register/register";
import {WelcomePage} from "../pages/welcome/welcome";
import {OptverificationPage} from "../pages/optverification/optverification";
import {SelectapartmentPage} from "../pages/selectapartment/selectapartment";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    HomePage,
    ListPage,
    UserRegister,
    OptverificationPage,
    SelectapartmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    HomePage,
    ListPage,
    UserRegister,
    OptverificationPage,
    SelectapartmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
