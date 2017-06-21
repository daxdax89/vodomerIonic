webpackJsonp([3],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sinhronizacija__ = __webpack_require__(269);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinhronizacijaPageModule", function() { return SinhronizacijaPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SinhronizacijaPageModule = (function () {
    function SinhronizacijaPageModule() {
    }
    return SinhronizacijaPageModule;
}());
SinhronizacijaPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sinhronizacija__["a" /* SinhronizacijaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sinhronizacija__["a" /* SinhronizacijaPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sinhronizacija__["a" /* SinhronizacijaPage */]
        ]
    })
], SinhronizacijaPageModule);

//# sourceMappingURL=sinhronizacija.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinhronizacijaPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SinhronizacijaPage = (function () {
    function SinhronizacijaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    SinhronizacijaPage.prototype.visitMB = function () {
        window.open("http://micro.co.rs", '_system');
    };
    SinhronizacijaPage.prototype.getData = function () {
        var _this = this;
        this.http.get('/file.json').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.data = data;
        }, function (rej) { console.error("Could not load local data", rej); });
    };
    SinhronizacijaPage.prototype.sendData = function () {
    };
    SinhronizacijaPage.prototype.sendPictures = function () {
    };
    SinhronizacijaPage.prototype.wipeData = function () {
    };
    return SinhronizacijaPage;
}());
SinhronizacijaPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-sinhronizacija',template:/*ion-inline-start:"/Users/daxdax89/Development/dev/Vodomer-master/src/pages/sinhronizacija/sinhronizacija.html"*/'<ion-header>\n  <ion-navbar color="myDark2">\n    <ion-title>Sinhronizacija</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item (click)=\'getData();\'>\n      <ion-icon name="cloud-download" item-left></ion-icon>\n      Preuzimanje podataka\n    </ion-item>\n    <ion-item (click)=\'uploadData();\'>\n      <ion-icon name="cloud-upload" item-left></ion-icon>\n      Slanje podataka\n    </ion-item>\n    <ion-item (click)=\'sendPicture();\'>\n      <ion-icon name="images" item-left></ion-icon>\n      Slanje slika\n    </ion-item>\n    <ion-item (click)=\'wipeData();\'>\n      <ion-icon name="trash" item-left></ion-icon>\n      Brisanje podataka\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer (click)=\'visitMB();\'>\n  <ion-toolbar>\n    <ion-title id="futer">© Micro Business 2017</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/daxdax89/Development/dev/Vodomer-master/src/pages/sinhronizacija/sinhronizacija.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], SinhronizacijaPage);

//# sourceMappingURL=sinhronizacija.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map