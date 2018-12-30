import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  newsList: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public newsProv: NewsProvider) {

    this.newsProv.getNews().then(data => {
        this.newsList = (new Function("return " +data["_body"]+ ";")());    
        this.newsList = this.newsList['articles'];
        console.log('artigos',this.newsList);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
