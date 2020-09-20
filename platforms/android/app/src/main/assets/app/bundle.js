require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n\n.btn {\n  background: #7c015d;\n  border-width: 1;\n  border-color: #7c015d;\n  color: white;\n  width: 100%;\n  padding: 5 10;\n  border-radius: 30%;\n  margin: 5 0;\n}\n\n.form-control {\n  border-bottom-color: #7c015d;\n  border-bottom-width: 2;\n  margin: 5 0;\n  font-size: 20;\n  padding: 8 4;\n}", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.component.ts");
/* harmony import */ var _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");






var routes = [
    { path: '', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'today', component: _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_3__["TodayComponent"] },
    { path: 'current-challenge', component: _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__["CurrentChallengeComponent"] },
    { path: 'edit-challenge', component: _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.activeChallenge = '';
    }
    AppComponent.prototype.onChallengeInput = function (challengeDescription) {
        this.activeChallenge = challengeDescription;
        console.log('onChallengeInput: ', challengeDescription);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-app',
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/auth/auth.component.ts");
/* harmony import */ var _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _shared_ui_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/shared/ui/action-bar/action-bar.component.ts");










// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"], nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__["CurrentChallengeComponent"],
                _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeEditComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
                _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_7__["TodayComponent"],
                _shared_ui_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_9__["ActionBarComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/auth/auth.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<Button\n  text=\"auth works!\"\n  class=\"btn btn-primary\"\n  nsRouterLink=\"/today\"\n  [clearHistory]=\"true\"\n></Button>\n"

/***/ }),

/***/ "./app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var AuthComponent = /** @class */ (function () {
    function AuthComponent(router) {
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent.prototype.onSignin = function () {
        this.router.navigate(['/today'], { clearHistory: true });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-auth',
            template: __webpack_require__("./app/auth/auth.component.html"),
            styles: [__webpack_require__("./app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\nTextField {\n    width: 66%;\n}\n\nButton {\n    width: 33%;\n}"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar title=\"Edit Challenge\"></ns-action-bar>\n<FlexboxLayout justifyContent=\"space-between\">\n  <!-- <TextField\n    class=\"form-control\"\n    hint=\"Challenge title\"\n    [(ngModel)]=\"challengeDescription\"\n  ></TextField>\n  <Button class=\"btn\" (tap)=\"onSetChallenge()\" text=\"Add Challenge\"></Button> -->\n  <Label text=\"The edit page\"></Label>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEditComponent", function() { return ChallengeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent() {
    }
    ChallengeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-challenge-edit',
            template: __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.css")]
        })
    ], ChallengeEditComponent);
    return ChallengeEditComponent;
}());



/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 26;\n  text-align: center;\n  color: #7c015d;\n  font-weight: bold;\n  margin-top: 10;\n}"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar title=\"Current Challenge\"></ns-action-bar>\n<StackLayout>\n  <Label\n    class=\"title\"\n    text=\"The current challenge\"\n    horizontalAlignment=\"center\"\n  ></Label>\n  <Button text=\"Edit\" (tap)=\"onEdit()\"></Button>\n</StackLayout>\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChallengeComponent", function() { return CurrentChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(router) {
        this.router = router;
    }
    CurrentChallengeComponent.prototype.onEdit = function () {
        this.router.navigate(['/edit-challenge']);
    };
    CurrentChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-current-challenge',
            template: __webpack_require__("./app/challenges/current-challenge/current-challenge.component.html"),
            styles: [__webpack_require__("./app/challenges/current-challenge/current-challenge.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());



/***/ }),

/***/ "./app/challenges/today/today.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/challenges/today/today.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar title=\"Today's Challenge\"></ns-action-bar>\n<StackLayout>\n  <Label text=\"Today!\"></Label>\n  <Button\n    text=\"today works!\"\n    class=\"btn btn-primary\"\n    nsRouterLink=\"/current-challenge\"\n  ></Button>\n</StackLayout>\n"

/***/ }),

/***/ "./app/challenges/today/today.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayComponent", function() { return TodayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var TodayComponent = /** @class */ (function () {
    function TodayComponent() {
    }
    TodayComponent.prototype.ngOnInit = function () {
    };
    TodayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-today',
            template: __webpack_require__("./app/challenges/today/today.component.html"),
            styles: [__webpack_require__("./app/challenges/today/today.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodayComponent);
    return TodayComponent;
}());



/***/ }),

/***/ "./app/shared/ui/action-bar/action-bar.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/shared/ui/action-bar/action-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar [title]=\"title\" (loaded)=\"onLoadedActionBar()\">\n  <NavigationButton\n    text=\"Back\"\n    android.systemIcon=\"ic_menu_back\"\n    *ngIf=\"canGoBack\"\n    (tap)=\"onGoBack()\"\n  ></NavigationButton>\n</ActionBar>\n"

/***/ }),

/***/ "./app/shared/ui/action-bar/action-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function() { return ActionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);




var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(page, router) {
        this.page = page;
        this.router = router;
    }
    ActionBarComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ActionBarComponent.prototype, "canGoBack", {
        get: function () {
            return this.router.canGoBack();
        },
        enumerable: true,
        configurable: true
    });
    ActionBarComponent.prototype.onGoBack = function () {
        this.router.backToPreviousPage();
    };
    ActionBarComponent.prototype.onLoadedActionBar = function () {
        if (platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"]) {
            var androidToolbar = this.page.actionBar.nativeView;
            var backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor('#171717'), android.graphics.PorterDuff.Mode.SRC_ATOP);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "title", void 0);
    ActionBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-action-bar',
            template: __webpack_require__("./app/shared/ui/action-bar/action-bar.component.html"),
            styles: [__webpack_require__("./app/shared/ui/action-bar/action-bar.component.css")]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], ActionBarComponent);
    return ActionBarComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsbWVBQW1lLHdCQUF3QixvQkFBb0IsMEJBQTBCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLHVCQUF1QixnQkFBZ0IsR0FBRyxtQkFBbUIsaUNBQWlDLDJCQUEyQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixHQUFHOztBQUVseUI7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQzhCO0FBR2pCO0FBQ2M7QUFDbUM7QUFDVDtBQUU5RixJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGtFQUFhLEVBQUU7SUFDdEMsRUFBRSxJQUFJ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QUFSLGNBQVksQ0FBQztJQUViLHNCQUFJLHlDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCw4Q0FBaUIsR0FBakI7UUFDRSxJQUFJLGtEQUFTLEVBQUU7WUFDYixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDdEQsSUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDdEQsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsVUFBVSxDQUFDLGNBQWMsQ0FDdkIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUN0QyxPQUFPLENBQUMsUUFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUNqRCxDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7SUF6QlE7UUFBUiwyREFBSyxFQUFFOztxREFBZTtJQURaLGtCQUFrQjtRQU45QiwrREFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIscUZBQTBDOztTQUczQyxDQUFDO3lDQUkwQiw2REFBSSxFQUFrQiw0RUFBZ0I7T0FIckQsa0JBQWtCLENBMkI5QjtJQUFELHlCQUFDO0NBQUE7QUEzQjhCOzs7Ozs7Ozs7Ozs7OztBQ1YvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxjQUF3SjtBQUMzQjtBQUM3SCwrREFBK0k7QUFDL0ksZ0RBQW1GO0FBQ25GLDJCQUF5RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcbiovXFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiAjN2MwMTVkO1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLWNvbG9yOiAjN2MwMTVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1IDEwO1xcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgbWFyZ2luOiA1IDA7XFxufVxcblxcbi5mb3JtLWNvbnRyb2wge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzdjMDE1ZDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDI7XFxuICBtYXJnaW46IDUgMDtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBwYWRkaW5nOiA4IDQ7XFxufVwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvYXV0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICd0b2RheScsIGNvbXBvbmVudDogVG9kYXlDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnY3VycmVudC1jaGFsbGVuZ2UnLCBjb21wb25lbnQ6IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnZWRpdC1jaGFsbGVuZ2UnLCBjb21wb25lbnQ6IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hcHAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBhY3RpdmVDaGFsbGVuZ2UgPSAnJztcblxuICBvbkNoYWxsZW5nZUlucHV0KGNoYWxsZW5nZURlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFjdGl2ZUNoYWxsZW5nZSA9IGNoYWxsZW5nZURlc2NyaXB0aW9uO1xuICAgIGNvbnNvbGUubG9nKCdvbkNoYWxsZW5nZUlucHV0OiAnLCBjaGFsbGVuZ2VEZXNjcmlwdGlvbik7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9hdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIEFwcFJvdXRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcbiAgICBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50LFxuICAgIEF1dGhDb21wb25lbnQsXG4gICAgVG9kYXlDb21wb25lbnQsXG4gICAgQWN0aW9uQmFyQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxCdXR0b25cXG4gIHRleHQ9XFxcImF1dGggd29ya3MhXFxcIlxcbiAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXG4gIG5zUm91dGVyTGluaz1cXFwiL3RvZGF5XFxcIlxcbiAgW2NsZWFySGlzdG9yeV09XFxcInRydWVcXFwiXFxuPjwvQnV0dG9uPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hdXRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRoLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uU2lnbmluKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RvZGF5J10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuVGV4dEZpZWxkIHtcXG4gICAgd2lkdGg6IDY2JTtcXG59XFxuXFxuQnV0dG9uIHtcXG4gICAgd2lkdGg6IDMzJTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXIgdGl0bGU9XFxcIkVkaXQgQ2hhbGxlbmdlXFxcIj48L25zLWFjdGlvbi1iYXI+XFxuPEZsZXhib3hMYXlvdXQganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiPlxcbiAgPCEtLSA8VGV4dEZpZWxkXFxuICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgIGhpbnQ9XFxcIkNoYWxsZW5nZSB0aXRsZVxcXCJcXG4gICAgWyhuZ01vZGVsKV09XFxcImNoYWxsZW5nZURlc2NyaXB0aW9uXFxcIlxcbiAgPjwvVGV4dEZpZWxkPlxcbiAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuXFxcIiAodGFwKT1cXFwib25TZXRDaGFsbGVuZ2UoKVxcXCIgdGV4dD1cXFwiQWRkIENoYWxsZW5nZVxcXCI+PC9CdXR0b24+IC0tPlxcbiAgPExhYmVsIHRleHQ9XFxcIlRoZSBlZGl0IHBhZ2VcXFwiPjwvTGFiZWw+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNoYWxsZW5nZS1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRDb21wb25lbnQge1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi50aXRsZSB7XFxuICBmb250LXNpemU6IDI2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM3YzAxNWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDEwO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8bnMtYWN0aW9uLWJhciB0aXRsZT1cXFwiQ3VycmVudCBDaGFsbGVuZ2VcXFwiPjwvbnMtYWN0aW9uLWJhcj5cXG48U3RhY2tMYXlvdXQ+XFxuICA8TGFiZWxcXG4gICAgY2xhc3M9XFxcInRpdGxlXFxcIlxcbiAgICB0ZXh0PVxcXCJUaGUgY3VycmVudCBjaGFsbGVuZ2VcXFwiXFxuICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCJcXG4gID48L0xhYmVsPlxcbiAgPEJ1dHRvbiB0ZXh0PVxcXCJFZGl0XFxcIiAodGFwKT1cXFwib25FZGl0KClcXFwiPjwvQnV0dG9uPlxcbjwvU3RhY2tMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jdXJyZW50LWNoYWxsZW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgb25FZGl0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2VkaXQtY2hhbGxlbmdlJ10pO1xuICB9XG5cbiAgXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXIgdGl0bGU9XFxcIlRvZGF5J3MgQ2hhbGxlbmdlXFxcIj48L25zLWFjdGlvbi1iYXI+XFxuPFN0YWNrTGF5b3V0PlxcbiAgPExhYmVsIHRleHQ9XFxcIlRvZGF5IVxcXCI+PC9MYWJlbD5cXG4gIDxCdXR0b25cXG4gICAgdGV4dD1cXFwidG9kYXkgd29ya3MhXFxcIlxcbiAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcbiAgICBuc1JvdXRlckxpbms9XFxcIi9jdXJyZW50LWNoYWxsZW5nZVxcXCJcXG4gID48L0J1dHRvbj5cXG48L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtdG9kYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9kYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2RheS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFRvZGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIFt0aXRsZV09XFxcInRpdGxlXFxcIiAobG9hZGVkKT1cXFwib25Mb2FkZWRBY3Rpb25CYXIoKVxcXCI+XFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICB0ZXh0PVxcXCJCYWNrXFxcIlxcbiAgICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCJcXG4gICAgKm5nSWY9XFxcImNhbkdvQmFja1xcXCJcXG4gICAgKHRhcCk9XFxcIm9uR29CYWNrKClcXFwiXFxuICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbjwvQWN0aW9uQmFyPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWFjdGlvbi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbi1iYXIuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgZ2V0IGNhbkdvQmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuY2FuR29CYWNrKCk7XG4gIH1cblxuICBvbkdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIG9uTG9hZGVkQWN0aW9uQmFyKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGNvbnN0IGFuZHJvaWRUb29sYmFyID0gdGhpcy5wYWdlLmFjdGlvbkJhci5uYXRpdmVWaWV3O1xuICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGFuZHJvaWRUb29sYmFyLmdldE5hdmlnYXRpb25JY29uKCk7XG4gICAgICBpZiAoYmFja0J1dHRvbikge1xuICAgICAgICBiYWNrQnV0dG9uLnNldENvbG9yRmlsdGVyKFxuICAgICAgICAgIGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcignIzE3MTcxNycpLFxuICAgICAgICAgICg8YW55PmFuZHJvaWQuZ3JhcGhpY3MpLlBvcnRlckR1ZmYuTW9kZS5TUkNfQVRPUFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246IG1vZHVsZXMsIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIHJvdXRlcywgREkgcHJvdmlkZXJzLlxuLy8gQSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLCBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=