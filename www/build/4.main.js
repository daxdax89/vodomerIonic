webpackJsonp([4],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imena__ = __webpack_require__(267);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImenaPageModule", function() { return ImenaPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImenaPageModule = (function () {
    function ImenaPageModule() {
    }
    return ImenaPageModule;
}());
ImenaPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__imena__["a" /* ImenaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__imena__["a" /* ImenaPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__imena__["a" /* ImenaPage */]
        ]
    })
], ImenaPageModule);

//# sourceMappingURL=imena.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImenaPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImenaPage = (function () {
    function ImenaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.titleBre = this.navParams.get('passedData');
        console.log('tvrd');
        console.log(this.titleBre);
    }
    ImenaPage.prototype.ionViewDidLoad = function () {
    };
    ImenaPage.prototype.showUserInfo = function () {
    };
    return ImenaPage;
}());
ImenaPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-imena',template:/*ion-inline-start:"/Users/luukschoenmakers/Development/helpingproject/vodomerIonic/src/pages/imena/imena.html"*/'<ion-header>\n  <ion-navbar color="myDark">\n    <ion-title>Ime Ulice</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item (click)="showUserInfo()" *ngFor="let item of dbData">\n      <p><b>Ime i Prezime</b></p>\n      <p id="sifra">šifra korisnika</p>\n    </ion-item>\n  </ion-list>\n  <ion-fab bottom right>\n    <button ion-fab (click)="filter()" color="myPrimary2">\n      <ion-icon name="search"></ion-icon>\n  </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/luukschoenmakers/Development/helpingproject/vodomerIonic/src/pages/imena/imena.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ImenaPage);

//# sourceMappingURL=imena.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map