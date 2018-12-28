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
 
    load(){
 
        if(this.data){
            return Promise.resolve(this.data);
        }
 
        // return new Promise(resolve => {
 
        //     // this.http.get('https://tradingscrapper.herokuapp.com/all').map(res => res.json()).subscribe(data => {
        //     //     this.data = data;
        //     //     // console.log(data);
        //     //     resolve(this.data);
        //     //     // resolve([this.data.instructions, this.data.questions, this.data.description]);
        //     // });

        //     this.http.get('https://tradingscrapper.herokuapp.com/all').subscribe(data => {
        //         this.data = data;
        //         console.log("foi",data);
        //         resolve(this.data);
        //         // resolve([this.data.instructions, this.data.questions, this.data.description]);
        //     });
 
        // });

        return new Promise(resolve => {
            this.http.get('https://tradingscrapper.herokuapp.com/all').subscribe(data => {
                    this.data = data;
                    console.log(data);
                    resolve(this.data);
                    // resolve([this.data.instructions, this.data.questions, this.data.description]);
                });
        });
    }

    search(ticker){
        var defaultUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords={0}&apikey=DGVR6QUEONY8LJ9K';
        defaultUrl = defaultUrl.replace('{0}',ticker);
        return new Promise(resolve => {
            this.http.get(defaultUrl).subscribe(data => {
                    this.data = data;
                    console.log(data);
                    resolve(this.data);
                });
        });
    }

    // [TODO] remove
    // getLocalData(){
    //     return new Promise(resolve => {
    //         this.http.get('../assets/data/questions2.json').map(res => res.json().items).subscribe(data => {
    //             console.log(data);
    //             this.data = data;
    //             resolve(this.data);
    //         });
    //     });
    // }
 
}