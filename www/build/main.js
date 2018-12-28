webpackJsonp([2],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
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
    ExternalDataProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
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
        return new Promise(function (resolve) {
            _this.http.get('https://tradingscrapper.herokuapp.com/all').subscribe(function (data) {
                _this.data = data;
                console.log(data);
                resolve(_this.data);
                // resolve([this.data.instructions, this.data.questions, this.data.description]);
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
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
    function TickerDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ticker = this.navParams.data.ticker;
        console.log("thicker: ", this.ticker);
    }
    TickerDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TickerDetailsPage');
    };
    TickerDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticker-details',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/pages/ticker-details/ticker-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalhes: {{ticker.ticker}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="ticker__name">\n        {{ticker.ticker}}\n    </div>\n    <div>\n        {{ticker.price}}\n    </div>\n    <div>\n        {{ticker.updatedAt}}\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/pages/ticker-details/ticker-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TickerDetailsPage);
    return TickerDetailsPage;
}());

//# sourceMappingURL=ticker-details.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickersAvailablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_external_data_external_data__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticker_details_ticker_details__ = __webpack_require__(149);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.extDataProv = extDataProv;
        extDataProv.load()
            .then(function (data) {
            _this.data = data._body;
            console.log("antes", _this.data);
            _this.data = (new Function("return " + _this.data + ";")());
            console.log("depois", _this.data);
        });
    }
    TickersAvailablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TickersAvailablePage', this.data);
    };
    TickersAvailablePage.prototype.tickerSelected = function (event, ticker) {
        console.log("aqui era o ticker", ticker);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticker_details_ticker_details__["a" /* TickerDetailsPage */], { ticker: ticker });
    };
    TickersAvailablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tickers-available',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/pages/tickers-available/tickers-available.html"*/'<!--\n  Generated template for the TickersAvailablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lista de ativos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>   \n    <div *ngFor="let ticker of data; let i = index;">\n        <ticker-list [tickerInfo]="ticker" type="button" (click)="tickerSelected($event, ticker)"></ticker-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/pages/tickers-available/tickers-available.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_external_data_external_data__["a" /* ExternalDataProvider */]])
    ], TickersAvailablePage);
    return TickersAvailablePage;
}());

//# sourceMappingURL=tickers-available.js.map

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ticker-details/ticker-details.module": [
		464,
		1
	],
	"../pages/tickers-available/tickers-available.module": [
		465,
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
webpackAsyncContext.id = 230;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tickers_available_tickers_available__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(276);
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_external_data_external_data__ = __webpack_require__(126);
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
    function HomePage(navCtrl, EDataProvider) {
        this.navCtrl = navCtrl;
        this.EDataProvider = EDataProvider;
        this.EDataProvider.load().then(function (data) { console.log("aqui", data); });
        // this.EDataProvider.load();
        // console.log("chamou");
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      InvestMon\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: rgb(16, 15, 15)">\n  <ticker-info></ticker-info>\n  <ticker-info></ticker-info>\n  <ticker-info></ticker-info>\n\n</ion-content>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_external_data_external_data__["a" /* ExternalDataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(411);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tickers_available_tickers_available__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ticker_details_ticker_details__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ticker_info_ticker_info__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ticker_list_ticker_list__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_external_data_external_data__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(231);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_ticker_info_ticker_info__["a" /* TickerInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_ticker_list_ticker_list__["a" /* TickerListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tickers_available_tickers_available__["a" /* TickersAvailablePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ticker_details_ticker_details__["a" /* TickerDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ticker-details/ticker-details.module#TickerDetailsPageModule', name: 'TickerDetailsPage', segment: 'ticker-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tickers-available/tickers-available.module#TickersAvailablePageModule', name: 'TickersAvailablePage', segment: 'tickers-available', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tickers_available_tickers_available__["a" /* TickersAvailablePage */],
                __WEBPACK_IMPORTED_MODULE_10__components_ticker_info_ticker_info__["a" /* TickerInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_ticker_list_ticker_list__["a" /* TickerListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_ticker_details_ticker_details__["a" /* TickerDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_external_data_external_data__["a" /* ExternalDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(275);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
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
    TickerInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ticker-info',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/components/ticker-info/ticker-info.html"*/'<!-- Generated template for the TickerInfoComponent component -->\n<div class="ticker-info__wrapper">\n    <ion-grid class="ticker-info__grid">\n        <ion-row center>\n            <ion-col>\n                {{text}}\n            </ion-col>\n            <ion-col>\n                teste\n            </ion-col>\n            <ion-col>\n                12%\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</div>\n'/*ion-inline-end:"/home/claudio/workspace/investmon/src/components/ticker-info/ticker-info.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TickerInfoComponent);
    return TickerInfoComponent;
}());

//# sourceMappingURL=ticker-info.js.map

/***/ }),

/***/ 463:
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
            selector: 'ticker-list',template:/*ion-inline-start:"/home/claudio/workspace/investmon/src/components/ticker-list/ticker-list.html"*/'<!-- Generated template for the TickerListComponent component -->\n<ion-grid class="ticker-list__wrapper">\n    <ion-row>\n        <ion-col class="ticker-list__name">\n            {{tickerInfo.ticker}}\n        </ion-col>\n        <ion-col class="ticker-list__price">\n            {{tickerInfo.price}}\n        </ion-col>\n    </ion-row>\n</ion-grid>'/*ion-inline-end:"/home/claudio/workspace/investmon/src/components/ticker-list/ticker-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TickerListComponent);
    return TickerListComponent;
}());

//# sourceMappingURL=ticker-list.js.map

/***/ })

},[277]);
//# sourceMappingURL=main.js.map