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
    { path: 'edit-challenge', component: _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>\n"

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
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-app',
            template: __webpack_require__("./app/app.component.html"),
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_stack_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/layouts/stack/stack.component.ts");
/* harmony import */ var _layouts_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/layouts/flexbox/flexbox.component.ts");
/* harmony import */ var _layouts_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/layouts/grid/grid.component.ts");
/* harmony import */ var _layouts_absolute_absolute_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/layouts/absolute/absolute.component.ts");
/* harmony import */ var _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/auth/auth.component.ts");
/* harmony import */ var _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/app-routing.module.ts");




// Uncomment and add to NgModule imports if you need to use two-way binding









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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"], nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NativeScriptFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_3__["CurrentChallengeComponent"],
                _layouts_stack_stack_component__WEBPACK_IMPORTED_MODULE_5__["StackComponent"],
                _layouts_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_6__["FlexboxComponent"],
                _layouts_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"],
                _layouts_absolute_absolute_component__WEBPACK_IMPORTED_MODULE_8__["AbsoluteComponent"],
                _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_9__["ChallengeEditComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
                _challenges_today_today_component__WEBPACK_IMPORTED_MODULE_11__["TodayComponent"],
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
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

module.exports = "<Button\r\n  text=\"auth works!\"\r\n  class=\"btn btn-primary\"\r\n  nsRouterLink=\"/today\"\r\n  [clearHistory]=\"true\"\r\n></Button>\r\n"

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
    AuthComponent.prototype.onSignIn = function () {
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

module.exports = "TextField {\r\n    width: 66%;\r\n}\r\n\r\nButton {\r\n    width: 33%;\r\n}"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout justify-content=\"space-between\">\r\n  <TextField\r\n    class=\"form-control\"\r\n    hint=\"Challenge title\"\r\n    [(ngModel)]=\"challengeDescription\"\r\n  ></TextField>\r\n  <Button class=\"btn\" (tap)=\"onSetChallenge()\" text=\"Add Challenge\"></Button>\r\n</FlexboxLayout>\r\n"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEditComponent", function() { return ChallengeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent() {
        this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.challengeDescription = '';
    }
    ChallengeEditComponent.prototype.onSetChallenge = function () {
        this.input.emit(this.challengeDescription);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChallengeEditComponent.prototype, "input", void 0);
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

module.exports = ".title {\r\n  font-size: 26;\r\n  text-align: center;\r\n  color: #7c015d;\r\n  font-weight: bold;\r\n  margin-top: 10;\r\n}\r\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout>\n  <Label\n    class=\"title\"\n    text=\"The current challenge\"\n    horizontalAlignment=\"center\"\n  ></Label>\n  <Button text=\"Edit\" (tap)=\"onEdit()\"></Button>\n</StackLayout>\n"

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
        this.router.navigate(['./edit-challenge']);
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

module.exports = "<StackLayout>\r\n  <Label text=\"Today!\"></Label>\r\n  <Button\r\n    text=\"today works!\"\r\n    class=\"btn btn-primary\"\r\n    nsRouterLink=\"/current-challenge\"\r\n  ></Button>\r\n</StackLayout>\r\n"

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

/***/ "./app/layouts/absolute/absolute.component.css":
/***/ (function(module, exports) {

module.exports = "AbsoluteLayout {\n    border-color: green;\n    border-width: 5;\n    padding: 10;\n    height: 100%;\n}\n\nLabel {\n    width: 50;\n    height: 50;\n}\n\n#i1 {\n    background: red;\n}\n\n#i2 {\n    background: blue;\n}\n\n#i3 {\n    background: orange;\n}"

/***/ }),

/***/ "./app/layouts/absolute/absolute.component.html":
/***/ (function(module, exports) {

module.exports = "<AbsoluteLayout>\r\n  <Label id=\"i1\" text=\"Item 1\" top=\"130\" left=\"90\"></Label>\r\n  <Label id=\"i2\" text=\"Item 2\" top=\"100\" left=\"60\"></Label>\r\n  <Label id=\"i3\" text=\"Item 3\" top=\"\" left=\"\"></Label>\r\n</AbsoluteLayout>\r\n"

/***/ }),

/***/ "./app/layouts/absolute/absolute.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsoluteComponent", function() { return AbsoluteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AbsoluteComponent = /** @class */ (function () {
    function AbsoluteComponent() {
    }
    AbsoluteComponent.prototype.ngOnInit = function () {
    };
    AbsoluteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-absolute',
            template: __webpack_require__("./app/layouts/absolute/absolute.component.html"),
            styles: [__webpack_require__("./app/layouts/absolute/absolute.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AbsoluteComponent);
    return AbsoluteComponent;
}());



/***/ }),

/***/ "./app/layouts/flexbox/flexbox.component.css":
/***/ (function(module, exports) {

module.exports = "FlexboxLayout {\n    border-color: green;\n    border-width: 5;\n    padding: 10;\n    height: 300;\n}\n\nLabel {\n    width: 50;\n    height: 50;\n}\n\n#i1 {\n    background: red;\n}\n\n#i2 {\n    background: blue;\n}\n\n#i3 {\n    background: orange;\n}"

/***/ }),

/***/ "./app/layouts/flexbox/flexbox.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout\r\n  flexDirection=\"column\"\r\n  justifyContent=\"space-around\"\r\n  alignItems=\"flex-center\"\r\n>\r\n  <Label id=\"i1\" text=\"Item 1\"></Label>\r\n  <Label id=\"i2\" text=\"Item 2\" verticalAlignment=\"top\"></Label>\r\n  <Label id=\"i3\" text=\"Item 3\"></Label>\r\n</FlexboxLayout>\r\n"

/***/ }),

/***/ "./app/layouts/flexbox/flexbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexboxComponent", function() { return FlexboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var FlexboxComponent = /** @class */ (function () {
    function FlexboxComponent() {
    }
    FlexboxComponent.prototype.ngOnInit = function () { };
    FlexboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-flexbox',
            template: __webpack_require__("./app/layouts/flexbox/flexbox.component.html"),
            styles: [__webpack_require__("./app/layouts/flexbox/flexbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexboxComponent);
    return FlexboxComponent;
}());



/***/ }),

/***/ "./app/layouts/grid/grid.component.css":
/***/ (function(module, exports) {

module.exports = "GridLayout {\n    border-color: green;\n    border-width: 5;\n    padding: 10;\n}\n\nLabel {\n    width: 50;\n    height: 50;\n}\n\n#i1 {\n    background: red;\n}\n\n#i2 {\n    background: blue;\n}\n\n#i3 {\n    background: orange;\n}"

/***/ }),

/***/ "./app/layouts/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *, 70\" columns=\"\">\r\n  <Label id=\"i1\" text=\"Item 1\" row=\"0\" col=\"0\" colSpan=\"2\"></Label>\r\n  <Label id=\"i2\" text=\"Item 2\" row=\"2\" col=\"1\"></Label>\r\n  <Label id=\"i3\" text=\"Item 3!\" row=\"2\" col=\"2\"></Label>\r\n</GridLayout>\r\n"

/***/ }),

/***/ "./app/layouts/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-grid',
            template: __webpack_require__("./app/layouts/grid/grid.component.html"),
            styles: [__webpack_require__("./app/layouts/grid/grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./app/layouts/stack/stack.component.css":
/***/ (function(module, exports) {

module.exports = "StackLayout {\n  border-color: green;\n  border-width: 5;\n  padding: 10;\n  height: 300;\n}\n\nLabel {\n  width: 50;\n  height: 50;\n}\n\n#i1 {\n  background: red;\n}\n\n#i2 {\n  background: blue;\n}\n\n#i3 {\n  background: orange;\n}\n"

/***/ }),

/***/ "./app/layouts/stack/stack.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout orientation=\"horizontal\">\r\n  <Label id=\"i1\" text=\"Item 1\"></Label>\r\n  <Label id=\"i2\" text=\"Item 2\" verticalAlignment=\"top\"></Label>\r\n  <Label id=\"i3\" text=\"Item 3\"></Label>\r\n</StackLayout>\r\n"

/***/ }),

/***/ "./app/layouts/stack/stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackComponent", function() { return StackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var StackComponent = /** @class */ (function () {
    function StackComponent() {
    }
    StackComponent.prototype.ngOnInit = function () { };
    StackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-stack',
            template: __webpack_require__("./app/layouts/stack/stack.component.html"),
            styles: [__webpack_require__("./app/layouts/stack/stack.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StackComponent);
    return StackComponent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9hYnNvbHV0ZS9hYnNvbHV0ZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL2Fic29sdXRlL2Fic29sdXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL2Fic29sdXRlL2Fic29sdXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9mbGV4Ym94L2ZsZXhib3guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9mbGV4Ym94L2ZsZXhib3guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvZmxleGJveC9mbGV4Ym94LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9ncmlkL2dyaWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9ncmlkL2dyaWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9zdGFjay9zdGFjay5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL3N0YWNrL3N0YWNrLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL3N0YWNrL3N0YWNrLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7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QUUsTUFBTSxnQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLGNBQXdKO0FBQzNCO0FBQzdILCtEQUErSTtBQUMvSSxnREFBbUY7QUFDbkYsMkJBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuKi9cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQ6ICM3YzAxNWQ7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItY29sb3I6ICM3YzAxNWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDUgMTA7XFxuICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICBtYXJnaW46IDUgMDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjN2MwMTVkO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjtcXG4gIG1hcmdpbjogNSAwO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIHBhZGRpbmc6IDggNDtcXG59XCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlcy90b2RheS90b2RheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3RvZGF5JywgY29tcG9uZW50OiBUb2RheUNvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2N1cnJlbnQtY2hhbGxlbmdlJywgY29tcG9uZW50OiBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnZWRpdC1jaGFsbGVuZ2UnLCBjb21wb25lbnQ6IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hcHAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgYWN0aXZlQ2hhbGxlbmdlID0gJyc7XG5cbiAgb25DaGFsbGVuZ2VJbnB1dChjaGFsbGVuZ2VEZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5hY3RpdmVDaGFsbGVuZ2UgPSBjaGFsbGVuZ2VEZXNjcmlwdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3RhY2tDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc3RhY2svc3RhY2suY29tcG9uZW50JztcbmltcG9ydCB7IEZsZXhib3hDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZmxleGJveC9mbGV4Ym94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2dyaWQvZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJzb2x1dGVDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvYWJzb2x1dGUvYWJzb2x1dGUuY29tcG9uZW50JztcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvYXV0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZXMvdG9kYXkvdG9kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIEFwcFJvdXRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCxcbiAgICBTdGFja0NvbXBvbmVudCxcbiAgICBGbGV4Ym94Q29tcG9uZW50LFxuICAgIEdyaWRDb21wb25lbnQsXG4gICAgQWJzb2x1dGVDb21wb25lbnQsXG4gICAgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCxcbiAgICBBdXRoQ29tcG9uZW50LFxuICAgIFRvZGF5Q29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEJ1dHRvblxcclxcbiAgdGV4dD1cXFwiYXV0aCB3b3JrcyFcXFwiXFxyXFxuICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcclxcbiAgbnNSb3V0ZXJMaW5rPVxcXCIvdG9kYXlcXFwiXFxyXFxuICBbY2xlYXJIaXN0b3J5XT1cXFwidHJ1ZVxcXCJcXHJcXG4+PC9CdXR0b24+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWF1dGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uU2lnbkluKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RvZGF5J10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiVGV4dEZpZWxkIHtcXHJcXG4gICAgd2lkdGg6IDY2JTtcXHJcXG59XFxyXFxuXFxyXFxuQnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEZsZXhib3hMYXlvdXQganVzdGlmeS1jb250ZW50PVxcXCJzcGFjZS1iZXR3ZWVuXFxcIj5cXHJcXG4gIDxUZXh0RmllbGRcXHJcXG4gICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXHJcXG4gICAgaGludD1cXFwiQ2hhbGxlbmdlIHRpdGxlXFxcIlxcclxcbiAgICBbKG5nTW9kZWwpXT1cXFwiY2hhbGxlbmdlRGVzY3JpcHRpb25cXFwiXFxyXFxuICA+PC9UZXh0RmllbGQ+XFxyXFxuICA8QnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiICh0YXApPVxcXCJvblNldENoYWxsZW5nZSgpXFxcIiB0ZXh0PVxcXCJBZGQgQ2hhbGxlbmdlXFxcIj48L0J1dHRvbj5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLWNoYWxsZW5nZS1lZGl0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB7XHJcbiAgQE91dHB1dCgpIGlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgY2hhbGxlbmdlRGVzY3JpcHRpb24gPSAnJztcclxuXHJcbiAgb25TZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICB0aGlzLmlucHV0LmVtaXQodGhpcy5jaGFsbGVuZ2VEZXNjcmlwdGlvbik7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyNjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjN2MwMTVkO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDtcXHJcXG59XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcbiAgPExhYmVsXFxuICAgIGNsYXNzPVxcXCJ0aXRsZVxcXCJcXG4gICAgdGV4dD1cXFwiVGhlIGN1cnJlbnQgY2hhbGxlbmdlXFxcIlxcbiAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICA+PC9MYWJlbD5cXG4gIDxCdXR0b24gdGV4dD1cXFwiRWRpdFxcXCIgKHRhcCk9XFxcIm9uRWRpdCgpXFxcIj48L0J1dHRvbj5cXG48L1N0YWNrTGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWN1cnJlbnQtY2hhbGxlbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgb25FZGl0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi9lZGl0LWNoYWxsZW5nZSddKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dD5cXHJcXG4gIDxMYWJlbCB0ZXh0PVxcXCJUb2RheSFcXFwiPjwvTGFiZWw+XFxyXFxuICA8QnV0dG9uXFxyXFxuICAgIHRleHQ9XFxcInRvZGF5IHdvcmtzIVxcXCJcXHJcXG4gICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXHJcXG4gICAgbnNSb3V0ZXJMaW5rPVxcXCIvY3VycmVudC1jaGFsbGVuZ2VcXFwiXFxyXFxuICA+PC9CdXR0b24+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXRvZGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9kYXkuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvZGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJBYnNvbHV0ZUxheW91dCB7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlci13aWR0aDogNTtcXG4gICAgcGFkZGluZzogMTA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuTGFiZWwge1xcbiAgICB3aWR0aDogNTA7XFxuICAgIGhlaWdodDogNTA7XFxufVxcblxcbiNpMSB7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuI2kyIHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuI2kzIHtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWJzb2x1dGVMYXlvdXQ+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkxXFxcIiB0ZXh0PVxcXCJJdGVtIDFcXFwiIHRvcD1cXFwiMTMwXFxcIiBsZWZ0PVxcXCI5MFxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCBpZD1cXFwiaTJcXFwiIHRleHQ9XFxcIkl0ZW0gMlxcXCIgdG9wPVxcXCIxMDBcXFwiIGxlZnQ9XFxcIjYwXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpM1xcXCIgdGV4dD1cXFwiSXRlbSAzXFxcIiB0b3A9XFxcIlxcXCIgbGVmdD1cXFwiXFxcIj48L0xhYmVsPlxcclxcbjwvQWJzb2x1dGVMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hYnNvbHV0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYnNvbHV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fic29sdXRlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBYnNvbHV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiRmxleGJveExheW91dCB7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICAgIGJvcmRlci13aWR0aDogNTtcXG4gICAgcGFkZGluZzogMTA7XFxuICAgIGhlaWdodDogMzAwO1xcbn1cXG5cXG5MYWJlbCB7XFxuICAgIHdpZHRoOiA1MDtcXG4gICAgaGVpZ2h0OiA1MDtcXG59XFxuXFxuI2kxIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4jaTIge1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4jaTMge1xcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxGbGV4Ym94TGF5b3V0XFxyXFxuICBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiXFxyXFxuICBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIlxcclxcbiAgYWxpZ25JdGVtcz1cXFwiZmxleC1jZW50ZXJcXFwiXFxyXFxuPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpMVxcXCIgdGV4dD1cXFwiSXRlbSAxXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpMlxcXCIgdGV4dD1cXFwiSXRlbSAyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpM1xcXCIgdGV4dD1cXFwiSXRlbSAzXFxcIj48L0xhYmVsPlxcclxcbjwvRmxleGJveExheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWZsZXhib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmxleGJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZsZXhib3guY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBGbGV4Ym94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJHcmlkTGF5b3V0IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gICAgYm9yZGVyLXdpZHRoOiA1O1xcbiAgICBwYWRkaW5nOiAxMDtcXG59XFxuXFxuTGFiZWwge1xcbiAgICB3aWR0aDogNTA7XFxuICAgIGhlaWdodDogNTA7XFxufVxcblxcbiNpMSB7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuI2kyIHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuI2kzIHtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqLCA3MFxcXCIgY29sdW1ucz1cXFwiXFxcIj5cXHJcXG4gIDxMYWJlbCBpZD1cXFwiaTFcXFwiIHRleHQ9XFxcIkl0ZW0gMVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkyXFxcIiB0ZXh0PVxcXCJJdGVtIDJcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpM1xcXCIgdGV4dD1cXFwiSXRlbSAzIVxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjJcXFwiPjwvTGFiZWw+XFxyXFxuPC9HcmlkTGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZ3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JpZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiU3RhY2tMYXlvdXQge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci13aWR0aDogNTtcXG4gIHBhZGRpbmc6IDEwO1xcbiAgaGVpZ2h0OiAzMDA7XFxufVxcblxcbkxhYmVsIHtcXG4gIHdpZHRoOiA1MDtcXG4gIGhlaWdodDogNTA7XFxufVxcblxcbiNpMSB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbiNpMiB7XFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4jaTMge1xcbiAgYmFja2dyb3VuZDogb3JhbmdlO1xcbn1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpMVxcXCIgdGV4dD1cXFwiSXRlbSAxXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpMlxcXCIgdGV4dD1cXFwiSXRlbSAyXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpM1xcXCIgdGV4dD1cXFwiSXRlbSAzXFxcIj48L0xhYmVsPlxcclxcbjwvU3RhY2tMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1zdGFjaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGFjay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0YWNrLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsIHNldHRpbmcgdXAgZ2xvYmFsIENTUyBydWxlcywgY3JlYXRpbmcsIGFuZCBuYXZpZ2F0aW5nIHRvIHRoZSBtYWluIHBhZ2UuXG4vLyBBbmd1bGFyIGFwcGxpY2F0aW9ucyBuZWVkIHRvIHRha2UgY2FyZSBvZiB0aGVpciBvd24gaW5pdGlhbGl6YXRpb246IG1vZHVsZXMsIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIHJvdXRlcywgREkgcHJvdmlkZXJzLlxuLy8gQSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLCBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=