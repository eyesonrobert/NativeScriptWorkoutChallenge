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

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <StackLayout>  </StackLayout> -->\n<FlexboxLayout flexDirection=\"column\">\n  <ns-challenge-edit (input)=\"onChallengeInput($event)\"></ns-challenge-edit>\n  <ns-current-challenge\n    [challengeTitle]=\"activeChallenge\"\n  ></ns-current-challenge>\n</FlexboxLayout>\n<!-- <ns-stack></ns-stack> -->\n<!-- <ns-flexbox></ns-flexbox> -->\n<!-- <ns-grid></ns-grid> -->\n<!-- <ns-absolute></ns-absolute> -->\n"

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
            imports: [nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"], nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NativeScriptFormsModule"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _challenges_current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_3__["CurrentChallengeComponent"],
                _layouts_stack_stack_component__WEBPACK_IMPORTED_MODULE_5__["StackComponent"],
                _layouts_flexbox_flexbox_component__WEBPACK_IMPORTED_MODULE_6__["FlexboxComponent"],
                _layouts_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"],
                _layouts_absolute_absolute_component__WEBPACK_IMPORTED_MODULE_8__["AbsoluteComponent"],
                _challenges_challenge_edit_challenge_edit_component__WEBPACK_IMPORTED_MODULE_9__["ChallengeEditComponent"],
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

/***/ "./app/challenges/challenge-edit/challenge-edit.component.css":
/***/ (function(module, exports) {

module.exports = "TextField {\n    width: 66%;\n}\n\nButton {\n    width: 33%;\n}"

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

module.exports = "<StackLayout>\n  <Label\n    class=\"title\"\n    [text]=\"challengeTitle\"\n    horizontalAlignment=\"center\"\n  ></Label>\n</StackLayout>\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChallengeComponent", function() { return CurrentChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent() {
        this.challengeTitle = '';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CurrentChallengeComponent.prototype, "challengeTitle", void 0);
    CurrentChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-current-challenge',
            template: __webpack_require__("./app/challenges/current-challenge/current-challenge.component.html"),
            styles: [__webpack_require__("./app/challenges/current-challenge/current-challenge.component.css")]
        })
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvYWJzb2x1dGUvYWJzb2x1dGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9hYnNvbHV0ZS9hYnNvbHV0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9hYnNvbHV0ZS9hYnNvbHV0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvZmxleGJveC9mbGV4Ym94LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvZmxleGJveC9mbGV4Ym94LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL2ZsZXhib3gvZmxleGJveC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9sYXlvdXRzL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xheW91dHMvc3RhY2svc3RhY2suY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9zdGFjay9zdGFjay5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbGF5b3V0cy9zdGFjay9zdGFjay5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSx5RTs7Ozs7OztBQ1pBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxvR0FBK0Y7O0FBRWpIO0FBQ0EsY0FBYyxRQUFTLG1lQUFtZSx3QkFBd0Isb0JBQW9CLDBCQUEwQixpQkFBaUIsZ0JBQWdCLGtCQUFrQix1QkFBdUIsZ0JBQWdCLEdBQUcsbUJBQW1CLGlDQUFpQywyQkFBMkIsZ0JBQWdCLGtCQUFrQixpQkFBaUIsR0FBRzs7QUFFbHlCO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7O0FDYkEsOGE7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQTBDO0FBTzFD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RixjQUFjO1FBTjFCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQix5RUFBcUM7O1NBR3RDLENBQUM7O09BQ1csY0FBYyxDQUkxQjtJQUFELHFCQUFDO0NBQUE7QUFKMEI7Ozs7Ozs7Ozs7Ozs7O0FDTDNCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLGNBQXdKO0FBQzNCO0FBQzdILCtEQUErSTtBQUMvSSxnREFBbUY7QUFDbkYsMkJBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuKi9cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQ6ICM3YzAxNWQ7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItY29sb3I6ICM3YzAxNWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDUgMTA7XFxuICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICBtYXJnaW46IDUgMDtcXG59XFxuXFxuLmZvcm0tY29udHJvbCB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjN2MwMTVkO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjtcXG4gIG1hcmdpbjogNSAwO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIHBhZGRpbmc6IDggNDtcXG59XCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxTdGFja0xheW91dD4gIDwvU3RhY2tMYXlvdXQ+IC0tPlxcbjxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCI+XFxuICA8bnMtY2hhbGxlbmdlLWVkaXQgKGlucHV0KT1cXFwib25DaGFsbGVuZ2VJbnB1dCgkZXZlbnQpXFxcIj48L25zLWNoYWxsZW5nZS1lZGl0PlxcbiAgPG5zLWN1cnJlbnQtY2hhbGxlbmdlXFxuICAgIFtjaGFsbGVuZ2VUaXRsZV09XFxcImFjdGl2ZUNoYWxsZW5nZVxcXCJcXG4gID48L25zLWN1cnJlbnQtY2hhbGxlbmdlPlxcbjwvRmxleGJveExheW91dD5cXG48IS0tIDxucy1zdGFjaz48L25zLXN0YWNrPiAtLT5cXG48IS0tIDxucy1mbGV4Ym94PjwvbnMtZmxleGJveD4gLS0+XFxuPCEtLSA8bnMtZ3JpZD48L25zLWdyaWQ+IC0tPlxcbjwhLS0gPG5zLWFic29sdXRlPjwvbnMtYWJzb2x1dGU+IC0tPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWFwcCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBhY3RpdmVDaGFsbGVuZ2UgPSAnJztcblxuICBvbkNoYWxsZW5nZUlucHV0KGNoYWxsZW5nZURlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFjdGl2ZUNoYWxsZW5nZSA9IGNoYWxsZW5nZURlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudCc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdGFja0NvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zdGFjay9zdGFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmxleGJveENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9mbGV4Ym94L2ZsZXhib3guY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZ3JpZC9ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYnNvbHV0ZUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9hYnNvbHV0ZS9hYnNvbHV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQsXG4gICAgU3RhY2tDb21wb25lbnQsXG4gICAgRmxleGJveENvbXBvbmVudCxcbiAgICBHcmlkQ29tcG9uZW50LFxuICAgIEFic29sdXRlQ29tcG9uZW50LFxuICAgIENoYWxsZW5nZUVkaXRDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJUZXh0RmllbGQge1xcbiAgICB3aWR0aDogNjYlO1xcbn1cXG5cXG5CdXR0b24ge1xcbiAgICB3aWR0aDogMzMlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8RmxleGJveExheW91dCBqdXN0aWZ5LWNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiPlxcclxcbiAgPFRleHRGaWVsZFxcclxcbiAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcclxcbiAgICBoaW50PVxcXCJDaGFsbGVuZ2UgdGl0bGVcXFwiXFxyXFxuICAgIFsobmdNb2RlbCldPVxcXCJjaGFsbGVuZ2VEZXNjcmlwdGlvblxcXCJcXHJcXG4gID48L1RleHRGaWVsZD5cXHJcXG4gIDxCdXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKHRhcCk9XFxcIm9uU2V0Q2hhbGxlbmdlKClcXFwiIHRleHQ9XFxcIkFkZCBDaGFsbGVuZ2VcXFwiPjwvQnV0dG9uPlxcclxcbjwvRmxleGJveExheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY2hhbGxlbmdlLWVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRDb21wb25lbnQge1xuICBAT3V0cHV0KCkgaW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgY2hhbGxlbmdlRGVzY3JpcHRpb24gPSAnJztcblxuICBvblNldENoYWxsZW5nZSgpIHtcbiAgICB0aGlzLmlucHV0LmVtaXQodGhpcy5jaGFsbGVuZ2VEZXNjcmlwdGlvbik7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyNjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjN2MwMTVkO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDtcXHJcXG59XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0PlxcbiAgPExhYmVsXFxuICAgIGNsYXNzPVxcXCJ0aXRsZVxcXCJcXG4gICAgW3RleHRdPVxcXCJjaGFsbGVuZ2VUaXRsZVxcXCJcXG4gICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIlxcbiAgPjwvTGFiZWw+XFxuPC9TdGFja0xheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWN1cnJlbnQtY2hhbGxlbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2hhbGxlbmdlVGl0bGU6IHN0cmluZyA9ICcnO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkFic29sdXRlTGF5b3V0IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gICAgYm9yZGVyLXdpZHRoOiA1O1xcbiAgICBwYWRkaW5nOiAxMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5MYWJlbCB7XFxuICAgIHdpZHRoOiA1MDtcXG4gICAgaGVpZ2h0OiA1MDtcXG59XFxuXFxuI2kxIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4jaTIge1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4jaTMge1xcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBYnNvbHV0ZUxheW91dD5cXHJcXG4gIDxMYWJlbCBpZD1cXFwiaTFcXFwiIHRleHQ9XFxcIkl0ZW0gMVxcXCIgdG9wPVxcXCIxMzBcXFwiIGxlZnQ9XFxcIjkwXFxcIj48L0xhYmVsPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpMlxcXCIgdGV4dD1cXFwiSXRlbSAyXFxcIiB0b3A9XFxcIjEwMFxcXCIgbGVmdD1cXFwiNjBcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkzXFxcIiB0ZXh0PVxcXCJJdGVtIDNcXFwiIHRvcD1cXFwiXFxcIiBsZWZ0PVxcXCJcXFwiPjwvTGFiZWw+XFxyXFxuPC9BYnNvbHV0ZUxheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWFic29sdXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fic29sdXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWJzb2x1dGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFic29sdXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJGbGV4Ym94TGF5b3V0IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gICAgYm9yZGVyLXdpZHRoOiA1O1xcbiAgICBwYWRkaW5nOiAxMDtcXG4gICAgaGVpZ2h0OiAzMDA7XFxufVxcblxcbkxhYmVsIHtcXG4gICAgd2lkdGg6IDUwO1xcbiAgICBoZWlnaHQ6IDUwO1xcbn1cXG5cXG4jaTEge1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbiNpMiB7XFxuICAgIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbiNpMyB7XFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEZsZXhib3hMYXlvdXRcXHJcXG4gIGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCJcXHJcXG4gIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiXFxyXFxuICBhbGlnbkl0ZW1zPVxcXCJmbGV4LWNlbnRlclxcXCJcXHJcXG4+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkxXFxcIiB0ZXh0PVxcXCJJdGVtIDFcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkyXFxcIiB0ZXh0PVxcXCJJdGVtIDJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkzXFxcIiB0ZXh0PVxcXCJJdGVtIDNcXFwiPjwvTGFiZWw+XFxyXFxuPC9GbGV4Ym94TGF5b3V0PlxcclxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZmxleGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGV4Ym94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmxleGJveC5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEZsZXhib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIkdyaWRMYXlvdXQge1xcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXItd2lkdGg6IDU7XFxuICAgIHBhZGRpbmc6IDEwO1xcbn1cXG5cXG5MYWJlbCB7XFxuICAgIHdpZHRoOiA1MDtcXG4gICAgaGVpZ2h0OiA1MDtcXG59XFxuXFxuI2kxIHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4jaTIge1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4jaTMge1xcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sICosIDcwXFxcIiBjb2x1bW5zPVxcXCJcXFwiPlxcclxcbiAgPExhYmVsIGlkPVxcXCJpMVxcXCIgdGV4dD1cXFwiSXRlbSAxXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCI+PC9MYWJlbD5cXHJcXG4gIDxMYWJlbCBpZD1cXFwiaTJcXFwiIHRleHQ9XFxcIkl0ZW0gMlxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkzXFxcIiB0ZXh0PVxcXCJJdGVtIDMhXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMlxcXCI+PC9MYWJlbD5cXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1ncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncmlkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJTdGFja0xheW91dCB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyLXdpZHRoOiA1O1xcbiAgcGFkZGluZzogMTA7XFxuICBoZWlnaHQ6IDMwMDtcXG59XFxuXFxuTGFiZWwge1xcbiAgd2lkdGg6IDUwO1xcbiAgaGVpZ2h0OiA1MDtcXG59XFxuXFxuI2kxIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuI2kyIHtcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbiNpMyB7XFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkxXFxcIiB0ZXh0PVxcXCJJdGVtIDFcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkyXFxcIiB0ZXh0PVxcXCJJdGVtIDJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJ0b3BcXFwiPjwvTGFiZWw+XFxyXFxuICA8TGFiZWwgaWQ9XFxcImkzXFxcIiB0ZXh0PVxcXCJJdGVtIDNcXFwiPjwvTGFiZWw+XFxyXFxuPC9TdGFja0xheW91dD5cXHJcXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXN0YWNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YWNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhY2suY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTdGFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cywgc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS5cbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==