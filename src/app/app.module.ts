import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TickersAvailablePage } from '../pages/tickers-available/tickers-available';
import { TickerDetailsPage } from '../pages/ticker-details/ticker-details';
import { PurchaseDetailsPage } from '../pages/purchase-details/purchase-details';
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../settings';

import { TickerInfoComponent } from '../components/ticker-info/ticker-info';
import { TickerListComponent } from '../components/ticker-list/ticker-list';
import { NewsCardComponent } from '../components/news-card/news-card';

import { ExternalDataProvider } from '../providers/external-data/external-data';
import { FirebaseDataProvider } from '../providers/firebase-data/firebase-data';
import { NewsProvider } from '../providers/news/news';

import { SearchPipe } from '../pipes/search/search';


@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    TabsPage,
    TickerInfoComponent,
    TickerListComponent,
    TickersAvailablePage,
    TickerDetailsPage,
    PurchaseDetailsPage,
    NewsCardComponent,
    NewsPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TickersAvailablePage,
    TickerInfoComponent,
    TickerListComponent,
    TickerDetailsPage,
    PurchaseDetailsPage,
    NewsCardComponent,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExternalDataProvider,
    FirebaseDataProvider,
    NewsProvider
  ]
})
export class AppModule {}