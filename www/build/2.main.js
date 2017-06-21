webpackJsonp([2],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartPageModule = (function () {
    function StartPageModule() {
    }
    return StartPageModule;
}());
StartPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */]
        ]
    })
], StartPageModule);

//# sourceMappingURL=start.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { OcitavanjePage } from '../ocitavanje/ocitavanje';
// import { SinhronizacijaPage } from '../sinhronizacija/sinhronizacija';
var StartPage = (function () {
    // ocitavanjePage = OcitavanjePage;
    // sinhronizacijaPage = SinhronizacijaPage;
    function StartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad StartPage');
    // }
    // ionViewWillEnter() {
    //   console.log('ionViewWillenter is fired just as the page is about to become active.');
    // }
    // ionViewDidEnter() {
    //   console.log('ionViewDidEtner fired each time the page is entered');
    // }
    // ionViewWillLeave() {
    //   console.log('ionViewWillLeave is fired each time the page is about to leave');
    // }
    // ionViewDidLeave() {
    //   console.log('ionViewDidLeave is fired each time when the use has left the page');
    // }
    // ionViewWillUnload() {
    //   console.log('ionViewWillUnload is ran when the page is about to be destoryed');
    // }
    StartPage.prototype.navigateToUlice = function () {
        //if there is data open this page and show streets else show alert
        this.navCtrl.push('UlicePage');
    };
    StartPage.prototype.navigateToSinhronizacija = function () {
        this.navCtrl.push('SinhronizacijaPage');
    };
    StartPage.prototype.visitMB = function () {
        window.open("http://micro.co.rs", '_system');
    };
    return StartPage;
}());
StartPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"/Users/daxdax89/Development/dev/Vodomer-master/src/pages/start/start.html"*/'<ion-header>\n  <ion-navbar color="myDark">\n    <ion-title text-center>Vodovod</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="dugmici">\n    <button ion-button (click)="navigateToUlice()" class="customButton" color="myPrimary">Čitanje brojila</button><br>\n    <button ion-button (click)="navigateToSinhronizacija()" class="customButton" color="myPrimary2">Sinhronizacija</button>\n  </div>\n</ion-content>\n<ion-footer (click)=\'visitMB();\'>\n  <ion-toolbar>\n    <ion-title id="futer">© Micro Business 2017</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/daxdax89/Development/dev/Vodomer-master/src/pages/start/start.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], StartPage);

//# sourceMappingURL=start.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map