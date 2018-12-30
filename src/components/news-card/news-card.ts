import { Component, Input } from '@angular/core';

/**
 * Generated class for the NewsCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-card',
  templateUrl: 'news-card.html'
})
export class NewsCardComponent {

  text: string;

  @Input("news") news: any;


  constructor() {
    console.log('Hello NewsCardComponent Component');
    this.text = 'Hello World';
  }

}
