import { NgModule } from '@angular/core';
import { TickerInfoComponent } from './ticker-info/ticker-info';
import { TickerListComponent } from './ticker-list/ticker-list';
@NgModule({
	declarations: [TickerInfoComponent,
    TickerListComponent],
	imports: [],
	exports: [TickerInfoComponent,
    TickerListComponent]
})
export class ComponentsModule {}
