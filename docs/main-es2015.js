(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row mt-5\">\n    <div class=\"col-3\">\n        <app-transfer [account]=\"account\"></app-transfer>\n    </div>\n    <div class=\"col-9\">\n        <div>\n            <app-transactions></app-transactions>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <span>\n        <svg *ngIf=\"title === 'makeATransfer'\" id=\"bold\" enable-background=\"new 0 0 24 24\" height=\"24\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m23.25 15c-.414 0-.75-.336-.75-.75 0-2.895-2.355-5.25-5.25-5.25h-7.25v3.25c0 .66-.794.994-1.268.542l-5.5-5.25c-.148-.141-.232-.337-.232-.542s.084-.401.232-.542l5.5-5.25c.476-.454 1.268-.116 1.268.542v3.25h6.25c4.273 0 7.75 3.477 7.75 7.75v1.5c0 .414-.336.75-.75.75z\"/><path d=\"m14 22.25v-3.25h-6.25c-4.273 0-7.75-3.477-7.75-7.75v-1.5c0-.414.336-.75.75-.75s.75.336.75.75c0 2.895 2.355 5.25 5.25 5.25h7.25v-3.25c0-.657.791-.998 1.268-.542l5.5 5.25c.148.141.232.337.232.542s-.084.401-.232.542l-5.5 5.25c-.477.454-1.268.116-1.268-.542z\"/></svg>\n        <svg *ngIf=\"title === 'recentTransactions'\" id=\"bold\" enable-background=\"new 0 0 24 24\" height=\"24\" viewBox=\"0 0 24 24\" width=\"28\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m15 6.5c-.552 0-1-.448-1-1v-1.5h-4v1.5c0 .552-.448 1-1 1s-1-.448-1-1v-1.5c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v1.5c0 .552-.448 1-1 1z\"/><path d=\"m12.71 15.38c-.18.07-.44.12-.71.12s-.53-.05-.77-.14l-11.23-3.74v7.63c0 1.52 1.23 2.75 2.75 2.75h18.5c1.52 0 2.75-1.23 2.75-2.75v-7.63z\"/><path d=\"m24 7.75v2.29l-11.76 3.92c-.08.03-.16.04-.24.04s-.16-.01-.24-.04l-11.76-3.92v-2.29c0-1.52 1.23-2.75 2.75-2.75h18.5c1.52 0 2.75 1.23 2.75 2.75z\"/></svg>\n    </span>\n    <span class=\"title\">{{ title | translate }}</span>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"container\">\n        <img src=\"assets/logo.jpg\" alt=\"Peachtree Bank\" />\n        <div class=\"navbar-text\">\n            <span (click)=\"switchLang('en')\" data-lang=\"en\" class=\"active\">\n                En\n            </span> |\n            <span (click)=\"switchLang('es')\" data-lang=\"es\">\n                Es\n            </span>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/transactions/transaction.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/transactions/transaction.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"transaction-container\" [ngStyle]=\"{'border-left-color': transaction.categoryCode}\">\n    <div class=\"col-1\">\n        {{transaction.dates.valueDate | date:'MMM d' }}\n    </div>\n    <div class=\"col-8 merchant-container\">\n        <div><img [src]=\"transaction.merchant.name | logo\" /></div>\n        <div>\n            <div class=\"merchant-title\">{{transaction.merchant.name }}</div>\n            <div>{{transaction.transaction.type | translate}}</div>\n        </div>\n    </div>\n    <div class=\"col-3 amount-container\">{{transaction.transaction.amountCurrency.amount | currency:'EUR' }}</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/transactions/transactions.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/transactions/transactions.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <app-header title=\"{{title}}\"></app-header>\n\n    <div class=\"container filters-container\">\n        <div class=\"col-5\">\n            <input class=\"search-box\" type=\"text\" [(ngModel)]=\"filter\" (ngModelChange)=\"handleFilter($event)\" placeholder=\"{{ 'merchantName' | translate }}\">\n            <button class=\"close-icon\" type=\"reset\" (click)=\"clearFilter()\" *ngIf=\"(filter != '')\"></button>\n            \n        </div>\n        <div class=\"col-7 sort-container\">\n            <div>{{ 'sortBy' | translate }}</div>\n            <ul>\n                <li (click)=\"handleSort('date')\" [ngClass]=\" getClass('date') \">\n                    {{ 'date' | translate }}\n                    <i class=\"sort-by-desc\" *ngIf=\"!asc && order.includes('date')\"></i>\n                    <i class=\"sort-by-asc\" *ngIf=\"asc && order.includes('date')\"></i>\n                </li>\n                <li (click)=\"handleSort('merchant')\" [ngClass]=\" getClass('merchant') \">\n                    {{ 'beneficiary' | translate }}\n                    <i class=\"sort-by-desc\" *ngIf=\"!asc && order.includes('merchant')\"></i>\n                    <i class=\"sort-by-asc\" *ngIf=\"asc && order.includes('merchant')\"></i>\n                </li>\n                <li (click)=\"handleSort('amount')\" [ngClass]=\" getClass('amount') \">\n                    {{ 'amount' | translate | titlecase }}\n                    <i class=\"sort-by-desc\" *ngIf=\"!asc && order.includes('amount')\"></i>\n                    <i class=\"sort-by-asc\" *ngIf=\"asc && order.includes('amount')\"></i>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"container history-container\">\n        <h1 *ngIf=\"(transactions.length <= 0)\">No Results</h1>\n        <div class=\"p-0\" *ngFor=\"let t of transactions\">\n            <app-transaction [transaction]=\"t\"></app-transaction>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/transfer/form.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/transfer/form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"success-msg\" *ngIf=\"success\">\n    Transfer done!\n</div>\n<form #f=\"ngForm\" (ngSubmit)=\"save(f)\" novalidate=\"\">\n    <div class=\"form-group\">\n        <label for=\"fromAccount\">{{ 'fromAccount' | translate }}</label>\n        <input type=\"text\"\n            disabled\n            id=\"fromAccount\"\n            name=\"fromAccount\"\n            class=\"form-control\"\n            value=\"{{ accountDetail }} {{ account.balance | currency:'EUR' }}\"\n        >\n    </div>\n\n    <div [ngClass]=\"{'has-danger': inputToAccount.errors?.required}\">\n        <label for=\"toAccount\">{{ 'toAccount' | translate }}</label>\n        <select [disabled]=\"confirm\" name=\"toAccount\" id=\"toAccount\" [(ngModel)]=\"toAccount\" class=\"form-control\" required #inputToAccount=\"ngModel\">\n            <option *ngFor=\"let merchant of merchants\" value=\"{{merchant}}\">{{ merchant }}</option>\n        </select>\n        <div class=\"text-danger\" *ngIf=\"inputToAccount.errors?.required && inputToAccount.touched\"> {{ 'requiredError' | translate }} </div>\n    </div>\n    \n\n    <div [ngClass]=\"{'has-danger': inputAmount.errors?.required || balanceError}\">\n        <label for=\"amount\">{{ 'amount' | translate }}</label>\n        <input [disabled]=\"confirm\" class=\"form-control\" type=\"number\" id=\"amount\" [(ngModel)]=\"amount\" name=\"amount\" [value]=\"amount\" required #inputAmount=\"ngModel\">\n        <div class=\"text-danger\" *ngIf=\"inputAmount.errors?.required && inputAmount.touched\"> {{ 'requiredError' | translate }}</div>\n        <div class=\"text-danger\" *ngIf=\"balanceError\"> {{ 'balanceError' | translate }} </div>\n    </div>\n\n    <div class=\"button-container\">\n        <button class=\"submit-button\" *ngIf=\"!confirm\" type=\"button\" (click)=\"handleConfirm()\" [disabled]=\"f.invalid\">{{ 'submit' | translate }}</button>\n        <button *ngIf=\"confirm\" type=\"submit\">{{ 'transfer' | translate }}</button>\n    </div>\n  </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/transfer/transfer.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/transfer/transfer.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <app-header title=\"{{ title }}\"></app-header>\n   <div>\n        <app-form [account]=\"account\"></app-form>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'assesment';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/transfer/transfer.component */ "./src/app/components/transfer/transfer.component.ts");
/* harmony import */ var _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/transactions/transactions.component */ "./src/app/components/transactions/transactions.component.ts");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _components_transfer_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/transfer/form.component */ "./src/app/components/transfer/form.component.ts");
/* harmony import */ var _pipes_logo_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/logo.pipe */ "./src/app/pipes/logo.pipe.ts");
/* harmony import */ var _components_transactions_transaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/transactions/transaction.component */ "./src/app/components/transactions/transaction.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_7__["TransferComponent"],
            _components_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__["TransactionsComponent"],
            _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _components_transfer_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"],
            _pipes_logo_pipe__WEBPACK_IMPORTED_MODULE_11__["LogoPipe"],
            _components_transactions_transaction_component__WEBPACK_IMPORTED_MODULE_12__["TransactionComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                }
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);

// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    // return new TranslateHttpLoader(http);
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.account = {};
    }
    ngOnInit() {
        this.account.type = 'Free Checking';
        this.account.id = 4692;
        this.account.balance = 5824.76;
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/shared/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-color: var(--blue);\n  color: white;\n  display: flex;\n  align-items: center;\n}\n.header svg {\n  fill: white;\n}\n.header .title {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvaGVhZGVyL0M6XFxDRVNBUlxcREVWXFxBbmd1bGFyXFxhc3Nlc21lbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtBQ0NSO0FERUk7RUFDSSxjQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxufSIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlciBzdmcge1xuICBmaWxsOiB3aGl0ZTtcbn1cbi5oZWFkZXIgLnRpdGxlIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let HeaderComponent = class HeaderComponent {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "title", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/shared/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: white;\n  border-bottom: 3px solid var(--orange);\n  padding: 20px 0;\n  width: 100%;\n}\nnav img {\n  max-width: 30vw;\n}\nnav .navbar-text {\n  float: right;\n}\nnav .navbar-text span {\n  cursor: pointer;\n}\nnav .navbar-text span.active {\n  color: var(--orange);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL0M6XFxDRVNBUlxcREVWXFxBbmd1bGFyXFxhc3Nlc21lbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDSjtBRENJO0VBQ0ksZUFBQTtBQ0NSO0FERUk7RUFDSSxZQUFBO0FDQVI7QURFUTtFQUNJLGVBQUE7QUNBWjtBREVZO0VBQ0ksb0JBQUE7QUNBaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLW9yYW5nZSk7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMzB2dztcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLXRleHQge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxubmF2IGltZyB7XG4gIG1heC13aWR0aDogMzB2dztcbn1cbm5hdiAubmF2YmFyLXRleHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5uYXYgLm5hdmJhci10ZXh0IHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5uYXYgLm5hdmJhci10ZXh0IHNwYW4uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let NavbarComponent = class NavbarComponent {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
    }
    switchLang(lang) {
        document.querySelector('span.active').classList.remove('active');
        document.querySelector(`[data-lang="${lang}"`).classList.add('active');
        this.translate.use(lang);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/shared/navbar/navbar.component.scss")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/transactions/transaction.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/transactions/transaction.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transaction-container {\n  align-items: center;\n  border: 1px solid gray;\n  border-width: 0px 1px 1px 10px;\n  display: flex;\n}\n.transaction-container:first-child {\n  border-top-width: 1px;\n}\n.amount-container {\n  text-align: right;\n}\n.merchant-container {\n  align-items: center;\n  display: flex;\n  padding: 0px !important;\n}\n.merchant-container .merchant-title {\n  font-weight: bold;\n}\n.merchant-container div {\n  padding: 0px !important;\n}\n.merchant-container img {\n  max-height: 50px;\n  margin-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbnMvQzpcXENFU0FSXFxERVZcXEFuZ3VsYXJcXGFzc2VzbWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdHJhbnNhY3Rpb25zXFx0cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDQ0o7QURDSTtFQUNJLHFCQUFBO0FDQ1I7QURHQTtFQUNJLGlCQUFBO0FDQUo7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQUo7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURHSTtFQUNJLHVCQUFBO0FDRFI7QURJSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IDFweCAxcHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYW1vdW50LWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm1lcmNoYW50LWNvbnRhaW5lcntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLm1lcmNoYW50LXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbn0iLCIudHJhbnNhY3Rpb24tY29udGFpbmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDFweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRyYW5zYWN0aW9uLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbn1cblxuLmFtb3VudC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1lcmNoYW50LWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLm1lcmNoYW50LWNvbnRhaW5lciAubWVyY2hhbnQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tZXJjaGFudC1jb250YWluZXIgZGl2IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWVyY2hhbnQtY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/transactions/transaction.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/transactions/transaction.component.ts ***!
  \******************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let TransactionComponent = class TransactionComponent {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
    }
};
TransactionComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TransactionComponent.prototype, "transaction", void 0);
TransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction',
        template: __webpack_require__(/*! raw-loader!./transaction.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/transactions/transaction.component.html"),
        styles: [__webpack_require__(/*! ./transaction.component.scss */ "./src/app/components/transactions/transaction.component.scss")]
    })
], TransactionComponent);



/***/ }),

/***/ "./src/app/components/transactions/transactions.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/transactions/transactions.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 575.98px) {\n  .col-5, .col-7 {\n    width: 100%;\n  }\n  .col-5.sort-container, .col-7.sort-container {\n    justify-content: flex-start !important;\n  }\n}\n.p-0 {\n  padding: 0 !important;\n}\n.filters-container {\n  align-items: baseline;\n  display: flex;\n  flex-wrap: wrap;\n}\n.filters-container .col-5, .filters-container .col-7 {\n  padding: unset;\n}\n.filters-container .sort-container {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  padding: unset;\n}\n.filters-container .sort-container ul {\n  display: flex;\n  justify-content: flex-end;\n  list-style: none;\n  padding: unset;\n  width: 75%;\n}\n.filters-container .sort-container ul li {\n  border: 1px solid lightgray;\n  cursor: pointer;\n  text-align: center;\n  width: 33%;\n}\n.filters-container .sort-container ul li.active {\n  border-color: var(--orange);\n}\n.filters-container .sort-container ul li .sort-by-asc {\n  left: 3px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border: solid 5px transparent;\n  margin: 4px 4px 0 3px;\n  background: transparent;\n  border-bottom: solid 7px #F80;\n  border-top-width: 0;\n}\n.filters-container .sort-container ul li .sort-by-desc {\n  left: 3px;\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border: solid 5px transparent;\n  margin: 4px 4px 0 3px;\n  background: transparent;\n  border-top: solid 7px #F80;\n  border-bottom-width: 0;\n}\n.history-container {\n  margin-bottom: 50px;\n}\nh1 {\n  text-align: center;\n  color: var(--orange);\n}\ninput, select {\n  border-width: 0 0 1px 0;\n  margin-bottom: 20px;\n  padding: 5px 0;\n  width: calc(90% - 10px);\n}\ninput.ng-invalid, select.ng-invalid {\n  border-color: red;\n}\ninput:focus, select:focus {\n  outline: unset;\n}\n.search-box, .close-icon, .search-wrapper {\n  position: relative;\n  padding: 10px;\n}\n.close-icon {\n  border: 1px solid transparent;\n  background-color: transparent;\n  display: inline-block;\n  vertical-align: middle;\n  outline: 0;\n  cursor: pointer;\n}\n.close-icon:after {\n  content: \"X\";\n  display: block;\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  background-color: #FA9595;\n  z-index: 1;\n  right: 35px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  padding: 2px;\n  border-radius: 50%;\n  text-align: center;\n  color: white;\n  font-weight: normal;\n  font-size: 12px;\n  box-shadow: 0 0 2px #E50F0F;\n  cursor: pointer;\n}\n.search-box:not(:valid) ~ .close-icon {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2FjdGlvbnMvQzpcXENFU0FSXFxERVZcXEFuZ3VsYXJcXGFzc2VzbWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdHJhbnNhY3Rpb25zXFx0cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDO0lBQ0MsV0FBQTtFQ0FBO0VERUE7SUFDQyxzQ0FBQTtFQ0FEO0FBQ0Y7QURJQTtFQUNJLHFCQUFBO0FDRko7QURLQTtFQUNDLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNGRDtBRElDO0VBQ0MsY0FBQTtBQ0ZGO0FES0M7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNIRjtBREtFO0VBQ0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0hIO0FES0c7RUFDQywyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNISjtBREtJO0VBQ0MsMkJBQUE7QUNITDtBRE1JO0VBRUMsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDTEw7QURRSTtFQUVDLFNBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ1BMO0FEY0E7RUFDQyxtQkFBQTtBQ1hEO0FEY0E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FDWEo7QURjQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNYSjtBRGFJO0VBQ0ksaUJBQUE7QUNYUjtBRGNJO0VBQ0ksY0FBQTtBQ1pSO0FEZ0JBO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0FDYkQ7QURnQkE7RUFDQyw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNDLFVBQUE7RUFDQSxlQUFBO0FDYkY7QURnQkE7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDYkQ7QURnQkE7RUFDQyxhQUFBO0FDYkQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcblx0LmNvbC01LCAuY29sLTcge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0Ji5zb3J0LWNvbnRhaW5lciB7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnAtMCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXJzLWNvbnRhaW5lciB7XHJcblx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cclxuXHQuY29sLTUsIC5jb2wtNyB7XHJcblx0XHRwYWRkaW5nOiB1bnNldDtcclxuXHR9XHJcblx0XHJcblx0LnNvcnQtY29udGFpbmVyIHtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdHBhZGRpbmc6IHVuc2V0O1xyXG5cclxuXHRcdHVsIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0XHRwYWRkaW5nOiB1bnNldDtcclxuXHRcdFx0d2lkdGg6IDc1JTtcclxuXHJcblx0XHRcdGxpIHtcclxuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHR3aWR0aDogMzMlO1xyXG5cclxuXHRcdFx0XHQmLmFjdGl2ZSB7XHJcblx0XHRcdFx0XHRib3JkZXItY29sb3I6IHZhcigtLW9yYW5nZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuc29ydC1ieS1hc2NcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZWZ0OiAzcHg7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHR3aWR0aDogMDtcclxuXHRcdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHRcdGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA0cHggNHB4IDAgM3B4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiBzb2xpZCA3cHggI0Y4MDtcclxuXHRcdFx0XHRcdGJvcmRlci10b3Atd2lkdGg6IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuc29ydC1ieS1kZXNjXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGVmdDogM3B4O1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdFx0XHRib3JkZXI6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHRcdG1hcmdpbjogNHB4IDRweCAwIDNweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogc29saWQgN3B4ICNGODA7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmhpc3RvcnktY29udGFpbmVyIHtcclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcclxufVxyXG5cclxuaW5wdXQsIHNlbGVjdCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIHdpZHRoOiBjYWxjKDkwJSAtIDEwcHgpO1xyXG5cclxuICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LC5jbG9zZS1pY29uLC5zZWFyY2gtd3JhcHBlciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uIHtcclxuXHRib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xvc2UtaWNvbjphZnRlciB7XHJcblx0Y29udGVudDogXCJYXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDE1cHg7XHJcblx0aGVpZ2h0OiAxNXB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkE5NTk1O1xyXG5cdHotaW5kZXg6MTtcclxuXHRyaWdodDogMzVweDtcclxuXHR0b3A6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRwYWRkaW5nOiAycHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Ym94LXNoYWRvdzogMCAwIDJweCAjRTUwRjBGO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1ib3g6bm90KDp2YWxpZCkgfiAuY2xvc2UtaWNvbiB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuY29sLTUsIC5jb2wtNyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbC01LnNvcnQtY29udGFpbmVyLCAuY29sLTcuc29ydC1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG59XG4ucC0wIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVycy1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5maWx0ZXJzLWNvbnRhaW5lciAuY29sLTUsIC5maWx0ZXJzLWNvbnRhaW5lciAuY29sLTcge1xuICBwYWRkaW5nOiB1bnNldDtcbn1cbi5maWx0ZXJzLWNvbnRhaW5lciAuc29ydC1jb250YWluZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiB1bnNldDtcbn1cbi5maWx0ZXJzLWNvbnRhaW5lciAuc29ydC1jb250YWluZXIgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiB1bnNldDtcbiAgd2lkdGg6IDc1JTtcbn1cbi5maWx0ZXJzLWNvbnRhaW5lciAuc29ydC1jb250YWluZXIgdWwgbGkge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzMlO1xufVxuLmZpbHRlcnMtY29udGFpbmVyIC5zb3J0LWNvbnRhaW5lciB1bCBsaS5hY3RpdmUge1xuICBib3JkZXItY29sb3I6IHZhcigtLW9yYW5nZSk7XG59XG4uZmlsdGVycy1jb250YWluZXIgLnNvcnQtY29udGFpbmVyIHVsIGxpIC5zb3J0LWJ5LWFzYyB7XG4gIGxlZnQ6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiA0cHggNHB4IDAgM3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgN3B4ICNGODA7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG59XG4uZmlsdGVycy1jb250YWluZXIgLnNvcnQtY29udGFpbmVyIHVsIGxpIC5zb3J0LWJ5LWRlc2Mge1xuICBsZWZ0OiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogNHB4IDRweCAwIDNweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IHNvbGlkIDdweCAjRjgwO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uaGlzdG9yeS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLW9yYW5nZSk7XG59XG5cbmlucHV0LCBzZWxlY3Qge1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHdpZHRoOiBjYWxjKDkwJSAtIDEwcHgpO1xufVxuaW5wdXQubmctaW52YWxpZCwgc2VsZWN0Lm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cbmlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiB1bnNldDtcbn1cblxuLnNlYXJjaC1ib3gsIC5jbG9zZS1pY29uLCAuc2VhcmNoLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsb3NlLWljb246YWZ0ZXIge1xuICBjb250ZW50OiBcIlhcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBOTU5NTtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDM1cHg7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDAgMnB4ICNFNTBGMEY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaC1ib3g6bm90KDp2YWxpZCkgfiAuY2xvc2UtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/transactions/transactions.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/transactions/transactions.component.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_sort_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sort.service */ "./src/app/services/sort.service.ts");
/* harmony import */ var _helpers_transactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/transactions */ "./src/helpers/transactions.js");




let TransactionsComponent = class TransactionsComponent {
    constructor(sort) {
        this.sort = sort;
        this.title = 'recentTransactions';
        this.transactions = [];
        this.filter = '';
        this.order = 'date';
        this.asc = false;
    }
    ngOnInit() {
        this.transactions = this.sort.sortByDate(this.asc, _helpers_transactions__WEBPACK_IMPORTED_MODULE_3__["Transactions"].data);
    }
    handleFilter(e) {
        this.transactions = _helpers_transactions__WEBPACK_IMPORTED_MODULE_3__["Transactions"].data.filter(t => t.merchant.name.toLowerCase().includes(e));
    }
    clearFilter() {
        this.transactions = _helpers_transactions__WEBPACK_IMPORTED_MODULE_3__["Transactions"].data;
        this.filter = '';
    }
    handleSort(query) {
        this.asc = (query === this.order) ? !this.asc : false;
        this.sort.setAsc(this.asc);
        this.sort.setSort(query);
        switch (query) {
            case 'date':
                this.sort.sortByDate(this.asc, this.transactions);
                break;
            case 'amount':
                this.sort.sortByAmount(this.asc, this.transactions);
                break;
            case 'merchant':
                this.sort.sortByMerchant(this.asc, this.transactions);
                break;
            default:
                break;
        }
        this.order = query;
    }
    getClass(c) {
        const activeClass = (this.order === c) ? 'active' : '';
        return activeClass;
    }
};
TransactionsComponent.ctorParameters = () => [
    { type: src_app_services_sort_service__WEBPACK_IMPORTED_MODULE_2__["SortService"] }
];
TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions',
        template: __webpack_require__(/*! raw-loader!./transactions.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/transactions/transactions.component.html"),
        styles: [__webpack_require__(/*! ./transactions.component.scss */ "./src/app/components/transactions/transactions.component.scss")]
    })
], TransactionsComponent);



/***/ }),

/***/ "./src/app/components/transfer/form.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/transfer/form.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success-msg {\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  font-size: 1.5em;\n  background-color: green;\n}\n\n.has-danger input {\n  border-color: red;\n}\n\ninput, select {\n  border-width: 0 0 1px 0;\n  margin-bottom: 20px;\n  padding: 5px 0;\n  width: calc(100% - 10px);\n}\n\ninput.ng-invalid, select.ng-invalid {\n  border-color: red;\n}\n\ninput:focus, select:focus {\n  outline: unset;\n}\n\n.text-danger {\n  color: red;\n  padding: 0px !important;\n}\n\nlabel {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.button-container {\n  padding: 0;\n  height: 35px;\n}\n\n.button-container button {\n  background-color: var(--orange);\n  border: none;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n  float: right;\n  padding: 8px;\n  width: 50%;\n}\n\n.button-container button.submit-button {\n  background-color: white;\n  color: var(--orange);\n  border: 2px solid var(--orange);\n}\n\n.button-container button:disabled {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2Zlci9DOlxcQ0VTQVJcXERFVlxcQW5ndWxhclxcYXNzZXNtZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmFuc2ZlclxcZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2Zlci9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FER0k7RUFDSSxpQkFBQTtBQ0FSOztBRElBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQ0RKOztBREdJO0VBQ0ksaUJBQUE7QUNEUjs7QURJSTtFQUNJLGNBQUE7QUNGUjs7QURNQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0hKOztBREtJO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0hSOztBREtRO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FDSFo7O0FETVE7RUFDSSxtQkFBQTtBQ0paIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFuc2Zlci9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3MtbXNnIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uaGFzLWRhbmdlciB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7IFxyXG4gICAgfVxyXG59XHJcblxyXG5pbnB1dCwgc2VsZWN0IHtcclxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG5cclxuICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICYuc3VibWl0LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tb3JhbmdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5zdWNjZXNzLW1zZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5oYXMtZGFuZ2VyIGlucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cbmlucHV0LCBzZWxlY3Qge1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbn1cbmlucHV0Lm5nLWludmFsaWQsIHNlbGVjdC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogdW5zZXQ7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbi5zdWJtaXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xufVxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/transfer/form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/transfer/form.component.ts ***!
  \*******************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_sort_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sort.service */ "./src/app/services/sort.service.ts");
/* harmony import */ var _helpers_transactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/transactions */ "./src/helpers/transactions.js");





let FormComponent = class FormComponent {
    constructor(translate, sort) {
        this.translate = translate;
        this.sort = sort;
        this.amount = 0.0;
        this.toAccount = '';
        this.confirm = false;
        this.balanceError = false;
        this.success = false;
        this.addData = (transfer) => {
            this.success = true;
            _helpers_transactions__WEBPACK_IMPORTED_MODULE_4__["Transactions"].data.push(transfer);
            (this.sort.sort === 'date') && this.sort.sortByDate(this.sort.asc, _helpers_transactions__WEBPACK_IMPORTED_MODULE_4__["Transactions"].data);
            (this.sort.sort === 'merchant') && this.sort.sortByMerchant(this.sort.asc, _helpers_transactions__WEBPACK_IMPORTED_MODULE_4__["Transactions"].data);
            (this.sort.sort === 'amount') && this.sort.sortByAmount(this.sort.asc, _helpers_transactions__WEBPACK_IMPORTED_MODULE_4__["Transactions"].data);
            setTimeout(() => {
                this.success = false;
            }, 2000);
        };
    }
    ngOnInit() {
        this.accountDetail = `${this.account.type}(${this.account.id}) - `;
        this.merchants = _helpers_transactions__WEBPACK_IMPORTED_MODULE_4__["Transactions"].data.map(t => t.merchant.name);
    }
    handleConfirm() {
        if (this.amount <= this.account.balance) {
            this.confirm = true;
            this.balanceError = false;
        }
        else {
            this.balanceError = true;
        }
    }
    save(form) {
        let transfer = {
            categoryCode: "",
            dates: {
                valueDate: 0
            },
            transaction: {
                amountCurrency: {
                    amount: 0,
                    currencyCode: "EUR"
                },
                type: "",
                creditDebitIndicator: "CRDT"
            },
            merchant: {
                name: "",
                accountNumber: "SI64397745065188826"
            }
        };
        const { toAccount, amount } = form.value;
        const { categoryCode, transaction } = _helpers_transactions__WEBPACK_IMPORTED_MODULE_4__["Transactions"].data.find(item => (item.merchant.name === toAccount));
        transfer.dates.valueDate = new Date().getTime();
        transfer.transaction.amountCurrency.amount = amount;
        transfer.categoryCode = categoryCode;
        transfer.transaction.type = transaction.type;
        transfer.merchant.name = toAccount;
        this.addData(transfer);
        form.reset();
        this.confirm = false;
        this.account.balance = this.account.balance - amount;
    }
};
FormComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_services_sort_service__WEBPACK_IMPORTED_MODULE_3__["SortService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormComponent.prototype, "account", void 0);
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/transfer/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/components/transfer/form.component.scss")]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/components/transfer/transfer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/transfer/transfer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNmZXIvdHJhbnNmZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/transfer/transfer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/transfer/transfer.component.ts ***!
  \***********************************************************/
/*! exports provided: TransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferComponent", function() { return TransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransferComponent = class TransferComponent {
    constructor() {
        this.title = 'makeATransfer';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TransferComponent.prototype, "account", void 0);
TransferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transfer',
        template: __webpack_require__(/*! raw-loader!./transfer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/transfer/transfer.component.html"),
        styles: [__webpack_require__(/*! ./transfer.component.scss */ "./src/app/components/transfer/transfer.component.scss")]
    })
], TransferComponent);



/***/ }),

/***/ "./src/app/pipes/logo.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/logo.pipe.ts ***!
  \************************************/
/*! exports provided: LogoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoPipe", function() { return LogoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoPipe = class LogoPipe {
    transform(merchant) {
        this.imgName = `assets/icons/${merchant.toLowerCase().replace(/ /g, '-')}.png`;
        return this.imgName;
    }
};
LogoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'logo'
    })
], LogoPipe);



/***/ }),

/***/ "./src/app/services/sort.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/sort.service.ts ***!
  \******************************************/
/*! exports provided: SortService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function() { return SortService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortService = class SortService {
    constructor() {
        this.asc = false;
        this.sort = 'date';
    }
    setAsc(asc) {
        this.asc = asc;
    }
    setSort(sort) {
        this.sort = sort;
    }
    sortByDate(asc, transactions) {
        return (transactions.sort((a, b) => {
            const x = new Date(a.dates.valueDate).getTime();
            const y = new Date(b.dates.valueDate).getTime();
            if (asc)
                return x - y;
            else
                return y - x;
        }));
    }
    sortByAmount(asc, transactions) {
        if (asc)
            return transactions.sort((a, b) => a.transaction.amountCurrency.amount - b.transaction.amountCurrency.amount);
        else
            return transactions.sort((a, b) => b.transaction.amountCurrency.amount - a.transaction.amountCurrency.amount);
    }
    sortByMerchant(asc, transactions) {
        return (transactions.sort((a, b) => {
            if (!asc) {
                if (a.merchant.name > b.merchant.name) {
                    return -1;
                }
                if (a.merchant.name < b.merchant.name) {
                    return 1;
                }
                return 0;
            }
            else {
                if (a.merchant.name < b.merchant.name) {
                    return -1;
                }
                if (a.merchant.name > b.merchant.name) {
                    return 1;
                }
                return 0;
            }
        }));
    }
};
SortService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SortService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/helpers/transactions.js":
/*!*************************************!*\
  !*** ./src/helpers/transactions.js ***!
  \*************************************/
/*! exports provided: Transactions, addData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transactions", function() { return Transactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addData", function() { return addData; });
const Transactions = {
  "data": [{
      "categoryCode": "#12a580",
      "dates": {
        "valueDate": 1600493600000
      },
      "transaction": {
        "amountCurrency": {
          "amount": 5000,
          "currencyCode": "EUR"
        },
        "type": "Salaries",
        "creditDebitIndicator": "CRDT"
      },
      "merchant": {
        "name": "Backbase",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#12a580",
      "dates": {
        "valueDate": 1600387200000
      },
      "transaction": {
        "amountCurrency": {
          "amount": "82.02",
          "currencyCode": "EUR"
        },
        "type": "Card Payment",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": "The Tea Lounge",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#d51271",
      "dates": {
        "valueDate": "2020-09-19"
      },
      "transaction": {
        "amountCurrency": {
          "amount": "84.64",
          "currencyCode": "EUR"
        },
        "type": "Card Payment",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": "Texaco",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#12a580",
      "dates": {
        "valueDate": 1600300800000
      },
      "transaction": {
        "amountCurrency": {
          "amount": "84.76",
          "currencyCode": "EUR"
        },
        "type": "Card Payment",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": "The Tea Lounge",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#c12020",
      "dates": {
        "valueDate": 1600370800000
      },
      "transaction": {
        "amountCurrency": {
          "amount": "22.10",
          "currencyCode": "EUR"
        },
        "type": "Online Transfer",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": "Amazon Online Store",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#c89616",
      "dates": {
        "valueDate": 1600214400000
      },
      "transaction": {
        "amountCurrency": {
          "amount": "46.25",
          "currencyCode": "EUR"
        },
        "type": "Card Payment",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": "7-Eleven",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#e25a2c",
      "dates": {
        "valueDate": 1476721442000
      },
      "transaction": {
        "amountCurrency": {
          "amount": "19.72",
          "currencyCode": "EUR"
        },
        "type": "Online Transfer"
      },
      "merchant": {
        "name": "H&M Online Store",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#1180aa",
      "dates": {
        "valueDate": "2020-09-15"
      },
      "transaction": {
        "amountCurrency": {
          "amount": "68.87",
          "currencyCode": "EUR"
        },
        "type": "Transaction",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": "Jerry Hildreth",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#1180aa",
      "dates": {
        "valueDate": 1600041600000
      },
      "transaction": {
        "amountCurrency": {
          "amount": "52.36",
          "currencyCode": "EUR"
        },
        "type": "Transaction",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": "Lawrence Pearson",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#12a580",
      "dates": {
        "valueDate": 1599955200000
      },
      "transaction": {
        "amountCurrency": {
          "amount": "75.93",
          "currencyCode": "EUR"
        },
        "type": "Card Payment",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": "Whole Foods",
        "accountNumber": "SI64397745065188826"
      }
    }, {
      "categoryCode": "#fbbb1b",
      "dates": {
        "valueDate": 1599868800000
      },
      "transaction": {
        "amountCurrency": {
          "amount": "142.95",
          "currencyCode": "EUR"
        },
        "type": "Online Transfer",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": "Southern Electric Company",
        "accountNumber": "SI64397745065188826"
      }
    }
  ]
}

const addData = ( transfer ) => {
  // const aux = [ Transactions.data ];
  Transactions.data.push(transfer);
  Transactions.data.sort((a, b) => {
    const x = new Date(a.dates.valueDate).getTime();
    const y = new Date(b.dates.valueDate).getTime();
    return y - x;
  })
}

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CESAR\DEV\Angular\assesment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map