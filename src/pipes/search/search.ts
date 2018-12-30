import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

    transform(value: string, ...args) {
        return value.toLowerCase();
    }
    // transform(items: any[], terms: string): any[] {
    //   if(!items) return [];
    //   if(!terms) return items;
    //   terms = terms.toLowerCase();
    //   return items.filter( it => {
    //     return it["1. symbol"].toLowerCase().includes(terms); // only filter country name
    //   });
    // }
}

