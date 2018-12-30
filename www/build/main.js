webpackJsonp([3],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExternalDataProvider = /** @class */ (function () {
    function ExternalDataProvider(http) {
        this.http = http;
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
    ExternalDataProvider.prototype.search = function (ticker) {
        var _this = this;
        var defaultUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords={0}&apikey=DGVR6QUEONY8LJ9K';
        defaultUrl = defaultUrl.replace('{0}', ticker);
        return new Promise(function (resolve) {
            _this.http.get(defaultUrl).subscribe(function (data) {
                _this.data = data;
                console.log("original2", data);
                resolve(_this.data);
            });
        });
    };
    ExternalDataProvider.prototype.details = function (ticker) {
        var _this = this;
        var defaultUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={0}&interval=5min&apikey=DGVR6QUEONY8LJ9K';
        defaultUrl = defaultUrl.replace('{0}', ticker);
        return new Promise(function (resolve) {
            _this.http.get(defaultUrl).subscribe(function (data) {
                _this.data = data;
                console.log("original", data);
                resolve(_this.data);
            });
        });
    };
    ExternalDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ExternalDataProvider);
    return ExternalDataProvider;
}());

//# sourceMappingURL=external-data.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseDataProvider = /** @class */ (function () {
    function FirebaseDataProvider(db) {
        this.db = db;
        console.log('Hello TodosProvider Provider');
    }
    FirebaseDataProvider.prototype.list = function () {
        return this.db.collection('/monitoring', function (ref) { return ref.orderBy('symbol'); }).valueChanges();
    };
    FirebaseDataProvider.prototype.add = function (ticker) {
        var id = this.db.createId();
        ticker['id'] = id;
        ticker['createdAt'] = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["firestore"].FieldValue.serverTimestamp();
        ticker['updatedAt'] = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["firestore"].FieldValue.serverTimestamp();
        return this.db.collection('monitoring').doc(id).set(ticker);
    };
    FirebaseDataProvider.prototype.complete = function (todo) {
        return this.db.collection('todos').doc(todo.id).update({
            complete: todo.complete,
            updatedAt: __WEBPACK_IMPORTED_MODULE_3_firebase_app__["firestore"].FieldValue.serverTimestamp()
        });
    };
    FirebaseDataProvider.prototype.delete = function (todo) {
        return this.db.collection('todos').doc(todo.id).delete();
    };
    FirebaseDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"]])
    ], FirebaseDataProvider);
    return FirebaseDataProvider;
}());

//# sourceMappingURL=firebase-data.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PurchaseDetailsPage = /** @class */ (function () {
    function PurchaseDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ticker = this.navParams.data;
        console.log("no construtor", this.ticker);
    }
    PurchaseDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PurchaseDetailsPage');
    };
    PurchaseDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-purchase-details',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/pages/purchase-details/purchase-details.html"*/'<!--\n  Generated template for the PurchaseDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes do investimento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    {{ticker["symbol"]}}\n</ion-content>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/pages/purchase-details/purchase-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PurchaseDetailsPage);
    return PurchaseDetailsPage;
}());

//# sourceMappingURL=purchase-details.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_external_data_external_data__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_data_firebase_data__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TickerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TickerDetailsPage = /** @class */ (function () {
    function TickerDetailsPage(navCtrl, navParams, extDataProv, alertCtrl, firebaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.extDataProv = extDataProv;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
        this.lastInfoPrice = "Carregando...";
        this.ticker = this.navParams.data.ticker;
        console.log("thicker: ", this.ticker);
        console.log("teste", this.ticker['1. symbol']);
        this.extDataProv.details(this.ticker['1. symbol'])
            .then(function (data) {
            console.log("aqui ta funcionando", data);
            _this.data = (new Function("return " + data["_body"] + ";")());
            _this.data = _this.data['Time Series (5min)'];
            console.log("diario", _this.data);
            _this.keys = Object.keys(_this.data);
            _this.lastInfoPrice = _this.data[_this.keys[0]]["4. close"];
            _this.lastInfoUpdate = _this.keys[0];
        });
    }
    TickerDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TickerDetailsPage');
    };
    TickerDetailsPage.prototype.saveData = function (qtd, price) {
        var symbol = this.ticker['1. symbol'];
        var price = price;
        var quantity = qtd;
        var tickerToAdd = {
            "price": parseInt(price, 10),
            "quantity": parseInt(quantity, 10),
            "symbol": symbol
        };
        this.firebaseProvider.add(tickerToAdd);
    };
    TickerDetailsPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Adicionar novo ativo',
            inputs: [
                {
                    name: 'quantity',
                    placeholder: 'Quantidade',
                    type: 'number'
                },
                {
                    name: 'price',
                    placeholder: 'Preço',
                    type: 'number'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Adicionar',
                    handler: function (data) {
                        console.log(data.quantity);
                        console.log(data.price);
                        _this.saveData(data.quantity, data.price);
                    }
                }
            ]
        });
        alert.present();
    };
    TickerDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticker-details',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/pages/ticker-details/ticker-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes: {{ ticker["1. symbol"] }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="ticker__name">\n        {{ ticker["1. symbol"] }}\n    </div>\n    <div>\n        {{ ticker["8. currency"] }}\n    </div>\n    <div>\n        {{ticker["2. name"]}}\n    </div>\n    <div>\n        ultimo preço: {{lastInfoPrice}}\n    </div>\n    <div>\n        ultima atualização: {{lastInfoUpdate}}\n    </div>\n    <button ion-button (click)="presentPrompt()">\n        adicionar\n    </button>\n    <!-- <div *ngFor="let key of keys; let i = index;">\n        <div *ngIf="i==0">\n            {{key}} : {{data[key]["4. close"]}}\n        </div>\n    </div> -->\n</ion-content>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/pages/ticker-details/ticker-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_external_data_external_data__["a" /* ExternalDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebase_data_firebase_data__["a" /* FirebaseDataProvider */]])
    ], TickerDetailsPage);
    return TickerDetailsPage;
}());

//# sourceMappingURL=ticker-details.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickersAvailablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_external_data_external_data__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticker_details_ticker_details__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TickersAvailablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TickersAvailablePage = /** @class */ (function () {
    function TickersAvailablePage(navCtrl, navParams, extDataProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.extDataProv = extDataProv;
        this.symbolToSearch = "";
        // extDataProv.load()
        // .then(data => {
        //   this.data = data._body;
        //   // console.log("antes",this.data);
        //   this.data = (new Function("return " +this.data+ ";")());
        //   // console.log("depois",this.data);
        // });
        this.suggestions = [];
    }
    TickersAvailablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TickersAvailablePage', this.data);
    };
    TickersAvailablePage.prototype.tickerSelected = function (event, ticker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticker_details_ticker_details__["a" /* TickerDetailsPage */], { ticker: ticker });
    };
    TickersAvailablePage.prototype.onInput = function (event) {
        var _this = this;
        console.log("evento", event);
        this.symbolToSearch = event.srcElement.value;
        if (this.symbolToSearch.length != 0) {
            this.extDataProv.search(this.symbolToSearch)
                .then(function (data) {
                console.log(data);
                _this.suggestions = (new Function("return " + data["_body"] + ";")());
                _this.suggestions = _this.suggestions.bestMatches;
                console.log("resposta: ", _this.suggestions);
            });
        }
        else {
            this.suggestions = [];
        }
        console.log(this.symbolToSearch);
    };
    TickersAvailablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tickers-available',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/pages/tickers-available/tickers-available.html"*/'<!--\n  Generated template for the TickersAvailablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<!--   <ion-navbar>\n    <ion-title>Lista de ativos</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content>   \n    <!-- <div *ngFor="let ticker of data; let i = index;">\n        <ticker-list [tickerInfo]="ticker" type="button" (click)="tickerSelected($event, ticker)"></ticker-list>\n    </div> -->\n    <ion-searchbar\n      [(ngModel)]="myInput"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)">\n    </ion-searchbar>\n\n    <!-- <ion-searchbar [(ngModel)]="terms"></ion-searchbar> -->\n      <!-- (ionCancel)="onCancel($event)"> -->\n\n    <div *ngFor="let suggestion of suggestions; let i = index;">\n        <ticker-list [tickerInfo]="suggestion" type="button" (click)="tickerSelected($event, suggestion)"></ticker-list>\n    </div>\n    <div *ngIf="not suggestions">\n      Search for a stock symbol\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/pages/tickers-available/tickers-available.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_external_data_external_data__["a" /* ExternalDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_external_data_external_data__["a" /* ExternalDataProvider */]) === "function" && _c || Object])
    ], TickersAvailablePage);
    return TickersAvailablePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=tickers-available.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/purchase-details/purchase-details.module": [
		496,
		2
	],
	"../pages/ticker-details/ticker-details.module": [
		497,
		1
	],
	"../pages/tickers-available/tickers-available.module": [
		498,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 239;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tickers_available_tickers_available__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__tickers_available_tickers_available__["a" /* TickersAvailablePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/pages/tabs/tabs.html"*/'<ion-tabs id="mainTabs">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Home" tabIcon="settings"></ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab1Root" tabTitle="Some" tabIcon="home"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_data_firebase_data__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__purchase_details_purchase_details__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.firebaseProvider = firebaseProvider;
        this.tickerMonitored = this.firebaseProvider.list();
        console.log("tickers monitorados", this.tickerMonitored);
    }
    HomePage.prototype.purchaseSelected = function (ticker) {
        console.log("aqui", ticker);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__purchase_details_purchase_details__["a" /* PurchaseDetailsPage */], ticker);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      InvestMon\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor="let tickerm of tickerMonitored | async">\n    <ticker-info [ticker]="tickerm" type="button" (click)="purchaseSelected(tickerm)"></ticker-info>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_data_firebase_data__["a" /* FirebaseDataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(424);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tickers_available_tickers_available__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ticker_details_ticker_details__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_purchase_details_purchase_details__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ticker_info_ticker_info__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ticker_list_ticker_list__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_external_data_external_data__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_firebase_data_firebase_data__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_search_search__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_ticker_info_ticker_info__["a" /* TickerInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_ticker_list_ticker_list__["a" /* TickerListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tickers_available_tickers_available__["a" /* TickersAvailablePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ticker_details_ticker_details__["a" /* TickerDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_purchase_details_purchase_details__["a" /* PurchaseDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_search_search__["a" /* SearchPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/purchase-details/purchase-details.module#PurchaseDetailsPageModule', name: 'PurchaseDetailsPage', segment: 'purchase-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticker-details/ticker-details.module#TickerDetailsPageModule', name: 'TickerDetailsPage', segment: 'ticker-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tickers-available/tickers-available.module#TickersAvailablePageModule', name: 'TickersAvailablePage', segment: 'tickers-available', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_13__settings__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tickers_available_tickers_available__["a" /* TickersAvailablePage */],
                __WEBPACK_IMPORTED_MODULE_14__components_ticker_info_ticker_info__["a" /* TickerInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_ticker_list_ticker_list__["a" /* TickerListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ticker_details_ticker_details__["a" /* TickerDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_purchase_details_purchase_details__["a" /* PurchaseDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_external_data_external_data__["a" /* ExternalDataProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_firebase_data_firebase_data__["a" /* FirebaseDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAolTP8Rt1n7xxqoSt_luGAWWg5H7mcMEw",
    authDomain: "investment-monitor.firebaseapp.com",
    databaseURL: "https://investment-monitor.firebaseio.com",
    projectId: "investment-monitor",
    storageBucket: "investment-monitor.appspot.com",
    messagingSenderId: "938345577728"
};
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the TickerInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TickerInfoComponent = /** @class */ (function () {
    function TickerInfoComponent() {
        console.log('Hello TickerInfoComponent Component');
        this.text = 'Hello World';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('ticker'),
        __metadata("design:type", Object)
    ], TickerInfoComponent.prototype, "ticker", void 0);
    TickerInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ticker-info',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/components/ticker-info/ticker-info.html"*/'<!-- Generated template for the TickerInfoComponent component -->\n<div class="ticker-info__wrapper">\n    <ion-grid class="ticker-info__grid">\n        <ion-row center>\n            <ion-col>\n                {{ticker["symbol"]}}\n            </ion-col>\n            <ion-col>\n                {{ticker["price"]}}\n            </ion-col>\n            <ion-col>\n                {{ticker["quantity"]}}\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</div>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/components/ticker-info/ticker-info.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TickerInfoComponent);
    return TickerInfoComponent;
}());

//# sourceMappingURL=ticker-info.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the TickerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TickerListComponent = /** @class */ (function () {
    function TickerListComponent() {
        console.log('Hello TickerListComponent Component');
        this.text = 'Hello World';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('tickerInfo'),
        __metadata("design:type", Object)
    ], TickerListComponent.prototype, "tickerInfo", void 0);
    TickerListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ticker-list',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/components/ticker-list/ticker-list.html"*/'<!-- Generated template for the TickerListComponent component -->\n<ion-grid class="ticker-list__wrapper">\n    <ion-row>\n        <ion-col class="ticker-list__name">\n            {{tickerInfo["1. symbol"]}}\n        </ion-col>\n        <ion-col class="ticker-list__price">\n            {{tickerInfo["8. currency"]}}\n        </ion-col>\n        <ion-col class="ticker-list__price">\n            {{tickerInfo["2. name"]}}\n        </ion-col>\n    </ion-row>\n</ion-grid>'/*ion-inline-end:"/home/claudio/workspace/investmon/src/components/ticker-list/ticker-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TickerListComponent);
    return TickerListComponent;
}());

//# sourceMappingURL=ticker-list.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map