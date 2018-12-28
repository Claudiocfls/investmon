import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TickerDetailsPage } from './ticker-details';

@NgModule({
  declarations: [
    TickerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TickerDetailsPage),
  ],
})
export class TickerDetailsPageModule {}
