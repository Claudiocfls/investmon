import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TickersAvailablePage } from '../pages/tickers-available/tickers-available';
import { TabsPage } from '../pages/tabs/tabs';

import { TickerInfoComponent } from '../components/ticker-info/ticker-info';
import { ExternalDataProvider } from '../providers/external-data/external-data';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    TabsPage,
    TickerInfoComponent,
    TickersAvailablePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TickersAvailablePage,
    TickerInfoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExternalDataProvider
  ]
})
export class AppModule {}