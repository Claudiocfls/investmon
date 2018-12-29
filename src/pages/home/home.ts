import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseDataProvider } from '../../providers/firebase-data/firebase-data';
import { PurchaseDetailsPage } from '../purchase-details/purchase-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tickerMonitored: any;
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseDataProvider) {
    this.tickerMonitored = this.firebaseProvider.list();
    console.log("tickers monitorados",this.tickerMonitored);
  }

  purchaseSelected(ticker) {
    console.log("aqui",ticker);
    this.navCtrl.push(PurchaseDetailsPage, ticker);
  }

}
