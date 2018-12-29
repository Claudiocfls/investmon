import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExternalDataProvider } from '../../providers/external-data/external-data';
import { FirebaseDataProvider } from '../../providers/firebase-data/firebase-data';
import { AlertController } from 'ionic-angular';


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
    public extDataProv: ExternalDataProvider,
    private alertCtrl: AlertController,
    public firebaseProvider: FirebaseDataProvider) {
      this.ticker = this.navParams.data.ticker;
      console.log("thicker: ",this.ticker);
      console.log("teste", this.ticker['1. symbol']);
      this.extDataProv.details(this.ticker['1. symbol'])
      .then(data => {
        console.log("aqui ta funcionando",data);
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

  saveData(qtd, price) {
    var symbol = this.ticker['1. symbol'];
    var price = price;
    var quantity = qtd;
    var tickerToAdd = {
      "price" : parseInt(price,10),
      "quantity": parseInt(quantity,10),
      "symbol": symbol
    }
    this.firebaseProvider.add(tickerToAdd); 
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Adicionar novo ativo',
      inputs: [
        {
          name: 'quantity',
          placeholder: 'Quantidade',
          type: 'number'
        },
        {
          name: 'price',
          placeholder: 'Preço',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            console.log(data.quantity);
            console.log(data.price);
            this.saveData(data.quantity, data.price);
          }
        }
      ]
    });
    alert.present();
  }

}
