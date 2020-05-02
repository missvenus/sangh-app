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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>जय पूज्य धर्मदास सौभाग्य सूर्य उमेशाचार्य</h3>\n<div>\n  <div class=\"topbar\">\n     <nav>\n       <a routerLink=\"/home\">Home</a>\n       <a routerLink=\"/dashboard\">Dashboard</a>\n      <a routerLink=\"/mharashahebs\">Chaturmas List</a>\n      <a routerLink=\"/contact-us\">Contact US</a>\n     </nav>\n  </div>\n  <div class=\"container\">\n  <router-outlet></router-outlet>\n  </div>\n</div>\n<!--<app-messages></app-messages>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- carousel -->\n<div class=\"carousel\">\n  <ng-container *ngFor=\"let slide of slides; let i = index\">\n    <img\n      *ngIf=\"i === currentSlide\"\n      [src]=\"slide.src\"\n      class=\"slide\"\n      @carouselAnimation\n    />\n  </ng-container>\n\n  <!-- controls -->\n  <button class=\"control prev\" (click)=\"onPreviousClick()\">\n    <span class=\"arrow left\"> </span>\n  </button>\n  <button class=\"control next\" (click)=\"onNextClick()\">\n    <span class=\"arrow right\">  </span>\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contact-us works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--  <img class=\"mySlides\" src=\"../../assets/anu-image/image1.jpg\" alt=\"jai umesh\" style=\"width:100%\">-->\n<!--    <img class=\"mySlides\" src=\"../../assets/anu-image/image2.jpg\" alt=\"jai umesh\" style=\"width:100%\">-->\n<!--    <img class=\"mySlides\" src=\"../../assets/anu-image/image3.jpg\" alt=\"jai guru umesh\" style=\"width:100%\">-->\n  <!--  <img class=\"mySlides\" src=\"../../assets/anu-image/image4.jpg\" alt=\"jai umesh\" style=\"width:100%\">-->\n<!--<div class=\"container\">-->\n\n<!--</div>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mharashaheb-detail/mharashaheb-detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mharashaheb-detail/mharashaheb-detail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"mharashaheb\">\n  <h2>{{mharashaheb.name | uppercase}} Details</h2>\n  <div class=\"details\">\n    <label>\n      NAME: {{mharashaheb.name}}<br>\n      PLACE: {{mharashaheb.place}}\n    </label>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mharashahebs/mharashahebs.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mharashahebs/mharashahebs.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>प्रवर्तक देव द्वारा सभी आगारो सहित 2020 के वर्षावास की घोषणा</h2>\n<hr>\n<ul class=\"mharashahebs\">\n  <li *ngFor=\"let mharashaheb of mharashahebs\">\n    <a routerLink=\"/detail/{{mharashaheb.id}}\">\n      <span class=\"badge\">{{mharashaheb.id}}</span> {{mharashaheb.name}}\n    </a>\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _mharashahebs_mharashahebs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mharashahebs/mharashahebs.component */ "./src/app/mharashahebs/mharashahebs.component.ts");
/* harmony import */ var _mharashaheb_detail_mharashaheb_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mharashaheb-detail/mharashaheb-detail.component */ "./src/app/mharashaheb-detail/mharashaheb-detail.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");








const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'detail/:id', component: _mharashaheb_detail_mharashaheb_detail_component__WEBPACK_IMPORTED_MODULE_5__["MharashahebDetailComponent"] },
    { path: 'mharashahebs', component: _mharashahebs_mharashahebs_component__WEBPACK_IMPORTED_MODULE_4__["MharashahebsComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  margin-bottom: 0;\n  text-align: center;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n  text-align: center;\n}\nh3 {\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 1.5%;\n}\n.topbar {\n  /*background-color: #d65828;*/\n  max-width: 100%;\n  height: 20%;\n  margin-top: 1.5%;\n  text-align: center;\n}\n.container {\n  position: fixed;\n  border-style: solid;\n  border-width: 2px;\n  border-color: sienna;\n  width: 80%;\n  height: 80%;\n  min-height:60%;\n  background-color: #ffe6e6;\n  overflow:scroll;\n  margin: 1% 15% 5% 15%;\n  border-radius: 25px;\n}\nnav a {\n  padding: .5% 2.5% .5% .5%;\n}\nnav a:hover {\n  font-size: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAxLjUlO1xufVxuXG4udG9wYmFyIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZDY1ODI4OyovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIG1hcmdpbi10b3A6IDEuNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogc2llbm5hO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWluLWhlaWdodDo2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU2ZTY7XG4gIG92ZXJmbG93OnNjcm9sbDtcbiAgbWFyZ2luOiAxJSAxNSUgNSUgMTUlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5cbm5hdiBhIHtcbiAgcGFkZGluZzogLjUlIDIuNSUgLjUlIC41JTtcbn1cblxubmF2IGE6aG92ZXIge1xuICBmb250LXNpemU6IDEwMCU7XG59XG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'जय उमेशाचार्य';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _mharashaheb_detail_mharashaheb_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mharashaheb-detail/mharashaheb-detail.component */ "./src/app/mharashaheb-detail/mharashaheb-detail.component.ts");
/* harmony import */ var _mharashahebs_mharashahebs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mharashahebs/mharashahebs.component */ "./src/app/mharashahebs/mharashahebs.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _mharashahebs_mharashahebs_component__WEBPACK_IMPORTED_MODULE_8__["MharashahebsComponent"],
            _mharashaheb_detail_mharashaheb_detail_component__WEBPACK_IMPORTED_MODULE_7__["MharashahebDetailComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["ContactUsComponent"],
            _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 1;\n}\n\n.carousel {\n  position: relative;\n  height: 80%;\n  width: 80%;\n  margin: 5% 10% 5% 10%;\n  overflow: hidden;\n  border-radius: 0.5em;\n}\n\n.slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: none;\n     object-fit: none;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  border-radius: 0.5em;\n}\n\n.slide:hover {\n  transform: scale(1.025);\n}\n\n.control {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1.5em 0.2em 0.1em 0.2em;\n  color: mediumvioletred;\n  font-weight: bold;\n  font-size: 3em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 80%;\n  opacity: 80%;\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84)\n}\n\n.control:hover, .control:focus {\n            opacity: 1;\n          }\n\n.control.next {\n   right: 0;\n }\n\n.control.prev {\n   left: 0;\n }\n\n/* style the arrows */\n\n.arrow {\n  display: block;\n  border-left: 0.1em solid yellow;\n  border-bottom: 0.1em solid yellow;\n  width: 0.5em;\n  height: 0.5em\n}\n\n.arrow.left {\n   transform: rotate(45deg);\n }\n\n.arrow.right {\n   transform: rotate(225deg);\n }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBZ0I7S0FBaEIsZ0JBQWdCO0VBQ2hCLGdFQUFnRTtFQUNoRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWjtBQUNGOztBQUVBO1lBQ1ksVUFBVTtVQUNaOztBQUVWO0dBQ0csUUFBUTtDQUNWOztBQUNEO0dBQ0csT0FBTztDQUNUOztBQUdELHFCQUFxQjs7QUFDckI7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1o7QUFDRjs7QUFFQTtHQUNHLHdCQUF3QjtDQUMxQjs7QUFDRDtHQUNHLHlCQUF5QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG59XG5cbi5jYXJvdXNlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNSUgMTAlIDUlIDEwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG59XG5cbi5zbGlkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBub25lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuODQpO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbn1cblxuLnNsaWRlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XG59XG5cbi5jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxLjVlbSAwLjJlbSAwLjFlbSAwLjJlbTtcbiAgY29sb3I6IG1lZGl1bXZpb2xldHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG9wYWNpdHk6IDgwJTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NClcbn1cblxuLmNvbnRyb2w6aG92ZXIsIC5jb250cm9sOmZvY3VzIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4uY29udHJvbC5uZXh0IHtcbiAgIHJpZ2h0OiAwO1xuIH1cbi5jb250cm9sLnByZXYge1xuICAgbGVmdDogMDtcbiB9XG5cblxuLyogc3R5bGUgdGhlIGFycm93cyAqL1xuLmFycm93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiAwLjFlbSBzb2xpZCB5ZWxsb3c7XG4gIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHllbGxvdztcbiAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IDAuNWVtXG59XG5cbi5hcnJvdy5sZWZ0IHtcbiAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiB9XG4uYXJyb3cucmlnaHQge1xuICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiB9XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");



let CarouselComponent = class CarouselComponent {
    constructor() {
        this.slides = [
            { 'src': "../../assets/anu-image/image1.jpg", 'alt': "jai umesh", 'text': "string" },
            { 'src': "../../assets/anu-image/image2.jpg", 'alt': "jai umesh", 'text': "string" },
            { 'src': "../../assets/anu-image/image3.jpg", 'alt': "jai umesh", 'text': "string" },
            { 'src': "../../assets/anu-image/image4.jpg", 'alt': "jai umesh", 'text': "string" },
            { 'src': "../../assets/anu-image/image5.jpg", 'alt': "jai umesh", 'text': "string" },
            { 'src': "../../assets/anu-image/image6.jpg", 'alt': "jai umesh" },
            { 'src': "../../assets/anu-image/image7.jpg", 'alt': "jai umesh" },
            { 'src': "../../assets/anu-image/image8.jpg", 'alt': "jai umesh" }
        ];
        this.currentSlide = 0;
    }
    onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
        console.log("previous clicked, new current slide is: ", this.currentSlide);
    }
    onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
        console.log("next clicked, new current slide is: ", this.currentSlide);
    }
    ngOnInit() {
    }
};
CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('carouselAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")).default]
    })
], CarouselComponent);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")).default]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    ngOnInit() {
        // adding an image url dynamically.
    }
};
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], MessageService);



/***/ }),

/***/ "./src/app/mharashaheb-detail/mharashaheb-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/mharashaheb-detail/mharashaheb-detail.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MharashahebDetailComponent's private CSS styles */\nh2 {\n  text-align: center;\n}\nlabel {\n  display: inline-block;\n  width: 30em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\ndiv.details  {\n  background-color: lightblue;\n  border: 2px solid black;\n  padding: 0.8em 0.7em 0 0.7em;\n  width: 600px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWhhcmFzaGFoZWItZGV0YWlsL21oYXJhc2hhaGViLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUNwRDtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21oYXJhc2hhaGViLWRldGFpbC9taGFyYXNoYWhlYi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1oYXJhc2hhaGViRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMGVtO1xuICBtYXJnaW46IC41ZW0gMDtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW5wdXQge1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmctbGVmdDogLjRlbTtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogI2NjYztcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG5kaXYuZGV0YWlscyAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICB3aWR0aDogNjAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/mharashaheb-detail/mharashaheb-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/mharashaheb-detail/mharashaheb-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: MharashahebDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MharashahebDetailComponent", function() { return MharashahebDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mharashaheb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mharashaheb.service */ "./src/app/mharashaheb.service.ts");





let MharashahebDetailComponent = class MharashahebDetailComponent {
    constructor(route, mharashahebService, location) {
        this.route = route;
        this.mharashahebService = mharashahebService;
        this.location = location;
    }
    ngOnInit() {
        this.getMharashaheb();
    }
    getMharashaheb() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.mharashahebService.getMharashaheb(id)
            .subscribe(mharashaheb => this.mharashaheb = mharashaheb);
    }
    goBack() {
        this.location.back();
    }
};
MharashahebDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _mharashaheb_service__WEBPACK_IMPORTED_MODULE_4__["MharashahebService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
MharashahebDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mharashaheb-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mharashaheb-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mharashaheb-detail/mharashaheb-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mharashaheb-detail.component.css */ "./src/app/mharashaheb-detail/mharashaheb-detail.component.css")).default]
    })
], MharashahebDetailComponent);



/***/ }),

/***/ "./src/app/mharashaheb.service.ts":
/*!****************************************!*\
  !*** ./src/app/mharashaheb.service.ts ***!
  \****************************************/
/*! exports provided: MharashahebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MharashahebService", function() { return MharashahebService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _mock_mharashahebs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-mharashahebs */ "./src/app/mock-mharashahebs.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");





let MharashahebService = class MharashahebService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    getMharashahebs() {
        // TODO: send the message _after_ fetching the mharashahebs
        this.messageService.add('MharashahebService: fetched mharashahebs');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mharashahebs__WEBPACK_IMPORTED_MODULE_3__["MHARASHAHEBS"]);
    }
    getMharashaheb(id) {
        // TODO: send the message _after_ fetching the mharashaheb
        this.messageService.add(`MharashahebService: fetched mharashaheb id=${id}`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mharashahebs__WEBPACK_IMPORTED_MODULE_3__["MHARASHAHEBS"].find(mharashaheb => mharashaheb.id === id));
    }
};
MharashahebService.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
MharashahebService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], MharashahebService);



/***/ }),

/***/ "./src/app/mharashahebs/mharashahebs.component.css":
/*!*********************************************************!*\
  !*** ./src/app/mharashahebs/mharashahebs.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* HeroesComponent's private CSS styles */\nh2 {\n  text-align: center;\n  margin: 2.5% 0.5% 2.5% 0.5%;\n  color: darkorange;\n}\n.mharashahebs {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 35em;\n}\n.mharashahebs li {\n  cursor: pointer;\n  position: center;\n  left: 0;\n  margin: 0.5em;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.mharashahebs li:hover {\n  color: #d65828;\n  background-color: #DDD;\n  left: .1em;\n}\n.mharashahebs li.selected {\n  color: white;\n}\n.mharashahebs li.selected:hover {\n  background-color: #BBD8DC;\n  color: white;\n}\n.mharashahebs .badge {\n  display: inline-block;\n  color: white;\n  /*padding: 0.8em 0.8em 0 0.7em;*/\n  background-color:#d65828;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -3px;\n  height: 2em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWhhcmFzaGFoZWJzL21oYXJhc2hhaGVicy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QztFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbWhhcmFzaGFoZWJzL21oYXJhc2hhaGVicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyLjUlIDAuNSUgMi41JSAwLjUlO1xuICBjb2xvcjogZGFya29yYW5nZTtcbn1cbi5taGFyYXNoYWhlYnMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMzVlbTtcbn1cbi5taGFyYXNoYWhlYnMgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMC41ZW07XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5taGFyYXNoYWhlYnMgbGk6aG92ZXIge1xuICBjb2xvcjogI2Q2NTgyODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cbi5taGFyYXNoYWhlYnMgbGkuc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWhhcmFzaGFoZWJzIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1oYXJhc2hhaGVicyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLypwYWRkaW5nOiAwLjhlbSAwLjhlbSAwIDAuN2VtOyovXG4gIGJhY2tncm91bmQtY29sb3I6I2Q2NTgyODtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC0zcHg7XG4gIGhlaWdodDogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/mharashahebs/mharashahebs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/mharashahebs/mharashahebs.component.ts ***!
  \********************************************************/
/*! exports provided: MharashahebsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MharashahebsComponent", function() { return MharashahebsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mharashaheb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mharashaheb.service */ "./src/app/mharashaheb.service.ts");



let MharashahebsComponent = class MharashahebsComponent {
    constructor(mharashahebService) {
        this.mharashahebService = mharashahebService;
    }
    ngOnInit() {
        this.getMharashahebs();
    }
    getMharashahebs() {
        this.mharashahebService.getMharashahebs()
            .subscribe(mharashahebs => this.mharashahebs = mharashahebs);
    }
};
MharashahebsComponent.ctorParameters = () => [
    { type: _mharashaheb_service__WEBPACK_IMPORTED_MODULE_2__["MharashahebService"] }
];
MharashahebsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mharashahebs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mharashahebs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mharashahebs/mharashahebs.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mharashahebs.component.css */ "./src/app/mharashahebs/mharashahebs.component.css")).default]
    })
], MharashahebsComponent);



/***/ }),

/***/ "./src/app/mock-mharashahebs.ts":
/*!**************************************!*\
  !*** ./src/app/mock-mharashahebs.ts ***!
  \**************************************/
/*! exports provided: MHARASHAHEBS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MHARASHAHEBS", function() { return MHARASHAHEBS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const MHARASHAHEBS = [
    { id: 1, name: 'आगम विशारद,बुद्ध पुत्र, प्रवर्तक पूज्य श्री जिनेन्द्रमुनि जी म सा आदि ठाना​', place: 'नमक मंडी - उज्जैन' },
    { id: 2, name: 'अणु वत्स पूज्य श्री संयत मुनि जी म सा  आदि ठाना', place: 'नागदा (धार)' },
    { id: 3, name: 'तत्वज्ञ,पंडित रत्न पूज्य श्री धर्मेंद्र मुनि जी म सा आदि ठाना', place: 'हाटपिपल्या' },
    { id: 4, name: 'प्रशांत चेता पूज्य श्री संदीप मुनि जी म सा आदि ठाना', place: 'बड़वाह' },
    { id: 5, name: 'तपस्वी राज पूज्य श्री दिलीप मुनि जी म सा आदि ठाना', place: 'दाहोद' },
    { id: 6, name: 'महासती पूज्या श्री आदर्श ज्योति जी म सा आदि ठाना', place: ' भंडारी पोहसद शाला इंदौर' },
    { id: 7, name: 'महासती पूज्या श्री प्रवीणा जी म सा आदि ठाना', place: 'धार' },
    { id: 8, name: 'महासती पूज्या श्री मधुबाला जी म सा आदि ठाना ', place: 'रतलाम' },
    { id: 9, name: 'पूज्या श्री धर्मलता जी म सा आदि ठाना', place: 'नागपुर' },
    { id: 10, name: 'महासती पूज्या श्री धेर्य प्रभाजी म सा आदि', place: 'कसरावद' },
    { id: 11, name: 'महासती पूज्या श्री मुक्ति प्रभाजी म सा आदि ठाना', place: 'बामनिया' },
    { id: 12, name: 'संस्कार दानी पूज्या श्री संयम प्रभाजी म सा आदि ठाना', place: 'घोटी' },
    { id: 13, name: 'पुण्य पुंज पुज्या श्री पुण्य शीलाजी  म सा आदि ठाना', place: 'मेघनगर - बदनावर - मुल्थान - देवास' }
];


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jainv05/Documents/sthanakwasi/sangh-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map