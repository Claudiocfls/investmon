import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ExternalDataProvider } from '../../providers/external-data/external-data';
import { TickerDetailsPage } from '../ticker-details/ticker-details';

@IonicPage()
@Component({
  selector: 'page-tickers-available',
  templateUrl: 'tickers-available.html',
})
export class TickersAvailablePage {

  data: any;
  suggestions: any;
  symbolToSearch = "";
  loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public extDataProv: ExternalDataProvider,
    public loadingCtrl: LoadingController) {
      this.suggestions = [];
      this.loading = this.loadingCtrl.create({
        content: 'Procurando...'
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TickersAvailablePage', this.data);
  }

  tickerSelected(event, ticker) {
    this.navCtrl.push(TickerDetailsPage, {ticker: ticker});
  }

  onInput(event) {
    if(event.cancelable){
      this.symbolToSearch = "";
    } else {
      this.symbolToSearch = event.srcElement.value;
    }
    if(this.symbolToSearch.length != 0){
      this.loading.present();
      this.extDataProv.search(this.symbolToSearch)
      .then(data => {
        console.log(data);
        this.suggestions = (new Function("return " +data["_body"]+ ";")());
        this.suggestions = this.suggestions.bestMatches;
        this.loading.dismiss();
      })
    } else {
      this.suggestions = [];
    }
    console.log(this.symbolToSearch);
  }
}
