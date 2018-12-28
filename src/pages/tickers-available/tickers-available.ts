import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExternalDataProvider } from '../../providers/external-data/external-data';
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
        extDataProv.load().then(data => {this.data = data;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TickersAvailablePage', this.data);
  }

}
