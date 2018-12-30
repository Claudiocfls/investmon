import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
 
@Injectable()
export class NewsProvider {
 
    data: any;
 
    constructor(public http: Http) {
 
    }

    getNews(){
        var defaultUrl = 'https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=c7a643c5db7843fea95bde7e5246607c';
        return new Promise(resolve => {
            this.http.get(defaultUrl).subscribe(data => {
                    this.data = data;
                    console.log("news received",data);
                    resolve(this.data);
                });
        });
    }
}