import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ExternalDataProvider } from '../../providers/external-data/external-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public EDataProvider: ExternalDataProvider) {
    this.EDataProvider.load().then((data) => {console.log("aqui",data);});
    // this.EDataProvider.load();
    // console.log("chamou");
  }

}
