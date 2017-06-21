webpackJsonp([1],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ulice__ = __webpack_require__(271);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlicePageModule", function() { return UlicePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UlicePageModule = (function () {
    function UlicePageModule() {
    }
    return UlicePageModule;
}());
UlicePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ulice__["a" /* UlicePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ulice__["a" /* UlicePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ulice__["a" /* UlicePage */]
        ]
    })
], UlicePageModule);

//# sourceMappingURL=ulice.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(195);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UlicePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// newsimport 'rxjs/add/operator/map'

var UlicePage = (function () {
    // posts: any;
    // podaci: any;
    function UlicePage(navCtrl, navParams, httpProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create({
            content: 'Učitavanje podataka...'
        });
        this.getdata();
    }
    UlicePage.prototype.getdata = function () {
        var _this = this;
        // this.loading.present();
        this.httpProvider.getJsonData().subscribe(function (result) {
            _this.dbData = result;
            console.log("Success : " + _this.dbData);
        }, function (err) {
            console.error("Error : " + err);
        }, function () {
            // this.loading.dismiss();
            console.log('getData completed');
        });
    };
    UlicePage.prototype.filter = function () {
    };
    return UlicePage;
}());
UlicePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-ulice',template:/*ion-inline-start:"/Users/daxdax89/Development/dev/Vodomer-master/src/pages/ulice/ulice.html"*/'<ion-header>\n  <ion-navbar color="myDark">\n    <ion-title>Ulice</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of dbData">\n    <p>{{item.ulica}}</p>\n    </ion-item>\n  </ion-list>\n  <ion-fab bottom right>\n    <button ion-fab (click)="filter()" color="myPrimary2">\n      <ion-icon name="search"></ion-icon>\n  </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/daxdax89/Development/dev/Vodomer-master/src/pages/ulice/ulice.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], UlicePage);

//# sourceMappingURL=ulice.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map