"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is only for local test
 */
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var src_1 = require("../src");
var AppComponent = /** @class */ (function () {
    function AppComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif"/>';
    }
    AppComponent.prototype.showSpinner = function () {
        var _this = this;
        this.spinnerService.show();
        setTimeout(function () {
            _this.spinnerService.hide();
        }, 10000);
    };
    AppComponent = __decorate([
        core_2.Component({
            styleUrls: ['./styles.css'],
            selector: 'app',
            template: "<button (click)=\"showSpinner()\">Show Spinner</button>\n   <ng4-loading-spinner [template]=\"template\"  [threshold]=\"2000\" [timeout]=\"4000\"></ng4-loading-spinner>"
        })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [AppComponent],
            declarations: [AppComponent],
            imports: [platform_browser_1.BrowserModule, src_1.Ng4LoadingSpinnerModule.forRoot()]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
