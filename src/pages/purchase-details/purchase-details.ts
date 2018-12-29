import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-purchase-details',
  templateUrl: 'purchase-details.html',
})
export class PurchaseDetailsPage {

  ticker: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ticker = this.navParams.data;
    console.log("no construtor",this.ticker);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseDetailsPage');
  }

}
