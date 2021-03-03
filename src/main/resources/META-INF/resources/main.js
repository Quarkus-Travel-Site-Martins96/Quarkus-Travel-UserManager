(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LUCAMARTINELLI\workspace.MY-WORK\quarkus\user-management-quarkus-travel-simple-site\src\main\angular\usermanager-ng\src\main.ts */"zUnb");


/***/ }),

/***/ "4zdL":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cookie-utils */ "A8sk");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ToolbarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.loginUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ToolbarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r1.userManagementUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.jwt.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r1.jwt.name);
} }
const validateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["loginPageUrl"] + "/validate";
class ToolbarComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.homeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["homePageUrl"];
        this.loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["loginPageUrl"];
        this.userManagementUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["userManagementPageUrl"];
        this.cookieJWT = this.cookieMng.getCookie('user.jwt');
    }
    ngOnInit() {
        if (this.sub)
            this.sub.unsubscribe();
        if (this.cookieJWT) {
            //JWT found, check if is valid
            this.sub = this.rest.sendPost(validateUrl, this.cookieJWT, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'content-type': 'text/plain'
            }))
                .subscribe((resp) => {
                //JWT correct, move to Home Page
                this.jwt = resp.body;
            }, error => {
                //JWT non correct or service not available
                if (error.status === 401) {
                    console.error('The token JWT is not valid, relogin required', error);
                    this.cookieMng.deleteCookie('user.jwt');
                    this.jwt = null;
                }
                else {
                    console.error('The call is not end correct', error);
                    this.jwt = null;
                }
            });
        }
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_3__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 11, vars: 3, consts: [[1, "toolbar"], [1, "logo"], [3, "href"], [1, "offer"], ["href", "/"], ["class", "login", 4, "ngIf"], ["class", "logged", 4, "ngIf"], [1, "login"], [1, "logged"], [3, "src", "alt"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "OFFERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ToolbarComponent_div_9_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ToolbarComponent_div_10_Template, 3, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.cookieJWT);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cookieJWT);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".toolbar[_ngcontent-%COMP%] {\r\n\theight: 40px;\r\n\tbackground-color: #111;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\tpadding: 10px;\r\n\t\r\n\tfont-family: luois-sans-bold;\r\n\tfont-size: 1.5em;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n\tmargin: auto 20px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   div.login[_ngcontent-%COMP%], .toolbar[_ngcontent-%COMP%]   div.logged[_ngcontent-%COMP%] {\r\n\talign-self: flex-end;\r\n\tmargin-left: auto;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\r\n\tcolor: lime;\r\n\tfont-style: normal;\r\n\ttext-decoration: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\theight: 40px;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0 0 5px rgba(255,255,255,0.75);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixhQUFhOztDQUViLDRCQUE0QjtDQUM1QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsb0JBQW9CO0NBQ3BCLGlCQUFpQjtBQUNsQjs7QUFHQTs7Ozs7Q0FLQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsMENBQTBDO0FBQzNDIiwiZmlsZSI6InRvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdFxyXG5cdGZvbnQtZmFtaWx5OiBsdW9pcy1zYW5zLWJvbGQ7XHJcblx0Zm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLnRvb2xiYXIgZGl2IHtcclxuXHRtYXJnaW46IGF1dG8gMjBweDtcclxufVxyXG5cclxuLnRvb2xiYXIgZGl2LmxvZ2luLFxyXG4udG9vbGJhciBkaXYubG9nZ2VkIHtcclxuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuXHJcbmEsXHJcbmE6bGluayxcclxuYTp2aXNpdGVkLFxyXG5hOmhvdmVyLFxyXG5hOmFjdGl2ZSB7XHJcblx0Y29sb3I6IGxpbWU7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcclxuXHRib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMjU1LDI1NSwyNTUsMC43NSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "A8sk":
/*!*********************************!*\
  !*** ./src/app/cookie-utils.ts ***!
  \*********************************/
/*! exports provided: CookieManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const COOKIE_CONSENT = 'allowed-cookie-banner';
const COOKIE_CONSENT_EXPIRE_DAYS = 180;
class CookieManager {
    constructor() {
        this.isConsented = false;
        this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return null;
    }
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }
    setCookie(name, value, expireDays, path = '') {
        let d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires = `expires=${d.toUTCString()}`;
        let cpath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
    consent(isConsent, e) {
        if (!isConsent) {
            return this.isConsented;
        }
        else if (isConsent) {
            this.setCookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
            this.isConsented = true;
            e.preventDefault();
        }
    }
}
CookieManager.ɵfac = function CookieManager_Factory(t) { return new (t || CookieManager)(); };
CookieManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieManager, factory: CookieManager.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, host, homePageUrl, urlHotelBase, loginPageUrl, userManagementPageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePageUrl", function() { return homePageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlHotelBase", function() { return urlHotelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPageUrl", function() { return loginPageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userManagementPageUrl", function() { return userManagementPageUrl; });
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
const host = 'http://localhost:7071';
const homePageUrl = 'http://localhost:8080';
const urlHotelBase = 'http://localhost:8081';
const loginPageUrl = "http://localhost:7070";
const userManagementPageUrl = "http://localhost:7071";


/***/ }),

/***/ "E9uI":
/*!*********************************!*\
  !*** ./src/app/rest-service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RestService {
    constructor(http) {
        this.http = http;
    }
    sendPostGetRawText(url, body, headers) {
        // call
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendPostWithString(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response'
        });
    }
    sendPost(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'json'
        });
    }
    sendGet(url, headers) {
        return this.http.get(url, {
            headers,
            observe: 'response'
        });
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");


class AppComponent {
    constructor() {
        this.title = 'usermanager-ng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "4zdL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map