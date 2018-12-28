import { Component } from '@angular/core';
import { TickersAvailablePage } from '../tickers-available/tickers-available';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TickersAvailablePage;

  constructor() {

  }
}
