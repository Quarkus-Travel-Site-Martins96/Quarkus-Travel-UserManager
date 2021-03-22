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
/* harmony import */ var _jwt_decode_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt-decode-vo */ "BW7C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cookie-utils */ "A8sk");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ToolbarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.loginUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ToolbarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Edit user");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarComponent_div_8_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.userManagementUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r1.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.jwt.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.jwt.name);
} }
const validateUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["loginPageUrl"] + "/validate";
class ToolbarComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.homeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["homePageUrl"];
        this.loginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["loginPageUrl"];
        this.userManagementUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["userManagementPageUrl"];
        this.jwt = new _jwt_decode_vo__WEBPACK_IMPORTED_MODULE_2__["JWT"]();
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
                    this.logout();
                }
                else {
                    console.error('The call is not end correct', error);
                    this.jwt = null;
                }
            });
        }
    }
    ngAfterViewInit() {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            }
            else {
                document.getElementById("navbar").style.top = "-80px";
            }
            prevScrollpos = currentScrollPos;
        };
    }
    logout() {
        this.cookieMng.deleteCookie('user.jwt');
        window.top.location.href = this.homeUrl;
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_4__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 9, vars: 3, consts: [["id", "navbar", 1, "u-clearfix", "header"], [1, "container"], [1, "logo"], [3, "href"], ["class", "login", 4, "ngIf"], ["class", "logged", 4, "ngIf"], [1, "login"], [1, "logged"], [1, "user-mngmnt"], [3, "href", "click"], [3, "src", "alt"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ToolbarComponent_div_7_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ToolbarComponent_div_8_Template, 7, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.cookieJWT);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cookieJWT);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-wrap: nowrap;\r\n\tjustify-content: flex-start;\r\n\tfont-size: 1.5em;\r\n\ttext-shadow: 0 0 2px black;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n\tmargin: 5px 10px;\r\n\talign-self: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n\tmargin-left: auto;\r\n}\r\n\r\n.u-clearfix[_ngcontent-%COMP%]:after, .u-clearfix[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tdisplay: table;\r\n}\r\n\r\n.u-clearfix[_ngcontent-%COMP%]:after {\r\n\tclear: both;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tz-index: 100;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\ttop: 0;\r\n\ttransition: top 0.3s;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\theight: auto;\r\n\tmax-height: 50px;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0 0 5px rgba(255, 255, 255, 0.75);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.user-mngmnt[_ngcontent-%COMP%] {\r\n\tpadding: 10px 20px;\r\n\tbackground-color: rgba(200,200,200,0.8);\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 10px;\r\n\t\r\n\tposition: absolute;\r\n\tright: 10px;\r\n   \ttop  : 50px;\r\n\topacity: 0;\r\n\ttransition: linear 0.5s;\r\n\t\r\n\tdisplay: block;\r\n\tfont-variant: small-caps;\r\n}\r\n\r\n.user-mngmnt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tmargin: 5px 0;\r\n\tcolor: black;\r\n\tfont-size: 0.6em;\r\n\tfloat: left;\r\n    clear: left;\r\n}\r\n\r\n.logged[_ngcontent-%COMP%]:hover   .user-mngmnt[_ngcontent-%COMP%], .logged[_ngcontent-%COMP%]:active   .user-mngmnt[_ngcontent-%COMP%], .logged[_ngcontent-%COMP%]:focus   .user-mngmnt[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n\ttop  : 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLGdCQUFnQjtDQUNoQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osZUFBZTtDQUNmLFdBQVc7Q0FDWCxNQUFNO0NBQ04sb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQix1Q0FBdUM7Q0FDdkMsc0JBQXNCO0NBQ3RCLG1CQUFtQjs7Q0FFbkIsa0JBQWtCO0NBQ2xCLFdBQVc7SUFDUixXQUFXO0NBQ2QsVUFBVTtDQUNWLHVCQUF1Qjs7Q0FFdkIsY0FBYztDQUNkLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLFdBQVc7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7OztDQUdDLFVBQVU7Q0FDVixXQUFXO0FBQ1oiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRmb250LXNpemU6IDEuNWVtO1xyXG5cdHRleHQtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xyXG59XHJcblxyXG5uYXYgZGl2IHtcclxuXHRtYXJnaW46IDVweCAxMHB4O1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxubmF2IGRpdjpsYXN0LWNoaWxkIHtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnUtY2xlYXJmaXg6YWZ0ZXIsIC51LWNsZWFyZml4OmJlZm9yZSB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi51LWNsZWFyZml4OmFmdGVyIHtcclxuXHRjbGVhcjogYm90aDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0ei1pbmRleDogMTAwO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0b3A6IDA7XHJcblx0dHJhbnNpdGlvbjogdG9wIDAuM3M7XHJcbn1cclxuXHJcbmltZyB7XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdG1heC1oZWlnaHQ6IDUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcclxuXHRib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbn1cclxuXHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4udXNlci1tbmdtbnQge1xyXG5cdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLDAuOCk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogMTBweDtcclxuICAgXHR0b3AgIDogNTBweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHRyYW5zaXRpb246IGxpbmVhciAwLjVzO1xyXG5cdFxyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxufVxyXG5cclxuLnVzZXItbW5nbW50IGEge1xyXG5cdG1hcmdpbjogNXB4IDA7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdGZvbnQtc2l6ZTogMC42ZW07XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjogbGVmdDtcclxufVxyXG5cclxuLmxvZ2dlZDpob3ZlciAudXNlci1tbmdtbnQsXHJcbi5sb2dnZWQ6YWN0aXZlIC51c2VyLW1uZ21udCxcclxuLmxvZ2dlZDpmb2N1cyAudXNlci1tbmdtbnQge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0dG9wICA6IDcwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


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

/***/ "BW7C":
/*!******************************************!*\
  !*** ./src/app/toolbar/jwt-decode-vo.ts ***!
  \******************************************/
/*! exports provided: JWT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT", function() { return JWT; });
class JWT {
}


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
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie-utils */ "A8sk");



class RestService {
    constructor(http, cookieMng) {
        this.http = http;
        this.cookieMng = cookieMng;
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
        console.log(headers);
        return this.http.get(url, {
            headers,
            observe: 'response'
        });
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "J3gV":
/*!****************************************!*\
  !*** ./src/app/vo/user-inteface-vo.ts ***!
  \****************************************/
/*! exports provided: UserVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVO", function() { return UserVO; });
class UserVO {
}


/***/ }),

/***/ "LE6s":
/*!************************************************************!*\
  !*** ./src/app/edit-user-form/edit-user-form.component.ts ***!
  \************************************************************/
/*! exports provided: EditUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserFormComponent", function() { return EditUserFormComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/app-date-adapter */ "er3i");
/* harmony import */ var _vo_user_inteface_vo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vo/user-inteface-vo */ "J3gV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_service_authorized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest-service-authorized */ "bDj/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");












function EditUserFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EditUserFormComponent_div_7_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.changeAvatar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Choose Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EditUserFormComponent_div_7_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.onFileSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Submit new image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Send a new image in format: PNG, JPG, GIF, BMP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Max size allowed is 150KB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Error during upload new image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EditUserFormComponent_div_7_Template_form_ngSubmit_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditUserFormComponent_div_7_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Surname");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditUserFormComponent_div_7_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.surname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditUserFormComponent_div_7_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Birthdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateInput", function EditUserFormComponent_div_7_Template_input_dateInput_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.OnDateChange($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "mat-datepicker-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "mat-datepicker", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EditUserFormComponent_div_7_Template_input_ngModelChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Submit new fields");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](41);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.name)("value", ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.surname)("value", ctx_r0.user.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.country)("value", ctx_r0.user.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r2)("max", ctx_r0.maxDate)("value", ctx_r0.birthdateDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.email)("value", ctx_r0.user.email);
} }
function EditUserFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Error on server");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.errorBEMsg);
} }
const avatarManagerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["host"] + '/usermanager/update-image';
const userManagerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["host"] + '/usermanager/update';
const getUserDataUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["host"] + '/usermanager';
class EditUserFormComponent {
    constructor(rest) {
        this.rest = rest;
        this.errorBE = false;
        this.maxDate = _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_3__["maxDate"];
        this.user = new _vo_user_inteface_vo__WEBPACK_IMPORTED_MODULE_4__["UserVO"]();
    }
    ngOnInit() {
        if (this.userDataSub)
            this.userDataSub.unsubscribe();
        this.userDataSub = this.rest.sendGet(getUserDataUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Accept: 'application/json'
        }))
            .subscribe(resp => {
            this.user = resp.body;
            if (this.user && this.user.birthdate)
                this.birthdateDate = new Date(this.user.birthdate);
        }, err => {
            console.error(err);
            this.errorBE = true;
            this.errorBEMsg = this.getError(err.error);
        });
    }
    update() {
        let userRequest = new _vo_user_inteface_vo__WEBPACK_IMPORTED_MODULE_4__["UserVO"]();
        userRequest.username = this.user.username;
        if (this.name && this.name.trim() !== "") {
            userRequest.name = this.name;
        }
        if (this.surname && this.surname.trim() !== "") {
            userRequest.surname = this.surname;
        }
        if (this.country && this.country.trim() !== "") {
            userRequest.country = this.country;
        }
        if (this.birthdate && this.birthdate.trim() !== "") {
            userRequest.birthdate = this.birthdate;
        }
        if (this.email && this.email.trim() !== "") {
            userRequest.email = this.email;
        }
        if (this.modifyUserSub)
            this.modifyUserSub.unsubscribe();
        this.modifyUserSub = this.rest.sendPost(userManagerUrl, userRequest, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
        })).subscribe(() => {
            console.log("Update completed");
            document.getElementById("user-update-button").style.backgroundColor = "green";
            document.getElementById("user-update-button-span").innerHTML = "Done!";
        }, err => {
            console.error("Update failed");
            this.errorBE = true;
            this.errorBEMsg = this.getError(err.error);
        });
    }
    changeAvatar() {
        console.log(this.avatar);
        if (this.changeAvatarSub)
            this.changeAvatarSub.unsubscribe();
        if (!this.avatar) {
            document.getElementById("image-error").style.display = "block";
            document.getElementById("image-error-msg").innerHTML = "Please select image";
            return;
        }
        console.log("###########");
        console.log(this.avatar);
        console.log(this.avatar.name);
        console.log(this.avatar.size);
        console.log("###########");
        let form = new FormData();
        form.append('avatar', this.avatar);
        form.append('image-type', this.avatar.type);
        this.changeAvatarSub = this.rest.sendPost(avatarManagerUrl, form).subscribe(() => {
            location.reload();
        }, err => {
            console.error(err);
            document.getElementById("image-error").style.display = "block";
            document.getElementById("image-error-msg").innerHTML = this.getError(err.error);
        });
    }
    onFileSelect(event) {
        let inputFiles = event.target.files;
        if (inputFiles.length > 0) {
            this.avatar = inputFiles[0];
        }
    }
    getError(fullMsg) {
        if (!fullMsg)
            return "";
        if (!fullMsg.includes("<body>") && !fullMsg.includes("</body>"))
            return fullMsg;
        return fullMsg.split("<body>")[1].split("</body>")[0];
    }
    OnDateChange(date) {
        this.birthdate = _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_3__["DateUtils"].format(date);
        this.birthdateDate = date;
    }
}
EditUserFormComponent.ɵfac = function EditUserFormComponent_Factory(t) { return new (t || EditUserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_rest_service_authorized__WEBPACK_IMPORTED_MODULE_6__["RestServiceAuthorized"])); };
EditUserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EditUserFormComponent, selectors: [["app-edit-user-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], useClass: _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_3__["AppDateAdapter"] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useClass: _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_3__["AppDateAdapter"], useValue: _material_app_date_adapter__WEBPACK_IMPORTED_MODULE_3__["APP_DATE_FORMATS"] }
        ])], decls: 9, vars: 3, consts: [[1, "user-manager-content"], ["class", "container", 4, "ngIf"], ["class", "courtesy-page", 4, "ngIf"], [1, "container"], [1, "content"], [1, "form-image"], [1, "usermanager-avatar-image", 3, "src"], [1, "form-group"], [3, "ngSubmit"], ["for", "avatar"], ["type", "file", "name", "avatar", "id", "avatar", "accept", "image/*", 3, "change"], [1, "form-element", "button-section"], ["type", "submit"], [1, "bg"], [1, "image-upload-info"], ["id", "image-error", 1, "image-error"], ["id", "image-error-msg"], [1, "form-data"], [1, "usermanager-form"], [1, "form-element", "input-section"], ["for", "name-input"], ["type", "text", "id", "name", "name", "name", 1, "usermanager-input-text", 3, "ngModel", "value", "ngModelChange"], ["for", "surname-input"], ["type", "text", "id", "surname", "name", "surname", 1, "usermanager-input-text", 3, "ngModel", "value", "ngModelChange"], ["for", "country-input"], ["type", "text", "id", "country", "name", "country", 1, "usermanager-input-text", 3, "ngModel", "value", "ngModelChange"], [1, "data-birth-input"], ["matInput", "", "placeholder", "Birthdate", 3, "matDatepicker", "max", "value", "dateInput"], ["matSuffix", "", 3, "for"], ["picker", ""], ["for", "email-input"], ["type", "email", "id", "email", "name", "email", 1, "usermanager-input-text", 3, "ngModel", "value", "ngModelChange"], ["type", "submit", "id", "user-update-button", 1, "usermanager-btn"], ["id", "user-update-button-span"], [1, "courtesy-page"], [1, "err-msg"]], template: function EditUserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Edit\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00A0 information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, EditUserFormComponent_div_7_Template, 50, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EditUserFormComponent_div_8_Template, 6, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.errorBE);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorBE);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"]], styles: ["html[_ngcontent-%COMP%] {\r\n\tmin-width: 300px;\r\n\tword-wrap: break-word;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tbackground: #ddd;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tmax-width: 1000px;\r\n\tmargin: 0 auto;\r\n\tpadding: 25px 0;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.form-image[_ngcontent-%COMP%], .form-data[_ngcontent-%COMP%]{\r\n\tdisplay: inline-block;\r\n\tmargin: 0 5% 25px 5%;\r\n\tvertical-align: top;\r\n\twidth: 300px;\r\n}\r\n\r\n.form-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 300px;\r\n}\r\n\r\n.user-manager-content[_ngcontent-%COMP%] {\r\n\tmargin: 10px 2%;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.form-element.input-section[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.input-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child {\r\n\tmargin-top: 0;\r\n}\r\n\r\n.input-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.image-error[_ngcontent-%COMP%] {\r\n\tcolor: red;\r\n\tfont-weight: bold;\r\n\tdisplay: none;\r\n}\r\n\r\n.image-upload-info[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #666;\r\n\tmargin: 10px 0;\r\n\tpadding: 10px;\r\n\tfont-size: 0.75em;\r\n}\r\n\r\n.data-birth-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\twidth: 75%;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%] {\r\n\tvertical-align: middle;\r\n\tbackground-color: #eee;\r\n\tpadding: 10px;\r\n\tborder: 2px solid #666;\r\n\tborder-radius: 5px;\r\n\tcolor: black;\r\n\ttransition: linear 2s;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n\twidth: calc(100% - 20px);\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:active, input[_ngcontent-%COMP%]:focus {\r\n\toutline: none;\r\n\tanimation:         border-animation 3s;\r\n\tanimation-fill-mode: forwards;\r\n\t-webkit-animation-fill-mode: forwards;\r\n}\r\n\r\n@keyframes border-animation {\r\n  0%   { border-left-color: #3593d7; }\r\n  50%  { border-left-color: #3593d7; border-top-color: #3593d7; border-bottom-color: #3593d7; }\r\n  100% { border-color: #3593d7; }\r\n}\r\n\r\n\r\n\r\n.form-element.button-section[_ngcontent-%COMP%] {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\tmargin-left: auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder-radius: 50px;\r\n\tborder: none;\r\n\tbackground-color: #666;\r\n\ttransition: 2s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:focus {\r\n\toutline: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbackground-image: url('v.png');\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: contain;\r\n\tbackground-position: left;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\topacity: 0;\r\n\tmargin: auto 0;\r\n\twhite-space: nowrap;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n\twidth: auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n\tline-height: 30px;\r\n\topacity: 1;\r\n\tpadding-left: 30px;\r\n\tfont-weight: bold;\r\n\tcolor: #eee;\r\n\ttransition: 1s;\r\n}\r\n\r\n.courtesy-page[_ngcontent-%COMP%] {\r\n\tcolor: red;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tmin-height: 250px;\r\n\twidth: 100%;\r\n    background: #ddd;\r\n}\r\n\r\n.err-msg[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tfont-size: 1em;\r\n\tfont-weight: bold;\r\n\tmargin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2QsYUFBYTtDQUNiLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFHQSxtQkFBbUI7O0FBRW5CO0NBQ0Msc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxhQUFhO0NBRWIsc0NBQXNDO0NBQ3RDLDZCQUE2QjtDQUM3QixxQ0FBcUM7QUFDdEM7O0FBR0E7RUFDRSxPQUFPLDBCQUEwQixFQUFFO0VBQ25DLE9BQU8sMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLEVBQUU7RUFDNUYsT0FBTyxxQkFBcUIsRUFBRTtBQUNoQzs7QUFTQSxtQkFBbUI7O0FBQ25CO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsY0FBYztBQUNmOztBQUVBOzs7Ozs7Q0FNQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLDhCQUFnRDtDQUNoRCw0QkFBNEI7Q0FDNUIsd0JBQXdCO0NBQ3hCLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGNBQWM7QUFDZjs7QUFHQTtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLGlCQUFpQjtDQUNqQixXQUFXO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsWUFBWTtBQUNiIiwiZmlsZSI6ImVkaXQtdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuXHRtaW4td2lkdGg6IDMwMHB4O1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogI2RkZDtcclxufVxyXG4uY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRtYXgtd2lkdGg6IDEwMDBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRwYWRkaW5nOiAyNXB4IDA7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZm9ybS1pbWFnZSxcclxuLmZvcm0tZGF0YXtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOiAwIDUlIDI1cHggNSU7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHR3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWltYWdlIGltZyB7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4udXNlci1tYW5hZ2VyLWNvbnRlbnQge1xyXG5cdG1hcmdpbjogMTBweCAyJTtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQuaW5wdXQtc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1zZWN0aW9uIGxhYmVsOmZpcnN0LWNoaWxkIHtcclxuXHRtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5pbnB1dC1zZWN0aW9uIGxhYmVsIHtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtZXJyb3Ige1xyXG5cdGNvbG9yOiByZWQ7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltYWdlLXVwbG9hZC1pbmZvIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG5cdG1hcmdpbjogMTBweCAwO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Zm9udC1zaXplOiAwLjc1ZW07XHJcbn1cclxuXHJcbi5kYXRhLWJpcnRoLWlucHV0IGlucHV0IHtcclxuXHR3aWR0aDogNzUlO1xyXG59XHJcblxyXG5cclxuLyoqIElOUFVUIFNFQ1RJT04gKi9cclxuXHJcbmlucHV0IHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNjY2O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0dHJhbnNpdGlvbjogbGluZWFyIDJzO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0OmFjdGl2ZSxcclxuaW5wdXQ6Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IGJvcmRlci1hbmltYXRpb24gM3M7XHJcblx0YW5pbWF0aW9uOiAgICAgICAgIGJvcmRlci1hbmltYXRpb24gM3M7XHJcblx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcblx0LXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgYm9yZGVyLWFuaW1hdGlvbiB7XHJcbiAgMCUgICB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMzU5M2Q3OyB9XHJcbiAgNTAlICB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMzU5M2Q3OyBib3JkZXItdG9wLWNvbG9yOiAjMzU5M2Q3OyBib3JkZXItYm90dG9tLWNvbG9yOiAjMzU5M2Q3OyB9XHJcbiAgMTAwJSB7IGJvcmRlci1jb2xvcjogIzM1OTNkNzsgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm9yZGVyLWFuaW1hdGlvbiB7XHJcbiAgMCUgICB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMzU5M2Q3OyB9XHJcbiAgNTAlICB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjMzU5M2Q3OyBib3JkZXItdG9wLWNvbG9yOiAjMzU5M2Q3OyBib3JkZXItYm90dG9tLWNvbG9yOiAjMzU5M2Q3OyB9XHJcbiAgMTAwJSB7IGJvcmRlci1jb2xvcjogIzM1OTNkNzsgfVxyXG59XHJcblxyXG5cclxuLyogQlVUVE9OIFNFQ1RJT04gKi9cclxuLmZvcm0tZWxlbWVudC5idXR0b24tc2VjdGlvbiB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHR3aWR0aDogMzBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxuXHR0cmFuc2l0aW9uOiAycztcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZSxcclxuYnV0dG9uIC5iZzphY3RpdmUsXHJcbmJ1dHRvbiBzcGFuOmFjdGl2ZSxcclxuYnV0dG9uOmZvY3VzLFxyXG5idXR0b24gLmJnOmZvY3VzLFxyXG5idXR0b24gc3Bhbjpmb2N1cyB7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIC5iZyB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3YucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG59XHJcbmJ1dHRvbiBzcGFuIHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdG1hcmdpbjogYXV0byAwO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG5cdHdpZHRoOiBhdXRvO1xyXG59XHJcbmJ1dHRvbjpob3ZlciBzcGFuIHtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHBhZGRpbmctbGVmdDogMzBweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjb2xvcjogI2VlZTtcclxuXHR0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuXHJcbi5jb3VydGVzeS1wYWdlIHtcclxuXHRjb2xvcjogcmVkO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0bWluLWhlaWdodDogMjUwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG59XHJcblxyXG4uZXJyLW1zZyB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMWVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuIl19 */"] });


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
/* harmony import */ var _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user-form/edit-user-form.component */ "LE6s");



class AppComponent {
    constructor() {
        this.title = 'usermanager-ng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-edit-user-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_2__["EditUserFormComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztBQUNaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


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
/* harmony import */ var _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user-form/edit-user-form.component */ "LE6s");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"],
        _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_3__["EditUserFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]] }); })();


/***/ }),

/***/ "bDj/":
/*!********************************************!*\
  !*** ./src/app/rest-service-authorized.ts ***!
  \********************************************/
/*! exports provided: RestServiceAuthorized */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestServiceAuthorized", function() { return RestServiceAuthorized; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-service */ "E9uI");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookie-utils */ "A8sk");




class RestServiceAuthorized {
    constructor(rest, cookieMng) {
        this.rest = rest;
        this.cookieMng = cookieMng;
    }
    sendPostGetRawText(url, body, headers) {
        headers = this.createAuthorizationHeader(headers);
        // call
        return this.rest.sendPostGetRawText(url, body, headers);
    }
    sendPostWithString(url, body, headers) {
        headers = this.createAuthorizationHeader(headers);
        return this.rest.sendPostWithString(url, body, headers);
    }
    sendPost(url, body, headers) {
        if (!headers)
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers = this.createAuthorizationHeader(headers);
        return this.rest.sendPost(url, body, headers);
    }
    sendGet(url, headers) {
        headers = this.createAuthorizationHeader(headers);
        console.log(headers);
        return this.rest.sendGet(url, headers);
    }
    createAuthorizationHeader(headers) {
        let jwt = this.cookieMng.getCookie('user.jwt');
        console.log("JWT: " + jwt);
        jwt = 'Bearer ' + jwt;
        if (jwt)
            headers = headers.append('Authorization', jwt);
        return headers;
    }
}
RestServiceAuthorized.ɵfac = function RestServiceAuthorized_Factory(t) { return new (t || RestServiceAuthorized)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_3__["CookieManager"])); };
RestServiceAuthorized.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RestServiceAuthorized, factory: RestServiceAuthorized.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "er3i":
/*!**********************************************!*\
  !*** ./src/app/material/app-date-adapter.ts ***!
  \**********************************************/
/*! exports provided: AppDateAdapter, APP_DATE_FORMATS, maxDate, DateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDateAdapter", function() { return AppDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DATE_FORMATS", function() { return APP_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDate", function() { return maxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return DateUtils; });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

class AppDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_0__["NativeDateAdapter"] {
    format(date) {
        return DateUtils.format(date);
    }
}
const APP_DATE_FORMATS = {
    parse: {
        dateInput: {
            dateInput: 'YYYY-MM-DD'
        },
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        },
        monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
};
const maxDate = new Date();
class DateUtils {
    static format(date) {
        let day = date.getDate().toString();
        day = +day < 10 ? '0' + day : day;
        let month = (date.getMonth() + 1).toString();
        month = +month < 10 ? '0' + month : month;
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
}


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"]], imports: [[
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]], exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();


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