import { Component, Input } from '@angular/core';

/**
 * Generated class for the TickerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ticker-list',
  templateUrl: 'ticker-list.html'
})
export class TickerListComponent {

  text: string;

  @Input('tickerInfo') tickerInfo: any;

  constructor() {
    console.log('Hello TickerListComponent Component');
    this.text = 'Hello World';
  }

}
