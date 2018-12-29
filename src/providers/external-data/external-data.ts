import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs-compat/add/operator/map';
// import 'rxjs/add/operator/map';
// import 'rxjs-compat/Rx';
import { map } from 'rxjs/operators';
 
@Injectable()
export class ExternalDataProvider {
 
    data: any;
 
    constructor(public http: Http) {
 
    }
    // load(){
    //     if(this.data){
    //         return Promise.resolve(this.data);
    //     }
    //     return new Promise(resolve => {
    //         this.http.get('https://tradingscrapper.herokuapp.com/all').subscribe(data => {
    //                 this.data = data;
    //                 console.log(data);
    //                 resolve(this.data);
    //                 // resolve([this.data.instructions, this.data.questions, this.data.description]);
    //             });
    //     });
    // }

    search(ticker){
        var defaultUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords={0}&apikey=DGVR6QUEONY8LJ9K';
        defaultUrl = defaultUrl.replace('{0}',ticker);
        return new Promise(resolve => {
            this.http.get(defaultUrl).subscribe(data => {
                    this.data = data;
                    console.log("original2",data);
                    resolve(this.data);
                });
        });
    }

    details(ticker){
        var defaultUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={0}&interval=5min&apikey=DGVR6QUEONY8LJ9K';
        defaultUrl = defaultUrl.replace('{0}',ticker);
        return new Promise(resolve => {
            this.http.get(defaultUrl).subscribe(data => {
                    this.data = data;
                    console.log("original",data);
                    resolve(this.data);
                });
        });
    } 
}