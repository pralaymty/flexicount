webpackJsonp([21],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertPage = /** @class */ (function () {
    function AlertPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        var localData = http.get('assets/location.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    AlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertPage');
    };
    AlertPage.prototype.ionViewWillEnter = function () {
    };
    AlertPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\alert\alert.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n\n\n  <h2 class="mtitle">Alerts</h2>\n\n\n\n  <ion-col col-12>\n\n      <ion-item>\n\n          <ion-label>Select</ion-label>\n\n          <ion-select [(ngModel)]="toppings">\n\n            <ion-option>Today</ion-option>\n\n            <ion-option>This Week</ion-option>\n\n            <ion-option>Last Week</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n  </ion-col>\n\n  <ion-col col-12>\n\n          <ion-row class="header">\n\n            <ion-col col-4>Location</ion-col>\n\n            <ion-col col-4>Time of Alert</ion-col>\n\n            <ion-col col-4>Signed Off</ion-col>\n\n          </ion-row>\n\n          \n\n          \n\n          <ion-row *ngFor="let item of information">\n\n            <ion-col col-4>{{ item.store }} {{ item.department }} </ion-col>\n\n            <ion-col col-4>{{ item.timeofalert }}</ion-col>\n\n            <ion-col col-4>{{ item.signoff }}</ion-col>\n\n          </ion-row>\n\n          \n\n\n\n          <ion-row class="blk_font">\n\n            <ion-col col-4>B2 F2 Mens</ion-col>\n\n            <ion-col col-4>18/10/18 16:30</ion-col>\n\n            <ion-col col-4>A.Jones 16:45</ion-col>\n\n          </ion-row>\n\n\n\n          <!-- <ion-row>\n\n            <ion-col col-4>B6 F2 Men</ion-col>\n\n            <ion-col col-4>14.00</ion-col>\n\n            <ion-col col-4></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-4>B6 F3 Female</ion-col>\n\n            <ion-col col-4>15.00</ion-col>\n\n            <ion-col col-4></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-4>B2 F2 Mens</ion-col>\n\n            <ion-col col-4>16.30</ion-col>\n\n            <ion-col col-4>A. Jones 16:45</ion-col>\n\n          </ion-row> -->\n\n  </ion-col>\n\n\n\n  <ion-col col-12>\n\n      <button ion-button color="textlight" full (click)=home() large>Home</button>\n\n      <!-- <button ion-button color="textlight" full (click)="addData()"> show data </button> -->\n\n   </ion-col>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\alert\alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signoff2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signoff_signoff__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the Signoff2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signoff2Page = /** @class */ (function () {
    // abc={};
    // data: any[];
    function Signoff2Page(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data');
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data;
        });
    }
    Signoff2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signoff2Page');
    };
    Signoff2Page.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    Signoff2Page.prototype.signoff = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signoff_signoff__["a" /* SignoffPage */]);
    };
    Signoff2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signoff2',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\signoff2\signoff2.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle" >Sign Off</h2>\n\n\n\n  <div class="scan-item" >\n\n  <ion-card *ngFor="let item of loc">\n\n    <h3 class="text_center" *ngIf="text == item.qrcode">You are about to sign off cleaning for {{item.store}} {{item.department}} </h3>\n\n  </ion-card>\n\n  \n\n  <!-- <ion-card >\n\n    <h3 class="text_center">Abcd </h3>\n\n  </ion-card> -->\n\n  </div>\n\n\n\n  <!-- <h3 class="text_center">You are about to sign off cleaning for {{abc.store}} {{abc.department}} </h3>   -->\n\n\n\n<button ion-button color="secondary" full large (click) = dashbd() >Sign Off cleaning for<br/>this location here</button>\n\n<button ion-button color="dark" full large (click) = signoff() >Cancel and return to<br/>scan QR code</button>\n\n<button ion-button color="textlight" full large (click) = dashbd() >Home</button>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\signoff2\signoff2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], Signoff2Page);
    return Signoff2Page;
}());

//# sourceMappingURL=signoff2.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReghubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reghub2_reghub2__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(47);
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
 * Generated class for the ReghubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReghubPage = /** @class */ (function () {
    function ReghubPage(navCtrl, navParams, barcodeScaner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScaner = barcodeScaner;
        this.data = {};
    }
    ReghubPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReghubPage');
    };
    ReghubPage.prototype.scan = function () {
        var _this = this;
        this.option = {
            prompt: "Focus the Hub's QR code in the window below to register HUB"
        };
        this.barcodeScaner.scan(this.option).then(function (barcodeData) {
            console.log(barcodeData);
            _this.data = barcodeData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reghub2_reghub2__["a" /* Reghub2Page */]);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    ReghubPage.prototype.reghub2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reghub2_reghub2__["a" /* Reghub2Page */]);
    };
    ReghubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reghub',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\reghub\reghub.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">Register Hub</h2>\n\n\n\n  <ion-col col-12>\n\n      \n\n      <h3 class="text_center" >Focus the hub\'s  QR code in the window below</h3>\n\n      <div class="qrscaner">\n\n\n\n      </div>\n\n   \n\n<button ion-button color="secondary" full (click) = scan() large>Capture QR Code</button>\n\n<!-- <button ion-button color="primary" full (click) = reghub2() >Test hub2</button> -->\n\n</ion-col>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\reghub\reghub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ReghubPage);
    return ReghubPage;
}());

//# sourceMappingURL=reghub.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reghub2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reghub3_reghub3__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(184);
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
 * Generated class for the Reghub2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Reghub2Page = /** @class */ (function () {
    function Reghub2Page(navCtrl, navParams, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
    }
    Reghub2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Reghub2Page');
    };
    Reghub2Page.prototype.reghub3 = function () {
        // des = des || 'No Description Entered';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reghub3_reghub3__["a" /* Reghub3Page */], { text: this.des });
    };
    Reghub2Page.prototype.onDeviceReady = function () {
        this.keyboard.show();
    };
    Reghub2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reghub2',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\reghub2\reghub2.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">Register Hub</h2>\n\n\n\n  <ion-col col-12>\n\n      <h3 class="text_center" >Now give a brief description of the hub\'s location</h3>\n\n\n\n      <ion-item class="des_box" >\n\n          <!-- <ion-label>Description</ion-label> -->\n\n          <ion-input placeholder="Description" [(ngModel)]="des"></ion-input>\n\n      </ion-item>\n\n\n\n<!-- <button ion-button color="primary" full (click)=newhub() >Register a New Hub</button>\n\n<button ion-button color="primary" full (click)=regsensor() >Register Sensor</button> -->\n\n<button ion-button color="secondary" full (click)=reghub3() large>Save</button>\n\n\n\n  </ion-col>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\reghub2\reghub2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], Reghub2Page);
    return Reghub2Page;
}());

//# sourceMappingURL=reghub2.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reghub3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
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
 * Generated class for the Reghub3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Reghub3Page = /** @class */ (function () {
    function Reghub3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.text = this.navParams.get('text');
    }
    Reghub3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Reghub3Page');
    };
    Reghub3Page.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    Reghub3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reghub3',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\reghub3\reghub3.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">Registered Hub</h2>\n\n\n\n  <ion-col col-12>\n\n      \n\n    <h3 class="text_center" >Please Confirm Details</h3>\n\n\n\n      <ion-item class="des_box" >\n\n        <h3> {{text}} </h3>\n\n      </ion-item>\n\n\n\n<button ion-button color="secondary" full (click)=dashbd() large>Save</button>\n\n\n\n  </ion-col>\n\n</ion-content>'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\reghub3\reghub3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Reghub3Page);
    return Reghub3Page;
}());

//# sourceMappingURL=reghub3.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegsenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regsen2_regsen2__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(47);
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
 * Generated class for the RegsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegsenPage = /** @class */ (function () {
    function RegsenPage(navCtrl, navParams, barcodeScaner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScaner = barcodeScaner;
        this.sensor = {};
    }
    RegsenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegsenPage');
    };
    RegsenPage.prototype.scan = function () {
        var _this = this;
        this.option = {
            prompt: "Focus the sensors QR code in the window below to Register Sensor"
        };
        this.barcodeScaner.scan(this.option).then(function (barcodeData) {
            console.log(barcodeData);
            _this.sensor = barcodeData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen2_regsen2__["a" /* Regsen2Page */], { data: barcodeData.text });
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    RegsenPage.prototype.sensor2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen2_regsen2__["a" /* Regsen2Page */]);
    };
    RegsenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regsen',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\regsen\regsen.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">Register Sensor</h2>\n\n\n\n  <ion-col col-12>\n\n      \n\n      <h3 class="text_center" >Focus the sensors QR code in the window below</h3>\n\n\n\n      <div class="qrscaner">\n\n\n\n      </div>\n\n   \n\n\n\n\n\n<button ion-button color="secondary" full (click) = scan() large>Capture QR Code</button>\n\n<!-- <button ion-button color="primary" full (click) = sensor2() >Sensor 2</button> -->\n\n</ion-col>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\regsen\regsen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], RegsenPage);
    return RegsenPage;
}());

//# sourceMappingURL=regsen.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regsen2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regsen3_regsen3__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(185);
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
 * Generated class for the Regsen2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Regsen2Page = /** @class */ (function () {
    function Regsen2Page(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.qrtext = {};
        this.qrtext = navParams.get('data');
    }
    Regsen2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Regsen2Page');
    };
    Regsen2Page.prototype.estatelist = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen3_regsen3__["a" /* Regsen3Page */], { data: _this.qrtext });
        }, function (err) {
            // Handle error
        });
    };
    Regsen2Page.prototype.regsensor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen3_regsen3__["a" /* Regsen3Page */]);
    };
    Regsen2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regsen2',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\regsen2\regsen2.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">Picture of the Sensor</h2>\n\n\n\n  <ion-row align-items-center>\n\n  <ion-col col-12>\n\n      <h3 class="text_center" >Now take a picture of the sensor</h3>\n\n      \n\n      <!-- <ion-list>\n\n        <ion-item>\n\n          <h3>Cancelled: {{sensor.cancelled}}</h3>\n\n          <h3>Format: {{sensor.format}}</h3>\n\n          <h3>Text: {{sensor.text}}</h3>\n\n        </ion-item>\n\n      </ion-list> -->\n\n\n\n      <div class="sensor_photo"> </div>\n\n      <p class="text_center">Please Include entire entrance and camera in the picture.</p>\n\n\n\n<!-- <button ion-button color="primary" full (click)=newhub() >Register a New Hub</button>\n\n<button ion-button color="primary" full (click)=regsensor() >Register Sensor</button> -->\n\n<button ion-button color="secondary" full (click) = estatelist() large>Take Picture</button>\n\n<!-- <button ion-button color="primary" full (click) = regsensor() >page 3rd test</button> -->\n\n\n\n  </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\regsen2\regsen2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], Regsen2Page);
    return Regsen2Page;
}());

//# sourceMappingURL=regsen2.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regsen3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regsen4_regsen4__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the Regsen3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Regsen3Page = /** @class */ (function () {
    function Regsen3Page(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.qrtext = {};
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
        this.qrtext = navParams.get('data');
    }
    Regsen3Page.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    Regsen3Page.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    Regsen3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Regsen3Page');
    };
    Regsen3Page.prototype.regsen4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen4_regsen4__["a" /* Regsen4Page */], { data: this.qrtext });
    };
    Regsen3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regsen3',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\regsen3\regsen3.html"*/'<ion-content padding id="home_page" >\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <ion-row>\n\n      <ion-col col-12>\n\n      <ion-searchbar class="assets_search"></ion-searchbar>\n\n      <button ion-button color="secondary" class="right" >Expand</button>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-12>\n\n            <h6>Location</h6>\n\n            <ion-list class="accordion-list">\n\n                    <!-- First Level -->\n\n                    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n                      <!-- Toggle Button -->\n\n                      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                          {{ item.name }}\n\n                        <ion-icon item-left name="add" *ngIf="!item.open"></ion-icon>\n\n                        <ion-icon item-left name="remove" *ngIf="item.open"></ion-icon>\n\n                      </button>\n\n                 \n\n                      <ion-list *ngIf="item.children && item.open" no-lines>\n\n                        <!-- Second Level -->\n\n                        <ion-list radio-group >\n\n\n\n                        <ion-item *ngFor="let child of item.children">\n\n                          <ion-label>{{ child.name }} </ion-label>\n\n                          <ion-radio  value="{{ item.name }} {{ child.name }} "></ion-radio>\n\n                        </ion-item>\n\n\n\n                        </ion-list>\n\n\n\n                      </ion-list>\n\n                      \n\n                    </ion-list-header>\n\n                  </ion-list>\n\n        \n\n    </ion-col>\n\n\n\n\n\n\n\n\n\n  <ion-col col-12>\n\n    <button ion-button color="secondary" full large (click) = regsen4() >Select</button>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\regsen3\regsen3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], Regsen3Page);
    return Regsen3Page;
}());

//# sourceMappingURL=regsen3.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regsen4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the Regsen4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Regsen4Page = /** @class */ (function () {
    function Regsen4Page(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.qrtext = {};
        this.qrtext = navParams.get('data');
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data;
        });
    }
    Regsen4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Regsen4Page');
    };
    Regsen4Page.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    Regsen4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regsen4',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\regsen4\regsen4.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">Register Sensor</h2>\n\n  <ion-grid >\n\n  <ion-row justify-content-center align-items-center style="height: 100%">\n\n    <ion-col col-12>\n\n        <h3 class="text_center" >Confirm your sensor\'s location</h3>\n\n        <ion-card *ngFor="let item of loc">\n\n          <div *ngIf="qrtext == item.qrcode" class="sensor_photo">\n\n            <h6> Serial number: {{item.qrcode}}</h6>\n\n            <h6>Location name: {{item.store | slice:3:9}} {{item.department}}</h6>\n\n            <h6>Location ID: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}</h6>\n\n          </div>\n\n        </ion-card>\n\n    </ion-col>\n\n    <ion-col col-12 class="text_center" >\n\n      <button ion-button full color="secondary" large (click) = dashbd() >Save</button>\n\n      <button ion-button full color="dark" large (click) = dashbd()>Cancel & Back</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\regsen4\regsen4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], Regsen4Page);
    return Regsen4Page;
}());

//# sourceMappingURL=regsen4.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensorloc_sensorloc__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the SensorconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensorconPage = /** @class */ (function () {
    function SensorconPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data');
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; // json file data
        });
    }
    SensorconPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SensorconPage');
    };
    SensorconPage.prototype.senloc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sensorloc_sensorloc__["a" /* SensorlocPage */]);
    };
    SensorconPage.prototype.device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__device_device__["a" /* DevicePage */]);
    };
    SensorconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensorcon',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\sensorcon\sensorcon.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">New Device Settings</h2>\n\n\n\n  <ion-col col-12>\n\n     \n\n    <ion-card *ngFor="let item of loc">\n\n        <p *ngIf="text == item.qrcode">\n\n            Serial Number: {{item.qrcode}}<br/>\n\n            Location Name: {{item.store | slice:3:9}} {{item.department}}<br/>\n\n            Location Id: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}<br/>\n\n            Last Seen: <br/>\n\n            Battery Level: {{item.batterylavel}}<br/>\n\n            dBm: {{item.receivepower}}<br/>\n\n        </p>\n\n      </ion-card>\n\n\n\n<!-- <button ion-button color="primary" full (click)=newhub() >Register a New Hub</button>\n\n<button ion-button color="primary" full (click)=regsensor() >Register Sensor</button> -->\n\n<button ion-button color="yellow" full large (click)=device()>Save</button>\n\n<button ion-button color="dark" full large (click)=senloc()>Cancel And Back</button>\n\n\n\n  </ion-col>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\sensorcon\sensorcon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], SensorconPage);
    return SensorconPage;
}());

//# sourceMappingURL=sensorcon.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HubconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hubloc_hubloc__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the HubconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HubconPage = /** @class */ (function () {
    function HubconPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data //
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; // json file data
        });
    }
    HubconPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HubconPage');
    };
    HubconPage.prototype.hubloc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hubloc_hubloc__["a" /* HublocPage */]);
    };
    HubconPage.prototype.device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__device_device__["a" /* DevicePage */]);
    };
    HubconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hubcon',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\hubcon\hubcon.html"*/'<ion-content padding id="home_page">\n\n    <img class="header_image" src="./assets/imgs/brand.png"/>\n\n    <h2 class="mtitle">New Device Settings</h2>\n\n  \n\n    <ion-col col-12>\n\n        <ion-card *ngFor="let item of loc">\n\n            <p *ngIf="text == item.qrcode">\n\n                Location Name: {{item.store | slice:3:9}} {{item.department}}<br/>\n\n                Location Id: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}<br/>\n\n                Last Seen: {{item.lastseen}}<br/>\n\n                Network Type: {{item.networktype}}<br/>\n\n                dBm: {{item.localnoise}}<br/>\n\n            </p>\n\n          </ion-card>\n\n  \n\n  <!-- <button ion-button color="primary" full (click)=newhub() >Register a New Hub</button>\n\n  <button ion-button color="primary" full (click)=regsensor() >Register Sensor</button> -->\n\n  <button ion-button color="secondary" full large (click) = device() >Save</button>\n\n  <button ion-button color="dark" full large (click) = hubloc() >Cancel & Back</button>\n\n  \n\n    </ion-col>\n\n  </ion-content>\n\n  '/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\hubcon\hubcon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], HubconPage);
    return HubconPage;
}());

//# sourceMappingURL=hubcon.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the EstatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstatePage = /** @class */ (function () {
    function EstatePage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    EstatePage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    EstatePage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    EstatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstatePage');
    };
    EstatePage.prototype.desbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    EstatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estate',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\estate\estate.html"*/'<!--\n\n  Generated template for the EstatePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding id="home_page" >\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <ion-row>\n\n      <ion-col col-12>\n\n      <ion-searchbar class="assets_search"></ion-searchbar>\n\n      <button ion-button color="textlight" class="right" >Expand</button>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n<ion-row>\n\n    \n\n\n\n  <ion-col col-12>\n\n      <h6>Location</h6>\n\n      <ion-list class="accordion-list">\n\n        <!-- First Level -->\n\n        <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n          <!-- Toggle Button -->\n\n          <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n              {{ item.name }}\n\n            <ion-icon item-left name="add" *ngIf="!item.open"></ion-icon>\n\n            <ion-icon item-left name="remove" *ngIf="item.open"></ion-icon>\n\n          </button>\n\n     \n\n          <ion-list *ngIf="item.children && item.open" no-lines>\n\n            <!-- Second Level -->\n\n            <ion-list radio-group >\n\n\n\n            <ion-item *ngFor="let child of item.children">\n\n              <ion-label>{{ child.name }} </ion-label>\n\n              <ion-radio  value="{{ item.name }} {{ child.name }} "></ion-radio>\n\n            </ion-item>\n\n\n\n            </ion-list>\n\n\n\n          </ion-list>\n\n          \n\n        </ion-list-header>\n\n      </ion-list>\n\n      \n\n  </ion-col>\n\n\n\n\n\n  <ion-col col-12>\n\n    <button ion-button color="textlight" full large (click) = desbd()>Home</button>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\estate\estate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], EstatePage);
    return EstatePage;
}());

//# sourceMappingURL=estate.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, http, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
    }
    NewsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    NewsPage.prototype.ionViewDidLoad = function () {
        this.loadUser();
    };
    NewsPage.prototype.loadUser = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5cbb4177d8a0480bb1ff7228cbd51561')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.data = data.articles;
            console.log(data.articles);
        }, function (err) {
            console.log(err);
        });
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\news\news.html"*/'<!--\n\n  Generated template for the NewsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>News</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n		<ion-row>\n\n			<ion-col>\n\n			<div *ngFor="let item of data">\n\n				<ion-card>\n\n						<ion-item>\n\n							<ion-avatar item-start>\n\n							<img src="{{item.urlToImage}}">\n\n							</ion-avatar>\n\n							<h3>{{item.title}}</h3>\n\n							<p>{{item.author}}</p>\n\n							<h5>{{item.content}}</h5>\n\n							<a href="{{item.url}}"><p>Read More</p></a>\n\n						</ion-item>\n\n				</ion-card> \n\n			</div>\n\n			</ion-col>\n\n		</ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 141:
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
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alert/alert.module": [
		329,
		20
	],
	"../pages/dashboard/dashboard.module": [
		330,
		19
	],
	"../pages/dashbosrd/dashbosrd.module": [
		331,
		0
	],
	"../pages/device/device.module": [
		332,
		18
	],
	"../pages/estate/estate.module": [
		333,
		17
	],
	"../pages/hubcon/hubcon.module": [
		334,
		16
	],
	"../pages/hubdtl/hubdtl.module": [
		335,
		15
	],
	"../pages/hubloc/hubloc.module": [
		336,
		14
	],
	"../pages/news/news.module": [
		337,
		13
	],
	"../pages/reghub/reghub.module": [
		338,
		10
	],
	"../pages/reghub2/reghub2.module": [
		339,
		12
	],
	"../pages/reghub3/reghub3.module": [
		340,
		11
	],
	"../pages/regsen/regsen.module": [
		341,
		6
	],
	"../pages/regsen2/regsen2.module": [
		342,
		9
	],
	"../pages/regsen3/regsen3.module": [
		343,
		8
	],
	"../pages/regsen4/regsen4.module": [
		344,
		7
	],
	"../pages/sensorcon/sensorcon.module": [
		345,
		5
	],
	"../pages/sensordtl/sensordtl.module": [
		346,
		4
	],
	"../pages/sensorloc/sensorloc.module": [
		347,
		3
	],
	"../pages/signoff/signoff.module": [
		348,
		1
	],
	"../pages/signoff2/signoff2.module": [
		349,
		2
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
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signoff_signoff__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reghub_reghub__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__regsen_regsen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__estate_estate__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(91);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.alertpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertPage */]);
    };
    DashboardPage.prototype.signoffpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signoff_signoff__["a" /* SignoffPage */]);
    };
    DashboardPage.prototype.reghubpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reghub_reghub__["a" /* ReghubPage */]);
    };
    DashboardPage.prototype.regsensorpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__regsen_regsen__["a" /* RegsenPage */]);
    };
    DashboardPage.prototype.devicepg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__device_device__["a" /* DevicePage */]);
    };
    DashboardPage.prototype.estatepg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__estate_estate__["a" /* EstatePage */]);
    };
    DashboardPage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\dashboard\dashboard.html"*/'\n\n<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <ion-grid class="dsah_imag">\n\n      <ion-row>\n\n        <ion-col col-6><img (click)=alertpg()  src="./assets/imgs/alert.PNG"><p>Alerts</p></ion-col>\n\n        <ion-col col-6><img (click)=signoffpg() src="./assets/imgs/Timer.PNG"><p>Sign off cleaning</p></ion-col>\n\n        <ion-col col-6><img (click)=reghubpg() src="./assets/imgs/box.PNG"><p>Register hub</p></ion-col>\n\n        <ion-col col-6><img (click)=regsensorpg() src="./assets/imgs/Reg_sensor.PNG"><p>Register sensor</p></ion-col>\n\n        <ion-col col-6><img (click)=devicepg() src="./assets/imgs/services2.PNG"><p>View/edit devices</p></ion-col>\n\n        <ion-col col-6><img (click)=estatepg() src="./assets/imgs/Estate2.PNG"><p>View estate</p></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col col-12>\n\n            <button ion-button color="dark" full (click)=logout() large>Log Out</button>\n\n          </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_pro__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signoff_signoff__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signoff2_signoff2__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reghub_reghub__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reghub2_reghub2__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_regsen_regsen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_regsen2_regsen2__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_estate_estate__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_reghub3_reghub3__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_regsen3_regsen3__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_regsen4_regsen4__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sensordtl_sensordtl__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_sensorloc_sensorloc__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sensorcon_sensorcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_hubdtl_hubdtl__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_hubloc_hubloc__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_hubcon_hubcon__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_news_news__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_keyboard__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_barcode_scanner__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_sqlite__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_toast__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_store_store__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// import { QRScanner } from '@ionic-native/qr-scanner';
// import { Toast } from '@ionic-native/toast';
// import { DataServiceProvider } from '../providers/data-service/data-service';







__WEBPACK_IMPORTED_MODULE_0__ionic_pro__["Pro"].init('34b51387', {
    appVersion: '1.0'
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signoff_signoff__["a" /* SignoffPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signoff2_signoff2__["a" /* Signoff2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_reghub_reghub__["a" /* ReghubPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_reghub2_reghub2__["a" /* Reghub2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reghub3_reghub3__["a" /* Reghub3Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_regsen_regsen__["a" /* RegsenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_regsen2_regsen2__["a" /* Regsen2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_regsen3_regsen3__["a" /* Regsen3Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_regsen4_regsen4__["a" /* Regsen4Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_estate_estate__["a" /* EstatePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sensordtl_sensordtl__["a" /* SensordtlPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sensorloc_sensorloc__["a" /* SensorlocPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sensorcon_sensorcon__["a" /* SensorconPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_hubdtl_hubdtl__["a" /* HubdtlPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_hubloc_hubloc__["a" /* HublocPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_hubcon_hubcon__["a" /* HubconPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_news_news__["a" /* NewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alert/alert.module#AlertPageModule', name: 'AlertPage', segment: 'alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashbosrd/dashbosrd.module#DashbosrdPageModule', name: 'DashbosrdPage', segment: 'dashbosrd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device/device.module#DevicePageModule', name: 'DevicePage', segment: 'device', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estate/estate.module#EstatePageModule', name: 'EstatePage', segment: 'estate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hubcon/hubcon.module#HubconPageModule', name: 'HubconPage', segment: 'hubcon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hubdtl/hubdtl.module#HubdtlPageModule', name: 'HubdtlPage', segment: 'hubdtl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hubloc/hubloc.module#HublocPageModule', name: 'HublocPage', segment: 'hubloc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reghub/reghub.module#ReghubPageModule', name: 'ReghubPage', segment: 'reghub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reghub2/reghub2.module#Reghub2PageModule', name: 'Reghub2Page', segment: 'reghub2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reghub3/reghub3.module#Reghub3PageModule', name: 'Reghub3Page', segment: 'reghub3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regsen/regsen.module#RegsenPageModule', name: 'RegsenPage', segment: 'regsen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regsen2/regsen2.module#Regsen2PageModule', name: 'Regsen2Page', segment: 'regsen2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regsen3/regsen3.module#Regsen3PageModule', name: 'Regsen3Page', segment: 'regsen3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regsen4/regsen4.module#Regsen4PageModule', name: 'Regsen4Page', segment: 'regsen4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensorcon/sensorcon.module#SensorconPageModule', name: 'SensorconPage', segment: 'sensorcon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensordtl/sensordtl.module#SensordtlPageModule', name: 'SensordtlPage', segment: 'sensordtl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensorloc/sensorloc.module#SensorlocPageModule', name: 'SensorlocPage', segment: 'sensorloc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signoff/signoff.module#SignoffPageModule', name: 'SignoffPage', segment: 'signoff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signoff2/signoff2.module#Signoff2PageModule', name: 'Signoff2Page', segment: 'signoff2', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signoff_signoff__["a" /* SignoffPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signoff2_signoff2__["a" /* Signoff2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_reghub_reghub__["a" /* ReghubPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_reghub2_reghub2__["a" /* Reghub2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reghub3_reghub3__["a" /* Reghub3Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_regsen_regsen__["a" /* RegsenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_regsen2_regsen2__["a" /* Regsen2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_regsen3_regsen3__["a" /* Regsen3Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_regsen4_regsen4__["a" /* Regsen4Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_estate_estate__["a" /* EstatePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sensordtl_sensordtl__["a" /* SensordtlPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sensorloc_sensorloc__["a" /* SensorlocPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sensorcon_sensorcon__["a" /* SensorconPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_hubdtl_hubdtl__["a" /* HubdtlPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_hubloc_hubloc__["a" /* HublocPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_hubcon_hubcon__["a" /* HubconPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_news_news__["a" /* NewsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_34__providers_store_store__["a" /* StoreProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(91);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb_adapter_cordova_sqlite__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb_adapter_cordova_sqlite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pouchdb_adapter_cordova_sqlite__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreProvider = /** @class */ (function () {
    function StoreProvider(http) {
        this.http = http;
        console.log('Hello StoreProvider Provider');
    }
    StoreProvider.prototype.createPouchDB = function () {
        __WEBPACK_IMPORTED_MODULE_3_pouchdb__["plugin"](__WEBPACK_IMPORTED_MODULE_4_pouchdb_adapter_cordova_sqlite___default.a);
        this.pdb = new __WEBPACK_IMPORTED_MODULE_3_pouchdb__('store.db', { adapter: 'cordova-sqlite' });
    };
    StoreProvider.prototype.create = function (employee) {
        return this.pdb.post(employee);
    };
    StoreProvider.prototype.update = function (employee) {
        return this.pdb.put(employee);
    };
    StoreProvider.prototype.delete = function (employee) {
        return this.pdb.delete(employee);
    };
    StoreProvider.prototype.read = function () {
        function allDocs() {
            var _this = this;
            this.pdb.allDocs({ include_docs: true })
                .then(function (docs) {
                _this.employees = docs.rows.map(function (row) {
                    row.doc.Date = new Date(row.doc.Date);
                    return row.doc;
                });
                return _this.employees;
            });
        }
    };
    StoreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StoreProvider);
    return StoreProvider;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensordtl_sensordtl__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hubdtl_hubdtl__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevicePage = /** @class */ (function () {
    function DevicePage(navCtrl, navParams, barcodeScaner, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScaner = barcodeScaner;
        this.http = http;
        this.text = {};
        this.data = {};
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; //JSON file Data
        });
    }
    DevicePage.prototype.scan2 = function () {
        var _this = this;
        this.option = {
            prompt: "Focus the sensors QR code in the window below."
        };
        this.barcodeScaner.scan(this.option).then(function (barcodeData) {
            console.log(barcodeData);
            _this.text = barcodeData.text; // bar code data
            _this.loadCart();
        })
            .catch(function (err) {
            console.log('Error', err);
        });
    };
    DevicePage.prototype.loadCart = function () {
        for (var _i = 0, _a = this.loc; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.text == item.qrcode && item.type == 'sensor') {
                this.dsensor();
            }
            else if (this.text == item.qrcode && item.type == 'hub') {
                this.dhub();
            }
        }
    };
    DevicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevicePage');
    };
    DevicePage.prototype.dsensor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sensordtl_sensordtl__["a" /* SensordtlPage */], { data: this.text });
    };
    DevicePage.prototype.dhub = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hubdtl_hubdtl__["a" /* HubdtlPage */], { data: this.text });
    };
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\device\device.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">View / Edit Device</h2>\n\n\n\n<ion-col col-12>\n\n    <h3 class="text_center" >Focus the hub or sensors QR code in the window below to edit its location.</h3>\n\n    <div class="qrscaner">\n\n    </div>\n\n    <ion-grid class="dsah_imag">\n\n      <button ion-button color="secondary" full (click) = scan2() large> Capture QR Code </button>\n\n    </ion-grid>\n\n    \n\n      <!-- <button ion-button color="secondary" full (click) = scan2() large> Capture QR Code </button>\n\n\n\n      <ion-card *ngFor="let item of loc">\n\n        <ion-item *ngIf="text.text == item.qrcode && item.type == \'sensor\' ? dsensor() : end"></ion-item>\n\n      </ion-card>\n\n      <ion-card *ngFor="let item of loc">\n\n        <ion-item *ngIf="text.text == item.qrcode && item.type == \'hub\' ? dhub() : end"> </ion-item>\n\n      </ion-card> -->\n\n        <!-- <ng-template #elsetag>\n\n          <div>\n\n            {{item.type}}\n\n          </div>\n\n        </ng-template> -->\n\n      \n\n     <!-- <h2> {{text.text}}</h2> -->\n\n\n\n</ion-col>\n\n<!-- <ion-col col-12 class="text_center" >\n\n  <button ion-button full color="secondary" (click) = dsensor() >If Sensor Selected</button>\n\n  <button ion-button full color="dark" (click) = dhub()>If HUB Selected</button>\n\n</ion-col> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\device\device.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], DevicePage);
    return DevicePage;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignoffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signoff2_signoff2__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Toast } from '@ionic-native/toast';
// import { DataServiceProvider } from '../../providers/data-service/data-service';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
var SignoffPage = /** @class */ (function () {
    function SignoffPage(navCtrl, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.data = {};
    }
    SignoffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignoffPage');
    };
    SignoffPage.prototype.scan2 = function () {
        var _this = this;
        this.option = {
            prompt: "Focus the QR code in the window below to sign off cleaning"
        };
        this.barcodeScanner.scan(this.option).then(function (barcodeData) {
            console.log(barcodeData);
            _this.data = barcodeData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signoff2_signoff2__["a" /* Signoff2Page */], { data: barcodeData.text });
        })
            .catch(function (err) {
            console.log('Error', err);
        });
    };
    // scan2(){
    //       this.qrScanner.prepare()
    //      .then((status: QRScannerStatus) => {
    //         if(status.authorized){
    //         // camera permission was granted
    //       // start scanning
    //       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
    //        console.log('Scanned something', text);
    //        alert(text);
    //        this.qrScanner.hide(); // hide camera preview
    //        scanSub.unsubscribe(); // stop scanning
    //      });
    //      this.qrScanner.resumePreview();
    //          // show camera preview
    //      this.qrScanner.show();
    //    } else if (status.denied) {
    //     // camera permission was permanently denied
    //       // you must use QRScanner.openSettings() method to guide the user to the settings page
    //       // then they can grant the permission from there
    //      } else {
    //        // permission was denied, but not permanently. You can ask for permission again at a later time.
    //      }
    //   })
    //   .catch((e: any) => {
    //        alert('Error is' + e);
    //      });
    // }
    SignoffPage.prototype.signoff2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signoff2_signoff2__["a" /* Signoff2Page */]);
    };
    SignoffPage.prototype.scan = function () {
        // this.selectedProduct = {};
        // this.barcodeScanner.scan().then((barcodeData) => {
        //   this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
        //   if(this.selectedProduct !== undefined) {
        //     this.productFound = true;
        //   } else {
        //     this.productFound = false;
        //     this.toast.show(`Product not found`, '5000', 'center').subscribe(
        //       toast => {
        //         console.log(toast);
        //       }
        //     );
        //   }
        // }, (err) => {
        //   this.toast.show(err, '5000', 'center').subscribe(
        //     toast => {
        //       console.log(toast);
        //     }
        //   );
        // });
    };
    SignoffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signoff',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\signoff\signoff.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle" >Scan QR Code</h2>\n\n\n\n  <ion-col col-12>\n\n      \n\n      <h3 class="text_center" >If you have finished cleaning this location please scan the sensor\'s QR code in the window below to sign off cleaning</h3>\n\n\n\n      <div class="qrscaner" >\n\n\n\n      </div> \n\n\n\n      <!-- <ion-list>\n\n        <ion-item>\n\n          <h3>Cancelled: {{data.cancelled}}</h3>\n\n          <h3>Format: {{data.format}}</h3>\n\n          <p>Text: {{data.text}}</p>  \n\n       </ion-item>\n\n      </ion-list> -->\n\n\n\n\n\n      <!-- <ion-card *ngIf="productFound">\n\n          <ion-card-header>\n\n            <h2>Price: $ {{selectedProduct.price}}</h2>\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <ul>\n\n              <li>{{selectedProduct.plu}}</li>\n\n              <li>{{selectedProduct.name}}</li>\n\n              <li>{{selectedProduct.desc}}</li>\n\n            </ul>\n\n          </ion-card-content>\n\n        </ion-card> -->\n\n   \n\n\n\n\n\n<button ion-button color="secondary" full large (click) = scan2() >Capture QR Code</button>\n\n<button ion-button color="primary" full (click) = signoff2()>test sign off 2</button>\n\n</ion-col>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\signoff\signoff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], SignoffPage);
    return SignoffPage;
}());

//# sourceMappingURL=signoff.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensordtlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sensorloc_sensorloc__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
 * Generated class for the SensordtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensordtlPage = /** @class */ (function () {
    function SensordtlPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data //navParams.get('data')
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; // json file data
        });
    }
    SensordtlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SensordtlPage');
    };
    SensordtlPage.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    SensordtlPage.prototype.device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__device_device__["a" /* DevicePage */]);
    };
    SensordtlPage.prototype.senloc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sensorloc_sensorloc__["a" /* SensorlocPage */], { data: this.text });
    };
    SensordtlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensordtl',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\sensordtl\sensordtl.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">Sensor Details</h2>\n\n\n\n  <ion-col col-12>\n\n      <p>Below are the current settings for this device</p>\n\n\n\n      <!-- <ion-card *ngFor="let item of loc">\n\n        <h3 class="text_center" *ngIf="text == item.qrcode">You are about to sign off cleaning for {{item.store}} {{item.department}} </h3> \n\n      </ion-card> -->\n\n\n\n      <ion-card *ngFor="let item of loc">\n\n          <p *ngIf="text == item.qrcode">\n\n              Serial Number: {{item.qrcode}}<br/>\n\n              Location Name: {{item.store | slice:3:9}} {{item.department}}<br/>\n\n              Location Id: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}<br/>\n\n              Last Seen: <br/>\n\n              Battery Level: {{item.batterylavel}}<br/>\n\n              dBm: {{item.receivepower}}<br/>\n\n          </p>\n\n        </ion-card>\n\n\n\n<button ion-button color="violate" full large (click)=senloc() >Edit Location</button>\n\n<button ion-button color="yellow" full large (click)=device() >Scan Another Device</button>\n\n<button ion-button color="primary" full large (click)=dashbd()>Home</button>\n\n\n\n  </ion-col>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\sensordtl\sensordtl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], SensordtlPage);
    return SensordtlPage;
}());

//# sourceMappingURL=sensordtl.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorlocPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensorcon_sensorcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sensordtl_sensordtl__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the SensorlocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensorlocPage = /** @class */ (function () {
    function SensorlocPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data //
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    SensorlocPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    SensorlocPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    SensorlocPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SensorlocPage');
    };
    SensorlocPage.prototype.sencof = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sensorcon_sensorcon__["a" /* SensorconPage */], { data: this.text });
    };
    SensorlocPage.prototype.sendtl = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sensordtl_sensordtl__["a" /* SensordtlPage */]);
    };
    SensorlocPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensorloc',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\sensorloc\sensorloc.html"*/'<ion-content padding id="home_page" >\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <ion-row>\n\n      <ion-col col-12>\n\n      <ion-searchbar class="assets_search"></ion-searchbar>\n\n      <button ion-button color="textlight" class="right" >Expand</button>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n<ion-row>\n\n  <ion-col col-12>\n\n        <h6>Location</h6>\n\n        <ion-list class="accordion-list">\n\n          <!-- First Level -->\n\n          <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n            <!-- Toggle Button -->\n\n            <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                {{ item.name }}\n\n              <ion-icon item-left name="add" *ngIf="!item.open"></ion-icon>\n\n              <ion-icon item-left name="remove" *ngIf="item.open"></ion-icon>\n\n            </button>\n\n       \n\n            <ion-list *ngIf="item.children && item.open" no-lines>\n\n              <!-- Second Level -->\n\n              <ion-list radio-group >\n\n\n\n              <ion-item *ngFor="let child of item.children">\n\n                <ion-label>{{ child.name }} </ion-label>\n\n                <ion-radio  value="{{ item.name }} {{ child.name }} "></ion-radio>\n\n              </ion-item>\n\n\n\n              </ion-list>\n\n\n\n            </ion-list>\n\n            \n\n          </ion-list-header>\n\n        </ion-list>\n\n  </ion-col>\n\n\n\n  <!-- <ion-col col-12>\n\n      <accordion></accordion>\n\n      \n\n  </ion-col> -->\n\n\n\n\n\n  <ion-col col-12>\n\n    <button ion-button color="secondary" full large (click)=sencof()>Select</button>\n\n    <!-- <button ion-button color="textlight" full (click)=sendtl()>Back</button> -->\n\n  </ion-col>\n\n</ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\sensorloc\sensorloc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], SensorlocPage);
    return SensorlocPage;
}());

//# sourceMappingURL=sensorloc.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HubdtlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hubloc_hubloc__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
 * Generated class for the HubdtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HubdtlPage = /** @class */ (function () {
    function HubdtlPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data //navParams.get('data')
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; // json file data
        });
    }
    HubdtlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HubdtlPage');
    };
    HubdtlPage.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HubdtlPage.prototype.device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__device_device__["a" /* DevicePage */]);
    };
    HubdtlPage.prototype.hubloc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hubloc_hubloc__["a" /* HublocPage */], { data: this.text });
    };
    HubdtlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hubdtl',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\hubdtl\hubdtl.html"*/'<ion-content padding id="home_page">\n\n  <img class="header_image" src="./assets/imgs/brand.png"/>\n\n  <h2 class="mtitle">Hub Details</h2>\n\n\n\n  <ion-col col-12>\n\n      <p>Below are the current settings for this device</p>\n\n\n\n      <ion-card *ngFor="let item of loc">\n\n        <p *ngIf="text == item.qrcode">\n\n            Location Name: {{item.store | slice:3:9}} {{item.department}}<br/>\n\n            Location Id: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}<br/>\n\n            Last Seen: {{item.lastseen}}<br/>\n\n            Network Type: {{item.networktype}}<br/>\n\n            dBm: {{item.localnoise}}<br/>\n\n        </p>\n\n      </ion-card>\n\n\n\n\n\n<button ion-button color="violate" full large (click)=hubloc() >Edit Location</button>\n\n<button ion-button color="yellow" full large (click)=device() >Scan Another Device</button>\n\n<button ion-button color="secondary" full large (click)=dashbd()>Home</button>\n\n\n\n  </ion-col>\n\n</ion-content>'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\hubdtl\hubdtl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], HubdtlPage);
    return HubdtlPage;
}());

//# sourceMappingURL=hubdtl.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HublocPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hubcon_hubcon__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hubdtl_hubdtl__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the HublocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HublocPage = /** @class */ (function () {
    function HublocPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data // 
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    HublocPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    HublocPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    HublocPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HublocPage');
    };
    HublocPage.prototype.hubcof = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hubcon_hubcon__["a" /* HubconPage */], { data: this.text });
    };
    HublocPage.prototype.hubdtl = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hubdtl_hubdtl__["a" /* HubdtlPage */]);
    };
    HublocPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hubloc',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\hubloc\hubloc.html"*/'<ion-content padding id="home_page" >\n\n    <img class="header_image" src="./assets/imgs/brand.png"/>\n\n    <ion-row>\n\n        <ion-col col-12>\n\n        <ion-searchbar class="assets_search"></ion-searchbar>\n\n        <button ion-button color="textlight" class="right" >Expand</button>\n\n        </ion-col>\n\n    </ion-row>\n\n  \n\n  <ion-row>\n\n    <ion-col col-12>\n\n            <h6>Location</h6>\n\n            <ion-list class="accordion-list">\n\n              <!-- First Level -->\n\n              <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n\n                <!-- Toggle Button -->\n\n                <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n\n                    {{ item.name }}\n\n                  <ion-icon item-left name="add" *ngIf="!item.open"></ion-icon>\n\n                  <ion-icon item-left name="remove" *ngIf="item.open"></ion-icon>\n\n                </button>\n\n           \n\n                <ion-list *ngIf="item.children && item.open" no-lines>\n\n                  <!-- Second Level -->\n\n                  <ion-list radio-group >\n\n\n\n                  <ion-item *ngFor="let child of item.children">\n\n                    <ion-label>{{ child.name }} </ion-label>\n\n                    <ion-radio  value="{{ item.name }} {{ child.name }} "></ion-radio>\n\n                  </ion-item>\n\n\n\n                  </ion-list>\n\n\n\n                </ion-list>\n\n                \n\n              </ion-list-header>\n\n            </ion-list>\n\n    </ion-col>\n\n  \n\n    <!-- <ion-col col-12>\n\n        <accordion></accordion>\n\n        \n\n    </ion-col> -->\n\n  \n\n  \n\n    <ion-col col-12>\n\n      <button ion-button color="secondary" full large (click)=hubcof()>Select</button>\n\n      <!-- <button ion-button color="textlight" full (click)=hubdtl()>Back</button> -->\n\n    </ion-col>\n\n  </ion-row>\n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\hubloc\hubloc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], HublocPage);
    return HublocPage;
}());

//# sourceMappingURL=hubloc.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news__ = __webpack_require__(130);
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
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.signup = function () {
        if (this.uname.value == "admin", this.password.value == "password") {
            var alert_1 = this.alertCtrl.create({
                title: 'Login Success',
                subTitle: 'You have successfully logged in',
                buttons: ['OK']
            });
            alert_1.present();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Login Failed',
                subTitle: 'Wrong username / password combination',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage.prototype.news = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__news_news__["a" /* NewsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\home\home.html"*/'\n\n<ion-content padding id="home_page">\n\n  <!-- <img class="header_image" src="../assets/imgs/Logo2.PNG"/> -->\n\n  <h1><img class="logo_text" src="./assets/imgs/brand.png"/></h1>\n\n  <h6>Flexicount<br/> Powered By StoreTech</h6>\n\n\n\n  <h6>Please Sign In</h6>\n\n\n\n  <ion-list class="login_area">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n            <ion-item class="ref_input">\n\n              <ion-label fixed>Username</ion-label>\n\n              <ion-input type="text" #username></ion-input>\n\n            </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n          <ion-col col-12>\n\n            <ion-item class="ref_input">\n\n              <ion-label fixed>Password</ion-label>\n\n              <ion-input type="password" #password></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n          <ion-col col-6>\n\n              <ion-item>\n\n                <ion-label>English</ion-label>\n\n                <ion-select [(ngModel)]="language">\n\n                  <ion-option value="Russin">Russian</ion-option>\n\n                  <ion-option value="Urdu">Urdu</ion-option>\n\n                  <ion-option value="Hindi">Hindi</ion-option>\n\n                  <ion-option value="Chinise">Chinise</ion-option>\n\n                  <ion-option value="Spainish">Spainish</ion-option>\n\n                  <ion-option value="German">German</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n              <ion-item class="ckbx">\n\n                  <ion-label>Remember Me</ion-label>\n\n                  <ion-checkbox  checked="true"></ion-checkbox>\n\n              </ion-item>\n\n          </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n          <ion-col col-12>\n\n            <button ion-button color="textlight" full (click)=login()>Log In</button>\n\n            <button ion-button color="textlight" full (click)=signup()>Login2</button>\n\n            <button ion-button color="textlight" full (click)=news()>News Feed</button>\n\n          </ion-col>\n\n      </ion-row>\n\n\n\n      <!-- <ion-row>\n\n          <ion-col col-6 class="text left">\n\n              privacy\n\n          </ion-col>\n\n          <ion-col col-6 class="text right">\n\n              forgot Password?\n\n          </ion-col>\n\n      </ion-row> -->\n\n\n\n    \n\n    </ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\Pralay\work\StoreTech App\git\flexicount\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map