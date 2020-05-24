(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["package-details-package-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/travel-package/package-details/package-details.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel-package/package-details/package-details.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\">\n        <ion-back-button defaultHref=\"/travel-package\"></ion-back-button>\n    </ion-button>\n    <ion-title> Package Loaded</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <h1>\n      {{specificPackage.id}}\n    </h1>\n  </div>\n  <div>\n    <ion-item>\n      {{specificPackage.city}}\n    </ion-item>\n  </div>\n  <div>\n    <ion-item>\n      {{specificPackage.country}}\n    </ion-item>\n  </div>\n  <div>\n    <ion-item>\n      {{specificPackage.details}}\n    </ion-item>\n  </div>\n  <div>\n    <ion-item>\n      {{specificPackage.ratings}}\n    </ion-item>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/travel-package/package-details/package-details-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/travel-package/package-details/package-details-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PackageDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailsPageRoutingModule", function() { return PackageDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _package_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package-details.page */ "./src/app/travel-package/package-details/package-details.page.ts");




var routes = [
    {
        path: '',
        component: _package_details_page__WEBPACK_IMPORTED_MODULE_3__["PackageDetailsPage"]
    }
];
var PackageDetailsPageRoutingModule = /** @class */ (function () {
    function PackageDetailsPageRoutingModule() {
    }
    PackageDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PackageDetailsPageRoutingModule);
    return PackageDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/travel-package/package-details/package-details.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/travel-package/package-details/package-details.module.ts ***!
  \**************************************************************************/
/*! exports provided: PackageDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailsPageModule", function() { return PackageDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _package_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package-details-routing.module */ "./src/app/travel-package/package-details/package-details-routing.module.ts");
/* harmony import */ var _package_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./package-details.page */ "./src/app/travel-package/package-details/package-details.page.ts");







var PackageDetailsPageModule = /** @class */ (function () {
    function PackageDetailsPageModule() {
    }
    PackageDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _package_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackageDetailsPageRoutingModule"]
            ],
            declarations: [_package_details_page__WEBPACK_IMPORTED_MODULE_6__["PackageDetailsPage"]]
        })
    ], PackageDetailsPageModule);
    return PackageDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/travel-package/package-details/package-details.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/travel-package/package-details/package-details.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC1wYWNrYWdlL3BhY2thZ2UtZGV0YWlscy9wYWNrYWdlLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/travel-package/package-details/package-details.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/travel-package/package-details/package-details.page.ts ***!
  \************************************************************************/
/*! exports provided: PackageDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailsPage", function() { return PackageDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_package_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/package.service */ "./src/app/services/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PackageDetailsPage = /** @class */ (function () {
    function PackageDetailsPage(packageService, activatedRoute) {
        this.packageService = packageService;
        this.activatedRoute = activatedRoute;
    }
    PackageDetailsPage.prototype.ngOnInit = function () {
        // this.getspecificPackage(this.activatedRoute.snapshot.params.id);
        /*     this.activatedRoute.paramMap.subscribe(paramMap =>{
              if(paramMap.has(id)){
        
                return;
              }
              const id=paramMap.get('id');
             this.specificPackage= this.packageService.getPackage(id);
            }); */
    };
    PackageDetailsPage.ctorParameters = function () { return [
        { type: _services_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    PackageDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package-details',
            template: __webpack_require__(/*! raw-loader!./package-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/travel-package/package-details/package-details.page.html"),
            styles: [__webpack_require__(/*! ./package-details.page.scss */ "./src/app/travel-package/package-details/package-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_package_service__WEBPACK_IMPORTED_MODULE_2__["PackageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PackageDetailsPage);
    return PackageDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=package-details-package-details-module-es5.js.map