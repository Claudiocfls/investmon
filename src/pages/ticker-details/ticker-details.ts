import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExternalDataProvider } from '../../providers/external-data/external-data';
/**
 * Generated class for the TickerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticker-details',
  templateUrl: 'ticker-details.html',
})
export class TickerDetailsPage {
  
  ticker: any;
  info: any;
  data: any;
  keys: any;
  lastInfoPrice = "Carregando...";
  lastInfoUpdate: "Carregando...";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public extDataProv: ExternalDataProvider) {
      this.ticker = this.navParams.data.ticker;
      console.log("thicker: ",this.ticker);
      console.log("teste", this.ticker['1. symbol']);
      this.extDataProv.details(this.ticker['1. symbol'])
      .then(data => {
        this.data = (new Function("return " +data._body+ ";")());
        this.data = this.data['Time Series (5min)'];
        console.log("diario",this.data);
        this.keys = Object.keys(this.data);
        this.lastInfoPrice = this.data[this.keys[0]]["4. close"];
        this.lastInfoUpdate = this.keys[0];
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TickerDetailsPage');
  }

}
