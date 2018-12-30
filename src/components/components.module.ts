import { NgModule } from '@angular/core';
import { TickerInfoComponent } from './ticker-info/ticker-info';
import { TickerListComponent } from './ticker-list/ticker-list';
import { NewsCardComponent } from './news-card/news-card';
@NgModule({
	declarations: [TickerInfoComponent,
    TickerListComponent,
    NewsCardComponent],
	imports: [],
	exports: [TickerInfoComponent,
    TickerListComponent,
    NewsCardComponent]
})
export class ComponentsModule {}
