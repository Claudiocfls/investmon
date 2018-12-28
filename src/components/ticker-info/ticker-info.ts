import { Component } from '@angular/core';

/**
 * Generated class for the TickerInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ticker-info',
  templateUrl: 'ticker-info.html'
})
export class TickerInfoComponent {

  text: string;

  constructor() {
    console.log('Hello TickerInfoComponent Component');
    this.text = 'Hello World';
  }

}
