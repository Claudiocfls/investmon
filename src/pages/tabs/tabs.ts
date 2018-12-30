import { Component } from '@angular/core';
import { TickersAvailablePage } from '../tickers-available/tickers-available';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TickersAvailablePage;
  tab3Root = NewsPage;

  constructor() {

  }
}
