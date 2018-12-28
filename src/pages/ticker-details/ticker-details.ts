import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ticker = this.navParams.data.ticker;
    console.log("thicker: ",this.ticker);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TickerDetailsPage');
  }

}
