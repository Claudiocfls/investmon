import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TickersAvailablePage } from './tickers-available';

@NgModule({
  declarations: [
    TickersAvailablePage,
  ],
  imports: [
    IonicPageModule.forChild(TickersAvailablePage),
  ],
})
export class TickersAvailablePageModule {}
