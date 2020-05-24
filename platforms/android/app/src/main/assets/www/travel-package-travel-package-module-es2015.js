(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-package-travel-package-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/travel-package/travel-package.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel-package/travel-package.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>TourDeEU</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div ion-no-padding>\n  <ion-list>\n    <ion-img class=\"imageMain\" src=\"./assets/Images/jamaica.jpg\"></ion-img>\n\n   <ion-item><h1>Below is the list of package details: </h1></ion-item>\n\n  \n\n    <ion-item *ngFor=\"let packagelist of packagelists\">\n      <ion-avatar slot=\"start\">\n      <ion-img [src]=\"packagelist.image\"></ion-img> \n      </ion-avatar> \n      <ion-button (click)=\"viewImageInFull($event)\">Click</ion-button>\n      \n      <ion-label ion-text-center>{{ packagelist.city }} </ion-label>\n      <ion-label ion-text-center> {{ packagelist.country }} </ion-label>\n      <ion-label ion-text-center><b> {{ packagelist.ratings }} </b></ion-label>\n   \n      \n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"dark\">\n    <ion-title>© 2019 Manik TourDeEU</ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/travel-package/travel-package-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/travel-package/travel-package-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TravelPackagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPackagePageRoutingModule", function() { return TravelPackagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _travel_package_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel-package.page */ "./src/app/travel-package/travel-package.page.ts");




const routes = [
    {
        path: '',
        component: _travel_package_page__WEBPACK_IMPORTED_MODULE_3__["TravelPackagePage"]
    },
    {
        path: 'package-details',
        loadChildren: () => __webpack_require__.e(/*! import() | package-details-package-details-module */ "package-details-package-details-module").then(__webpack_require__.bind(null, /*! ./package-details/package-details.module */ "./src/app/travel-package/package-details/package-details.module.ts")).then(m => m.PackageDetailsPageModule)
    }
];
let TravelPackagePageRoutingModule = class TravelPackagePageRoutingModule {
};
TravelPackagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TravelPackagePageRoutingModule);



/***/ }),

/***/ "./src/app/travel-package/travel-package.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/travel-package/travel-package.module.ts ***!
  \*********************************************************/
/*! exports provided: TravelPackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPackagePageModule", function() { return TravelPackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_package_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-package-routing.module */ "./src/app/travel-package/travel-package-routing.module.ts");
/* harmony import */ var _travel_package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel-package.page */ "./src/app/travel-package/travel-package.page.ts");







let TravelPackagePageModule = class TravelPackagePageModule {
};
TravelPackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _travel_package_routing_module__WEBPACK_IMPORTED_MODULE_5__["TravelPackagePageRoutingModule"]
        ],
        declarations: [_travel_package_page__WEBPACK_IMPORTED_MODULE_6__["TravelPackagePage"]]
    })
], TravelPackagePageModule);



/***/ }),

/***/ "./src/app/travel-package/travel-package.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/travel-package/travel-package.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageMain {\n  height: 20%;\n  width: 100%;\n}\n\nbutton {\n  background-color: #2B3BCF;\n  border: none;\n  color: white;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhdmVsLXBhY2thZ2UvQzpcXFRvdXJEZUVVLVVzZXJJbnRlcmZhY2VDb2RlL3NyY1xcYXBwXFx0cmF2ZWwtcGFja2FnZVxcdHJhdmVsLXBhY2thZ2UucGFnZS5zY3NzIiwic3JjL2FwcC90cmF2ZWwtcGFja2FnZS90cmF2ZWwtcGFja2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdHJhdmVsLXBhY2thZ2UvdHJhdmVsLXBhY2thZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlTWFpbntcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjNCQ0Y7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiB9IiwiLmltYWdlTWFpbiB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCM0JDRjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/travel-package/travel-package.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/travel-package/travel-package.page.ts ***!
  \*******************************************************/
/*! exports provided: TravelPackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPackagePage", function() { return TravelPackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_package_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/package.service */ "./src/app/services/package.service.ts");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");





let TravelPackagePage = class TravelPackagePage {
    constructor(packageService, vibration, photoViewer) {
        this.packageService = packageService;
        this.vibration = vibration;
        this.photoViewer = photoViewer;
    }
    ngOnInit() {
        this.getPackageData();
    }
    viewImageInFull(event) {
        console.log(event);
        this.photoViewer.show("packagelist.image", "Image in big screen", { share: true });
    }
    ShowMe() {
        this.vibration.vibrate(2000);
    }
    getPackageData() {
        this.packageService.getPackages().subscribe(data => {
            this.packagelists = data;
            console.log(this.packagelists);
        }, err => console.log(err), () => console.log('Packages loaded'));
    }
};
TravelPackagePage.ctorParameters = () => [
    { type: _services_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"] },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_3__["Vibration"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"] }
];
TravelPackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel-package',
        template: __webpack_require__(/*! raw-loader!./travel-package.page.html */ "./node_modules/raw-loader/index.js!./src/app/travel-package/travel-package.page.html"),
        styles: [__webpack_require__(/*! ./travel-package.page.scss */ "./src/app/travel-package/travel-package.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_3__["Vibration"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"]])
], TravelPackagePage);



/***/ })

}]);
//# sourceMappingURL=travel-package-travel-package-module-es2015.js.map