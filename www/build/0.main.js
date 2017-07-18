webpackJsonp([0],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ocitavanje__ = __webpack_require__(268);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcitavanjePageModule", function() { return OcitavanjePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OcitavanjePageModule = (function () {
    function OcitavanjePageModule() {
    }
    return OcitavanjePageModule;
}());
OcitavanjePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ocitavanje__["a" /* OcitavanjePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ocitavanje__["a" /* OcitavanjePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ocitavanje__["a" /* OcitavanjePage */]
        ]
    })
], OcitavanjePageModule);

//# sourceMappingURL=ocitavanje.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OcitavanjePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OcitavanjePage = (function () {
    function OcitavanjePage(navCtrl, navParams, firebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebase = firebase;
    }
    OcitavanjePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OcitavanjePage');
    };
    return OcitavanjePage;
}());
OcitavanjePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-ocitavanje',template:/*ion-inline-start:"/Users/luukschoenmakers/Development/helpingproject/vodomerIonic/src/pages/ocitavanje/ocitavanje.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Očitavanje vodomera</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="sadrzaj">\n    <ion-item>\n      <ion-label color="primary">Šifra vodomera</ion-label>\n      <ion-input placeholder="Unesite šifru vodomera"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Šifra korisnika</ion-label>\n      <ion-input placeholder="Unesite šifru korisnika"></ion-input>\n    </ion-item>\n    <button ion-button large icon-left>  <ion-icon name="done-all"></ion-icon>\nUPIŠI</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/luukschoenmakers/Development/helpingproject/vodomerIonic/src/pages/ocitavanje/ocitavanje.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_firebase__["a" /* Firebase */]])
], OcitavanjePage);

//# sourceMappingURL=ocitavanje.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Firebase; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @beta
 * @name Firebase
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).
 *
 * @usage
 * ```typescript
 * import { Firebase } from '@ionic-native/firebase';
 *
 * constructor(private firebase: Firebase) { }
 *
 * ...
 *
 * this.firebase.getToken()
 *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
 *   .catch(error => console.error('Error getting token', error));
 *
 * this.firebase.onTokenRefresh()
 *   .subscribe((token: string) => console.log(`Got a new token ${token}`));
 *
 * ```
 */
var Firebase = (function (_super) {
    __extends(Firebase, _super);
    function Firebase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device token
     * @return {Promise<any>}
     */
    Firebase.prototype.getToken = function () { return; };
    /**
     * Get notified when a token is refreshed
     * @return {Observable<any>}
     */
    Firebase.prototype.onTokenRefresh = function () { return; };
    /**
     * Get notified when the user opens a notification
     * @return {Observable<any>}
     */
    Firebase.prototype.onNotificationOpen = function () { return; };
    /**
     * Grant permission to receive push notifications
     * @return {Promise<any>}
     */
    Firebase.prototype.grantPermission = function () { return; };
    /**
   * Check permission to receive push notifications
   * @return {Promise<any>}
   */
    Firebase.prototype.hasPermission = function () { return; };
    /**
     * Set icon badge number. Set to 0 to clear the badge.
     * @param badgeNumber {number}
     * @return {Promise<any>}
     */
    Firebase.prototype.setBadgeNumber = function (badgeNumber) { return; };
    /**
     * Get icon badge number
     * @return {Promise<any>}
     */
    Firebase.prototype.getBadgeNumber = function () { return; };
    /**
     * Subscribe to a topic
     * @param topic {string}
     * @return {Promise<any>}
     */
    Firebase.prototype.subscribe = function (topic) { return; };
    /**
     * Unsubscribe from a topic
     * @param topic {string}
     * @return {Promise<any>}
     */
    Firebase.prototype.unsubscribe = function (topic) { return; };
    /**
     * Log an event using Analytics
     * @param type {string}
     * @param data {Object}
     * @return {Promise<any>}
     */
    Firebase.prototype.logEvent = function (type, data) { return; };
    /**
     * Log an Error using FirebaseCrash
     * @param message {string}
     * @return {Promise<any>}
     */
    Firebase.prototype.logError = function (message) { return; };
    /**
     * Set the name of the current screen in Analytics
     * @param name {string} Screen name
     * @return {Promise<any>}
     */
    Firebase.prototype.setScreenName = function (name) { return; };
    /**
     * Set a user id for use in Analytics
     * @param userId {string}
     * @return {Promise<any>}
     */
    Firebase.prototype.setUserId = function (userId) { return; };
    /**
     * Set a user property for use in Analytics
     * @param name {string}
     * @param value {string}
     * @return {Promise<any>}
     */
    Firebase.prototype.setUserProperty = function (name, value) { return; };
    /**
     * Fetch Remote Config parameter values for your app
     * @param cacheExpirationSeconds
     * @return {Promise<any>}
     */
    Firebase.prototype.fetch = function (cacheExpirationSeconds) { return; };
    /**
     * Activate the Remote Config fetched config
     * @return {Promise<any>}
     */
    Firebase.prototype.activateFetched = function () { return; };
    /**
     * Retrieve a Remote Config value
     * @param key {string}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    Firebase.prototype.getValue = function (key, namespace) { return; };
    /**
     * Retrieve a Remote Config byte array
     * @param key {string}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    Firebase.prototype.getByteArray = function (key, namespace) { return; };
    /**
     * Get the current state of the FirebaseRemoteConfig singleton object
     * @return {Promise<any>}
     */
    Firebase.prototype.getInfo = function () { return; };
    /**
     * Change the settings for the FirebaseRemoteConfig object's operations
     * @param settings {Object}
     * @return {Promise<any>}
     */
    Firebase.prototype.setConfigSettings = function (settings) { return; };
    /**
     * Set defaults in the Remote Config
     * @param defaults {Object}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    Firebase.prototype.setDefaults = function (defaults, namespace) { return; };
    return Firebase;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
Firebase.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
Firebase.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "getToken", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], Firebase.prototype, "onTokenRefresh", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], Firebase.prototype, "onNotificationOpen", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "grantPermission", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "hasPermission", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "setBadgeNumber", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "getBadgeNumber", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "subscribe", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "unsubscribe", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "logEvent", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "logError", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "setScreenName", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "setUserId", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "setUserProperty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "fetch", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "activateFetched", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "getValue", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        platforms: ['Android'],
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "getByteArray", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "getInfo", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "setConfigSettings", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])({
        platforms: ['Android'],
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], Firebase.prototype, "setDefaults", null);
Firebase = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'Firebase',
        plugin: 'cordova-plugin-firebase',
        pluginRef: 'FirebasePlugin',
        repo: 'https://github.com/arnesson/cordova-plugin-firebase',
        platforms: ['Android', 'iOS']
    })
], Firebase);

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map