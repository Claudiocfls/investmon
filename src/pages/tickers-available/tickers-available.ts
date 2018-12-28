import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExternalDataProvider } from '../../providers/external-data/external-data';
import { TickerDetailsPage } from '../ticker-details/ticker-details';
/**
 * Generated class for the TickersAvailablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickers-available',
  templateUrl: 'tickers-available.html',
})
export class TickersAvailablePage {

  data: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public extDataProv: ExternalDataProvider) {
        extDataProv.load()
        .then(data => {
          this.data = data._body;
          console.log("antes",this.data);
          this.data = (new Function("return " +this.data+ ";")());
          console.log("depois",this.data);
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TickersAvailablePage', this.data);
  }

  tickerSelected(event, ticker) {
    console.log("aqui era o ticker", ticker);
    this.navCtrl.push(TickerDetailsPage, {ticker: ticker});
  }

}
