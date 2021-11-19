(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/an-gui-components/an-gui-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/an-gui-components/an-gui-module.module.ts ***!
  \***********************************************************/
/*! exports provided: AnGuiModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnGuiModuleModule", function() { return AnGuiModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angui_label_angui_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angui-label/angui-label.component */ "./src/app/an-gui-components/angui-label/angui-label.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angui_button_angui_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angui-button/angui-button.component */ "./src/app/an-gui-components/angui-button/angui-button.component.ts");
/* harmony import */ var _angui_radio_button_angui_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angui-radio-button/angui-radio-button.component */ "./src/app/an-gui-components/angui-radio-button/angui-radio-button.component.ts");
/* harmony import */ var _angui_check_box_angui_check_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angui-check-box/angui-check-box.component */ "./src/app/an-gui-components/angui-check-box/angui-check-box.component.ts");
/* harmony import */ var _angui_drop_down_angui_drop_down_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angui-drop-down/angui-drop-down.component */ "./src/app/an-gui-components/angui-drop-down/angui-drop-down.component.ts");
/* harmony import */ var _angui_input_angui_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angui-input/angui-input.component */ "./src/app/an-gui-components/angui-input/angui-input.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _an_gui_components_angui_alert_model_services_angui_alert_controller_alert_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.ts");
/* harmony import */ var _angui_model_navigation_services_model_controller_model_controller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./angui-model-navigation-services/model-controller/model-controller.component */ "./src/app/an-gui-components/angui-model-navigation-services/model-controller/model-controller.component.ts");
/* harmony import */ var _angui_model_navigation_services_model_controller_insertion_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./angui-model-navigation-services/model-controller/insertion.directive */ "./src/app/an-gui-components/angui-model-navigation-services/model-controller/insertion.directive.ts");
/* harmony import */ var _angui_alert_model_services_angui_alert_controller_insertion_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./angui-alert-model-services/angui-alert-controller/insertion.directive */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/insertion.directive.ts");
/* harmony import */ var _angui_alert_angui_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angui-alert/angui-alert.component */ "./src/app/an-gui-components/angui-alert/angui-alert.component.ts");
/* harmony import */ var _angui_confirm_alert_angui_confirm_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./angui-confirm-alert/angui-confirm-alert.component */ "./src/app/an-gui-components/angui-confirm-alert/angui-confirm-alert.component.ts");
/* harmony import */ var _angui_tabs_angui_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./angui-tabs/angui-tabs.component */ "./src/app/an-gui-components/angui-tabs/angui-tabs.component.ts");
/* harmony import */ var _angui_hover_card_list_angui_hover_card_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./angui-hover-card-list/angui-hover-card-list.component */ "./src/app/an-gui-components/angui-hover-card-list/angui-hover-card-list.component.ts");
/* harmony import */ var _angui_card_angui_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./angui-card/angui-card.component */ "./src/app/an-gui-components/angui-card/angui-card.component.ts");
/* harmony import */ var _angui_container_box_angui_container_box_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./angui-container-box/angui-container-box.component */ "./src/app/an-gui-components/angui-container-box/angui-container-box.component.ts");
/* harmony import */ var _angui_horizondal_line_angui_horizondal_line_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./angui-horizondal-line/angui-horizondal-line.component */ "./src/app/an-gui-components/angui-horizondal-line/angui-horizondal-line.component.ts");
/* harmony import */ var _angui_nav_menu_angui_nav_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./angui-nav-menu/angui-nav-menu.component */ "./src/app/an-gui-components/angui-nav-menu/angui-nav-menu.component.ts");
/* harmony import */ var _angui_toggle_nav_header_angui_toggle_nav_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./angui-toggle-nav-header/angui-toggle-nav-header.component */ "./src/app/an-gui-components/angui-toggle-nav-header/angui-toggle-nav-header.component.ts");
/* harmony import */ var _angui_card_angui_card_header_angui_card_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./angui-card/angui-card-header/angui-card-header.component */ "./src/app/an-gui-components/angui-card/angui-card-header/angui-card-header.component.ts");
/* harmony import */ var _angui_card_angui_card_content_angui_card_content_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./angui-card/angui-card-content/angui-card-content.component */ "./src/app/an-gui-components/angui-card/angui-card-content/angui-card-content.component.ts");
/* harmony import */ var _angui_card_angui_card_footer_angui_card_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./angui-card/angui-card-footer/angui-card-footer.component */ "./src/app/an-gui-components/angui-card/angui-card-footer/angui-card-footer.component.ts");
/* harmony import */ var _angui_progress_bar_angui_progress_bar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./angui-progress-bar/angui-progress-bar.component */ "./src/app/an-gui-components/angui-progress-bar/angui-progress-bar.component.ts");
/* harmony import */ var _angui_navigation_bar_angui_navigation_bar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./angui-navigation-bar/angui-navigation-bar.component */ "./src/app/an-gui-components/angui-navigation-bar/angui-navigation-bar.component.ts");
/* harmony import */ var _angui_page_navigation_bar_angui_page_navigation_bar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./angui-page-navigation-bar/angui-page-navigation-bar.component */ "./src/app/an-gui-components/angui-page-navigation-bar/angui-page-navigation-bar.component.ts");
/* harmony import */ var _angui_you_tube_video_player_angui_you_tube_video_player_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./angui-you-tube-video-player/angui-you-tube-video-player.component */ "./src/app/an-gui-components/angui-you-tube-video-player/angui-you-tube-video-player.component.ts");
/* harmony import */ var _angui_slider_angui_slider_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./angui-slider/angui-slider.component */ "./src/app/an-gui-components/angui-slider/angui-slider.component.ts");
/* harmony import */ var _angui_table_angui_table_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./angui-table/angui-table.component */ "./src/app/an-gui-components/angui-table/angui-table.component.ts");
/* harmony import */ var _angui_expander_menu_angui_expander_menu_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./angui-expander-menu/angui-expander-menu.component */ "./src/app/an-gui-components/angui-expander-menu/angui-expander-menu.component.ts");
/* harmony import */ var _angui_jumbo_text_animation_angui_jumbo_text_animation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./angui-jumbo-text-animation/angui-jumbo-text-animation.component */ "./src/app/an-gui-components/angui-jumbo-text-animation/angui-jumbo-text-animation.component.ts");
/* harmony import */ var _angui_flash_screen_angui_flash_screen_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./angui-flash-screen/angui-flash-screen.component */ "./src/app/an-gui-components/angui-flash-screen/angui-flash-screen.component.ts");
/* harmony import */ var _angui_landing_page_animation_angui_landing_page_animation_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./angui-landing-page-animation/angui-landing-page-animation.component */ "./src/app/an-gui-components/angui-landing-page-animation/angui-landing-page-animation.component.ts");
/* harmony import */ var _angui_logo_angui_logo_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./angui-logo/angui-logo.component */ "./src/app/an-gui-components/angui-logo/angui-logo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AnGuiModuleModule = /** @class */ (function () {
    function AnGuiModuleModule() {
    }
    AnGuiModuleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_angui_label_angui_label_component__WEBPACK_IMPORTED_MODULE_3__["AnguiLabelComponent"], _angui_button_angui_button_component__WEBPACK_IMPORTED_MODULE_5__["AnguiButtonComponent"], _angui_radio_button_angui_radio_button_component__WEBPACK_IMPORTED_MODULE_6__["AnguiRadioButtonComponent"],
                _angui_check_box_angui_check_box_component__WEBPACK_IMPORTED_MODULE_7__["AnguiCheckBoxComponent"], _angui_drop_down_angui_drop_down_component__WEBPACK_IMPORTED_MODULE_8__["AnguiDropDownComponent"], _angui_input_angui_input_component__WEBPACK_IMPORTED_MODULE_9__["AnguiInputComponent"],
                _angui_model_navigation_services_model_controller_model_controller_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"], _angui_alert_model_services_angui_alert_controller_insertion_directive__WEBPACK_IMPORTED_MODULE_14__["AlertModelInsertionDirective"], _angui_model_navigation_services_model_controller_insertion_directive__WEBPACK_IMPORTED_MODULE_13__["InsertionDirective"],
                _an_gui_components_angui_alert_model_services_angui_alert_controller_alert_controller_component__WEBPACK_IMPORTED_MODULE_11__["AlertControllerComponent"], _angui_alert_angui_alert_component__WEBPACK_IMPORTED_MODULE_15__["AnguiAlertComponent"], _angui_confirm_alert_angui_confirm_alert_component__WEBPACK_IMPORTED_MODULE_16__["AnguiConfirmAlertComponent"], _angui_tabs_angui_tabs_component__WEBPACK_IMPORTED_MODULE_17__["AnguiTabsComponent"],
                _angui_hover_card_list_angui_hover_card_list_component__WEBPACK_IMPORTED_MODULE_18__["AnguiHoverCardListComponent"], _angui_card_angui_card_component__WEBPACK_IMPORTED_MODULE_19__["AnguiCardComponent"], _angui_container_box_angui_container_box_component__WEBPACK_IMPORTED_MODULE_20__["AnguiContainerBoxComponent"],
                _angui_horizondal_line_angui_horizondal_line_component__WEBPACK_IMPORTED_MODULE_21__["AnguiHorizaondalLineComponent"], _angui_nav_menu_angui_nav_menu_component__WEBPACK_IMPORTED_MODULE_22__["AnguiNavMenuComponent"], _angui_toggle_nav_header_angui_toggle_nav_header_component__WEBPACK_IMPORTED_MODULE_23__["AnguiToggleNavHeaderComponent"],
                _angui_card_angui_card_header_angui_card_header_component__WEBPACK_IMPORTED_MODULE_24__["AnguiCardHeaderComponent"], _angui_card_angui_card_content_angui_card_content_component__WEBPACK_IMPORTED_MODULE_25__["AnguiCardContentComponent"], _angui_card_angui_card_footer_angui_card_footer_component__WEBPACK_IMPORTED_MODULE_26__["AnguiCardFooterComponent"], _angui_progress_bar_angui_progress_bar_component__WEBPACK_IMPORTED_MODULE_27__["AnguiProgressBarComponent"],
                _angui_navigation_bar_angui_navigation_bar_component__WEBPACK_IMPORTED_MODULE_28__["AnguiNavigationBarComponent"], _angui_page_navigation_bar_angui_page_navigation_bar_component__WEBPACK_IMPORTED_MODULE_29__["AnguiPageNavigationBarComponent"], _angui_you_tube_video_player_angui_you_tube_video_player_component__WEBPACK_IMPORTED_MODULE_30__["AnguiYouTubeVideoPlayerComponent"],
                _angui_slider_angui_slider_component__WEBPACK_IMPORTED_MODULE_31__["AnguiSliderComponent"], _angui_table_angui_table_component__WEBPACK_IMPORTED_MODULE_32__["AnguiTableComponent"], _angui_expander_menu_angui_expander_menu_component__WEBPACK_IMPORTED_MODULE_33__["AnguiExpanderMenuComponent"], _angui_jumbo_text_animation_angui_jumbo_text_animation_component__WEBPACK_IMPORTED_MODULE_34__["AnguiJumboTextAnimationComponent"],
                _angui_flash_screen_angui_flash_screen_component__WEBPACK_IMPORTED_MODULE_35__["AnguiFlashScreenComponent"], _angui_landing_page_animation_angui_landing_page_animation_component__WEBPACK_IMPORTED_MODULE_36__["AnguiLandingPageAnimationComponent"], _angui_logo_angui_logo_component__WEBPACK_IMPORTED_MODULE_37__["AnguiLogoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            exports: [_angui_label_angui_label_component__WEBPACK_IMPORTED_MODULE_3__["AnguiLabelComponent"], _angui_button_angui_button_component__WEBPACK_IMPORTED_MODULE_5__["AnguiButtonComponent"], _angui_radio_button_angui_radio_button_component__WEBPACK_IMPORTED_MODULE_6__["AnguiRadioButtonComponent"],
                _angui_check_box_angui_check_box_component__WEBPACK_IMPORTED_MODULE_7__["AnguiCheckBoxComponent"], _angui_drop_down_angui_drop_down_component__WEBPACK_IMPORTED_MODULE_8__["AnguiDropDownComponent"], _angui_input_angui_input_component__WEBPACK_IMPORTED_MODULE_9__["AnguiInputComponent"], _angui_hover_card_list_angui_hover_card_list_component__WEBPACK_IMPORTED_MODULE_18__["AnguiHoverCardListComponent"],
                _angui_alert_angui_alert_component__WEBPACK_IMPORTED_MODULE_15__["AnguiAlertComponent"], _angui_tabs_angui_tabs_component__WEBPACK_IMPORTED_MODULE_17__["AnguiTabsComponent"], _angui_card_angui_card_component__WEBPACK_IMPORTED_MODULE_19__["AnguiCardComponent"], _angui_container_box_angui_container_box_component__WEBPACK_IMPORTED_MODULE_20__["AnguiContainerBoxComponent"],
                _angui_card_angui_card_header_angui_card_header_component__WEBPACK_IMPORTED_MODULE_24__["AnguiCardHeaderComponent"], _angui_card_angui_card_content_angui_card_content_component__WEBPACK_IMPORTED_MODULE_25__["AnguiCardContentComponent"], _angui_card_angui_card_footer_angui_card_footer_component__WEBPACK_IMPORTED_MODULE_26__["AnguiCardFooterComponent"], _angui_horizondal_line_angui_horizondal_line_component__WEBPACK_IMPORTED_MODULE_21__["AnguiHorizaondalLineComponent"],
                _angui_progress_bar_angui_progress_bar_component__WEBPACK_IMPORTED_MODULE_27__["AnguiProgressBarComponent"], _angui_navigation_bar_angui_navigation_bar_component__WEBPACK_IMPORTED_MODULE_28__["AnguiNavigationBarComponent"], _angui_page_navigation_bar_angui_page_navigation_bar_component__WEBPACK_IMPORTED_MODULE_29__["AnguiPageNavigationBarComponent"], _angui_you_tube_video_player_angui_you_tube_video_player_component__WEBPACK_IMPORTED_MODULE_30__["AnguiYouTubeVideoPlayerComponent"],
                _angui_slider_angui_slider_component__WEBPACK_IMPORTED_MODULE_31__["AnguiSliderComponent"], _angui_table_angui_table_component__WEBPACK_IMPORTED_MODULE_32__["AnguiTableComponent"], _angui_expander_menu_angui_expander_menu_component__WEBPACK_IMPORTED_MODULE_33__["AnguiExpanderMenuComponent"], _angui_flash_screen_angui_flash_screen_component__WEBPACK_IMPORTED_MODULE_35__["AnguiFlashScreenComponent"],
                _angui_jumbo_text_animation_angui_jumbo_text_animation_component__WEBPACK_IMPORTED_MODULE_34__["AnguiJumboTextAnimationComponent"], _angui_landing_page_animation_angui_landing_page_animation_component__WEBPACK_IMPORTED_MODULE_36__["AnguiLandingPageAnimationComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [_angui_model_navigation_services_model_controller_model_controller_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"], _angui_alert_angui_alert_component__WEBPACK_IMPORTED_MODULE_15__["AnguiAlertComponent"], _an_gui_components_angui_alert_model_services_angui_alert_controller_alert_controller_component__WEBPACK_IMPORTED_MODULE_11__["AlertControllerComponent"]],
        })
    ], AnGuiModuleModule);
    return AnGuiModuleModule;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-alert-model-services/alert-model/alert-model.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert-model-services/alert-model/alert-model.ts ***!
  \*****************************************************************************************/
/*! exports provided: AlertModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModel", function() { return AlertModel; });
var AlertModel = /** @class */ (function () {
    function AlertModel() {
        this.isConfirmAlert = false;
        this.inputValue = "";
        // Other configurations if needed
    }
    return AlertModel;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-data.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-data.ts ***!
  \*********************************************************************************************/
/*! exports provided: AlertControllerModelData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertControllerModelData", function() { return AlertControllerModelData; });
var AlertControllerModelData = /** @class */ (function () {
    function AlertControllerModelData() {
    }
    return AlertControllerModelData;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-injector.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-injector.ts ***!
  \*************************************************************************************************/
/*! exports provided: AlertControllerModelInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertControllerModelInjector", function() { return AlertControllerModelInjector; });
var AlertControllerModelInjector = /** @class */ (function () {
    function AlertControllerModelInjector(componentInjector, injectionTokens) {
        this.componentInjector = componentInjector;
        this.injectionTokens = injectionTokens;
    }
    AlertControllerModelInjector.prototype.get = function (token, notFoundValue, flags) {
        var value = this.injectionTokens.get(token);
        if (value)
            return value;
        return this.componentInjector.get(token, notFoundValue);
    };
    return AlertControllerModelInjector;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-subscriber.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-subscriber.ts ***!
  \***************************************************************************************************/
/*! exports provided: AlertControllerModelSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertControllerModelSubscriber", function() { return AlertControllerModelSubscriber; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var AlertControllerModelSubscriber = /** @class */ (function () {
    function AlertControllerModelSubscriber() {
        this.modelOnClose = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onClose = this.modelOnClose.asObservable();
    }
    AlertControllerModelSubscriber.prototype.onModelClose = function (result) {
        this.modelOnClose.next(result);
    };
    return AlertControllerModelSubscriber;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller.service.ts ***!
  \************************************************************************************************/
/*! exports provided: AngiuiAlertControlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngiuiAlertControlerService", function() { return AngiuiAlertControlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _an_gui_module_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../an-gui-module.module */ "./src/app/an-gui-components/an-gui-module.module.ts");
/* harmony import */ var _angui_alert_model_services_angui_alert_controller_alert_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angui-alert-model-services/angui-alert-controller/alert-controller.component */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.ts");
/* harmony import */ var _angui_alert_controller_injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angui-alert-controller-injector */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-injector.ts");
/* harmony import */ var _angui_alert_controller_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angui-alert-controller-data */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-data.ts");
/* harmony import */ var _angui_alert_controller_subscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angui-alert-controller-subscriber */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-subscriber.ts");
/* harmony import */ var _alert_model_alert_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-model/alert-model */ "./src/app/an-gui-components/angui-alert-model-services/alert-model/alert-model.ts");
/* harmony import */ var _an_gui_components_angui_alert_angui_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../an-gui-components/angui-alert/angui-alert.component */ "./src/app/an-gui-components/angui-alert/angui-alert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AngiuiAlertControlerService = /** @class */ (function () {
    function AngiuiAlertControlerService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    // getAlertModel():AlertModel{
    //   return new AlertModel();
    // }
    AngiuiAlertControlerService.prototype.openAlert = function (title, message) {
        var alertModel = new _alert_model_alert_model__WEBPACK_IMPORTED_MODULE_6__["AlertModel"]();
        alertModel.title = title;
        alertModel.message = message;
        var dataConfig = new _angui_alert_controller_data__WEBPACK_IMPORTED_MODULE_4__["AlertControllerModelData"]();
        dataConfig.data = alertModel;
        return this.open(_an_gui_components_angui_alert_angui_alert_component__WEBPACK_IMPORTED_MODULE_7__["AnguiAlertComponent"], dataConfig);
    };
    AngiuiAlertControlerService.prototype.openConfirmAlert = function (title, message, value) {
        var alertModel = new _alert_model_alert_model__WEBPACK_IMPORTED_MODULE_6__["AlertModel"]();
        alertModel.inputValue = value;
        alertModel.title = title;
        alertModel.message = message;
        alertModel.isConfirmAlert = true;
        var dataConfig = new _angui_alert_controller_data__WEBPACK_IMPORTED_MODULE_4__["AlertControllerModelData"]();
        dataConfig.data = alertModel;
        return this.open(_an_gui_components_angui_alert_angui_alert_component__WEBPACK_IMPORTED_MODULE_7__["AnguiAlertComponent"], dataConfig);
    };
    AngiuiAlertControlerService.prototype.open = function (componentType, config) {
        var dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = componentType;
        return dialogRef;
    };
    AngiuiAlertControlerService.prototype.appendDialogComponentToBody = function (config) {
        var _this = this;
        var map = new WeakMap();
        map.set(_angui_alert_controller_data__WEBPACK_IMPORTED_MODULE_4__["AlertControllerModelData"], config);
        var dialogRef = new _angui_alert_controller_subscriber__WEBPACK_IMPORTED_MODULE_5__["AlertControllerModelSubscriber"]();
        map.set(_angui_alert_controller_subscriber__WEBPACK_IMPORTED_MODULE_5__["AlertControllerModelSubscriber"], dialogRef);
        var sub = dialogRef.onClose.subscribe(function () {
            _this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_angui_alert_model_services_angui_alert_controller_alert_controller_component__WEBPACK_IMPORTED_MODULE_2__["AlertControllerComponent"]);
        var componentRef = componentFactory.create(new _angui_alert_controller_injector__WEBPACK_IMPORTED_MODULE_3__["AlertControllerModelInjector"](this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        this.dialogComponentRef.instance.onClose.subscribe(function () {
            _this.removeDialogComponentFromBody();
        });
        return dialogRef;
    };
    AngiuiAlertControlerService.prototype.removeDialogComponentFromBody = function () {
        var _this = this;
        setTimeout(function () {
            _this.appRef.detachView(_this.dialogComponentRef.hostView);
            _this.dialogComponentRef.destroy();
        }, 100);
    };
    AngiuiAlertControlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: _an_gui_module_module__WEBPACK_IMPORTED_MODULE_1__["AnGuiModuleModule"]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AngiuiAlertControlerService);
    return AngiuiAlertControlerService;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    -webkit-tap-highlight-color: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    -webkit-tap-highlight-color: transparent;\n    -ms-tap-highlight-color: transparent;\n    -khtml-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n  \n  }\n  .overlay-container {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.7);\n    align-items: center;\n    justify-content: center;\n    z-index: 10;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktYWxlcnQtbW9kZWwtc2VydmljZXMvYW5ndWktYWxlcnQtY29udHJvbGxlci9hbGVydC1jb250cm9sbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsNEJBQTRCLENBQUMsZ0JBQWdCO0lBQzdDLDBCQUEwQixDQUFDLFlBQVksQ0FDWixvQkFBb0I7T0FDNUMsdUJBQXVCLENBQUMsYUFBYTtRQUNwQyxzQkFBc0IsQ0FBQyw0QkFBNEI7WUFDL0Msa0JBQWtCLENBQUM7a0VBQ21DO0lBQzlELHlDQUF5QztJQUN6QyxxQ0FBcUM7SUFDckMsd0NBQXdDO0lBQ3hDLHNDQUFzQzs7R0FFdkM7RUFDRDtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixZQUFZO0dBQ2IiLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS1hbGVydC1tb2RlbC1zZXJ2aWNlcy9hbmd1aS1hbGVydC1jb250cm9sbGVyL2FsZXJ0LWNvbnRyb2xsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiBub25lO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tcy10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAta2h0bWwtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLW1vei10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgXG4gIH1cbiAgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay-container\" [@zoom-alert] *ngIf=\"showAlert\">\n  <ng-template angui-alert-model-insertion> </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AlertControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertControllerComponent", function() { return AlertControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _insertion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertion.directive */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/insertion.directive.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angui_alert_controller_subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angui-alert-controller-subscriber */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-subscriber.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertControllerComponent = /** @class */ (function () {
    function AlertControllerComponent(componentFactoryResolver, changeDetector, dialogRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetector = changeDetector;
        this.dialogRef = dialogRef;
        this.showAlert = true;
        this.onPopupClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onClose = this.onPopupClose.asObservable();
    }
    AlertControllerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.popupChildComponent(this.childComponentType);
        this.changeDetector.detectChanges();
        this.dialogRef.onClose.subscribe(function (data) {
            _this.showAlert = false;
        });
    };
    AlertControllerComponent.prototype.popupChildComponent = function (componentType) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    };
    AlertControllerComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    AlertControllerComponent.prototype.close = function () {
        var _this = this;
        this.showAlert = false;
        setTimeout(function () {
            _this.onPopupClose.next();
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_insertion_directive__WEBPACK_IMPORTED_MODULE_1__["AlertModelInsertionDirective"]),
        __metadata("design:type", _insertion_directive__WEBPACK_IMPORTED_MODULE_1__["AlertModelInsertionDirective"])
    ], AlertControllerComponent.prototype, "insertionPoint", void 0);
    AlertControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-alert-controller',
            template: __webpack_require__(/*! ./alert-controller.component.html */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.html"),
            styles: [__webpack_require__(/*! ./alert-controller.component.css */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/alert-controller.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('zoom-alert', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'scale3d(.3,.3,.3)'
                        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(150)
                    ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            transform: 'scale3d(.3,.3,.3)'
                        }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angui_alert_controller_subscriber__WEBPACK_IMPORTED_MODULE_3__["AlertControllerModelSubscriber"]])
    ], AlertControllerComponent);
    return AlertControllerComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/insertion.directive.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller/insertion.directive.ts ***!
  \************************************************************************************************************/
/*! exports provided: AlertModelInsertionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModelInsertionDirective", function() { return AlertModelInsertionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertModelInsertionDirective = /** @class */ (function () {
    function AlertModelInsertionDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AlertModelInsertionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[angui-alert-model-insertion]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AlertModelInsertionDirective);
    return AlertModelInsertionDirective;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-alert/angui-alert.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert/angui-alert.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  -webkit-tap-highlight-color: none;\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\r\n     -moz-user-select: none; /* Firefox */\r\n      -ms-user-select: none; /* Internet Explorer/Edge */\r\n          user-select: none; /* Non-prefixed version, currently\r\n                                supported by Chrome and Opera */\r\n  -webkit-tap-highlight-color: transparent;\r\n  -ms-tap-highlight-color: transparent;\r\n  -khtml-tap-highlight-color: transparent;\r\n  -moz-tap-highlight-color: transparent;\r\n\r\n}\r\n\r\n.alert-main-container{\r\n  height:100%;\r\n  width:100%;;\r\n  position: fixed;\r\n  margin:0px;\r\n  padding: 0px;\r\n  top:0px;\r\n  bottom: 0px;\r\n  left:0px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.alert-container{\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  height: 280px;\r\n  width: 420px;\r\n  position: absolute;\r\n  /* margin:0px auto; */\r\n  /* transform: translate(-50%, -50%); */\r\n  /* left:50%; */\r\n  /* top:50%; */\r\n  padding: 0px;\r\n  \r\n  /* border:1px solid #cccccc; */\r\n}\r\n\r\n.alert-container.bordered{\r\n  border-radius:10px;\r\n}\r\n\r\n.alert-header{\r\n  height: 40px;\r\n  width: 100%;\r\n  background-color:rgb(7, 168, 248);\r\n}\r\n\r\n.alert-header.bordered{\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.alert-footer{\r\n  position: absolute;\r\n  height: 40px;\r\n  width: 100%;\r\n  bottom:0px;\r\n  background-color:rgb(7, 168, 248);\r\n}\r\n\r\n.alert-footer.bordered{\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.alert-content-area{\r\n  height: calc(100% - 125px);\r\n      background-color:#f7f5f5;\r\n}\r\n\r\n.alert-text {\r\n  color: white;;\r\n  font-family: roboto;\r\n  letter-spacing: 1px;\r\n  line-height: 16px;\r\n  padding:8px;\r\n  display: inline-block;\r\n}\r\n\r\n.alert-text.alert-header-text {\r\n  font-size: 16px;\r\n  width: calc(100% - 16px);\r\n  text-align: center;\r\n  line-height: 0px;\r\n  padding-top: 20px;\r\n}\r\n\r\n.alert-close{\r\n  font-weight: bold;\r\n  font-size:16px;\r\n  top: 10px;\r\n  position: absolute;\r\n  float: right;\r\n  z-index: 10;\r\n  height:15px;\r\n  width:15px;\r\n  right: 23px;\r\n  cursor:pointer;\r\n  opacity: .6;\r\n  color:white;\r\n      /* content:url('../../../assets/icons/Close.ico'); */\r\n\r\n}\r\n\r\n/* .alert-close:active, */\r\n\r\n.alert-close:active::after{\r\n  border-radius: 2px;\r\n  opacity: .5;\r\n  background: rgba(233, 149, 149, 0.3);\r\n}\r\n\r\n.alert-close:after{\r\n  content: \"\\2573\";\r\n  top:0px;\r\n  color:inherit;\r\n  font-size: 12px;\r\n  padding: 8px 10px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.alert-content-main-area{\r\n  /* padding:20px; */\r\n  height: calc(100% - 0px);\r\n}\r\n\r\n.alert-content-area{\r\n  justify-content: center;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 20px 10px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.button-common{\r\n  height:35px;\r\n  min-width:180px;\r\n  outline: none;\r\n  border:none;\r\n  font-family: roboto;\r\n  font-size: 16px;\r\n  letter-spacing: 1px;\r\n  line-height: 16px;\r\n  margin: 0px 5px;\r\n  z-index: 10;\r\n  color: white;\r\n  background: rgba(220, 210, 210, 0.6);\r\n\r\n}\r\n\r\n.alert-footer.adjust-buttons{\r\ndisplay: flex;\r\npadding-top: 5px;\r\njustify-content: center;\r\n}\r\n\r\n.alert-footer.adjust-buttons .button-common:active{\r\n  opacity: .5;\r\n  color:white;\r\n  background: rgba(233, 149, 149, 0.3);\r\n}\r\n\r\n/* media query for mobile devices */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktYWxlcnQvYW5ndWktYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyw0QkFBNEIsQ0FBQyxnQkFBZ0I7RUFDN0MsMEJBQTBCLENBQUMsWUFBWSxDQUNaLG9CQUFvQjtLQUM1Qyx1QkFBdUIsQ0FBQyxhQUFhO01BQ3BDLHNCQUFzQixDQUFDLDRCQUE0QjtVQUMvQyxrQkFBa0IsQ0FBQztnRUFDbUM7RUFDOUQseUNBQXlDO0VBQ3pDLHFDQUFxQztFQUNyQyx3Q0FBd0M7RUFDeEMsc0NBQXNDOztDQUV2Qzs7QUFFRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFlBQVk7RUFDWixTQUFTO0VBQ1QsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSw2RUFBNkU7RUFDN0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7O0VBRWIsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQ0FBa0M7Q0FDbkM7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IsOEJBQThCO0NBQy9COztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztDQUNuQzs7QUFFRDtFQUNFLGdDQUFnQztFQUNoQyxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSwyQkFBMkI7TUFDdkIseUJBQXlCO0NBQzlCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO01BQ1IscURBQXFEOztDQUUxRDs7QUFFRCwwQkFBMEI7O0FBQzFCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQ0FBcUM7Q0FDdEM7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0NBQzFCOztBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDOztDQUV0Qzs7QUFDRDtBQUNBLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsd0JBQXdCO0NBQ3ZCOztBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixxQ0FBcUM7Q0FDdEM7O0FBRUQsb0NBQW9DIiwiZmlsZSI6InNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktYWxlcnQvYW5ndWktYWxlcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiBub25lO1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC1tcy10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAta2h0bWwtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLW1vei10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbn1cclxuXHJcbi5hbGVydC1tYWluLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDoxMDAlOztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luOjBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdG9wOjBweDtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGVydC1jb250YWluZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG4gIHdpZHRoOiA0MjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyogbWFyZ2luOjBweCBhdXRvOyAqL1xyXG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xyXG4gIC8qIGxlZnQ6NTAlOyAqL1xyXG4gIC8qIHRvcDo1MCU7ICovXHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIFxyXG4gIC8qIGJvcmRlcjoxcHggc29saWQgI2NjY2NjYzsgKi9cclxufVxyXG5cclxuLmFsZXJ0LWNvbnRhaW5lci5ib3JkZXJlZHtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuXHJcbi5hbGVydC1oZWFkZXJ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDcsIDE2OCwgMjQ4KTtcclxufVxyXG5cclxuLmFsZXJ0LWhlYWRlci5ib3JkZXJlZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYWxlcnQtZm9vdGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig3LCAxNjgsIDI0OCk7XHJcbn1cclxuXHJcbi5hbGVydC1mb290ZXIuYm9yZGVyZWR7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmFsZXJ0LWNvbnRlbnQtYXJlYXtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyNXB4KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjdmNWY1O1xyXG59XHJcblxyXG4uYWxlcnQtdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlOztcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZzo4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWxlcnQtdGV4dC5hbGVydC1oZWFkZXItdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmFsZXJ0LWNsb3Nle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIHRvcDogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGhlaWdodDoxNXB4O1xyXG4gIHdpZHRoOjE1cHg7XHJcbiAgcmlnaHQ6IDIzcHg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgb3BhY2l0eTogLjY7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgICAgIC8qIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvQ2xvc2UuaWNvJyk7ICovXHJcblxyXG59XHJcblxyXG4vKiAuYWxlcnQtY2xvc2U6YWN0aXZlLCAqL1xyXG4uYWxlcnQtY2xvc2U6YWN0aXZlOjphZnRlcntcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDE0OSwgMTQ5LCAwLjMpO1xyXG59XHJcblxyXG4uYWxlcnQtY2xvc2U6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCJcXDI1NzNcIjtcclxuICB0b3A6MHB4O1xyXG4gIGNvbG9yOmluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWxlcnQtY29udGVudC1tYWluLWFyZWF7XHJcbiAgLyogcGFkZGluZzoyMHB4OyAqL1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMHB4KTtcclxufVxyXG4uYWxlcnQtY29udGVudC1hcmVhe1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbi1jb21tb257XHJcbiAgaGVpZ2h0OjM1cHg7XHJcbiAgbWluLXdpZHRoOjE4MHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBtYXJnaW46IDBweCA1cHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjIwLCAyMTAsIDIxMCwgMC42KTtcclxuXHJcbn1cclxuLmFsZXJ0LWZvb3Rlci5hZGp1c3QtYnV0dG9uc3tcclxuZGlzcGxheTogZmxleDtcclxucGFkZGluZy10b3A6IDVweDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFsZXJ0LWZvb3Rlci5hZGp1c3QtYnV0dG9ucyAuYnV0dG9uLWNvbW1vbjphY3RpdmV7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDE0OSwgMTQ5LCAwLjMpO1xyXG59XHJcblxyXG4vKiBtZWRpYSBxdWVyeSBmb3IgbW9iaWxlIGRldmljZXMgKi8iXX0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-alert/angui-alert.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert/angui-alert.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"alert-main-container\"  >\n    <div class=\"alert-container\"  >\n      <div class=\"alert-header\">\n        <div class=\"alert-text alert-header-text\">\n            {{alertControllerModelData.data.title}}\n        </div>\n        <div class=\"alert-close\" (click)=\"closeAlert(alertControllerModelData.data.isConfirmAlert,true)\">\n  \n        </div>\n      </div>\n      <div class=\"alert-content-main-area\">\n          <div class=\"alert-content-area\" *ngIf=\"!alertControllerModelData.data.isConfirmAlert\">\n            {{alertControllerModelData.data.message}}\n          </div>\n          <div class=\"alert-content-area\" *ngIf=\"alertControllerModelData.data.isConfirmAlert\">\n              <angui-input style=\"width:100%;\" [inputNameAlign]=\"'center'\" [value] =\"alertControllerModelData.data.inputValue\" (onKeyupValue)=\"onKeyupValue($event)\" [inputName] = \"alertControllerModelData.data.message\"></angui-input>\n          </div>\n      </div>\n      <div class=\"alert-footer adjust-buttons\">\n        <button class=\"button-common\" (click)=\"closeAlert(alertControllerModelData.data.isConfirmAlert,false)\">\n          OK\n        </button>\n        <button class=\"button-common\" (click)=\"closeAlert(alertControllerModelData.data.isConfirmAlert, true)\" *ngIf=\"alertControllerModelData.data.isConfirmAlert\">\n          Cancel\n        </button>\n      </div>\n    </div>\n    </div>\n  "

/***/ }),

/***/ "./src/app/an-gui-components/angui-alert/angui-alert.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-alert/angui-alert.component.ts ***!
  \************************************************************************/
/*! exports provided: AnguiAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiAlertComponent", function() { return AnguiAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angui_alert_model_services_angui_alert_controller_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../angui-alert-model-services/angui-alert-controller-data */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-data.ts");
/* harmony import */ var _angui_alert_model_services_angui_alert_controller_subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angui-alert-model-services/angui-alert-controller-subscriber */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller-subscriber.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnguiAlertComponent = /** @class */ (function () {
    function AnguiAlertComponent(alertControllerModelData, alertControllerSubscriber) {
        this.alertControllerModelData = alertControllerModelData;
        this.alertControllerSubscriber = alertControllerSubscriber;
        this.currentValue = "";
        console.log(this.alertControllerModelData.data.inputValue);
    }
    AnguiAlertComponent.prototype.closeAlert = function (isConfirmAlert, empty) {
        if (isConfirmAlert) {
            if (empty) {
                this.alertControllerSubscriber.onModelClose(null);
                return;
            }
            this.alertControllerSubscriber.onModelClose(this.currentValue);
            return;
        }
        this.alertControllerSubscriber.onModelClose('Alert Closed');
    };
    AnguiAlertComponent.prototype.onKeyupValue = function (event) {
        this.alertControllerModelData.data.inputValue = event.value;
        this.currentValue = this.alertControllerModelData.data.inputValue;
    };
    AnguiAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-alert.component',
            template: __webpack_require__(/*! ./angui-alert.component.html */ "./src/app/an-gui-components/angui-alert/angui-alert.component.html"),
            styles: [__webpack_require__(/*! ./angui-alert.component.css */ "./src/app/an-gui-components/angui-alert/angui-alert.component.css")],
        }),
        __metadata("design:paramtypes", [_angui_alert_model_services_angui_alert_controller_data__WEBPACK_IMPORTED_MODULE_1__["AlertControllerModelData"],
            _angui_alert_model_services_angui_alert_controller_subscriber__WEBPACK_IMPORTED_MODULE_2__["AlertControllerModelSubscriber"]])
    ], AnguiAlertComponent);
    return AnguiAlertComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-button/angui-button.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-button/angui-button.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    -webkit-tap-highlight-color: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    -webkit-tap-highlight-color: transparent;\n    -ms-tap-highlight-color: transparent;\n    -khtml-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n\n}\n.button-common{\n    height:45px;\n    min-width:180px;\n    outline: none;\n    border:none;\n    margin: 8px;\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 16px;\n    z-index: 10;\n    background: white;\n}\n.button-common:active{\n    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04)\n}\n.primary{\n    background-color:#ff5e00;\n    color:white;\n}\n.primary:hover{\n    background-color:rgb(207, 80, 7);\n}\n.primary-outline{\n    border: 1.5px solid #ff5e00;\n    color:#ff5e00;\n}\n.primary-outline:hover{\n    background-color:rgb(207, 80, 7);\n    color:white;\n}\n.secondary{\n    background-color:rgb(11, 142, 207);\n    color:white;\n}\n.secondary:hover{\n    background-color:rgb(4, 124, 184);\n    color:white;\n}\n.secondary-outline{\n    color:rgb(11, 142, 207);\n    border: 1.5px solid rgb(14, 146, 212);\n}\n.secondary-outline:hover{\n    background-color:rgb(4, 124, 184);\n    color:white;\n}\n.plane{\n    color:rgb(11, 142, 207);\n}\n.plane:hover{\n    color:rgb(11, 142, 207);\n    box-shadow: 0px 2px 5px 3px rgba(0,0,0,0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04);\n}\n.disabled{\n    cursor:none;\n    color: rgb(0, 5, 7) !important;\n    pointer-events: none;\n    opacity: .4;\n}\n.disabled.primary-outline, .disabled.secondary-outline{\n    border: 1.5px solid rgb(0, 5, 7) !important;;\n    cursor:none;\n    color: rgb(0, 5, 7) !important;\n    pointer-events: none;\n    opacity: .4;\n}\n.disabled.primary, .disabled.secondary{\n    background-color:rgb(1, 11, 15) !important;;\n    cursor:none;\n    color: rgb(190, 195, 197) !important;\n    pointer-events: none;\n    opacity: .4;\n}\n.active{\n    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktYnV0dG9uL2FuZ3VpLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLDRCQUE0QixDQUFDLGdCQUFnQjtJQUM3QywwQkFBMEIsQ0FBQyxZQUFZLENBQ1osb0JBQW9CO09BQzVDLHVCQUF1QixDQUFDLGFBQWE7UUFDcEMsc0JBQXNCLENBQUMsNEJBQTRCO1lBQy9DLGtCQUFrQixDQUFDO2tFQUNtQztJQUM5RCx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QyxzQ0FBc0M7O0NBRXpDO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxpRkFBaUY7Q0FDcEY7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGlDQUFpQztDQUNwQztBQUVEO0lBQ0ksNEJBQTRCO0lBQzVCLGNBQWM7Q0FDakI7QUFFRDtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0NBQ2Y7QUFFRDtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0NBQ2Y7QUFDRDtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0NBQ2Y7QUFDRDtJQUNJLHdCQUF3QjtJQUN4QixzQ0FBc0M7Q0FDekM7QUFFRDtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0NBQ2Y7QUFFRDtJQUNJLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLCtFQUErRTtDQUNsRjtBQUVEO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsWUFBWTtDQUNmO0FBRUQ7SUFDSSw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsWUFBWTtDQUNmO0FBRUQ7SUFDSSwyQ0FBMkM7SUFDM0MsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxpRkFBaUY7Q0FDcEYiLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS1idXR0b24vYW5ndWktYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogbm9uZTtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtbXMtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLWtodG1sLXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tb3otdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbn1cbi5idXR0b24tY29tbW9ue1xuICAgIGhlaWdodDo0NXB4O1xuICAgIG1pbi13aWR0aDoxODBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5idXR0b24tY29tbW9uOmFjdGl2ZXtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNClcbn1cblxuLnByaW1hcnl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmY1ZTAwO1xuICAgIGNvbG9yOndoaXRlO1xufVxuLnByaW1hcnk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjA3LCA4MCwgNyk7XG59XG5cbi5wcmltYXJ5LW91dGxpbmV7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZmY1ZTAwO1xuICAgIGNvbG9yOiNmZjVlMDA7XG59XG5cbi5wcmltYXJ5LW91dGxpbmU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjA3LCA4MCwgNyk7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5zZWNvbmRhcnl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTEsIDE0MiwgMjA3KTtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi5zZWNvbmRhcnk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNCwgMTI0LCAxODQpO1xuICAgIGNvbG9yOndoaXRlO1xufVxuLnNlY29uZGFyeS1vdXRsaW5le1xuICAgIGNvbG9yOnJnYigxMSwgMTQyLCAyMDcpO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgcmdiKDE0LCAxNDYsIDIxMik7XG59XG5cbi5zZWNvbmRhcnktb3V0bGluZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0LCAxMjQsIDE4NCk7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5wbGFuZXtcbiAgICBjb2xvcjpyZ2IoMTEsIDE0MiwgMjA3KTtcbn1cblxuLnBsYW5lOmhvdmVye1xuICAgIGNvbG9yOnJnYigxMSwgMTQyLCAyMDcpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCByZ2JhKDAsMCwwLDAuMSksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLmRpc2FibGVke1xuICAgIGN1cnNvcjpub25lO1xuICAgIGNvbG9yOiByZ2IoMCwgNSwgNykgIWltcG9ydGFudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAuNDtcbn1cblxuLmRpc2FibGVkLnByaW1hcnktb3V0bGluZSwgLmRpc2FibGVkLnNlY29uZGFyeS1vdXRsaW5le1xuICAgIGJvcmRlcjogMS41cHggc29saWQgcmdiKDAsIDUsIDcpICFpbXBvcnRhbnQ7O1xuICAgIGN1cnNvcjpub25lO1xuICAgIGNvbG9yOiByZ2IoMCwgNSwgNykgIWltcG9ydGFudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAuNDtcbn1cblxuLmRpc2FibGVkLnByaW1hcnksIC5kaXNhYmxlZC5zZWNvbmRhcnl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMSwgMTEsIDE1KSAhaW1wb3J0YW50OztcbiAgICBjdXJzb3I6bm9uZTtcbiAgICBjb2xvcjogcmdiKDE5MCwgMTk1LCAxOTcpICFpbXBvcnRhbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogLjQ7XG59XG4uYWN0aXZle1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0KVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-button/angui-button.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-button/angui-button.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [ngClass]=\"getClassName(buttonType)\">\n    {{text}}\n    <ng-content> </ng-content>\n</button>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-button/angui-button.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-button/angui-button.component.ts ***!
  \**************************************************************************/
/*! exports provided: AnguiButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiButtonComponent", function() { return AnguiButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiButtonComponent = /** @class */ (function () {
    function AnguiButtonComponent() {
        this.text = "";
        this.buttonType = "primary";
        this.disabled = false;
        this.active = false;
    }
    AnguiButtonComponent.prototype.ngOnInit = function () {
    };
    AnguiButtonComponent.prototype.getClassName = function (type) {
        var className = "";
        if (this.disabled) {
            className += " disabled ";
        }
        if (this.active) {
            className += " active ";
        }
        switch (type) {
            case "primary":
                className += "button-common primary";
                break;
            case "primaryOutline":
                className += "button-common primary-outline";
                break;
            case "secondary":
                className += "button-common secondary";
                break;
            case "secondaryOutline":
                className += "button-common secondary-outline";
                break;
            case "plane":
                className += "button-common plane";
                break;
            case "outline":
                className += "button-common outline";
                break;
        }
        return className;
    };
    AnguiButtonComponent.prototype.getColor = function (buttonType) {
        var color = "";
        switch (buttonType) {
            case "primary":
                color = "white";
                break;
            case "primaryOutline":
                color = "rgb(233, 87, 3)";
                break;
            case "secondary":
                color = "white";
                break;
            case "secondaryOutline":
                color = "button-common secondary-outline";
                break;
            case "plane":
                color = "button-common plane";
                break;
            case "outline":
                color = "button-common outline";
                break;
        }
        return color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiButtonComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiButtonComponent.prototype, "buttonType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiButtonComponent.prototype, "active", void 0);
    AnguiButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-button',
            template: __webpack_require__(/*! ./angui-button.component.html */ "./src/app/an-gui-components/angui-button/angui-button.component.html"),
            styles: [__webpack_require__(/*! ./angui-button.component.css */ "./src/app/an-gui-components/angui-button/angui-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiButtonComponent);
    return AnguiButtonComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card-content/angui-card-content.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card-content/angui-card-content.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".angui-card-content{\n    font-size: 18px;\n    font-weight: 500;\n    color: #333;\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 16px;\n       /* display: flex; */\n    /* flex-direction: row; */\n    padding: 16px 10px;\n    /* flex-grow: 1; */\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktY2FyZC9hbmd1aS1jYXJkLWNvbnRlbnQvYW5ndWktY2FyZC1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7T0FDZixvQkFBb0I7SUFDdkIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktY2FyZC9hbmd1aS1jYXJkLWNvbnRlbnQvYW5ndWktY2FyZC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5ndWktY2FyZC1jb250ZW50e1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xuICAgIHBhZGRpbmc6IDE2cHggMTBweDtcbiAgICAvKiBmbGV4LWdyb3c6IDE7ICovXG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card-content/angui-card-content.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card-content/angui-card-content.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"angui-card-content\">\n    <ng-content>\n      \n    </ng-content>\n</div> \n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card-content/angui-card-content.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card-content/angui-card-content.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AnguiCardContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiCardContentComponent", function() { return AnguiCardContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiCardContentComponent = /** @class */ (function () {
    function AnguiCardContentComponent() {
    }
    AnguiCardContentComponent.prototype.ngOnInit = function () {
    };
    AnguiCardContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-card-content',
            template: __webpack_require__(/*! ./angui-card-content.component.html */ "./src/app/an-gui-components/angui-card/angui-card-content/angui-card-content.component.html"),
            styles: [__webpack_require__(/*! ./angui-card-content.component.css */ "./src/app/an-gui-components/angui-card/angui-card-content/angui-card-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiCardContentComponent);
    return AnguiCardContentComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card-footer/angui-card-footer.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card-footer/angui-card-footer.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".angui-card-footer{\n    font-size: 18px;\n    font-weight: 500;\n    color: #333;\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 16px;\n    display: flex;\n    flex-direction: row;\n    align-self: flex-end;\n    /* border-top: 1px solid #52b8e9; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktY2FyZC9hbmd1aS1jYXJkLWZvb3Rlci9hbmd1aS1jYXJkLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG9DQUFvQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLWNhcmQvYW5ndWktY2FyZC1mb290ZXIvYW5ndWktY2FyZC1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmd1aS1jYXJkLWZvb3RlcntcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgIzUyYjhlOTsgKi9cbn0iXX0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card-footer/angui-card-footer.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card-footer/angui-card-footer.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"horizondal-line\">\n\n  </div>\n<div class=\"angui-card-footer\">\n    <ng-content>\n      \n    </ng-content>\n</div> "

/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card-footer/angui-card-footer.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card-footer/angui-card-footer.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AnguiCardFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiCardFooterComponent", function() { return AnguiCardFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiCardFooterComponent = /** @class */ (function () {
    function AnguiCardFooterComponent() {
    }
    AnguiCardFooterComponent.prototype.ngOnInit = function () {
    };
    AnguiCardFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-card-footer',
            template: __webpack_require__(/*! ./angui-card-footer.component.html */ "./src/app/an-gui-components/angui-card/angui-card-footer/angui-card-footer.component.html"),
            styles: [__webpack_require__(/*! ./angui-card-footer.component.css */ "./src/app/an-gui-components/angui-card/angui-card-footer/angui-card-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiCardFooterComponent);
    return AnguiCardFooterComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card-header/angui-card-header.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card-header/angui-card-header.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".angui-card-header{\n    font-size: 22px;\n    font-weight: bold;\n    color: #333;\n    font-family: roboto;\n    letter-spacing: 1px;\n    line-height: 16px;\n    display: flex;\n    flex-grow: 1;\n    flex-direction: row;\n    flex-basis: 1;\n    width:100%;\n    align-self: flex-start;\n    /* border-bottom: 1px solid #52b8e9; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktY2FyZC9hbmd1aS1jYXJkLWhlYWRlci9hbmd1aS1jYXJkLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUNBQXVDO0NBQzFDIiwiZmlsZSI6InNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktY2FyZC9hbmd1aS1jYXJkLWhlYWRlci9hbmd1aS1jYXJkLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuZ3VpLWNhcmQtaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWJhc2lzOiAxO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUyYjhlOTsgKi9cbn0iXX0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card-header/angui-card-header.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card-header/angui-card-header.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"angui-card-header\">\n<ng-content>\n\n</ng-content>\n</div> \n<div class=\"horizondal-line\">\n\n  </div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card-header/angui-card-header.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card-header/angui-card-header.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AnguiCardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiCardHeaderComponent", function() { return AnguiCardHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiCardHeaderComponent = /** @class */ (function () {
    function AnguiCardHeaderComponent() {
    }
    AnguiCardHeaderComponent.prototype.ngOnInit = function () {
    };
    AnguiCardHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-card-header',
            template: __webpack_require__(/*! ./angui-card-header.component.html */ "./src/app/an-gui-components/angui-card/angui-card-header/angui-card-header.component.html"),
            styles: [__webpack_require__(/*! ./angui-card-header.component.css */ "./src/app/an-gui-components/angui-card/angui-card-header/angui-card-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiCardHeaderComponent);
    return AnguiCardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container{\n    min-height:50px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    box-shadow:0px 2px 7px 3px rgba(0, 0, 0, 0.1), 2px 2px 0px 0 rgba(0, 0, 0, 0.04);\n    margin:10px;\n    flex-basis: 1;\n    border-radius: 5px;\n    font-size: 20px;\n    font-weight: 500;\n    color: #333;\n    padding: 16px;\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 16px;\n}\n\n\n.transparent{\n    background: rgba(0, 0, 0, 0.26);\n    /* filter: blur(13px); */\n    border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n\n.card-content{\n    width: 100%;\n    z-index: 1000;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktY2FyZC9hbmd1aS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsaUZBQWlGO0lBQ2pGLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckI7OztBQUdEO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QiwyQ0FBMkM7Q0FDOUM7OztBQUVEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS1jYXJkL2FuZ3VpLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lcntcbiAgICBtaW4taGVpZ2h0OjUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYm94LXNoYWRvdzowcHggMnB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAycHggMnB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgZmxleC1iYXNpczogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG5cbi50cmFuc3BhcmVudHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICAgIC8qIGZpbHRlcjogYmx1cigxM3B4KTsgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5jYXJkLWNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card.component.html":
/*!************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\n\n  <div class=\"card-content\">\n      <ng-content>\n        \n      </ng-content>\n  </div>\n    \n\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-card/angui-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/an-gui-components/angui-card/angui-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnguiCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiCardComponent", function() { return AnguiCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiCardComponent = /** @class */ (function () {
    function AnguiCardComponent() {
    }
    AnguiCardComponent.prototype.ngOnInit = function () {
    };
    AnguiCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-card',
            template: __webpack_require__(/*! ./angui-card.component.html */ "./src/app/an-gui-components/angui-card/angui-card.component.html"),
            styles: [__webpack_require__(/*! ./angui-card.component.css */ "./src/app/an-gui-components/angui-card/angui-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiCardComponent);
    return AnguiCardComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-check-box/angui-check-box.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-check-box/angui-check-box.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    -webkit-tap-highlight-color: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    -webkit-tap-highlight-color: transparent;\n    -ms-tap-highlight-color: transparent;\n    -khtml-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n}\n\n.check-box{\n    position: relative;\n    display:inline-block;\n    width:auto;\n    padding:10px;\n}\n\n.check-box label{\n    color: rgb(7, 168, 248);\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 16px;\n    padding:8px;\n    margin-left: 16px;\n    width:auto;\n}\n\n.check-box  input[type=checkbox] {\n    display:none;\n}\n\n.check-box  input[type=checkbox] + label:before{\n    position: absolute;\n    content: \"\";\n    border: 1px solid;\n    margin: 8px;\n    background: white;\n    color: #d2c9c9;\n    border-radius: 20%;\n    box-sizing: border-box;\n    height: 16px;\n    width:16px;\n    left:0px;    \n    font-size: 11px;\n    top:2px;\n    transition: all .1s ease;\n    -webkit-transition: all .1s ease;\n}\n\n.check-box  input[type=checkbox]:checked + label:before{\n    color: rgb(7, 168, 248);\n    content: \"\\2713\";\n    border: 1px solid rgb(7, 168, 248);\n    margin: 8px;\n    background: rgb(7, 168, 248);\n    color: white;\n    border-radius: 20%;\n    box-sizing: border-box;\n    text-align: center;\n    padding-left: 1px;\n    left:0px;\n    top:0px;\n    height: 16px;\n    width:16px;\n    top:2px;\n    transition: all .1s ease;\n    -webkit-transition: all .1s ease;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktY2hlY2stYm94L2FuZ3VpLWNoZWNrLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLDRCQUE0QixDQUFDLGdCQUFnQjtJQUM3QywwQkFBMEIsQ0FBQyxZQUFZLENBQ1osb0JBQW9CO09BQzVDLHVCQUF1QixDQUFDLGFBQWE7UUFDcEMsc0JBQXNCLENBQUMsNEJBQTRCO1lBQy9DLGtCQUFrQixDQUFDO2tFQUNtQztJQUM5RCx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QyxzQ0FBc0M7Q0FDekM7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBR0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLGlDQUFpQztDQUNwQzs7QUFFRDtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGFBQWE7SUFDYixXQUFXO0lBQ1gsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixpQ0FBaUM7Q0FDcEMiLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS1jaGVjay1ib3gvYW5ndWktY2hlY2stYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogbm9uZTtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtbXMtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLWtodG1sLXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tb3otdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jaGVjay1ib3h7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOmF1dG87XG4gICAgcGFkZGluZzoxMHB4O1xufVxuXG4uY2hlY2stYm94IGxhYmVse1xuICAgIGNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZzo4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgd2lkdGg6YXV0bztcbn1cblxuLmNoZWNrLWJveCAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cblxuXG4uY2hlY2stYm94ICBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmJlZm9yZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogI2QyYzljOTtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6MTZweDtcbiAgICBsZWZ0OjBweDsgICAgXG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHRvcDoycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlO1xufVxuXG4uY2hlY2stYm94ICBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YmVmb3Jle1xuICAgIGNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIGNvbnRlbnQ6IFwiXFwyNzEzXCI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDcsIDE2OCwgMjQ4KTtcbiAgICBtYXJnaW46IDhweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgbGVmdDowcHg7XG4gICAgdG9wOjBweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6MTZweDtcbiAgICB0b3A6MnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXMgZWFzZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-check-box/angui-check-box.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-check-box/angui-check-box.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"check-box\">\n  <input type = \"checkbox\" id = \"checkbox\" name = \"checkbox\"/>\n  <label for = \"checkbox\" >{{text}}</label>\n</div>\n\n\n<!-- add disbaled state -->"

/***/ }),

/***/ "./src/app/an-gui-components/angui-check-box/angui-check-box.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-check-box/angui-check-box.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnguiCheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiCheckBoxComponent", function() { return AnguiCheckBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiCheckBoxComponent = /** @class */ (function () {
    function AnguiCheckBoxComponent() {
        this.text = "Check Box";
    }
    AnguiCheckBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiCheckBoxComponent.prototype, "text", void 0);
    AnguiCheckBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-check-box',
            template: __webpack_require__(/*! ./angui-check-box.component.html */ "./src/app/an-gui-components/angui-check-box/angui-check-box.component.html"),
            styles: [__webpack_require__(/*! ./angui-check-box.component.css */ "./src/app/an-gui-components/angui-check-box/angui-check-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiCheckBoxComponent);
    return AnguiCheckBoxComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-confirm-alert/angui-confirm-alert.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-confirm-alert/angui-confirm-alert.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLWNvbmZpcm0tYWxlcnQvYW5ndWktY29uZmlybS1hbGVydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-confirm-alert/angui-confirm-alert.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-confirm-alert/angui-confirm-alert.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angui-confirm-alert works!\n</p>\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-confirm-alert/angui-confirm-alert.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-confirm-alert/angui-confirm-alert.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AnguiConfirmAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiConfirmAlertComponent", function() { return AnguiConfirmAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiConfirmAlertComponent = /** @class */ (function () {
    function AnguiConfirmAlertComponent() {
    }
    AnguiConfirmAlertComponent.prototype.ngOnInit = function () {
    };
    AnguiConfirmAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angui-confirm-alert',
            template: __webpack_require__(/*! ./angui-confirm-alert.component.html */ "./src/app/an-gui-components/angui-confirm-alert/angui-confirm-alert.component.html"),
            styles: [__webpack_require__(/*! ./angui-confirm-alert.component.css */ "./src/app/an-gui-components/angui-confirm-alert/angui-confirm-alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiConfirmAlertComponent);
    return AnguiConfirmAlertComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-container-box/angui-container-box.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-container-box/angui-container-box.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLWNvbnRhaW5lci1ib3gvYW5ndWktY29udGFpbmVyLWJveC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-container-box/angui-container-box.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-container-box/angui-container-box.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angui-container-box works!\n</p>\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-container-box/angui-container-box.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-container-box/angui-container-box.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AnguiContainerBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiContainerBoxComponent", function() { return AnguiContainerBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiContainerBoxComponent = /** @class */ (function () {
    function AnguiContainerBoxComponent() {
    }
    AnguiContainerBoxComponent.prototype.ngOnInit = function () {
    };
    AnguiContainerBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angui-container-box',
            template: __webpack_require__(/*! ./angui-container-box.component.html */ "./src/app/an-gui-components/angui-container-box/angui-container-box.component.html"),
            styles: [__webpack_require__(/*! ./angui-container-box.component.css */ "./src/app/an-gui-components/angui-container-box/angui-container-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiContainerBoxComponent);
    return AnguiContainerBoxComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-drop-down/angui-drop-down.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-drop-down/angui-drop-down.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    -webkit-tap-highlight-color: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    -webkit-tap-highlight-color: transparent;\n    -ms-tap-highlight-color: transparent;\n    -khtml-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n\n}\n.drop-down-container{\n    height: 40px;\n    /* width: calc(100% - 20px); */\n    min-width: 180px;\n    display: flex;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    margin: 10px 8px;\n        /* padding: 10px; */\n    border: 2px solid #cccccc;\n    position: relative;\n\n}\n.drop-down-text-container{\n    min-width:180px;\n    outline: none;\n    border:none;\n    margin: 8px 0px 8px 8px;\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 15px;\n    padding: 5px 2px 5px 0px;\n    width:calc(100% - 40px);\n    display: inline-block;\n\n    \n}\n.drop-down-text{\n    display: inline-block;\n    width:calc(100% - 40px);\n    color:#8f959a;\n}\n.drop-down-arrow{\n    position: absolute;\n    display: inline-block;\n    float: right;\n    right: 10px;\n    top: 8px;\n}\n.drop-down-arrow:after{\n    content:url('arrow-down.png');\n    position: relative;\n    cursor:pointer;\n    opacity: .6;\n    padding:2px 0px;\n    display: inline-block;\n\n}\n.active.drop-down-arrow:after{\n    content:url('arrow-left.ico');\n    position: relative;\n    cursor:pointer;\n    opacity: .6;\n    padding:2px 0px;\n    display: inline-block;\n\n}\n.active.drop-down-list-container{\n    height:auto;\n    max-height: 194px;\n    width:calc(100% - 40px);\n    position: absolute;\n    outline: none;\n    border:none;\n    margin: 0px;\n    margin-top: 42px;\n        font-family: roboto;\n    font-size: 16px;\n    width:100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    z-index: 100000000;\n    background: white;\n    border-bottom: 2px solid #cccccc;;\n}\n.active.drop-down-list-container ul{\n    text-decoration: none;\n    list-style: none;\n    padding: 0px;\n    margin: 0px;\n    margin-top: 2px;\n    border:2px solid #cccccc;\n    border-bottom:none;\n\n}\n.active.drop-down-list-container ul li{\n    text-decoration: none;\n    list-style: none;\n    padding:10px 5px;\n    padding-left:23px;\n    width: calc(100% - 29px);\n}\n.active.drop-down-list-container ul li:nth-child(odd){\n    background-color:#f3f3f3;\n}\n.active.drop-down-list-container ul li:hover{\n    background-color:#d8d9da;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktZHJvcC1kb3duL2FuZ3VpLWRyb3AtZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLDRCQUE0QixDQUFDLGdCQUFnQjtJQUM3QywwQkFBMEIsQ0FBQyxZQUFZLENBQ1osb0JBQW9CO09BQzVDLHVCQUF1QixDQUFDLGFBQWE7UUFDcEMsc0JBQXNCLENBQUMsNEJBQTRCO1lBQy9DLGtCQUFrQixDQUFDO2tFQUNtQztJQUM5RCx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QyxzQ0FBc0M7O0NBRXpDO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7UUFDYixvQkFBb0I7SUFDeEIsMEJBQTBCO0lBQzFCLG1CQUFtQjs7Q0FFdEI7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixzQkFBc0I7OztDQUd6QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztDQUNaO0FBQ0Q7SUFDSSw4QkFBb0Q7SUFDcEQsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjs7Q0FFekI7QUFDRDtJQUNJLDhCQUFvRDtJQUNwRCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCOztDQUV6QjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtRQUNiLG9CQUFvQjtJQUN4QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQ0FBaUM7Q0FDcEM7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjs7Q0FFdEI7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7Q0FDNUI7QUFFRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0kseUJBQXlCOztDQUU1QiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLWRyb3AtZG93bi9hbmd1aS1kcm9wLWRvd24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiBub25lO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tcy10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAta2h0bWwtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLW1vei10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxufVxuLmRyb3AtZG93bi1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTsgKi9cbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDEwcHggOHB4O1xuICAgICAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2NjY2M7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbi5kcm9wLWRvd24tdGV4dC1jb250YWluZXJ7XG4gICAgbWluLXdpZHRoOjE4MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbWFyZ2luOiA4cHggMHB4IDhweCA4cHg7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBwYWRkaW5nOiA1cHggMnB4IDVweCAwcHg7XG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgXG59XG4uZHJvcC1kb3duLXRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOmNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIGNvbG9yOiM4Zjk1OWE7XG59XG4uZHJvcC1kb3duLWFycm93e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogOHB4O1xufVxuLmRyb3AtZG93bi1hcnJvdzphZnRlcntcbiAgICBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LWRvd24ucG5nJyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIG9wYWNpdHk6IC42O1xuICAgIHBhZGRpbmc6MnB4IDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cbi5hY3RpdmUuZHJvcC1kb3duLWFycm93OmFmdGVye1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctbGVmdC5pY28nKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjY7XG4gICAgcGFkZGluZzoycHggMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxufVxuXG4uYWN0aXZlLmRyb3AtZG93bi1saXN0LWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBtYXgtaGVpZ2h0OiAxOTRweDtcbiAgICB3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgICAgICBmb250LWZhbWlseTogcm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwMDAwMDAwMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjY2NjYzs7XG59XG5cbi5hY3RpdmUuZHJvcC1kb3duLWxpc3QtY29udGFpbmVyIHVse1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgYm9yZGVyOjJweCBzb2xpZCAjY2NjY2NjO1xuICAgIGJvcmRlci1ib3R0b206bm9uZTtcblxufVxuXG4uYWN0aXZlLmRyb3AtZG93bi1saXN0LWNvbnRhaW5lciB1bCBsaXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOjEwcHggNXB4O1xuICAgIHBhZGRpbmctbGVmdDoyM3B4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyOXB4KTtcbn1cblxuLmFjdGl2ZS5kcm9wLWRvd24tbGlzdC1jb250YWluZXIgdWwgbGk6bnRoLWNoaWxkKG9kZCl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xufVxuLmFjdGl2ZS5kcm9wLWRvd24tbGlzdC1jb250YWluZXIgdWwgbGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDhkOWRhO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-drop-down/angui-drop-down.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-drop-down/angui-drop-down.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"drop-down-container\">\n    <div class=\"drop-down-text-container\" (click)=\"toggleDropDown = !toggleDropDown\">\n    <div class=\"drop-down-text\" >Selected Text</div>\n    <!-- <div [ngClass]=\"toggleDropDown?'active drop-down-arrow': 'drop-down-arrow'\"></div> -->\n    <div class=\"drop-down-arrow\"></div>\n\n    </div>\n    <div *ngIf = \"toggleDropDown\" class=\"active drop-down-list-container\">\n        <ul (click)=\"toggleDropDown = !toggleDropDown\">\n            <li > Text 1 </li>\n            <li> Text 2 </li>\n            <li> Text 3 </li>\n            <li> Text 4 </li>\n            <li> Text 1 </li>\n            <li> Text 2 </li>\n            <li> Text 3 </li>\n            <li> Text 4 </li>\n            <li> Text 1 </li>\n            <li> Text 2 </li>\n            <li> Text 3 </li>\n            <li> Text 4 </li>\n        </ul>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-drop-down/angui-drop-down.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-drop-down/angui-drop-down.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnguiDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiDropDownComponent", function() { return AnguiDropDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiDropDownComponent = /** @class */ (function () {
    function AnguiDropDownComponent() {
        this.toggleDropDown = false;
    }
    AnguiDropDownComponent.prototype.ngOnInit = function () {
    };
    AnguiDropDownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-drop-down',
            template: __webpack_require__(/*! ./angui-drop-down.component.html */ "./src/app/an-gui-components/angui-drop-down/angui-drop-down.component.html"),
            styles: [__webpack_require__(/*! ./angui-drop-down.component.css */ "./src/app/an-gui-components/angui-drop-down/angui-drop-down.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiDropDownComponent);
    return AnguiDropDownComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-expander-menu/angui-expander-menu.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-expander-menu/angui-expander-menu.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expander-menu {\n    overflow: hidden;\n    position: absolute;\n    width: auto;\n    height: 45px;\n    margin-top: 1px;\n    background: #fff;\n    border-radius: 4px;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n}\n.expander-menu-chekbox {\n    z-index: -1000;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n    pointer-events: none;\n    display: none;\n}\n.expander-menu-container {\n    position: relative;\n    width: 56px;\n    height: 100%;\n    transition: width .5s ease-out;\n}\n.expander-menu-chekbox:checked ~ .expander-menu-container {\n    transition: width .5s ease-out;\n    width: 410px;\n}\n.expander-menu-list-container {\n    position: relative;\n    width: 410px;\n    height: 100%;\n    padding-left: 20px;\n    padding-right: 110px;\n    list-style-type: none;\n    font-size: 0;\n}\n.expander-menu-list-item {\n    display: inline-block;\n    vertical-align: top;\n    flex-grow: 1;\n    flex-basis: 10px;\n    padding: 0px 10px;\n    text-align: center;\n    color: #6c7784;\n    font-size: 14px;\n    line-height: 44px;\n    font-family: Roboto;\n    font-weight: bold;\n    perspective: 1000px;\n    transition: color 0.3s;\n    cursor: pointer;\n}\n.expander-menu-list-item:hover {\n    color: #00bdea;\n}\n.expander-menu-list-item-text {\n    display: block;\n    height: 100%;\n    transform: rotateY(-90deg);\n    opacity: 0;\n    transition: transform 0.3s ease-out, opacity 0s;\n}\n.expander-menu-chekbox:checked ~ .expander-menu-container .expander-menu-list-item-text {\n    transform: rotateY(0);\n    opacity: 1;\n    transition: transform 0.3s ease-out, opacity 0.2s;\n}\n.expander-menu-list-item .expander-menu-list-item-text {\n    transition-delay: 0.2s;\n}\n.expander-menu-button{\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding:18px;\n    cursor: pointer;\n}\n.expander-menu-button:before, .expander-menu-button:after {\n    content: \"\";\n    display: block;\n    width: 19px;\n    height: 2px;\n    border-radius: 2px;\n    background: #096dd3;\n    transform-origin: 50% 50%;\n    transition: transform .5s ease-out, background-color 0.1s;\n}\n.expander-menu-button:before {\n    margin-bottom: 5px;\n}\n.expander-menu-button:hover:before, .expander-menu-button:hover:after {\n    background: #00bdea;\n}\n.expander-menu-chekbox:checked ~ .expander-menu-button:before {\n    transform: translateY(4px) rotate(-225deg);\n}\n.expander-menu-chekbox:checked ~ .expander-menu-button:after {\n    transform: translateY(-3px) rotate(225deg);\n}\n.radial-expander-menu {\n    background-color: #21264b;\n    overflow-x: hidden;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n}\n.radial-expander-menu .base {\n    z-index: 90;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    background-color: #fff;\n    width: 98px;\n    height: 98px;\n    transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1);\n    border-bottom-right-radius: 100%;\n}\n.radial-expander-menu .base .menu {\n    z-index: 100;\n    background-color: #fff;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100px;\n    height: 100px;\n    border-bottom-right-radius: 200px;\n    cursor: pointer;\n    transition: all 1s cubic-bezier(0.5, -0.75, 0.05, 1), background-color 1s ease;\n}\n.radial-expander-menu .base .menu .icon {\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-100%, -100%);\n}\n.radial-expander-menu .base .menu .icon:before, .radial-expander-menu .base .menu .icon:after {\n    content: '';\n    transform: rotate(0deg);\n    transition: top 0.5s ease 0.5s, transform 0.5s ease, background-color 0.75s ease 0.25s;\n}\n.radial-expander-menu .base .menu .icon .bar, .radial-expander-menu .base .menu .icon:before, .radial-expander-menu .base .menu .icon:after {\n    position: absolute;\n    height: 5px;\n    left: 0px;\n    right: 0px;\n    border-radius: 5px;\n    background-color: #21264b;\n}\n.radial-expander-menu .base .menu .icon .bar {\n    transition: opacity 0s linear 0.5s, background-color 0.75s ease 0.25s;\n    opacity: 1;\n    top: 10px;\n}\n.radial-expander-menu .base .menu .icon:before {\n    top: 0px;\n}\n.radial-expander-menu .base .menu .icon:after {\n    top: initial;\n    top: 20px;\n}\n.radial-expander-menu .base .icons {\n    z-index: 98;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n}\n.radial-expander-menu .base .icons > * {\n    position: absolute;\n    font-size: 40px;\n    color: #21264b;\n    transition: 0.3s cubic-bezier(0.5, -0.25, 0.05, 1);\n}\n.radial-expander-menu .base .icons .fa-user {\n    top: 35px;\n    left: 0px;\n    transition-delay: 0.2s;\n}\n.radial-expander-menu .base .icons .fa-calendar-o {\n    top: 0px;\n    left: 0px;\n    color: #fff;\n    transition-delay: 0.1s;\n}\n.radial-expander-menu .base .icons .fa-tachometer {\n    top: 0px;\n    left: 35px;\n}\n.radial-expander-menu .base .section {\n    z-index: 96;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 0px;\n    width: 0px;\n    transform-origin: 100% 100%;\n    transform: rotate(135deg);\n}\n.radial-expander-menu .base .section .cover1 {\n    transform-origin: 100% 100%;\n}\n.radial-expander-menu .base .section .cover1, .radial-expander-menu .base .section .cover1 .cover2, .radial-expander-menu .base .section .cover1 .cover2 .content {\n    position: absolute;\n    width: 600px;\n    height: 600px;\n}\n.radial-expander-menu .base .section .cover1, .radial-expander-menu .base .section .cover1 .cover2 {\n    top: 50%;\n    left: 50%;\n    transform: translate(-100%, -100%) rotate(4deg);\n    overflow: hidden;\n    pointer-events: none;\n    transition: transform 0.5s ease-in;\n}\n.radial-expander-menu .base .section .cover1 .cover2 {\n    transform: translate(50%, -50%) rotate(-8deg);\n    transform-origin: 0% 100%;\n}\n.radial-expander-menu .base .section .cover1 .cover2 .content {\n    width: 150px;\n    height: 150px;\n    border-radius: 100%;\n    background-color: #ee1b59;\n    top: 100%;\n    left: 0%;\n    transform: translate(-50%, -50%);\n    transition: background-color 0s, width 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s, height 1.5s cubic-bezier(0.5, -0.5, 0.05, 1) 0s;\n    pointer-events: auto;\n}\n.radial-expander-menu .base .section-static {\n    z-index: 94;\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    transform-origin: 0% 0%;\n    transition: width 1s cubic-bezier(0.5, -0.75, 0.05, 1), height 1s cubic-bezier(0.5, -0.75, 0.05, 1);\n}\n.radial-expander-menu .base .section-static:hover {\n    background-color: #eaeaea;\n}\n.radial-expander-menu .base .section-static.top {\n    transform: rotate(-45deg);\n    border-bottom-right-radius: 400px;\n}\n.radial-expander-menu .base .section-static.bottom {\n    transform: rotate(45deg);\n    border-bottom-right-radius: 400px;\n}\n.radial-expander-menu .base.close {\n    width: 150px;\n    height: 150px;\n    transition: all 1.25s cubic-bezier(0.5, 0, 0.05, 1.75);\n}\n.radial-expander-menu .base.close .menu {\n    width: 60px;\n    height: 60px;\n    transition: all 1s cubic-bezier(0.5, 0, 0.05, 1.75), background-color 1s ease;\n    background-color: #21264b;\n}\n.radial-expander-menu .base.close .menu .icon .bar, .radial-expander-menu .base.close .menu .icon:before, .radial-expander-menu .base.close .menu .icon:after {\n    background-color: #fff;\n}\n.radial-expander-menu .base.close .menu .icon .bar {\n    opacity: 0;\n}\n.radial-expander-menu .base.close .menu .icon:before, .radial-expander-menu .base.close .menu .icon:after {\n    transition: top 0.5s linear, transform 0.5s ease 0.5s, background-color 0.75s ease 0.25s;\n}\n.radial-expander-menu .base.close .menu .icon:before {\n    top: 10px;\n    transform: rotate(-45deg);\n}\n.radial-expander-menu .base.close .menu .icon:after {\n    top: 10px;\n    transform: rotate(45deg);\n}\n.radial-expander-menu .base.close .icons {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n}\n.radial-expander-menu .base.close .icons > * {\n    position: absolute;\n    font-size: 40px;\n    color: #21264b;\n    transition: 0.3s cubic-bezier(0.5, 0, 0.05, 1.75) 0.7s;\n    pointer-events: none;\n}\n.radial-expander-menu .base.close .icons .fa-user {\n    top: 35px;\n    left: 200px;\n}\n.radial-expander-menu .base.close .icons .fa-calendar-o {\n    top: 141px;\n    left: 141px;\n    color: #fff;\n    transition-delay: 0.65s;\n}\n.radial-expander-menu .base.close .icons .fa-tachometer {\n    top: 200px;\n    left: 35px;\n    transition-delay: 0.8s;\n}\n.radial-expander-menu .base.close .section .cover1 {\n    transform-origin: 100% 100%;\n}\n.radial-expander-menu .base.close .section .cover1, .radial-expander-menu .base.close .section .cover1 .cover2, .radial-expander-menu .base.close .section .cover1 .cover2 .content {\n    position: absolute;\n    width: 350px;\n    height: 350px;\n}\n.radial-expander-menu .base.close .section .cover1, .radial-expander-menu .base.close .section .cover1 .cover2 {\n    top: 50%;\n    left: 50%;\n    transform: translate(-100%, -100%) rotate(16deg);\n    overflow: hidden;\n    transition: transform 0.5s ease-in 0.5s;\n}\n.radial-expander-menu .base.close .section .cover1 .cover2 {\n    transform: translate(50%, -50%) rotate(-32deg);\n    transform-origin: 0% 100%;\n}\n.radial-expander-menu .base.close .section .cover1 .cover2 .content {\n    border-radius: 100%;\n    background-color: #ee1b59;\n    top: 100%;\n    left: 0%;\n    transform: translate(-50%, -50%);\n    transition: background-color 0s, width 1.1s cubic-bezier(0.5, 0, 0.05, 1.75) 0.25s, height 1.1s cubic-bezier(0.5, 0, 0.05, 2) 0.25s;\n}\n.radial-expander-menu .base.close .section .cover1 .cover2 .content:hover {\n    background-color: #dd1350;\n}\n.radial-expander-menu .base.close .section-static {\n    width: 150px;\n    height: 150px;\n    transition: width 1.25s cubic-bezier(0.5, 0, 0.05, 2), height 1.25s cubic-bezier(0.5, 0, 0.05, 2);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktZXhwYW5kZXItbWVudS9hbmd1aS1leHBhbmRlci1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMkNBQTJDO0NBQzlDO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixPQUFPO0lBQ1AsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0I7Q0FDbEM7QUFDRDtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZ0RBQWdEO0NBQ25EO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtEQUFrRDtDQUNyRDtBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsMERBQTBEO0NBQzdEO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksMkNBQTJDO0NBQzlDO0FBQ0Q7SUFDSSwyQ0FBMkM7Q0FDOUM7QUFJRDtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0NBQ2Y7QUFDRDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixxREFBcUQ7SUFDckQsaUNBQWlDO0NBQ3BDO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQiwrRUFBK0U7Q0FDbEY7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQW1DO0NBQ3RDO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHVGQUF1RjtDQUMxRjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLHNFQUFzRTtJQUN0RSxXQUFXO0lBQ1gsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxTQUFTO0NBQ1o7QUFDRDtJQUNJLGFBQWE7SUFDYixVQUFVO0NBQ2I7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7Q0FDYjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbURBQW1EO0NBQ3REO0FBQ0Q7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxTQUFTO0lBQ1QsV0FBVztDQUNkO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNEO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnREFBZ0Q7SUFDaEQsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQ0FBbUM7Q0FDdEM7QUFDRDtJQUNJLDhDQUE4QztJQUM5QywwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsU0FBUztJQUNULGlDQUFpQztJQUNqQyxpSUFBaUk7SUFDakkscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsb0dBQW9HO0NBQ3ZHO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixrQ0FBa0M7Q0FDckM7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7Q0FDckM7QUFDRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsdURBQXVEO0NBQzFEO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhFQUE4RTtJQUM5RSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSx5RkFBeUY7Q0FDNUY7QUFDRDtJQUNJLFVBQVU7SUFDViwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLFVBQVU7SUFDVix5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtDQUNiO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1REFBdUQ7SUFDdkQscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxVQUFVO0lBQ1YsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNEO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixpREFBaUQ7SUFDakQsaUJBQWlCO0lBQ2pCLHdDQUF3QztDQUMzQztBQUNEO0lBQ0ksK0NBQStDO0lBQy9DLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsU0FBUztJQUNULGlDQUFpQztJQUNqQyxvSUFBb0k7Q0FDdkk7QUFDRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrR0FBa0c7Q0FDckciLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS1leHBhbmRlci1tZW51L2FuZ3VpLWV4cGFuZGVyLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmRlci1tZW51IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5leHBhbmRlci1tZW51LWNoZWtib3gge1xuICAgIHotaW5kZXg6IC0xMDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uZXhwYW5kZXItbWVudS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjVzIGVhc2Utb3V0O1xufVxuLmV4cGFuZGVyLW1lbnUtY2hla2JveDpjaGVja2VkIH4gLmV4cGFuZGVyLW1lbnUtY29udGFpbmVyIHtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNXMgZWFzZS1vdXQ7XG4gICAgd2lkdGg6IDQxMHB4O1xufVxuLmV4cGFuZGVyLW1lbnUtbGlzdC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMTBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAwO1xufVxuLmV4cGFuZGVyLW1lbnUtbGlzdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleC1iYXNpczogMTBweDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM2Yzc3ODQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5leHBhbmRlci1tZW51LWxpc3QtaXRlbTpob3ZlciB7XG4gICAgY29sb3I6ICMwMGJkZWE7XG59XG4uZXhwYW5kZXItbWVudS1saXN0LWl0ZW0tdGV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIG9wYWNpdHkgMHM7XG59XG4uZXhwYW5kZXItbWVudS1jaGVrYm94OmNoZWNrZWQgfiAuZXhwYW5kZXItbWVudS1jb250YWluZXIgLmV4cGFuZGVyLW1lbnUtbGlzdC1pdGVtLXRleHQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnM7XG59XG4uZXhwYW5kZXItbWVudS1saXN0LWl0ZW0gLmV4cGFuZGVyLW1lbnUtbGlzdC1pdGVtLXRleHQge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5leHBhbmRlci1tZW51LWJ1dHRvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHBhZGRpbmc6MThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZXhwYW5kZXItbWVudS1idXR0b246YmVmb3JlLCAuZXhwYW5kZXItbWVudS1idXR0b246YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE5cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQ6ICMwOTZkZDM7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2Utb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XG59XG4uZXhwYW5kZXItbWVudS1idXR0b246YmVmb3JlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uZXhwYW5kZXItbWVudS1idXR0b246aG92ZXI6YmVmb3JlLCAuZXhwYW5kZXItbWVudS1idXR0b246aG92ZXI6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwMGJkZWE7XG59XG4uZXhwYW5kZXItbWVudS1jaGVrYm94OmNoZWNrZWQgfiAuZXhwYW5kZXItbWVudS1idXR0b246YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KSByb3RhdGUoLTIyNWRlZyk7XG59XG4uZXhwYW5kZXItbWVudS1jaGVrYm94OmNoZWNrZWQgfiAuZXhwYW5kZXItbWVudS1idXR0b246YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSByb3RhdGUoMjI1ZGVnKTtcbn1cblxuXG5cbi5yYWRpYWwtZXhwYW5kZXItbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjY0YjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSB7XG4gICAgei1pbmRleDogOTA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiA5OHB4O1xuICAgIGhlaWdodDogOThweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKDAuNSwgLTAuNzUsIDAuMDUsIDEpO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAlO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlIC5tZW51IHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGN1YmljLWJlemllcigwLjUsIC0wLjc1LCAwLjA1LCAxKSwgYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlIC5tZW51IC5pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTEwMCUpO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlIC5tZW51IC5pY29uOmJlZm9yZSwgLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlIC5tZW51IC5pY29uOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC41cyBlYXNlIDAuNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC43NXMgZWFzZSAwLjI1cztcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAubWVudSAuaWNvbiAuYmFyLCAucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UgLm1lbnUgLmljb246YmVmb3JlLCAucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UgLm1lbnUgLmljb246YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjY0Yjtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAubWVudSAuaWNvbiAuYmFyIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDBzIGxpbmVhciAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNzVzIGVhc2UgMC4yNXM7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDEwcHg7XG59XG4ucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UgLm1lbnUgLmljb246YmVmb3JlIHtcbiAgICB0b3A6IDBweDtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAubWVudSAuaWNvbjphZnRlciB7XG4gICAgdG9wOiBpbml0aWFsO1xuICAgIHRvcDogMjBweDtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAuaWNvbnMge1xuICAgIHotaW5kZXg6IDk4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG59XG4ucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UgLmljb25zID4gKiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogIzIxMjY0YjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjUsIC0wLjI1LCAwLjA1LCAxKTtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAuaWNvbnMgLmZhLXVzZXIge1xuICAgIHRvcDogMzVweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAuaWNvbnMgLmZhLWNhbGVuZGFyLW8ge1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlIC5pY29ucyAuZmEtdGFjaG9tZXRlciB7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMzVweDtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAuc2VjdGlvbiB7XG4gICAgei1pbmRleDogOTY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlIC5zZWN0aW9uIC5jb3ZlcjEge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAuc2VjdGlvbiAuY292ZXIxLCAucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UgLnNlY3Rpb24gLmNvdmVyMSAuY292ZXIyLCAucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UgLnNlY3Rpb24gLmNvdmVyMSAuY292ZXIyIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogNjAwcHg7XG59XG4ucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UgLnNlY3Rpb24gLmNvdmVyMSwgLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlIC5zZWN0aW9uIC5jb3ZlcjEgLmNvdmVyMiB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtMTAwJSkgcm90YXRlKDRkZWcpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbjtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAuc2VjdGlvbiAuY292ZXIxIC5jb3ZlcjIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSkgcm90YXRlKC04ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlIC5zZWN0aW9uIC5jb3ZlcjEgLmNvdmVyMiAuY29udGVudCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWUxYjU5O1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzLCB3aWR0aCAxLjVzIGN1YmljLWJlemllcigwLjUsIC0wLjUsIDAuMDUsIDEpIDBzLCBoZWlnaHQgMS41cyBjdWJpYy1iZXppZXIoMC41LCAtMC41LCAwLjA1LCAxKSAwcztcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAuc2VjdGlvbi1zdGF0aWMge1xuICAgIHotaW5kZXg6IDk0O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMXMgY3ViaWMtYmV6aWVyKDAuNSwgLTAuNzUsIDAuMDUsIDEpLCBoZWlnaHQgMXMgY3ViaWMtYmV6aWVyKDAuNSwgLTAuNzUsIDAuMDUsIDEpO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlIC5zZWN0aW9uLXN0YXRpYzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAuc2VjdGlvbi1zdGF0aWMudG9wIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MDBweDtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZSAuc2VjdGlvbi1zdGF0aWMuYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQwMHB4O1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMS4yNXMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC4wNSwgMS43NSk7XG59XG4ucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UuY2xvc2UgLm1lbnUge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC4wNSwgMS43NSksIGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNjRiO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5tZW51IC5pY29uIC5iYXIsIC5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZS5jbG9zZSAubWVudSAuaWNvbjpiZWZvcmUsIC5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZS5jbG9zZSAubWVudSAuaWNvbjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZS5jbG9zZSAubWVudSAuaWNvbiAuYmFyIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5tZW51IC5pY29uOmJlZm9yZSwgLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5tZW51IC5pY29uOmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC41cyBsaW5lYXIsIHRyYW5zZm9ybSAwLjVzIGVhc2UgMC41cywgYmFja2dyb3VuZC1jb2xvciAwLjc1cyBlYXNlIDAuMjVzO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5tZW51IC5pY29uOmJlZm9yZSB7XG4gICAgdG9wOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4ucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UuY2xvc2UgLm1lbnUgLmljb246YWZ0ZXIge1xuICAgIHRvcDogMTBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4ucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UuY2xvc2UgLmljb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5pY29ucyA+ICoge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6ICMyMTI2NGI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjA1LCAxLjc1KSAwLjdzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5pY29ucyAuZmEtdXNlciB7XG4gICAgdG9wOiAzNXB4O1xuICAgIGxlZnQ6IDIwMHB4O1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5pY29ucyAuZmEtY2FsZW5kYXItbyB7XG4gICAgdG9wOiAxNDFweDtcbiAgICBsZWZ0OiAxNDFweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjY1cztcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZS5jbG9zZSAuaWNvbnMgLmZhLXRhY2hvbWV0ZXIge1xuICAgIHRvcDogMjAwcHg7XG4gICAgbGVmdDogMzVweDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5zZWN0aW9uIC5jb3ZlcjEge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZS5jbG9zZSAuc2VjdGlvbiAuY292ZXIxLCAucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UuY2xvc2UgLnNlY3Rpb24gLmNvdmVyMSAuY292ZXIyLCAucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UuY2xvc2UgLnNlY3Rpb24gLmNvdmVyMSAuY292ZXIyIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG59XG4ucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UuY2xvc2UgLnNlY3Rpb24gLmNvdmVyMSwgLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5zZWN0aW9uIC5jb3ZlcjEgLmNvdmVyMiB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtMTAwJSkgcm90YXRlKDE2ZGVnKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4gMC41cztcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZS5jbG9zZSAuc2VjdGlvbiAuY292ZXIxIC5jb3ZlcjIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSkgcm90YXRlKC0zMmRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcbn1cbi5yYWRpYWwtZXhwYW5kZXItbWVudSAuYmFzZS5jbG9zZSAuc2VjdGlvbiAuY292ZXIxIC5jb3ZlcjIgLmNvbnRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlMWI1OTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcywgd2lkdGggMS4xcyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjA1LCAxLjc1KSAwLjI1cywgaGVpZ2h0IDEuMXMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC4wNSwgMikgMC4yNXM7XG59XG4ucmFkaWFsLWV4cGFuZGVyLW1lbnUgLmJhc2UuY2xvc2UgLnNlY3Rpb24gLmNvdmVyMSAuY292ZXIyIC5jb250ZW50OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQxMzUwO1xufVxuLnJhZGlhbC1leHBhbmRlci1tZW51IC5iYXNlLmNsb3NlIC5zZWN0aW9uLXN0YXRpYyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMS4yNXMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC4wNSwgMiksIGhlaWdodCAxLjI1cyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjA1LCAyKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-expander-menu/angui-expander-menu.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-expander-menu/angui-expander-menu.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"expander-menu\">\n  <input type=\"checkbox\" class=\"expander-menu-chekbox\" id=\"menu-checkbox\" />\n  <div class=\"expander-menu-container\">\n    <ul class=\"expander-menu-list-container\">\n      <li class=\"expander-menu-list-item\">\n        <span class=\"expander-menu-list-item-text\">\n          Home\n        </span>\n      </li>\n      <li class=\"expander-menu-list-item\">\n        <span class=\"expander-menu-list-item-text\">\n          Home\n        </span>\n      </li>\n      <li class=\"expander-menu-list-item\">\n        <span class=\"expander-menu-list-item-text\">\n          Home\n        </span>\n      </li>\n      <li class=\"expander-menu-list-item\">\n        <span class=\"expander-menu-list-item-text\">\n          Home\n        </span>\n      </li>\n      <li class=\"expander-menu-list-item\">\n        <span class=\"expander-menu-list-item-text\">\n          Home\n        </span>\n      </li>\n    </ul>\n  </div>\n  <label class=\"expander-menu-button\" for=\"menu-checkbox\"></label>\n</nav>\n\n<div class=\"radial-expander-menu\">\n  <div class=\"base close\">\n    <div class=\"menu\">\n      <div class=\"icon\">\n        <div class=\"bar\"></div>\n      </div>\n    </div>\n    <div class=\"icons\">\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n      <i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>\n      <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"section\">\n      <div class=\"cover1\">\n        <div class=\"cover2\">\n          <a class=\"content\" href=\"#calender\"></a>\n        </div>\n      </div>\n    </div>\n    <a class=\"section-static top\" href=\"#profile\"></a>\n    <a class=\"section-static bottom\" href=\"#dashboard\"></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-expander-menu/angui-expander-menu.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-expander-menu/angui-expander-menu.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AnguiExpanderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiExpanderMenuComponent", function() { return AnguiExpanderMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiExpanderMenuComponent = /** @class */ (function () {
    function AnguiExpanderMenuComponent() {
    }
    AnguiExpanderMenuComponent.prototype.ngOnInit = function () {
    };
    AnguiExpanderMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-expander-menu',
            template: __webpack_require__(/*! ./angui-expander-menu.component.html */ "./src/app/an-gui-components/angui-expander-menu/angui-expander-menu.component.html"),
            styles: [__webpack_require__(/*! ./angui-expander-menu.component.css */ "./src/app/an-gui-components/angui-expander-menu/angui-expander-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiExpanderMenuComponent);
    return AnguiExpanderMenuComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-flash-screen/angui-flash-screen.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-flash-screen/angui-flash-screen.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body_elem {\n    margin: 0px;\n    text-align: center;\n    padding-top: 43vh;\n    color: #fff;\n    font-family: 'Roboto';\n    font-size: 36px;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    max-height: calc(100% - 2px);\n    position: fixed;\n    overflow: hidden;\n    -webkit-animation: bg 5s linear infinite;\n    animation: bg 5s linear infinite;\n}\n.flash-logo-container{\n    display:flex;\n}\n.flash-logo-container > angui-logo{\n    position: relative;\n    top: -35px;\n    left: -10px;\n    height: 100px;\n    width: 100px;\n}\n.dropping-texts {\n    display: inline-block;\n    width: 180px;\n    text-align: left;\n    height: 36px;\n    vertical-align: -2px;\n}\n.dropping-texts > div {\n    font-size: 0px;\n    opacity: 0;\n    margin-left: -30px;\n    position: absolute;\n    font-weight: 300;\n    box-shadow: 0px 60px 25px -20px rgba(0, 0, 0, 0.5);\n}\n.dropping-texts > div:nth-child(1) {\n    -webkit-animation: roll 5s linear infinite 0s;\n            animation: roll 5s linear infinite 0s;\n}\n.dropping-texts > div:nth-child(2) {\n    -webkit-animation: roll 5s linear infinite 1s;\n            animation: roll 5s linear infinite 1s;\n}\n.dropping-texts > div:nth-child(3) {\n    -webkit-animation: roll 5s linear infinite 2s;\n            animation: roll 5s linear infinite 2s;\n}\n.dropping-texts > div:nth-child(4) {\n    -webkit-animation: roll2 5s linear infinite 3s;\n            animation: roll2 5s linear infinite 3s;\n}\n@-webkit-keyframes roll {\n    0% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(-25deg);\n   }\n    3% {\n        opacity: 1;\n        transform: rotate(0deg);\n   }\n    5% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n   }\n    20% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n        transform: rotate(0deg);\n   }\n    27% {\n        font-size: 0px;\n        opacity: 0.5;\n        margin-left: 20px;\n        margin-top: 100px;\n   }\n    100% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(15deg);\n   }\n}\n@keyframes roll {\n    0% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(-25deg);\n   }\n    3% {\n        opacity: 1;\n        transform: rotate(0deg);\n   }\n    5% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n   }\n    20% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n        transform: rotate(0deg);\n   }\n    27% {\n        font-size: 0px;\n        opacity: 0.5;\n        margin-left: 20px;\n        margin-top: 100px;\n   }\n    100% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(15deg);\n   }\n}\n@-webkit-keyframes roll2 {\n    0% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(-25deg);\n   }\n    3% {\n        opacity: 1;\n        transform: rotate(0deg);\n   }\n    5% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n   }\n    30% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n        transform: rotate(0deg);\n   }\n    37% {\n        font-size: 1500px;\n        opacity: 0;\n        margin-left: -1000px;\n        margin-top: -800px;\n   }\n    100% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(15deg);\n   }\n}\n@keyframes roll2 {\n    0% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(-25deg);\n   }\n    3% {\n        opacity: 1;\n        transform: rotate(0deg);\n   }\n    5% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n   }\n    30% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n        transform: rotate(0deg);\n   }\n    37% {\n        font-size: 1500px;\n        opacity: 0;\n        margin-left: -1000px;\n        margin-top: -800px;\n   }\n    100% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(15deg);\n   }\n}\n@-webkit-keyframes bg {\n    0% {\n        background: linear-gradient(to bottom, #053777 0%, #00659b 100%);\n   }\n    3% {\n        background: linear-gradient(to bottom, #053777 0%, #00659b 100%);\n   }\n    20% {\n        background: linear-gradient(to bottom, #053777 0%, #00659b 100%);\n   }\n    100% {\n        background: linear-gradient(to bottom, #053777 0%, #00659b 100%);\n        -webkit-animation: 8s hide 1;\n                animation: 8s hide 1;\n   }\n}\n@keyframes bg {\n    0% {\n        background: linear-gradient(to bottom, #053777 0%, #00659b 100%);\n   }\n    3% {\n        background: linear-gradient(to bottom, #053777 0%, #00659b 100%);\n   }\n    20% {\n        background: linear-gradient(to bottom, #053777 0%, #00659b 100%);\n   }\n    100% {\n        background: linear-gradient(to bottom, #053777 0%, #00659b 100%);\n        -webkit-animation: 8s hide 1;\n                animation: 8s hide 1;\n   }\n}\n.flash-screen-container {\n    margin: 0px;\n    text-align: center;\n    padding-top: 43vh;\n   /* padding: 42%;\n    */\n    color: #fff;\n    font-family: 'Roboto';\n    font-size: 36px;\n    font-weight: 100;\n    height: 100%;\n    width: 100%;\n    max-height: calc(100% - 2px);\n    position: fixed;\n    overflow: hidden;\n    transition: background-color 600ms 480ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.flash-screen-container.is-inverted {\n    background: linear-gradient(to bottom, #3973bd 0%, #4d96bd 100%)\n}\n.flash-screen-logo {\n    height: 35px;\n    /* margin-left: calc(( 100% - 70px) / 2); */\n    font-family: 'Orbitron', sans-serif;\n    opacity: 0;\n    transform: translateY(-25px);\n    transition: opacity 0.48s 280ms ease-in-out, transform 1200ms 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    letter-spacing: 0.05rem;\n}\n.flash-screen-logo.is-in {\n    opacity: 1;\n    display: flex;\n    transform: translateY(22px);\n}\n.flash-screen-logo span:first-child, .flash-screen-logo span:last-child {\n    /* position: absolute; */\n    top: 5px;\n    opacity: 0;\n    transition: opacity 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.flash-screen-logo span:first-child.is-in, .flash-screen-logo span:last-child.is-in {\n    opacity: 1;\n    width: calc((100% - 100px) / 2);\n    display: flex;\n    flex-grow: 1;\n    float: left;\n    flex-direction: column;\n}\n.flash-screen-logo span:first-child.is-in{\n    text-align:right;\n}\n.flash-screen-logo span:last-child.is-in {\n    text-align:left;\n}\n.flash-screen-logo span:first-child {\n    /* left: -100px; */\n    top: -5px;\n    color: #fff;\n    font-family: 'Roboto';\n    font-size: 36px;\n    transition-delay: 1s;\n}\n.flash-screen-logo span:last-child {\n    left: 100px;\n    color: #fff;\n    font-family: 'Roboto';\n    font-size: 36px;\n    top: -5px;\n    transition-delay: 1.5s;\n}\n.flash-screen-progress {\n    height: 2px;\n    width: 42px;\n    margin-top: 25px;\n    background-color: #333;\n    border-radius: 4px;\n    overflow: hidden;\n    margin-left: calc(( 100% - 40px) / 2);\n}\n.flash-screen-progress::before {\n    display: block;\n    height: 2px;\n    width: 0%;\n    background: #00659b;\n    z-index: 10;\n    content: '';\n}\n.flash-screen-progress.is-loading::before {\n    -webkit-animation: load 2s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;\n            animation: load 2s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;\n}\n@-webkit-keyframes load {\n    to {\n        width: 100%;\n   }\n    0% {\n        background: #0094ff;\n   }\n    99% {\n        background: #0094ff;\n   }\n    100% {\n        background: #0f4884;\n   }\n}\n@keyframes load {\n    to {\n        width: 100%;\n   }\n    0% {\n        background: #0094ff;\n   }\n    99% {\n        background: #0094ff;\n   }\n    100% {\n        background: #0f4884;\n   }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktZmxhc2gtc2NyZWVuL2FuZ3VpLWZsYXNoLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLGlDQUFpQztDQUNwQztBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbURBQW1EO0NBQ3REO0FBQ0Q7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSwrQ0FBdUM7WUFBdkMsdUNBQXVDO0NBQzFDO0FBQ0Q7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLFdBQVc7UUFDWCx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIseUJBQXlCO0lBQzdCO0NBQ0g7QUF0Q0Q7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLFdBQVc7UUFDWCx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIseUJBQXlCO0lBQzdCO0NBQ0g7QUFDRDtJQUNJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksV0FBVztRQUNYLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7Q0FDSDtBQXRDRDtJQUNJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksV0FBVztRQUNYLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7Q0FDSDtBQUVEO0lBQ0k7UUFDSSxpRUFBaUU7SUFDckU7SUFDQTtRQUNJLGlFQUFpRTtJQUNyRTtJQUNBO1FBQ0ksaUVBQWlFO0lBQ3JFO0lBQ0E7UUFDSSxpRUFBaUU7UUFDakUsNkJBQXFCO2dCQUFyQixxQkFBcUI7SUFDekI7Q0FDSDtBQWREO0lBQ0k7UUFDSSxpRUFBaUU7SUFDckU7SUFDQTtRQUNJLGlFQUFpRTtJQUNyRTtJQUNBO1FBQ0ksaUVBQWlFO0lBQ3JFO0lBQ0E7UUFDSSxpRUFBaUU7UUFDakUsNkJBQXFCO2dCQUFyQixxQkFBcUI7SUFDekI7Q0FDSDtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7R0FDbkI7TUFDRztJQUNGLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdGQUFnRjtDQUNuRjtBQUNEO0lBQ0ksZ0VBQWdFO0NBQ25FO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLDJHQUEyRztJQUMzRyx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNEJBQTRCO0NBQy9CO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULFdBQVc7SUFDWCw4REFBOEQ7Q0FDakU7QUFDRDtJQUNJLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzQ0FBc0M7Q0FDekM7QUFDRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtDQUNmO0FBQ0Q7SUFDSSwyRUFBbUU7WUFBbkUsbUVBQW1FO0NBQ3RFO0FBQ0Q7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7Q0FDSDtBQWJEO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0NBQ0giLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS1mbGFzaC1zY3JlZW4vYW5ndWktZmxhc2gtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keV9lbGVtIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDQzdmg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAycHgpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBiZyA1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBiZyA1cyBsaW5lYXIgaW5maW5pdGU7XG59XG4uZmxhc2gtbG9nby1jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuLmZsYXNoLWxvZ28tY29udGFpbmVyID4gYW5ndWktbG9nb3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMzVweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLmRyb3BwaW5nLXRleHRzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiAtMnB4O1xufVxuLmRyb3BwaW5nLXRleHRzID4gZGl2IHtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBib3gtc2hhZG93OiAwcHggNjBweCAyNXB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5kcm9wcGluZy10ZXh0cyA+IGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbjogcm9sbCA1cyBsaW5lYXIgaW5maW5pdGUgMHM7XG59XG4uZHJvcHBpbmctdGV4dHMgPiBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb246IHJvbGwgNXMgbGluZWFyIGluZmluaXRlIDFzO1xufVxuLmRyb3BwaW5nLXRleHRzID4gZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uOiByb2xsIDVzIGxpbmVhciBpbmZpbml0ZSAycztcbn1cbi5kcm9wcGluZy10ZXh0cyA+IGRpdjpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbjogcm9sbDIgNXMgbGluZWFyIGluZmluaXRlIDNzO1xufVxuQGtleWZyYW1lcyByb2xsIHtcbiAgICAwJSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcbiAgIH1cbiAgICAzJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgfVxuICAgIDUlIHtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICB9XG4gICAgMjAlIHtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgfVxuICAgIDI3JSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgZm9udC1zaXplOiAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICB9XG59XG5Aa2V5ZnJhbWVzIHJvbGwyIHtcbiAgICAwJSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcbiAgIH1cbiAgICAzJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgfVxuICAgIDUlIHtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICB9XG4gICAgMzAlIHtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgfVxuICAgIDM3JSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTUwMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTgwMHB4O1xuICAgfVxuICAgIDEwMCUge1xuICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbiAgIH1cbn1cblxuQGtleWZyYW1lcyBiZyB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDUzNzc3IDAlLCAjMDA2NTliIDEwMCUpO1xuICAgfVxuICAgIDMlIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA1Mzc3NyAwJSwgIzAwNjU5YiAxMDAlKTtcbiAgIH1cbiAgICAyMCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDUzNzc3IDAlLCAjMDA2NTliIDEwMCUpO1xuICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDUzNzc3IDAlLCAjMDA2NTliIDEwMCUpO1xuICAgICAgICBhbmltYXRpb246IDhzIGhpZGUgMTtcbiAgIH1cbn1cbi5mbGFzaC1zY3JlZW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDQzdmg7XG4gICAvKiBwYWRkaW5nOiA0MiU7XG4gICAgKi9cbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDJweCk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA2MDBtcyA0ODBtcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbn1cbi5mbGFzaC1zY3JlZW4tY29udGFpbmVyLmlzLWludmVydGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzk3M2JkIDAlLCAjNGQ5NmJkIDEwMCUpXG59XG4uZmxhc2gtc2NyZWVuLWxvZ28ge1xuICAgIGhlaWdodDogMzVweDtcbiAgICAvKiBtYXJnaW4tbGVmdDogY2FsYygoIDEwMCUgLSA3MHB4KSAvIDIpOyAqL1xuICAgIGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNDhzIDI4MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTIwMG1zIDYwMG1zIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xufVxuLmZsYXNoLXNjcmVlbi1sb2dvLmlzLWluIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIycHgpO1xufVxuLmZsYXNoLXNjcmVlbi1sb2dvIHNwYW46Zmlyc3QtY2hpbGQsIC5mbGFzaC1zY3JlZW4tbG9nbyBzcGFuOmxhc3QtY2hpbGQge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICB0b3A6IDVweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG59XG4uZmxhc2gtc2NyZWVuLWxvZ28gc3BhbjpmaXJzdC1jaGlsZC5pcy1pbiwgLmZsYXNoLXNjcmVlbi1sb2dvIHNwYW46bGFzdC1jaGlsZC5pcy1pbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxhc2gtc2NyZWVuLWxvZ28gc3BhbjpmaXJzdC1jaGlsZC5pcy1pbntcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufSBcbi5mbGFzaC1zY3JlZW4tbG9nbyBzcGFuOmxhc3QtY2hpbGQuaXMtaW4ge1xuICAgIHRleHQtYWxpZ246bGVmdDtcbn1cbi5mbGFzaC1zY3JlZW4tbG9nbyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAvKiBsZWZ0OiAtMTAwcHg7ICovXG4gICAgdG9wOiAtNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XG59XG4uZmxhc2gtc2NyZWVuLWxvZ28gc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIHRvcDogLTVweDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjVzO1xufVxuLmZsYXNoLXNjcmVlbi1wcm9ncmVzcyB7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCggMTAwJSAtIDQwcHgpIC8gMik7XG59XG4uZmxhc2gtc2NyZWVuLXByb2dyZXNzOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDA2NTliO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGNvbnRlbnQ6ICcnO1xufVxuLmZsYXNoLXNjcmVlbi1wcm9ncmVzcy5pcy1sb2FkaW5nOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogbG9hZCAycyBjdWJpYy1iZXppZXIoMC42LCAtMC4yOCwgMC43MzUsIDAuMDQ1KSBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgbG9hZCB7XG4gICAgdG8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDk0ZmY7XG4gICB9XG4gICAgOTklIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwOTRmZjtcbiAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzBmNDg4NDtcbiAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-flash-screen/angui-flash-screen.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-flash-screen/angui-flash-screen.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <angui-logo>{{textLogo}}</angui-logo> -->\n\n\n<div [ngClass]=\"afterSomeTime1?'flash-screen-container is-inverted':'flash-screen-container'\" >\n    <div [ngClass]=\"afterSomeTime1?'flash-screen-logo is-in':'flash-screen-logo'\" >\n        <span [ngClass]=\"afterSomeTime1?'is-in':''\" >Welcome To </span>\n          <div class=\"flash-logo-container\">\n              <angui-logo>{{textLogo}}</angui-logo>\n          </div>\n        <span [ngClass]=\"afterSomeTime1?'is-in':''\">AnguiFrame</span>\n    </div>\n    <div class=\"flash-screen-progress is-loading\"></div>\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-flash-screen/angui-flash-screen.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-flash-screen/angui-flash-screen.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AnguiFlashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiFlashScreenComponent", function() { return AnguiFlashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiFlashScreenComponent = /** @class */ (function () {
    function AnguiFlashScreenComponent() {
        this.textLogo = "<Angui/>";
        this.afterSomeTime1 = false;
    }
    AnguiFlashScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.afterSomeTime1 = true; }, 1000);
    };
    AnguiFlashScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-flash-screen',
            template: __webpack_require__(/*! ./angui-flash-screen.component.html */ "./src/app/an-gui-components/angui-flash-screen/angui-flash-screen.component.html"),
            styles: [__webpack_require__(/*! ./angui-flash-screen.component.css */ "./src/app/an-gui-components/angui-flash-screen/angui-flash-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiFlashScreenComponent);
    return AnguiFlashScreenComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-horizondal-line/angui-horizondal-line.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-horizondal-line/angui-horizondal-line.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizondal-line{\n    position: relative;\n    height: 1px;\n    background-color: #2196F3;\n    margin: 40px 10px;\n    display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktaG9yaXpvbmRhbC1saW5lL2FuZ3VpLWhvcml6b25kYWwtbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS1ob3Jpem9uZGFsLWxpbmUvYW5ndWktaG9yaXpvbmRhbC1saW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9yaXpvbmRhbC1saW5le1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICAgIG1hcmdpbjogNDBweCAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-horizondal-line/angui-horizondal-line.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-horizondal-line/angui-horizondal-line.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"horizondal-line\">\n\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-horizondal-line/angui-horizondal-line.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-horizondal-line/angui-horizondal-line.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AnguiHorizaondalLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiHorizaondalLineComponent", function() { return AnguiHorizaondalLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiHorizaondalLineComponent = /** @class */ (function () {
    function AnguiHorizaondalLineComponent() {
    }
    AnguiHorizaondalLineComponent.prototype.ngOnInit = function () {
    };
    AnguiHorizaondalLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-horizondal-line',
            template: __webpack_require__(/*! ./angui-horizondal-line.component.html */ "./src/app/an-gui-components/angui-horizondal-line/angui-horizondal-line.component.html"),
            styles: [__webpack_require__(/*! ./angui-horizondal-line.component.css */ "./src/app/an-gui-components/angui-horizondal-line/angui-horizondal-line.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiHorizaondalLineComponent);
    return AnguiHorizaondalLineComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-hover-card-list/angui-hover-card-list.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-hover-card-list/angui-hover-card-list.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLWhvdmVyLWNhcmQtbGlzdC9hbmd1aS1ob3Zlci1jYXJkLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-hover-card-list/angui-hover-card-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-hover-card-list/angui-hover-card-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angui-hover-card-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-hover-card-list/angui-hover-card-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-hover-card-list/angui-hover-card-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AnguiHoverCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiHoverCardListComponent", function() { return AnguiHoverCardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiHoverCardListComponent = /** @class */ (function () {
    function AnguiHoverCardListComponent() {
    }
    AnguiHoverCardListComponent.prototype.ngOnInit = function () {
    };
    AnguiHoverCardListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angui-hover-card-list',
            template: __webpack_require__(/*! ./angui-hover-card-list.component.html */ "./src/app/an-gui-components/angui-hover-card-list/angui-hover-card-list.component.html"),
            styles: [__webpack_require__(/*! ./angui-hover-card-list.component.css */ "./src/app/an-gui-components/angui-hover-card-list/angui-hover-card-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiHoverCardListComponent);
    return AnguiHoverCardListComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-input/angui-input.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-input/angui-input.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    -webkit-tap-highlight-color: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    -webkit-tap-highlight-color: transparent;\n    -ms-tap-highlight-color: transparent;\n    -khtml-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n\n}\n\n.input-container{\n    padding: 10px 5px;\n        height:90px;\n}\n\n.input-box {\n    color: grey;\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 16px;\n    padding:8px;\n    display: inline-block;\n    outline: none;\n    /* margin:8px; */\n    height:20px;\n    min-width:100px;\n    width:100%;\n    /* border:1px solid #cccccc; */\n    /* border-radius: 4px; */\n    background-color: #FFFFFF;\n    border: 1.5px solid rgb(137, 144, 148); \n}\n\n.input-box.no-border{\n    /* padding-left:0px; */\n    border:none; \n    padding-left: 0px;\n    border-bottom: 1.5px solid rgb(137, 144, 148); \n}\n\n.input-name-feild{\n    color: rgb(137, 144, 148);\n    /* color:rgb(207, 201, 201); */\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 3px;\n    padding: 8px 10px;\n        min-width: 100px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.input-box::-webkit-input-placeholder{\n    color: grey;\n    font-family: roboto;\n    font-size: 14px;\n    letter-spacing: 1px;\n    line-height: 16px;\n}\n\n.input-box::-moz-placeholder{\n    color: grey;\n    font-family: roboto;\n    font-size: 14px;\n    letter-spacing: 1px;\n    line-height: 16px;\n}\n\n.input-box::-ms-input-placeholder{\n    color: grey;\n    font-family: roboto;\n    font-size: 14px;\n    letter-spacing: 1px;\n    line-height: 16px;\n}\n\n.input-box::placeholder{\n    color: grey;\n    font-family: roboto;\n    font-size: 14px;\n    letter-spacing: 1px;\n    line-height: 16px;\n}\n\n.input-box.error{\n    /* color:red; */\n    border:2px solid red;\n    border-bottom-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    /* transition: border .5s cubic-bezier(0.25, 0.1, 0.38, 0.55), border-color .5s ease; */\n}\n\n.input-box.no-border.error{\n    /* color:red; */\n    border:none;\n    border-bottom:2px solid red!important;\n    border-bottom-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    margin-right: 0px;\n    /* transition: border-bottom .5s cubic-bezier(0.25, 0.1, 0.38, 0.55), border-color .5s ease; */\n}\n\n.input-box.success{\n    /* color:rgb(8, 153, 8); */\n    border:2px solid rgb(8, 153, 8);\n    border-bottom-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    /* transition: border .5s cubic-bezier(0.25, 0.1, 0.38, 0.55), border-color .5s ease; */\n}\n\n.input-box.no-border.success{\n    /* color:rgb(8, 153, 8); */\n    border:none;\n    border-bottom:2px solid rgb(8, 153, 8) !important;\n    border-bottom-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    margin-right: 0px;\n    /* transition: border-bottom .5s cubic-bezier(0.25, 0.1, 0.38, 0.55), border-color .5s ease; */\n\n}\n\n.validation-msg-area{\n    display: none;\n    font-family: roboto;\n    font-size: 14px;\n    letter-spacing: 1px;\n    line-height: 12px;\n    padding: 8px 0px;\n    word-break: break-word;\n    word-wrap: break-word;\n}\n\n.validation-msg-area.error{\n    display: block;\n    color:red;\n    min-height:20px;\n}\n\n.validation-msg-area.success{\n    display: block;\n    color:rgb(5, 197, 5);\n    min-height:20px;\n}\n\n.validation-msg-area.success:before{\n    color:rgb(5, 197, 5);\n    content:url('tick-success.ico');\n    position: relative;\n\n}\n\n.validation-msg-area.error:before{\n    color:red;\n    top:2px;\n    content:url('error-cross.ico');\n    position: relative;\n\n}\n\n.inline-text{\n    display: inline-block;\n    float:left;\n    height: 30px;\n}\n\n.inline-text-input-container{\n    display: flex;\n    /* padding: 0px 5px; */\n    flex-grow: 1;\n    align-items: baseline;\n\n}\n\n.inline-text-input{\n    flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktaW5wdXQvYW5ndWktaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyw0QkFBNEIsQ0FBQyxnQkFBZ0I7SUFDN0MsMEJBQTBCLENBQUMsWUFBWSxDQUNaLG9CQUFvQjtPQUM1Qyx1QkFBdUIsQ0FBQyxhQUFhO1FBQ3BDLHNCQUFzQixDQUFDLDRCQUE0QjtZQUMvQyxrQkFBa0IsQ0FBQztrRUFDbUM7SUFDOUQseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyx3Q0FBd0M7SUFDeEMsc0NBQXNDOztDQUV6Qzs7QUFFRDtJQUNJLGtCQUFrQjtRQUNkLFlBQVk7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix1Q0FBdUM7Q0FDMUM7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw4Q0FBOEM7Q0FDakQ7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7UUFDZCxpQkFBaUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckI7O0FBTkQ7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCOztBQU5EO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQjs7QUFORDtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0Isd0ZBQXdGO0NBQzNGOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsK0ZBQStGO0NBQ2xHOztBQUVEO0lBQ0ksMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLHdGQUF3RjtDQUMzRjs7QUFFRDtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osa0RBQWtEO0lBQ2xELGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLCtGQUErRjs7Q0FFbEc7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixnQ0FBc0Q7SUFDdEQsbUJBQW1COztDQUV0Qjs7QUFFRDtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsK0JBQXFEO0lBQ3JELG1CQUFtQjs7Q0FFdEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7O0NBRXpCOztBQUNEO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLWlucHV0L2FuZ3VpLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogbm9uZTtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtbXMtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLWtodG1sLXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tb3otdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbn1cblxuLmlucHV0LWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgaGVpZ2h0OjkwcHg7XG59XG5cbi5pbnB1dC1ib3gge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZzo4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgLyogbWFyZ2luOjhweDsgKi9cbiAgICBoZWlnaHQ6MjBweDtcbiAgICBtaW4td2lkdGg6MTAwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICAvKiBib3JkZXI6MXB4IHNvbGlkICNjY2NjY2M7ICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2IoMTM3LCAxNDQsIDE0OCk7IFxufVxuXG4uaW5wdXQtYm94Lm5vLWJvcmRlcntcbiAgICAvKiBwYWRkaW5nLWxlZnQ6MHB4OyAqL1xuICAgIGJvcmRlcjpub25lOyBcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCByZ2IoMTM3LCAxNDQsIDE0OCk7IFxufVxuXG4uaW5wdXQtbmFtZS1mZWlsZHtcbiAgICBjb2xvcjogcmdiKDEzNywgMTQ0LCAxNDgpO1xuICAgIC8qIGNvbG9yOnJnYigyMDcsIDIwMSwgMjAxKTsgKi9cbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzcHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5pbnB1dC1ib3g6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5pbnB1dC1ib3guZXJyb3J7XG4gICAgLyogY29sb3I6cmVkOyAqL1xuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgIC8qIHRyYW5zaXRpb246IGJvcmRlciAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4zOCwgMC41NSksIGJvcmRlci1jb2xvciAuNXMgZWFzZTsgKi9cbn1cblxuLmlucHV0LWJveC5uby1ib3JkZXIuZXJyb3J7XG4gICAgLyogY29sb3I6cmVkOyAqL1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHJlZCFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgLyogdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4zOCwgMC41NSksIGJvcmRlci1jb2xvciAuNXMgZWFzZTsgKi9cbn1cblxuLmlucHV0LWJveC5zdWNjZXNze1xuICAgIC8qIGNvbG9yOnJnYig4LCAxNTMsIDgpOyAqL1xuICAgIGJvcmRlcjoycHggc29saWQgcmdiKDgsIDE1MywgOCk7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgLyogdHJhbnNpdGlvbjogYm9yZGVyIC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjM4LCAwLjU1KSwgYm9yZGVyLWNvbG9yIC41cyBlYXNlOyAqL1xufVxuXG4uaW5wdXQtYm94Lm5vLWJvcmRlci5zdWNjZXNze1xuICAgIC8qIGNvbG9yOnJnYig4LCAxNTMsIDgpOyAqL1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHJnYig4LCAxNTMsIDgpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgLyogdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4zOCwgMC41NSksIGJvcmRlci1jb2xvciAuNXMgZWFzZTsgKi9cblxufVxuXG4udmFsaWRhdGlvbi1tc2ctYXJlYXtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnZhbGlkYXRpb24tbXNnLWFyZWEuZXJyb3J7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6cmVkO1xuICAgIG1pbi1oZWlnaHQ6MjBweDtcbn1cblxuLnZhbGlkYXRpb24tbXNnLWFyZWEuc3VjY2Vzc3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjpyZ2IoNSwgMTk3LCA1KTtcbiAgICBtaW4taGVpZ2h0OjIwcHg7XG59XG5cbi52YWxpZGF0aW9uLW1zZy1hcmVhLnN1Y2Nlc3M6YmVmb3Jle1xuICAgIGNvbG9yOnJnYig1LCAxOTcsIDUpO1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdGljay1zdWNjZXNzLmljbycpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuXG4udmFsaWRhdGlvbi1tc2ctYXJlYS5lcnJvcjpiZWZvcmV7XG4gICAgY29sb3I6cmVkO1xuICAgIHRvcDoycHg7XG4gICAgY29udGVudDp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9lcnJvci1jcm9zcy5pY28nKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cblxuLmlubGluZS10ZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDpsZWZ0O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmlubGluZS10ZXh0LWlucHV0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8qIHBhZGRpbmc6IDBweCA1cHg7ICovXG4gICAgZmxleC1ncm93OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblxufVxuLmlubGluZS10ZXh0LWlucHV0e1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-input/angui-input.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-input/angui-input.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  [ngClass] = \"inlineInputName?'inline-text-input-container':'input-container'\">\n    <div [style.min-width.px] = \"inputNameFeildWidth\" [style.text-align] = \"inputNameAlign\"\n     [ngClass] = \"inlineInputName?'input-name-feild inline-text':'input-name-feild'\" >\n      {{inputName}}\n    </div>\n    <div [ngClass] = \"inlineInputName?'inline-text inline-text-input':''\"  style=\"display: flex;\n    flex-wrap: wrap;\n    flex-grow: 1;margin: 0px 10px;\">\n        <input [ngClass] = \"getClassName()\" [value]=\"value\" [(ngModel)] = \"value\" (keyup)=\"onKeyup($event)\" [placeholder] = \"placeholder\" />\n        <div [ngClass] = \"getValidationClassName()\">\n          {{validationMessage}}\n        </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-input/angui-input.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-input/angui-input.component.ts ***!
  \************************************************************************/
/*! exports provided: AnguiInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiInputComponent", function() { return AnguiInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiInputComponent = /** @class */ (function () {
    function AnguiInputComponent() {
        this.validationMessage = "";
        this.inputName = "";
        this.inlineInputName = false;
        this.inputNameFeildWidth = "100";
        this.placeholder = "Enter a value";
        this.noBorder = false;
        this.validationFailed = false;
        this.validationSuccess = false;
        this.onKeyupValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputNameAlign = '';
    }
    AnguiInputComponent.prototype.ngOnInit = function () {
    };
    AnguiInputComponent.prototype.getClassName = function () {
        var className = "input-box";
        this.noBorder ? className += ' no-border ' : className += '';
        this.validationFailed ? className += ' error ' : className += '';
        this.validationSuccess ? className += ' success ' : className += '';
        return className;
    };
    AnguiInputComponent.prototype.getValidationClassName = function () {
        var className = "validation-msg-area";
        this.validationFailed ? className += ' error ' : className += '';
        this.validationSuccess ? className += ' success ' : className += '';
        return className;
    };
    AnguiInputComponent.prototype.onKeyup = function (event) {
        this.value = event.target.value;
        this.onKeyupValue.emit({ inputEvent: event, value: this.value });
    };
    AnguiInputComponent.prototype.getAlingment = function () {
        console.log(this.inputNameAlign);
        var alingment = 'left';
        this.inputNameAlign == 'center' ? alingment = 'center' : alingment = 'left';
        this.inputNameAlign == 'right' ? alingment = 'right' : alingment = 'left';
        return alingment;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiInputComponent.prototype, "maxLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiInputComponent.prototype, "minLength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiInputComponent.prototype, "validationMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiInputComponent.prototype, "inputName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiInputComponent.prototype, "inlineInputName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiInputComponent.prototype, "inputNameFeildWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiInputComponent.prototype, "noBorder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiInputComponent.prototype, "validationFailed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiInputComponent.prototype, "validationSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiInputComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AnguiInputComponent.prototype, "onKeyupValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiInputComponent.prototype, "inputNameAlign", void 0);
    AnguiInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-input',
            template: __webpack_require__(/*! ./angui-input.component.html */ "./src/app/an-gui-components/angui-input/angui-input.component.html"),
            styles: [__webpack_require__(/*! ./angui-input.component.css */ "./src/app/an-gui-components/angui-input/angui-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiInputComponent);
    return AnguiInputComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-jumbo-text-animation/angui-jumbo-text-animation.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-jumbo-text-animation/angui-jumbo-text-animation.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .body_elem {\n    margin: 0px;\n    text-align: center;\n    color: #fff;\n    font-family: 'Roboto';\n    font-size: 36px;\n    font-weight: 100;\n    height: 100vh;\n    width: 100vw;\n    position: relative;\n    overflow: hidden;\n    background-color: cadetblue;\n}\n.padding-top{\n    padding-top: 43vh;\n}\n.dropping-texts {\n    display: inline-block;\n    width: 180px;\n    text-align: left;\n    height: 36px;\n    vertical-align: -2px;\n}\n.dropping-texts > div {\n    font-size: 0px;\n    opacity: 0;\n    margin-left: -30px;\n    position: absolute;\n    font-weight: 300;\n    box-shadow: 0px 60px 25px -20px rgba(0, 0, 0, 0.5);\n}\n.dropping-texts > div:nth-child(1) {\n    -webkit-animation: roll 5s linear infinite 0s;\n            animation: roll 5s linear infinite 0s;\n}\n.dropping-texts > div:nth-child(2) {\n    -webkit-animation: roll 5s linear infinite 1s;\n            animation: roll 5s linear infinite 1s;\n}\n.dropping-texts > div:nth-child(3) {\n    -webkit-animation: roll 5s linear infinite 2s;\n            animation: roll 5s linear infinite 2s;\n}\n.dropping-texts > div:nth-child(4) {\n    -webkit-animation: roll2 5s linear infinite 3s;\n            animation: roll2 5s linear infinite 3s;\n}\n@-webkit-keyframes roll {\n    0% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(-25deg);\n   }\n    3% {\n        opacity: 1;\n        transform: rotate(0deg);\n   }\n    5% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n   }\n    20% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n        transform: rotate(0deg);\n   }\n    27% {\n        font-size: 0px;\n        opacity: 0.5;\n        margin-left: 20px;\n        margin-top: 100px;\n   }\n    100% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(15deg);\n   }\n}\n@keyframes roll {\n    0% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(-25deg);\n   }\n    3% {\n        opacity: 1;\n        transform: rotate(0deg);\n   }\n    5% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n   }\n    20% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n        transform: rotate(0deg);\n   }\n    27% {\n        font-size: 0px;\n        opacity: 0.5;\n        margin-left: 20px;\n        margin-top: 100px;\n   }\n    100% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(15deg);\n   }\n}\n@-webkit-keyframes roll2 {\n    0% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(-25deg);\n   }\n    3% {\n        opacity: 1;\n        transform: rotate(0deg);\n   }\n    5% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n   }\n    30% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n        transform: rotate(0deg);\n   }\n    37% {\n        font-size: 1500px;\n        opacity: 0;\n        margin-left: -1000px;\n        margin-top: -800px;\n   }\n    100% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(15deg);\n   }\n}\n@keyframes roll2 {\n    0% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(-25deg);\n   }\n    3% {\n        opacity: 1;\n        transform: rotate(0deg);\n   }\n    5% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n   }\n    30% {\n        font-size: inherit;\n        opacity: 1;\n        margin-left: 0px;\n        margin-top: 0px;\n        transform: rotate(0deg);\n   }\n    37% {\n        font-size: 1500px;\n        opacity: 0;\n        margin-left: -1000px;\n        margin-top: -800px;\n   }\n    100% {\n        font-size: 0px;\n        opacity: 0;\n        margin-left: -30px;\n        margin-top: 0px;\n        transform: rotate(15deg);\n   }\n}\n/* *************************************************** */\n.main-content {\n    background: linear-gradient(to bottom, #053777 0%, #00659b 100%);\n    height: 100vh;\n    position: relative;\n    text-align: center;\n    width: 100%;\n}\n.main-content h1 {\n    -webkit-animation: 2s explode_title 1;\n            animation: 2s explode_title 1;\n    font-family: \"Raleway\";\n    font-size: 24px;\n    font-weight: 400;\n    position: absolute;\n    text-transform: uppercase;\n    top: 45%;\n    transform: translate3d(0, 0, 0);\n    width: 100%;\n}\n.main-content .bounced-word {\n    color: white;\n    display: block;\n    font-family: \"Titillium Web\";\n    font-size: 16px;\n    font-weight: 600;\n    position: absolute;\n    text-align: center;\n    text-transform: uppercase;\n    top: 56%;\n    transform: translate3d(0, -200px, 0);\n    width: 100%;\n}\n.main-content .anim_1 {\n    -webkit-animation: 3s bounced-word 1, 8s hide 1;\n            animation: 3s bounced-word 1, 8s hide 1;\n}\n.main-content .anim_2 {\n    -webkit-animation: 2s bounced-word infinite, 8s hidetwo infinite;\n            animation: 2s bounced-word infinite, 8s hidetwo infinite;\n}\n.main-content .anim_3 {\n    -webkit-animation: 2s bounced-word infinite, 8s hidethree infinite;\n            animation: 2s bounced-word infinite, 8s hidethree infinite;\n}\n.main-content .anim_4 {\n    -webkit-animation: 2s bounced-word infinite, 8s hidefour infinite;\n            animation: 2s bounced-word infinite, 8s hidefour infinite;\n}\n@-webkit-keyframes explode_title {\n    10% {\n        transform: scaleY(0.2);\n        transform-origin: 0 bottom 0;\n   }\n    20% {\n        transform: scaleY(1.3);\n        transform-origin: 0 bottom 0;\n   }\n    30% {\n        transform: scaleY(0.7);\n        transform-origin: 0 bottom 0;\n   }\n    40% {\n        transform: scaleY(1);\n        transform-origin: 0 bottom 0;\n   }\n    100% {\n        transform: scaleY(1);\n        transform-origin: 0 bottom 0;\n   }\n}\n@keyframes explode_title {\n    10% {\n        transform: scaleY(0.2);\n        transform-origin: 0 bottom 0;\n   }\n    20% {\n        transform: scaleY(1.3);\n        transform-origin: 0 bottom 0;\n   }\n    30% {\n        transform: scaleY(0.7);\n        transform-origin: 0 bottom 0;\n   }\n    40% {\n        transform: scaleY(1);\n        transform-origin: 0 bottom 0;\n   }\n    100% {\n        transform: scaleY(1);\n        transform-origin: 0 bottom 0;\n   }\n}\n@-webkit-keyframes bounced-word {\n    8% {\n        transform: translate3d(0, -45px, 0) scaleY(0.4);\n        transform-origin: left bottom 0;\n   }\n    25% {\n        transform: translate3d(0, -110px, 0) scaleY(1.4);\n   }\n    40% {\n        transform: translate3d(0, 0, 0) scaleY(0.6);\n        transform-origin: left bottom 0;\n   }\n    50% {\n        transform: translate3d(0, 0, 0) scaleY(1.2);\n        transform-origin: left bottom 0;\n   }\n    60% {\n        transform: translate3d(0, 0, 0) scaleY(1);\n        transform-origin: left bottom 0;\n   }\n    80% {\n        opacity: 1;\n        transform: translate3d(0, 0, 0);\n   }\n    100% {\n        opacity: 0;\n        transform: translate3d(0, 50px, 0);\n   }\n}\n@keyframes bounced-word {\n    8% {\n        transform: translate3d(0, -45px, 0) scaleY(0.4);\n        transform-origin: left bottom 0;\n   }\n    25% {\n        transform: translate3d(0, -110px, 0) scaleY(1.4);\n   }\n    40% {\n        transform: translate3d(0, 0, 0) scaleY(0.6);\n        transform-origin: left bottom 0;\n   }\n    50% {\n        transform: translate3d(0, 0, 0) scaleY(1.2);\n        transform-origin: left bottom 0;\n   }\n    60% {\n        transform: translate3d(0, 0, 0) scaleY(1);\n        transform-origin: left bottom 0;\n   }\n    80% {\n        opacity: 1;\n        transform: translate3d(0, 0, 0);\n   }\n    100% {\n        opacity: 0;\n        transform: translate3d(0, 50px, 0);\n   }\n}\n@-webkit-keyframes hide {\n    0%, 24% {\n        visibility: visible;\n   }\n    25%, 50% {\n        visibility: hidden;\n   }\n    50%, 75% {\n        visibility: hidden;\n   }\n    75%, 100% {\n        visibility: hidden;\n   }\n}\n@keyframes hide {\n    0%, 24% {\n        visibility: visible;\n   }\n    25%, 50% {\n        visibility: hidden;\n   }\n    50%, 75% {\n        visibility: hidden;\n   }\n    75%, 100% {\n        visibility: hidden;\n   }\n}\n@-webkit-keyframes hidetwo {\n    0%, 25% {\n        visibility: hidden;\n   }\n    26%, 49% {\n        visibility: visible;\n   }\n    50%, 75% {\n        visibility: hidden;\n   }\n    75%, 100% {\n        visibility: hidden;\n   }\n}\n@keyframes hidetwo {\n    0%, 25% {\n        visibility: hidden;\n   }\n    26%, 49% {\n        visibility: visible;\n   }\n    50%, 75% {\n        visibility: hidden;\n   }\n    75%, 100% {\n        visibility: hidden;\n   }\n}\n@-webkit-keyframes hidethree {\n    0%, 25% {\n        visibility: hidden;\n   }\n    25%, 50% {\n        visibility: hidden;\n   }\n    51%, 74% {\n        visibility: visible;\n   }\n    75%, 100% {\n        visibility: hidden;\n   }\n}\n@keyframes hidethree {\n    0%, 25% {\n        visibility: hidden;\n   }\n    25%, 50% {\n        visibility: hidden;\n   }\n    51%, 74% {\n        visibility: visible;\n   }\n    75%, 100% {\n        visibility: hidden;\n   }\n}\n@-webkit-keyframes hidefour {\n    0%, 25% {\n        visibility: hidden;\n   }\n    25%, 50% {\n        visibility: hidden;\n   }\n    50%, 75% {\n        visibility: hidden;\n   }\n    76%, 100% {\n        visibility: visible;\n   }\n}\n@keyframes hidefour {\n    0%, 25% {\n        visibility: hidden;\n   }\n    25%, 50% {\n        visibility: hidden;\n   }\n    50%, 75% {\n        visibility: hidden;\n   }\n    76%, 100% {\n        visibility: visible;\n   }\n}\n/* *************************************************** */\n.home_header {\n\tposition:absolute;\n\twidth:100%;\n\tz-index:99;\n\tcolor:#000;\n\ttext-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\n}\n.home_header_on {\n\tz-index:100;\n}\n.home_header strong {\n\tcolor: white;\n}\n.home_header span, .home_header strong {\n\tposition:relative;\n\ttop:-50px;\n}\n.home_header_on *:nth-child(1) {\n\t top: 0;\n\ttransition: top .6s ease-in-out;\n}\n.home_header_on *:nth-child(2) {\n\ttop: 0;\n\ttransition: top .6s ease-in-out .15s;\n}\n.home_header_on *:nth-child(3) {\n\ttop: 0;\n\ttransition: top .6s ease-in-out .3s;\n}\n.home_header_out *:nth-child(1) {\n\ttop: 50px;\n\t-webkit-transition: top .6s ease-in-out;\n\t-webkit-transition: top .6s ease-in-out;\n\t-moz-transition: top .6s ease-in-out;\n}\n.home_header_out *:nth-child(2) {\n\ttop: 50px;\n\ttransition: top .6s ease-in-out .15s;\n}\n.home_header_out *:nth-child(3) {\n\ttop: 50px;\n\ttransition: top .6s ease-in-out .3s;\n}\n/* *************************************************** */\n.container{\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 100%;\n  }\n.container span{\n    /* text-transform: uppercase; */\n    display: block;\n  }\n.text1{\n    color: white;\n    font-size: 60px;\n    font-weight: 700;\n    letter-spacing: 8px;\n    margin-bottom: 20px;\n    position: relative;\n    -webkit-animation: text 2.5s 1;\n            animation: text 2.5s 1;\n  }\n.text2{\n    font-size: 30px;\n    color: white;\n    -webkit-animation: text2 2.5s 1;\n            animation: text2 2.5s 1;\n  }\n@-webkit-keyframes text {\n    0%{\n      color: transparent;\n      margin-bottom: -40px;\n    }\n    30%{\n      letter-spacing: 25px;\n      margin-bottom: -40px;\n    }\n  }\n@keyframes text {\n    0%{\n      color: transparent;\n      margin-bottom: -40px;\n    }\n    30%{\n      letter-spacing: 25px;\n      margin-bottom: -40px;\n    }\n  }\n@-webkit-keyframes text2 {\n    0%{\n      color: transparent;\n    }\n    30%{\n        color: transparent;\n      }\n  }\n@keyframes text2 {\n    0%{\n      color: transparent;\n    }\n    30%{\n        color: transparent;\n      }\n  }\n/* *************************************************** */\n#text,\n    #shadow {\n        position: absolute;\n        margin: 0;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        font-size: 30px;\n        letter-spacing: 20px;\n        font-family: Bad Script;\n        color: #fff;\n    }\n#text {\n        color: #333\n    }\n#shadow {\n        text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;\n    }\n#glow {\n        -webkit-animation: neon1 linear infinite 2s;\n                animation: neon1 linear infinite 2s;\n        will-change: opacity;\n    }\n#blink {\n        -webkit-animation: blink linear infinite 2s;\n                animation: blink linear infinite 2s;\n    }\n@-webkit-keyframes neon1 {\n        20% {\n            opacity: 1;\n        }\n        80% {\n            opacity: 0.6;\n        }\n    }\n@keyframes neon1 {\n        20% {\n            opacity: 1;\n        }\n        80% {\n            opacity: 0.6;\n        }\n    }\n@-webkit-keyframes blink {\n        70% {\n            opacity: 1;\n        }\n        79% {\n            opacity: 0;\n        }\n        81% {\n            opacity: 1;\n        }\n        82% {\n            opacity: 0;\n        }\n        83% {\n            opacity: 1;\n        }\n        92% {\n            opacity: 0;\n        }\n        92.5% {\n            opacity: 1;\n        }\n    }\n@keyframes blink {\n        70% {\n            opacity: 1;\n        }\n        79% {\n            opacity: 0;\n        }\n        81% {\n            opacity: 1;\n        }\n        82% {\n            opacity: 0;\n        }\n        83% {\n            opacity: 1;\n        }\n        92% {\n            opacity: 0;\n        }\n        92.5% {\n            opacity: 1;\n        }\n    }\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktanVtYm8tdGV4dC1hbmltYXRpb24vYW5ndWktanVtYm8tdGV4dC1hbmltYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtREFBbUQ7Q0FDdEQ7QUFDRDtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7Q0FDekM7QUFDRDtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7Q0FDekM7QUFDRDtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7Q0FDekM7QUFDRDtJQUNJLCtDQUF1QztZQUF2Qyx1Q0FBdUM7Q0FDMUM7QUFDRDtJQUNJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksV0FBVztRQUNYLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7Q0FDSDtBQXRDRDtJQUNJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksV0FBVztRQUNYLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7Q0FDSDtBQUNEO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3QjtDQUNIO0FBdENEO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3QjtDQUNIO0FBQ0QseURBQXlEO0FBRXpEO0lBQ0ksaUVBQWlFO0lBQ2pFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksc0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxnREFBd0M7WUFBeEMsd0NBQXdDO0NBQzNDO0FBQ0Q7SUFDSSxpRUFBeUQ7WUFBekQseURBQXlEO0NBQzVEO0FBQ0Q7SUFDSSxtRUFBMkQ7WUFBM0QsMkRBQTJEO0NBQzlEO0FBQ0Q7SUFDSSxrRUFBMEQ7WUFBMUQsMERBQTBEO0NBQzdEO0FBQ0Q7SUFDSTtRQUNJLHVCQUF1QjtRQUN2Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLHVCQUF1QjtRQUN2Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLHVCQUF1QjtRQUN2Qiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQiw2QkFBNkI7SUFDakM7Q0FDSDtBQXJCRDtJQUNJO1FBQ0ksdUJBQXVCO1FBQ3ZCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLDZCQUE2QjtJQUNqQztDQUNIO0FBRUQ7SUFDSTtRQUNJLGdEQUFnRDtRQUNoRCxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGlEQUFpRDtJQUNyRDtJQUNBO1FBQ0ksNENBQTRDO1FBQzVDLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksNENBQTRDO1FBQzVDLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksMENBQTBDO1FBQzFDLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksV0FBVztRQUNYLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksV0FBVztRQUNYLG1DQUFtQztJQUN2QztDQUNIO0FBNUJEO0lBQ0k7UUFDSSxnREFBZ0Q7UUFDaEQsZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxpREFBaUQ7SUFDckQ7SUFDQTtRQUNJLDRDQUE0QztRQUM1QyxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLDRDQUE0QztRQUM1QyxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLDBDQUEwQztRQUMxQyxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLFdBQVc7UUFDWCxnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLFdBQVc7UUFDWCxtQ0FBbUM7SUFDdkM7Q0FDSDtBQUNEO0lBQ0k7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7Q0FDSDtBQWJEO0lBQ0k7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7Q0FDSDtBQUNEO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7Q0FDSDtBQWJEO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7Q0FDSDtBQUNEO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7Q0FDSDtBQWJEO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7Q0FDSDtBQUNEO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7Q0FDSDtBQWJEO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7Q0FDSDtBQUVELHlEQUF5RDtBQVl6RDtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsV0FBVztDQUNYLFdBQVc7Q0FDWCwwQ0FBMEM7Q0FDMUM7QUFDRDtDQUNDLFlBQVk7Q0FDWjtBQUFBO0NBQ0EsYUFBYTtDQUNiO0FBQUE7Q0FDQSxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWO0FBQUE7RUFDQyxPQUFPO0NBR1AsZ0NBQWdDO0NBQ2pDO0FBQUE7Q0FDQSxPQUFPO0NBR1AscUNBQXFDO0NBQ3JDO0FBQUE7Q0FDQSxPQUFPO0NBR1Asb0NBQW9DO0NBQ3BDO0FBQUE7Q0FDQSxVQUFVO0NBQ1Ysd0NBQXdDO0NBQ3hDLHdDQUF3QztDQUN4QyxxQ0FBcUM7Q0FDckM7QUFBQTtDQUNBLFVBQVU7Q0FHVixxQ0FBcUM7Q0FDckM7QUFBQTtDQUNBLFVBQVU7Q0FHVixvQ0FBb0M7Q0FDcEM7QUFFRCx5REFBeUQ7QUFRekQ7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLFlBQVk7R0FDYjtBQUNEO0lBQ0UsZ0NBQWdDO0lBQ2hDLGVBQWU7R0FDaEI7QUFDRDtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLCtCQUF1QjtZQUF2Qix1QkFBdUI7R0FDeEI7QUFDRDtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0NBQXdCO1lBQXhCLHdCQUF3QjtHQUN6QjtBQUVEO0lBQ0U7TUFDRSxtQkFBbUI7TUFDbkIscUJBQXFCO0tBQ3RCO0lBQ0Q7TUFDRSxxQkFBcUI7TUFDckIscUJBQXFCO0tBQ3RCO0dBQ0Y7QUFURDtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLHFCQUFxQjtLQUN0QjtJQUNEO01BQ0UscUJBQXFCO01BQ3JCLHFCQUFxQjtLQUN0QjtHQUNGO0FBRUQ7SUFDRTtNQUNFLG1CQUFtQjtLQUNwQjtJQUNEO1FBQ0ksbUJBQW1CO09BQ3BCO0dBQ0o7QUFQRDtJQUNFO01BQ0UsbUJBQW1CO0tBQ3BCO0lBQ0Q7UUFDSSxtQkFBbUI7T0FDcEI7R0FDSjtBQUNELHlEQUF5RDtBQWN6RDs7UUFFTSxtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLFNBQVM7UUFDVCxVQUFVO1FBQ1YsaUNBQWlDO1FBQ2pDLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLFlBQVk7S0FDZjtBQUVEO1FBQ0ksV0FBVztLQUNkO0FBRUQ7UUFDSSxzSUFBc0k7S0FDekk7QUFFRjtRQUNLLDRDQUFvQztnQkFBcEMsb0NBQW9DO1FBQ3BDLHFCQUFxQjtLQUN4QjtBQUVEO1FBQ0ksNENBQW9DO2dCQUFwQyxvQ0FBb0M7S0FDdkM7QUFHRDtRQUNJO1lBQ0ksV0FBVztTQUNkO1FBQ0Q7WUFDSSxhQUFhO1NBQ2hCO0tBQ0o7QUFQRDtRQUNJO1lBQ0ksV0FBVztTQUNkO1FBQ0Q7WUFDSSxhQUFhO1NBQ2hCO0tBQ0o7QUFHRDtRQUNJO1lBQ0ksV0FBVztTQUNkO1FBQ0Q7WUFDSSxXQUFXO1NBQ2Q7UUFDRDtZQUNJLFdBQVc7U0FDZDtRQUNEO1lBQ0ksV0FBVztTQUNkO1FBQ0Q7WUFDSSxXQUFXO1NBQ2Q7UUFDRDtZQUNJLFdBQVc7U0FDZDtRQUNEO1lBQ0ksV0FBVztTQUNkO0tBQ0o7QUF0QkQ7UUFDSTtZQUNJLFdBQVc7U0FDZDtRQUNEO1lBQ0ksV0FBVztTQUNkO1FBQ0Q7WUFDSSxXQUFXO1NBQ2Q7UUFDRDtZQUNJLFdBQVc7U0FDZDtRQUNEO1lBQ0ksV0FBVztTQUNkO1FBQ0Q7WUFDSSxXQUFXO1NBQ2Q7UUFDRDtZQUNJLFdBQVc7U0FDZDtLQUNKIiwiZmlsZSI6InNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktanVtYm8tdGV4dC1hbmltYXRpb24vYW5ndWktanVtYm8tdGV4dC1hbmltYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmJvZHlfZWxlbSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG59XG4ucGFkZGluZy10b3B7XG4gICAgcGFkZGluZy10b3A6IDQzdmg7XG59XG4uZHJvcHBpbmctdGV4dHMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IC0ycHg7XG59XG4uZHJvcHBpbmctdGV4dHMgPiBkaXYge1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGJveC1zaGFkb3c6IDBweCA2MHB4IDI1cHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmRyb3BwaW5nLXRleHRzID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uOiByb2xsIDVzIGxpbmVhciBpbmZpbml0ZSAwcztcbn1cbi5kcm9wcGluZy10ZXh0cyA+IGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbjogcm9sbCA1cyBsaW5lYXIgaW5maW5pdGUgMXM7XG59XG4uZHJvcHBpbmctdGV4dHMgPiBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb246IHJvbGwgNXMgbGluZWFyIGluZmluaXRlIDJzO1xufVxuLmRyb3BwaW5nLXRleHRzID4gZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uOiByb2xsMiA1cyBsaW5lYXIgaW5maW5pdGUgM3M7XG59XG5Aa2V5ZnJhbWVzIHJvbGwge1xuICAgIDAlIHtcbiAgICAgICAgZm9udC1zaXplOiAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjVkZWcpO1xuICAgfVxuICAgIDMlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICB9XG4gICAgNSUge1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgIH1cbiAgICAyMCUge1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICB9XG4gICAgMjclIHtcbiAgICAgICAgZm9udC1zaXplOiAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgfVxuICAgIDEwMCUge1xuICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbiAgIH1cbn1cbkBrZXlmcmFtZXMgcm9sbDIge1xuICAgIDAlIHtcbiAgICAgICAgZm9udC1zaXplOiAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjVkZWcpO1xuICAgfVxuICAgIDMlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICB9XG4gICAgNSUge1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgIH1cbiAgICAzMCUge1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICB9XG4gICAgMzclIHtcbiAgICAgICAgZm9udC1zaXplOiAxNTAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtODAwcHg7XG4gICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICAgfVxufVxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi5tYWluLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNTM3NzcgMCUsICMwMDY1OWIgMTAwJSk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm1haW4tY29udGVudCBoMSB7XG4gICAgYW5pbWF0aW9uOiAycyBleHBsb2RlX3RpdGxlIDE7XG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRvcDogNDUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi1jb250ZW50IC5ib3VuY2VkLXdvcmQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogXCJUaXRpbGxpdW0gV2ViXCI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRvcDogNTYlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMHB4LCAwKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5tYWluLWNvbnRlbnQgLmFuaW1fMSB7XG4gICAgYW5pbWF0aW9uOiAzcyBib3VuY2VkLXdvcmQgMSwgOHMgaGlkZSAxO1xufVxuLm1haW4tY29udGVudCAuYW5pbV8yIHtcbiAgICBhbmltYXRpb246IDJzIGJvdW5jZWQtd29yZCBpbmZpbml0ZSwgOHMgaGlkZXR3byBpbmZpbml0ZTtcbn1cbi5tYWluLWNvbnRlbnQgLmFuaW1fMyB7XG4gICAgYW5pbWF0aW9uOiAycyBib3VuY2VkLXdvcmQgaW5maW5pdGUsIDhzIGhpZGV0aHJlZSBpbmZpbml0ZTtcbn1cbi5tYWluLWNvbnRlbnQgLmFuaW1fNCB7XG4gICAgYW5pbWF0aW9uOiAycyBib3VuY2VkLXdvcmQgaW5maW5pdGUsIDhzIGhpZGVmb3VyIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBleHBsb2RlX3RpdGxlIHtcbiAgICAxMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjIpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIGJvdHRvbSAwO1xuICAgfVxuICAgIDIwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgYm90dG9tIDA7XG4gICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC43KTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCBib3R0b20gMDtcbiAgIH1cbiAgICA0MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCBib3R0b20gMDtcbiAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgYm90dG9tIDA7XG4gICB9XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlZC13b3JkIHtcbiAgICA4JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTQ1cHgsIDApIHNjYWxlWSgwLjQpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xuICAgfVxuICAgIDI1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTExMHB4LCAwKSBzY2FsZVkoMS40KTtcbiAgIH1cbiAgICA0MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlWSgwLjYpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbSAwO1xuICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGVZKDEuMik7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XG4gICB9XG4gICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZVkoMSk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tIDA7XG4gICB9XG4gICAgODAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MHB4LCAwKTtcbiAgIH1cbn1cbkBrZXlmcmFtZXMgaGlkZSB7XG4gICAgMCUsIDI0JSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICB9XG4gICAgMjUlLCA1MCUge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICB9XG4gICAgNTAlLCA3NSUge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICB9XG4gICAgNzUlLCAxMDAlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgfVxufVxuQGtleWZyYW1lcyBoaWRldHdvIHtcbiAgICAwJSwgMjUlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgfVxuICAgIDI2JSwgNDklIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgIH1cbiAgICA1MCUsIDc1JSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgIH1cbiAgICA3NSUsIDEwMCUge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICB9XG59XG5Aa2V5ZnJhbWVzIGhpZGV0aHJlZSB7XG4gICAgMCUsIDI1JSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgIH1cbiAgICAyNSUsIDUwJSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgIH1cbiAgICA1MSUsIDc0JSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICB9XG4gICAgNzUlLCAxMDAlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgfVxufVxuQGtleWZyYW1lcyBoaWRlZm91ciB7XG4gICAgMCUsIDI1JSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgIH1cbiAgICAyNSUsIDUwJSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgIH1cbiAgICA1MCUsIDc1JSB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgIH1cbiAgICA3NiUsIDEwMCUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgfVxufVxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG4uaG9tZV9oZWFkZXIge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0d2lkdGg6MTAwJTtcblx0ei1pbmRleDo5OTtcblx0Y29sb3I6IzAwMDtcblx0dGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uaG9tZV9oZWFkZXJfb24ge1xuXHR6LWluZGV4OjEwMDtcbn0uaG9tZV9oZWFkZXIgc3Ryb25nIHtcblx0Y29sb3I6IHdoaXRlO1xufS5ob21lX2hlYWRlciBzcGFuLCAuaG9tZV9oZWFkZXIgc3Ryb25nIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHRvcDotNTBweDtcbn0uaG9tZV9oZWFkZXJfb24gKjpudGgtY2hpbGQoMSkge1xuXHQgdG9wOiAwO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IHRvcCAuNnMgZWFzZS1pbi1vdXQ7XG5cdC1tb3otdHJhbnNpdGlvbjogdG9wIC42cyBlYXNlLWluLW91dDtcblx0IHRyYW5zaXRpb246IHRvcCAuNnMgZWFzZS1pbi1vdXQ7XG59LmhvbWVfaGVhZGVyX29uICo6bnRoLWNoaWxkKDIpIHtcblx0dG9wOiAwO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IHRvcCAuNnMgZWFzZS1pbi1vdXQgLjE1cztcblx0LW1vei10cmFuc2l0aW9uOiB0b3AgLjZzIGVhc2UtaW4tb3V0IC4xNXM7XG5cdHRyYW5zaXRpb246IHRvcCAuNnMgZWFzZS1pbi1vdXQgLjE1cztcbn0uaG9tZV9oZWFkZXJfb24gKjpudGgtY2hpbGQoMykge1xuXHR0b3A6IDA7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC42cyBlYXNlLWluLW91dCAuM3M7XG5cdC1tb3otdHJhbnNpdGlvbjogdG9wIC42cyBlYXNlLWluLW91dCAuM3M7XG5cdHRyYW5zaXRpb246IHRvcCAuNnMgZWFzZS1pbi1vdXQgLjNzO1xufS5ob21lX2hlYWRlcl9vdXQgKjpudGgtY2hpbGQoMSkge1xuXHR0b3A6IDUwcHg7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC42cyBlYXNlLWluLW91dDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgLjZzIGVhc2UtaW4tb3V0O1xuXHQtbW96LXRyYW5zaXRpb246IHRvcCAuNnMgZWFzZS1pbi1vdXQ7XG59LmhvbWVfaGVhZGVyX291dCAqOm50aC1jaGlsZCgyKSB7XG5cdHRvcDogNTBweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgLjZzIGVhc2UtaW4tb3V0IC4xNXM7XG5cdC1tb3otdHJhbnNpdGlvbjogdG9wIC42cyBlYXNlLWluLW91dCAuMTVzO1xuXHR0cmFuc2l0aW9uOiB0b3AgLjZzIGVhc2UtaW4tb3V0IC4xNXM7XG59LmhvbWVfaGVhZGVyX291dCAqOm50aC1jaGlsZCgzKSB7XG5cdHRvcDogNTBweDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgLjZzIGVhc2UtaW4tb3V0IC4zcztcblx0LW1vei10cmFuc2l0aW9uOiB0b3AgLjZzIGVhc2UtaW4tb3V0IC4zcztcblx0dHJhbnNpdGlvbjogdG9wIC42cyBlYXNlLWluLW91dCAuM3M7XG59XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5cblxuXG5cblxuXG4uY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWluZXIgc3BhbntcbiAgICAvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC50ZXh0MXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbmltYXRpb246IHRleHQgMi41cyAxO1xuICB9XG4gIC50ZXh0MntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGFuaW1hdGlvbjogdGV4dDIgMi41cyAxO1xuICB9XG5cbiAgQGtleWZyYW1lcyB0ZXh0IHtcbiAgICAwJXtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xuICAgIH1cbiAgICAzMCV7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMjVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgdGV4dDIge1xuICAgIDAle1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAzMCV7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgfVxuICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAjdGV4dCxcbiAgICAjc2hhZG93IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogQmFkIFNjcmlwdDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgI3RleHQge1xuICAgICAgICBjb2xvcjogIzMzM1xuICAgIH1cblxuICAgICNzaGFkb3cge1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggI2ZmZiwgMCAwIDMwcHggI2ZmZiwgMCAwIDQwcHggIzIyOERGRiwgMCAwIDcwcHggIzIyOERGRiwgMCAwIDgwcHggIzIyOERGRiwgMCAwIDEwMHB4ICMyMjhERkYsIDAgMCAxNTBweCAjMjI4REZGO1xuICAgIH1cblxuICAgI2dsb3cge1xuICAgICAgICBhbmltYXRpb246IG5lb24xIGxpbmVhciBpbmZpbml0ZSAycztcbiAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgfVxuXG4gICAgI2JsaW5rIHtcbiAgICAgICAgYW5pbWF0aW9uOiBibGluayBsaW5lYXIgaW5maW5pdGUgMnM7XG4gICAgfVxuXG5cbiAgICBAa2V5ZnJhbWVzIG5lb24xIHtcbiAgICAgICAgMjAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgODAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICAgIDcwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIDc5JSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDgxJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIDgyJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDgzJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIDkyJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDkyLjUlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-jumbo-text-animation/angui-jumbo-text-animation.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-jumbo-text-animation/angui-jumbo-text-animation.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body_elem padding-top\" >\n    I am Experineced in\n    <div class=\"dropping-texts\">\n        <div>HTML/CSS</div>\n        <div>JavaScript</div>\n        <div>Angular</div>\n        <div>and Java</div>\n    </div>\n</div>\n<!--  ********************************** -->\n\n\n<div class=\"body_elem\">\n  <div class=\"main-content\">\n    <h1>WELCOME</h1>\n    <span class=\"bounced-word anim_1\">Thanks for visiting my profile</span>\n  </div>\n</div>\n<!--  ********************************** -->\n\n<div class=\"body_elem\" [id]=\"changingTextId\">\n  <div class=\"home_header\">\n    <strong>Spend</strong>\n    <span>your time with us</span>\n  </div>\n  <div class=\"home_header\">\n    <strong>Music</strong>\n    <span>you love only a click away </span>\n  </div>\n  <div class=\"home_header\">\n    <span>explore. listen.</span>\n    <strong>share</strong>\n  </div>\n</div>\n<!--  ********************************** -->\n\n<div class=\"body_elem\">\n  <div class=\"container\">\n    <span class=\"text1\">Welcome To</span>\n    <span class=\"text2\">AnguiFrame</span>\n  </div>\n</div>\n\n<!--  ********************************** -->\n<div class=\"body_elem\">\n\n  <p id=\"text\">AnguiFrame</p>\n   \n     <p id=\"shadow\">\n    <span id=\"glow\">Angui</span><span id=\"blink\">Frame</span>\n  </p>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-jumbo-text-animation/angui-jumbo-text-animation.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-jumbo-text-animation/angui-jumbo-text-animation.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AnguiJumboTextAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiJumboTextAnimationComponent", function() { return AnguiJumboTextAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiJumboTextAnimationComponent = /** @class */ (function () {
    function AnguiJumboTextAnimationComponent() {
        this.afterSomeTime1 = false;
        this.changingTextId = "changingText1";
        this.changingTextIndex = -1;
    }
    AnguiJumboTextAnimationComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.afterSomeTime1 = true; _this.callChangingText(0); }, 2000);
        var element = document.getElementById("changingTextId");
    };
    AnguiJumboTextAnimationComponent.prototype.callChangingText = function (i) {
        var _this = this;
        var textContainer = document.getElementById(this.changingTextId);
        var listOfChilds = textContainer.getElementsByClassName("home_header");
        listOfChilds[i].classList.add('home_header_on');
        setTimeout(function () {
            listOfChilds[i].classList.remove('home_header_on');
            i = i + 1;
            if (i == 3) {
                i = -1;
                i = i + 1;
            }
            _this.callChangingText(i);
        }, 3500);
    };
    AnguiJumboTextAnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-jumbo-text-animation',
            template: __webpack_require__(/*! ./angui-jumbo-text-animation.component.html */ "./src/app/an-gui-components/angui-jumbo-text-animation/angui-jumbo-text-animation.component.html"),
            styles: [__webpack_require__(/*! ./angui-jumbo-text-animation.component.css */ "./src/app/an-gui-components/angui-jumbo-text-animation/angui-jumbo-text-animation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiJumboTextAnimationComponent);
    return AnguiJumboTextAnimationComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-label/angui-label.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-label/angui-label.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    -webkit-tap-highlight-color: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    -webkit-tap-highlight-color: transparent;\n    -ms-tap-highlight-color: transparent;\n    -khtml-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n\n}\n.link-text {\n    color: rgb(7, 168, 248);\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 16px;\n    padding:8px;\n    display: inline-block;\n}\n.link-text.hover-underline {\n    min-width: 40px;\n}\n.link-text.hover-underline:hover {\n    /* text-decoration: underline; */\n    border-bottom: 1px solid rgb(7, 168, 248);\n    cursor:pointer; \n    padding-bottom: 7px;\n    color: rgb(11, 142, 207) !important;\n}\n.disabled{\n    cursor:none;\n    color: rgb(0, 5, 7) !important;\n    pointer-events: none;\n    opacity: .4;\n}\n.main-header {\t\n    display: flex;\n    color: rgb(57, 60, 64);\t\n    font-size: 35px;\t\n    font-weight: 300;\t\n    letter-spacing: 1px;\t\n    line-height: 41px;\n}\n.sub-header {\t\n    display: flex;\n    color: #393C40;\t\n    font-size: 26px;\t\n    font-weight: 300;\t\n    letter-spacing: 1px;\t\n    line-height: 30px;\n}\n.refresh-link:before{\n    content: \"\\21BB\";\n    color: rgb(11, 142, 207) !important;\n    transform: rotate(120deg);\n    position: relative;\n    display:inline-block;\n    padding:0px 10px;\n    font-size:22px;\n    cursor:pointer;\n}\n.previous-button-link:before{\n    color: rgb(11, 142, 207) !important;\n    content: \"\\22C1\";\n    transform: rotate(90deg);\n    padding:10px 5px;\n    top:2px;\n    position: relative;\n    display:inline-block;\n    font-size:22px;\n}\n.next-button-link:after{\n    color: rgb(11, 142, 207) !important;\n    content: \"\\22C1\";\n    transform: rotate(-90deg);\n    padding:10px 5px;\n    top:2px;\n    position: relative;\n    display:inline-block;\n    font-size:22px;\n    cursor:pointer;\n}\n.refresh-link,\n.add-button-link,\n.previous-button-link, \n.next-button-link{\n    cursor:pointer;\n}\n.add-button-link:hover,\n.previous-button-link:hover, \n.next-button-link:hover,\n.refresh-link:hover:hover,\n.icon-link:hover{\n    color: rgb(11, 142, 207) !important;\n}\n.add-button-link:before{\n    color: rgb(11, 142, 207) !important;\n    content: \"\\254B\";\n    font-weight: bold;\n    font-size:16px;\n    padding: 0px 10px;\n    display:inline-block;\n    cursor:pointer;\n}\n.icon-link{\n    display:inline-block;\n    cursor:pointer;\n}\n.icon-link:before{\n    font-weight: bold;\n    font-size:16px;\n    top:2px;\n    position: relative;\n    padding: 0px 10px;\n    cursor:pointer;\n    opacity: .6;\n\n}\n.icon-link.delete-button-link:before{\n    content:url('trash-icon.ico');\n}\n.icon-link.open-page-button-link:before{\n    content:url('open-page-icon.ico');\n}\n.icon-link.folder-button-link:before{\n    content:url('folder.ico');\n}\n.icon-link.galary-button-link:before{\n    content:url('galary.ico');\n}\n.icon-link.home-button-link:before{\n    content:url('home.ico');\n}\n.icon-link.download-button-link:before{\n    content:url('download.ico');\n}\n.icon-link.upload-button-link:before{\n    content:url('upload.ico');\n}\n.icon-link.pages-button-link:before{\n    content:url('pages.ico');\n}\n.icon-link.ordered-list-icon:before{\n    content:url('list-left.ico');\n}\n.icon-link.ordered-list-icon:hover::before{\n    content:url('list-down.ico');\n    top:5px;\n}\n.active.icon-link.ordered-list-icon:before{\n    content:url('list-down.ico');\n}\n.icon-link.like-icon:before{\n    content:url('like1.ico');\n    zoom: 1.4;\n    top: 6px;\n    opacity: .8;\n    padding-left:0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktbGFiZWwvYW5ndWktbGFiZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyw0QkFBNEIsQ0FBQyxnQkFBZ0I7SUFDN0MsMEJBQTBCLENBQUMsWUFBWSxDQUNaLG9CQUFvQjtPQUM1Qyx1QkFBdUIsQ0FBQyxhQUFhO1FBQ3BDLHNCQUFzQixDQUFDLDRCQUE0QjtZQUMvQyxrQkFBa0IsQ0FBQztrRUFDbUM7SUFDOUQseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyx3Q0FBd0M7SUFDeEMsc0NBQXNDOztDQUV6QztBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGlDQUFpQztJQUNqQywwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixvQ0FBb0M7Q0FDdkM7QUFFRDtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBS3BDLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUtqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFLakIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtDQUNsQjtBQUVEOzs7O0lBSUksZUFBZTtDQUNsQjtBQUVEOzs7OztJQUtJLG9DQUFvQztDQUN2QztBQUVEO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtDQUNsQjtBQUVEO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7O0NBRWY7QUFFRDtJQUNJLDhCQUFvRDtDQUN2RDtBQUVEO0lBQ0ksa0NBQXdEO0NBQzNEO0FBRUQ7SUFDSSwwQkFBZ0Q7Q0FDbkQ7QUFFRDtJQUNJLDBCQUFnRDtDQUNuRDtBQUVEO0lBQ0ksd0JBQThDO0NBQ2pEO0FBRUQ7SUFDSSw0QkFBa0Q7Q0FDckQ7QUFFRDtJQUNJLDBCQUFnRDtDQUNuRDtBQUVEO0lBQ0kseUJBQStDO0NBQ2xEO0FBRUQ7SUFDSSw2QkFBbUQ7Q0FDdEQ7QUFDRDtJQUNJLDZCQUFtRDtJQUNuRCxRQUFRO0NBQ1g7QUFDRDtJQUNJLDZCQUFtRDtDQUN0RDtBQUNEO0lBQ0kseUJBQStDO0lBQy9DLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLWxhYmVsL2FuZ3VpLWxhYmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogbm9uZTtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtbXMtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLWtodG1sLXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tb3otdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbn1cbi5saW5rLXRleHQge1xuICAgIGNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZzo4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmxpbmstdGV4dC5ob3Zlci11bmRlcmxpbmUge1xuICAgIG1pbi13aWR0aDogNDBweDtcbn1cbi5saW5rLXRleHQuaG92ZXItdW5kZXJsaW5lOmhvdmVyIHtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDcsIDE2OCwgMjQ4KTtcbiAgICBjdXJzb3I6cG9pbnRlcjsgXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICBjb2xvcjogcmdiKDExLCAxNDIsIDIwNykgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGVke1xuICAgIGN1cnNvcjpub25lO1xuICAgIGNvbG9yOiByZ2IoMCwgNSwgNykgIWltcG9ydGFudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAuNDtcbn1cblxuLm1haW4taGVhZGVyIHtcdFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHJnYig1NywgNjAsIDY0KTtcdFxuICAgIGZvbnQtc2l6ZTogMzVweDtcdFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHRcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1x0XG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XG59XG5cbi5zdWItaGVhZGVyIHtcdFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICMzOTNDNDA7XHRcbiAgICBmb250LXNpemU6IDI2cHg7XHRcbiAgICBmb250LXdlaWdodDogMzAwO1x0XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcdFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4ucmVmcmVzaC1saW5rOmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlxcMjFCQlwiO1xuICAgIGNvbG9yOiByZ2IoMTEsIDE0MiwgMjA3KSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzowcHggMTBweDtcbiAgICBmb250LXNpemU6MjJweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLnByZXZpb3VzLWJ1dHRvbi1saW5rOmJlZm9yZXtcbiAgICBjb2xvcjogcmdiKDExLCAxNDIsIDIwNykgIWltcG9ydGFudDtcbiAgICBjb250ZW50OiBcIlxcMjJDMVwiO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzoxMHB4IDVweDtcbiAgICB0b3A6MnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6MjJweDtcbn1cblxuLm5leHQtYnV0dG9uLWxpbms6YWZ0ZXJ7XG4gICAgY29sb3I6IHJnYigxMSwgMTQyLCAyMDcpICFpbXBvcnRhbnQ7XG4gICAgY29udGVudDogXCJcXDIyQzFcIjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgcGFkZGluZzoxMHB4IDVweDtcbiAgICB0b3A6MnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6MjJweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLnJlZnJlc2gtbGluayxcbi5hZGQtYnV0dG9uLWxpbmssXG4ucHJldmlvdXMtYnV0dG9uLWxpbmssIFxuLm5leHQtYnV0dG9uLWxpbmt7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi5hZGQtYnV0dG9uLWxpbms6aG92ZXIsXG4ucHJldmlvdXMtYnV0dG9uLWxpbms6aG92ZXIsIFxuLm5leHQtYnV0dG9uLWxpbms6aG92ZXIsXG4ucmVmcmVzaC1saW5rOmhvdmVyOmhvdmVyLFxuLmljb24tbGluazpob3ZlcntcbiAgICBjb2xvcjogcmdiKDExLCAxNDIsIDIwNykgIWltcG9ydGFudDtcbn1cblxuLmFkZC1idXR0b24tbGluazpiZWZvcmV7XG4gICAgY29sb3I6IHJnYigxMSwgMTQyLCAyMDcpICFpbXBvcnRhbnQ7XG4gICAgY29udGVudDogXCJcXDI1NEJcIjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLmljb24tbGlua3tcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLmljb24tbGluazpiZWZvcmV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgdG9wOjJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjY7XG5cbn1cblxuLmljb24tbGluay5kZWxldGUtYnV0dG9uLWxpbms6YmVmb3Jle1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdHJhc2gtaWNvbi5pY28nKTtcbn1cblxuLmljb24tbGluay5vcGVuLXBhZ2UtYnV0dG9uLWxpbms6YmVmb3Jle1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvb3Blbi1wYWdlLWljb24uaWNvJyk7XG59XG5cbi5pY29uLWxpbmsuZm9sZGVyLWJ1dHRvbi1saW5rOmJlZm9yZXtcbiAgICBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2ZvbGRlci5pY28nKTtcbn1cblxuLmljb24tbGluay5nYWxhcnktYnV0dG9uLWxpbms6YmVmb3Jle1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvZ2FsYXJ5LmljbycpO1xufVxuXG4uaWNvbi1saW5rLmhvbWUtYnV0dG9uLWxpbms6YmVmb3Jle1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaG9tZS5pY28nKTtcbn1cblxuLmljb24tbGluay5kb3dubG9hZC1idXR0b24tbGluazpiZWZvcmV7XG4gICAgY29udGVudDp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9kb3dubG9hZC5pY28nKTtcbn1cblxuLmljb24tbGluay51cGxvYWQtYnV0dG9uLWxpbms6YmVmb3Jle1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvdXBsb2FkLmljbycpO1xufVxuXG4uaWNvbi1saW5rLnBhZ2VzLWJ1dHRvbi1saW5rOmJlZm9yZXtcbiAgICBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL3BhZ2VzLmljbycpO1xufVxuXG4uaWNvbi1saW5rLm9yZGVyZWQtbGlzdC1pY29uOmJlZm9yZXtcbiAgICBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2xpc3QtbGVmdC5pY28nKTtcbn1cbi5pY29uLWxpbmsub3JkZXJlZC1saXN0LWljb246aG92ZXI6OmJlZm9yZXtcbiAgICBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2xpc3QtZG93bi5pY28nKTtcbiAgICB0b3A6NXB4O1xufVxuLmFjdGl2ZS5pY29uLWxpbmsub3JkZXJlZC1saXN0LWljb246YmVmb3Jle1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbGlzdC1kb3duLmljbycpO1xufVxuLmljb24tbGluay5saWtlLWljb246YmVmb3Jle1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbGlrZTEuaWNvJyk7XG4gICAgem9vbTogMS40O1xuICAgIHRvcDogNnB4O1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHBhZGRpbmctbGVmdDowcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-label/angui-label.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-label/angui-label.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [ngClass]=\"getClassName()\" [style.color]=\"texColor\" >{{text}}     <ng-content> </ng-content>\n</span>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-label/angui-label.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-label/angui-label.component.ts ***!
  \************************************************************************/
/*! exports provided: AnguiLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiLabelComponent", function() { return AnguiLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiLabelComponent = /** @class */ (function () {
    function AnguiLabelComponent() {
        this.text = "";
        this.hover = false;
        this.subHeader = false;
        this.mainHeader = false;
        this.texColor = 'rgb(7, 168, 248)';
        this.refreshLink = false;
        this.previousButtonLink = false;
        this.nextButtonLink = false;
        this.addButtonLink = false;
        this.deleteButtonLink = false;
        this.openPageButtonLink = false;
        this.folderButtonLink = false;
        this.galaryButtonLink = false;
        this.homeButtonLink = false;
        this.downloadButtonLink = false;
        this.uploadButtonLink = false;
        this.pagesButtonLink = false;
        this.listLink = false;
        this.disabled = false;
        this.likeLink = false;
    }
    AnguiLabelComponent.prototype.ngOnInit = function () {
    };
    AnguiLabelComponent.prototype.getClassName = function () {
        var classNames = "link-text ";
        classNames += this.disableItem();
        classNames += this.hoverClass();
        classNames += this.subHeaderClass();
        classNames += this.mainHeaderClass();
        classNames += this.refreshLinkClass();
        classNames += this.previousButtonLinkClass();
        classNames += this.nextButtonLinkClass();
        classNames += this.addButtonLinkClass();
        classNames += this.deleteButtonLinkClass();
        classNames += this.openPageButtonLinkClass();
        classNames += this.folderButtonLinkClass();
        classNames += this.galaryButtonLinkClass();
        classNames += this.homeButtonLinkClass();
        classNames += this.downloadButtonLinkClass();
        classNames += this.uploadButtonLinkClass();
        classNames += this.pagesButtonLinkClass();
        classNames += this.listLinkClass();
        classNames += this.likeLinkClass();
        return classNames;
    };
    AnguiLabelComponent.prototype.disableItem = function () {
        return this.disabled ? ' disabled ' : '';
    };
    AnguiLabelComponent.prototype.hoverClass = function () {
        return this.hover ? ' hover-underline ' : '';
    };
    AnguiLabelComponent.prototype.subHeaderClass = function () {
        return this.subHeader ? 'sub-header ' : '';
    };
    AnguiLabelComponent.prototype.mainHeaderClass = function () {
        return this.mainHeader ? 'main-header ' : '';
    };
    AnguiLabelComponent.prototype.refreshLinkClass = function () {
        return this.refreshLink ? ' refresh-link ' : '';
    };
    AnguiLabelComponent.prototype.previousButtonLinkClass = function () {
        return this.previousButtonLink ? ' previous-button-link ' : '';
    };
    AnguiLabelComponent.prototype.nextButtonLinkClass = function () {
        return this.nextButtonLink ? ' next-button-link ' : '';
    };
    AnguiLabelComponent.prototype.addButtonLinkClass = function () {
        return this.addButtonLink ? ' add-button-link ' : '';
    };
    AnguiLabelComponent.prototype.deleteButtonLinkClass = function () {
        return this.deleteButtonLink ? ' icon-link delete-button-link ' : '';
    };
    AnguiLabelComponent.prototype.openPageButtonLinkClass = function () {
        return this.openPageButtonLink ? ' icon-link open-page-button-link ' : '';
    };
    AnguiLabelComponent.prototype.folderButtonLinkClass = function () {
        return this.folderButtonLink ? ' icon-link folder-button-link' : '';
    };
    AnguiLabelComponent.prototype.galaryButtonLinkClass = function () {
        return this.galaryButtonLink ? ' icon-link galary-button-link ' : '';
    };
    AnguiLabelComponent.prototype.homeButtonLinkClass = function () {
        return this.homeButtonLink ? ' icon-link home-button-link ' : '';
    };
    AnguiLabelComponent.prototype.downloadButtonLinkClass = function () {
        return this.downloadButtonLink ? ' icon-link download-button-link ' : '';
    };
    AnguiLabelComponent.prototype.uploadButtonLinkClass = function () {
        return this.uploadButtonLink ? ' icon-link upload-button-link ' : '';
    };
    AnguiLabelComponent.prototype.pagesButtonLinkClass = function () {
        return this.pagesButtonLink ? ' icon-link pages-button-link ' : '';
    };
    AnguiLabelComponent.prototype.listLinkClass = function () {
        return this.listLink ? ' icon-link ordered-list-icon ' : '';
    };
    AnguiLabelComponent.prototype.likeLinkClass = function () {
        return this.likeLink ? ' icon-link like-icon ' : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiLabelComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "hover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "subHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "mainHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiLabelComponent.prototype, "texColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "refreshLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "previousButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "nextButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "addButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "deleteButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "openPageButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "folderButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "galaryButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "homeButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "downloadButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "uploadButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "pagesButtonLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "listLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiLabelComponent.prototype, "likeLink", void 0);
    AnguiLabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-label',
            template: __webpack_require__(/*! ./angui-label.component.html */ "./src/app/an-gui-components/angui-label/angui-label.component.html"),
            styles: [__webpack_require__(/*! ./angui-label.component.css */ "./src/app/an-gui-components/angui-label/angui-label.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiLabelComponent);
    return AnguiLabelComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-landing-page-animation/angui-landing-page-animation.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-landing-page-animation/angui-landing-page-animation.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLWxhbmRpbmctcGFnZS1hbmltYXRpb24vYW5ndWktbGFuZGluZy1wYWdlLWFuaW1hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-landing-page-animation/angui-landing-page-animation.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-landing-page-animation/angui-landing-page-animation.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"twoam\">\n  <div class=\"wrapper\">\n    <div class=\"img\"></div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-landing-page-animation/angui-landing-page-animation.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-landing-page-animation/angui-landing-page-animation.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AnguiLandingPageAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiLandingPageAnimationComponent", function() { return AnguiLandingPageAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiLandingPageAnimationComponent = /** @class */ (function () {
    function AnguiLandingPageAnimationComponent() {
    }
    AnguiLandingPageAnimationComponent.prototype.ngOnInit = function () {
    };
    AnguiLandingPageAnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angui-landing-page-animation',
            template: __webpack_require__(/*! ./angui-landing-page-animation.component.html */ "./src/app/an-gui-components/angui-landing-page-animation/angui-landing-page-animation.component.html"),
            styles: [__webpack_require__(/*! ./angui-landing-page-animation.component.css */ "./src/app/an-gui-components/angui-landing-page-animation/angui-landing-page-animation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiLandingPageAnimationComponent);
    return AnguiLandingPageAnimationComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-logo/angui-logo.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/an-gui-components/angui-logo/angui-logo.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Bouncing Logo Animation */\n.logo-container{\n    display: inline-block;\n    width: 70px;\n    height: 70px;\n    position: absolute;\n    line-height: 70px;\n    text-align: center;\n    font-size: 1.2em;\n    float: left;\n    left: 20px;\n    top: 20px;\n    color: #fff;\n    z-index: 100;\n    padding: 5px;\n    background-color: #21212142;\n  \n  }\n.logo{\n    color: #fff;\n    position: absolute;\n    opacity: 0.7;\n    text-shadow: 0 0 6px rgba(0,0,0,0.5);\n    font-size: 15px;\n    width: 60px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border-radius: 10px;\n    bottom: 20px;\n    -webkit-animation: bounce 1s ease infinite;\n            animation: bounce 1s ease infinite;\n  }\n@-webkit-keyframes bounce {\n    50% {\n      transform: translateY(-10%);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n@keyframes bounce {\n    50% {\n      transform: translateY(-10%);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n/* Bouncing Logo Animation End */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktbG9nby9hbmd1aS1sb2dvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLDRCQUE0Qjs7R0FFN0I7QUFFRDtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsMkNBQW1DO1lBQW5DLG1DQUFtQztHQUNwQztBQUVEO0lBQ0U7TUFDRSw0QkFBNEI7S0FDN0I7SUFDRDtNQUNFLHlCQUF5QjtLQUMxQjtHQUNGO0FBUEQ7SUFDRTtNQUNFLDRCQUE0QjtLQUM3QjtJQUNEO01BQ0UseUJBQXlCO0tBQzFCO0dBQ0Y7QUFFRCxpQ0FBaUMiLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS1sb2dvL2FuZ3VpLWxvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJvdW5jaW5nIExvZ28gQW5pbWF0aW9uICovXG4ubG9nby1jb250YWluZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxNDI7XG4gIFxuICB9XG5cbiAgLmxvZ297XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZSBpbmZpbml0ZTtcbiAgfVxuICAgIFxuICBAa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG5cbiAgLyogQm91bmNpbmcgTG9nbyBBbmltYXRpb24gRW5kICovIl19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-logo/angui-logo.component.html":
/*!************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-logo/angui-logo.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-container\">\n    <div class=\"logo\">\n      <ng-content> </ng-content>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/an-gui-components/angui-logo/angui-logo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/an-gui-components/angui-logo/angui-logo.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnguiLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiLogoComponent", function() { return AnguiLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiLogoComponent = /** @class */ (function () {
    function AnguiLogoComponent() {
        this.textLogo = "<S.M.V/>";
    }
    AnguiLogoComponent.prototype.ngOnInit = function () {
    };
    AnguiLogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-logo',
            template: __webpack_require__(/*! ./angui-logo.component.html */ "./src/app/an-gui-components/angui-logo/angui-logo.component.html"),
            styles: [__webpack_require__(/*! ./angui-logo.component.css */ "./src/app/an-gui-components/angui-logo/angui-logo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiLogoComponent);
    return AnguiLogoComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-model-navigation-services/angui-model-controller-subscriber.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-model-navigation-services/angui-model-controller-subscriber.ts ***!
  \********************************************************************************************************/
/*! exports provided: ModelSubsciber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelSubsciber", function() { return ModelSubsciber; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var ModelSubsciber = /** @class */ (function () {
    function ModelSubsciber() {
        this.modelOnClose = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onClose = this.modelOnClose.asObservable();
    }
    ModelSubsciber.prototype.onModelClose = function (result) {
        this.modelOnClose.next(result);
    };
    return ModelSubsciber;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-model-navigation-services/model-controller/insertion.directive.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-model-navigation-services/model-controller/insertion.directive.ts ***!
  \***********************************************************************************************************/
/*! exports provided: InsertionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertionDirective", function() { return InsertionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InsertionDirective = /** @class */ (function () {
    function InsertionDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    InsertionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[angui-model-insertion]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], InsertionDirective);
    return InsertionDirective;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-model-navigation-services/model-controller/model-controller.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-model-navigation-services/model-controller/model-controller.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLW1vZGVsLW5hdmlnYXRpb24tc2VydmljZXMvbW9kZWwtY29udHJvbGxlci9tb2RlbC1jb250cm9sbGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-model-navigation-services/model-controller/model-controller.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-model-navigation-services/model-controller/model-controller.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  (click)=\"onOverlayClicked($event)\">\n  <div  (click)=\"onDialogClicked($event)\">\n    <ng-template angui-model-insertion>\n\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-model-navigation-services/model-controller/model-controller.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-model-navigation-services/model-controller/model-controller.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _insertion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertion.directive */ "./src/app/an-gui-components/angui-model-navigation-services/model-controller/insertion.directive.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angui_model_controller_subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angui-model-controller-subscriber */ "./src/app/an-gui-components/angui-model-navigation-services/angui-model-controller-subscriber.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogComponent = /** @class */ (function () {
    function DialogComponent(componentFactoryResolver, cd, dialogRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.dialogRef = dialogRef;
        this._onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onClose = this._onClose.asObservable();
    }
    DialogComponent.prototype.ngAfterViewInit = function () {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    };
    DialogComponent.prototype.onOverlayClicked = function (evt) {
        this.dialogRef.onModelClose();
    };
    DialogComponent.prototype.onDialogClicked = function (evt) {
        evt.stopPropagation();
    };
    DialogComponent.prototype.loadChildComponent = function (componentType) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    };
    DialogComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.componentRef) {
            setTimeout(function () {
                _this.componentRef.destroy();
            }, 100);
        }
    };
    DialogComponent.prototype.close = function () {
        this._onClose.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_insertion_directive__WEBPACK_IMPORTED_MODULE_1__["InsertionDirective"]),
        __metadata("design:type", _insertion_directive__WEBPACK_IMPORTED_MODULE_1__["InsertionDirective"])
    ], DialogComponent.prototype, "insertionPoint", void 0);
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-model-controller',
            template: __webpack_require__(/*! ./model-controller.component.html */ "./src/app/an-gui-components/angui-model-navigation-services/model-controller/model-controller.component.html"),
            styles: [__webpack_require__(/*! ./model-controller.component.css */ "./src/app/an-gui-components/angui-model-navigation-services/model-controller/model-controller.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angui_model_controller_subscriber__WEBPACK_IMPORTED_MODULE_3__["ModelSubsciber"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-nav-menu/angui-nav-menu.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-nav-menu/angui-nav-menu.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLW5hdi1tZW51L2FuZ3VpLW5hdi1tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-nav-menu/angui-nav-menu.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-nav-menu/angui-nav-menu.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angui-nav-menu works!\n</p>\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-nav-menu/angui-nav-menu.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-nav-menu/angui-nav-menu.component.ts ***!
  \******************************************************************************/
/*! exports provided: AnguiNavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiNavMenuComponent", function() { return AnguiNavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiNavMenuComponent = /** @class */ (function () {
    function AnguiNavMenuComponent() {
    }
    AnguiNavMenuComponent.prototype.ngOnInit = function () {
    };
    AnguiNavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angui-nav-menu',
            template: __webpack_require__(/*! ./angui-nav-menu.component.html */ "./src/app/an-gui-components/angui-nav-menu/angui-nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./angui-nav-menu.component.css */ "./src/app/an-gui-components/angui-nav-menu/angui-nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiNavMenuComponent);
    return AnguiNavMenuComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-navigation-bar/angui-navigation-bar.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-navigation-bar/angui-navigation-bar.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".angui-navigation-bar{\n    display: flex;\n    height: 20px;\n    padding: 10px;\n    background-color: #fbfbfb;\n    border-top: 1px solid #f1f1f1;\n    border-bottom: 1px solid #f1f1f1;\n    /* margin: 1px 0px; */\n    color: #bbbbbb;\n    box-shadow: 1px 0px 2px 0px rgba(0, 0, 0, 0.1), 1px 2px 1px 0px rgba(0, 0, 0, 0.04);\n}\n.angui-navigation-bar .label{\n    flex-grow: 1;\n    color: rgb(7, 168, 248);\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 18px;\n}\n.angui-navigation-bar .nav-icon{\n    content:url('arrow-left.ico');\n    zoom: 1;\n    bottom: 3px;\n    position: relative;\n    height: 16px;\n    opacity: .5;\n    padding-left: 0px;\n    align-self: flex-end;\n\n}\n.angui-navigation-bar  .text-center{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktbmF2aWdhdGlvbi1iYXIvYW5ndWktbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztJQUNkLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysb0ZBQW9GO0NBQ3ZGO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksOEJBQW9EO0lBQ3BELFFBQVE7SUFDUixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjs7Q0FFeEI7QUFFRDtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLW5hdmlnYXRpb24tYmFyL2FuZ3VpLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5ndWktbmF2aWdhdGlvbi1iYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIC8qIG1hcmdpbjogMXB4IDBweDsgKi9cbiAgICBjb2xvcjogI2JiYmJiYjtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAxcHggMnB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi5hbmd1aS1uYXZpZ2F0aW9uLWJhciAubGFiZWx7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5hbmd1aS1uYXZpZ2F0aW9uLWJhciAubmF2LWljb257XG4gICAgY29udGVudDp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1sZWZ0LmljbycpO1xuICAgIHpvb206IDE7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblxufVxuXG4uYW5ndWktbmF2aWdhdGlvbi1iYXIgIC50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-navigation-bar/angui-navigation-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-navigation-bar/angui-navigation-bar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"angui-navigation-bar\" (click)=\"openPage()\">\n  <div [ngClass]=\"headerAlign == 'Center'? 'label text-center' : 'label '\"><ng-content> </ng-content></div>\n  <div class=\"nav-icon\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-navigation-bar/angui-navigation-bar.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-navigation-bar/angui-navigation-bar.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AnguiNavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiNavigationBarComponent", function() { return AnguiNavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnguiNavigationBarComponent = /** @class */ (function () {
    function AnguiNavigationBarComponent(router) {
        this.router = router;
        this.url = "";
        this.headerAlign = "";
    }
    AnguiNavigationBarComponent.prototype.ngOnInit = function () {
    };
    AnguiNavigationBarComponent.prototype.openPage = function (url) {
        this.router.navigateByUrl(this.url.toString());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiNavigationBarComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiNavigationBarComponent.prototype, "headerAlign", void 0);
    AnguiNavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-navigation-bar',
            template: __webpack_require__(/*! ./angui-navigation-bar.component.html */ "./src/app/an-gui-components/angui-navigation-bar/angui-navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./angui-navigation-bar.component.css */ "./src/app/an-gui-components/angui-navigation-bar/angui-navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AnguiNavigationBarComponent);
    return AnguiNavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-page-navigation-bar/angui-page-navigation-bar.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-page-navigation-bar/angui-page-navigation-bar.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".angui-navigation-bar{\n    display: flex;\n    height: 20px;\n    padding: 10px;\n    background-color: #fbfbfb;\n    border-top: 1px solid #f1f1f1;\n    border-bottom: 1px solid #f1f1f1;\n    /* margin: 1px 0px; */\n    color: #bbbbbb;\n    box-shadow: 1px 0px 2px 0px rgba(0, 0, 0, 0.1), 1px 2px 1px 0px rgba(0, 0, 0, 0.04);\n}\n.angui-navigation-bar .label{\n    flex-grow: 1;\n    color: rgb(7, 168, 248);\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 18px;\n}\n.angui-navigation-bar .nav-icon{\n    zoom: 1;\n    position: relative;\n    height: 16px;\n    opacity: .5;\n    padding-left: 0px;\n    \n\n}\n.nav-icon.nav-right-icon{\n    bottom: 0px;\n    align-self: flex-start;\n    content:url('arrow-right.ico');\n}\n.nav-icon.nav-left-icon{\n    bottom: 3px;\n    align-self: flex-end;\n    content:url('arrow-left.ico');\n}\n.angui-navigation-bar  .text-center{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktcGFnZS1uYXZpZ2F0aW9uLWJhci9hbmd1aS1wYWdlLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9GQUFvRjtDQUN2RjtBQUNEO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7OztDQUdyQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QiwrQkFBcUQ7Q0FDeEQ7QUFDRDtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsOEJBQW9EO0NBQ3ZEO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS1wYWdlLW5hdmlnYXRpb24tYmFyL2FuZ3VpLXBhZ2UtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmd1aS1uYXZpZ2F0aW9uLWJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgLyogbWFyZ2luOiAxcHggMHB4OyAqL1xuICAgIGNvbG9yOiAjYmJiYmJiO1xuICAgIGJveC1zaGFkb3c6IDFweCAwcHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSksIDFweCAycHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLmFuZ3VpLW5hdmlnYXRpb24tYmFyIC5sYWJlbHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgY29sb3I6IHJnYig3LCAxNjgsIDI0OCk7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmFuZ3VpLW5hdmlnYXRpb24tYmFyIC5uYXYtaWNvbntcbiAgICB6b29tOiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgXG5cbn1cbi5uYXYtaWNvbi5uYXYtcmlnaHQtaWNvbntcbiAgICBib3R0b206IDBweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGNvbnRlbnQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQuaWNvJyk7XG59XG4ubmF2LWljb24ubmF2LWxlZnQtaWNvbntcbiAgICBib3R0b206IDNweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBjb250ZW50OnVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LWxlZnQuaWNvJyk7XG59XG4uYW5ndWktbmF2aWdhdGlvbi1iYXIgIC50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-page-navigation-bar/angui-page-navigation-bar.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-page-navigation-bar/angui-page-navigation-bar.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"angui-navigation-bar\" (click)=\"openPage()\">\n  <div *ngIf = \"navMenuType == 'Left'\" class=\"nav-icon nav-right-icon\" (click)=\"openPage()\"></div>\n\n  <div [ngClass]=\"headerAlign == 'Center'? 'label text-center' : 'label '\"><ng-content> </ng-content></div>\n  <div *ngIf = \"navMenuType == 'Right'\" class=\"nav-icon nav-left-icon\" ></div>\n\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-page-navigation-bar/angui-page-navigation-bar.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-page-navigation-bar/angui-page-navigation-bar.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AnguiPageNavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiPageNavigationBarComponent", function() { return AnguiPageNavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnguiPageNavigationBarComponent = /** @class */ (function () {
    function AnguiPageNavigationBarComponent(router) {
        this.router = router;
        this.navMenuType = "Left";
        this.headerAlign = "Center";
        this.url = "";
    }
    AnguiPageNavigationBarComponent.prototype.ngOnInit = function () {
    };
    AnguiPageNavigationBarComponent.prototype.openPage = function (url) {
        this.router.navigateByUrl(this.url.toString());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiPageNavigationBarComponent.prototype, "headerAlign", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiPageNavigationBarComponent.prototype, "url", void 0);
    AnguiPageNavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-page-navigation-bar',
            template: __webpack_require__(/*! ./angui-page-navigation-bar.component.html */ "./src/app/an-gui-components/angui-page-navigation-bar/angui-page-navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./angui-page-navigation-bar.component.css */ "./src/app/an-gui-components/angui-page-navigation-bar/angui-page-navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AnguiPageNavigationBarComponent);
    return AnguiPageNavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-progress-bar/angui-progress-bar.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-progress-bar/angui-progress-bar.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-bar-container {\n    display: flex;\n    flex-grow: 1;\n    flex-basis: 1;\n    margin: 5px;\n}\n\n.progress-bar {\n    width:100%;\n    display: flex;\n    vertical-align: middle;\n    text-align: center;\n    background-color: rgb(7, 168, 248);\n}\n\n.hide-bar{\n    display: none;\n}\n\n.normal{\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid rgb(214, 207, 207);\n}\n\n.normal .progress-bar {\n    height:20px;\n}\n\n.normal span {\n    width: calc(100% - 20px);\n    position: absolute;\n    text-align: center;\n    font-family: roboto;\n    color:rgb(206, 203, 203);\n    font-size: 16px;\n    letter-spacing: 1px;\n}\n\n.thin .progress-bar {\n    height:12px;\n}\n\n.thin span {\n    display: none;\n}\n\n.line .progress-bar {\n    height:5px;\n}\n\n.line span{\n    display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktcHJvZ3Jlc3MtYmFyL2FuZ3VpLXByb2dyZXNzLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtDQUNmOztBQUVEO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1DQUFtQztDQUN0Qzs7QUFDRDtJQUNJLGNBQWM7Q0FDakI7O0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFDQUFxQztDQUN4Qzs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktcHJvZ3Jlc3MtYmFyL2FuZ3VpLXByb2dyZXNzLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtYmFzaXM6IDE7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xufVxuLmhpZGUtYmFye1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4ubm9ybWFse1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNCwgMjA3LCAyMDcpO1xufVxuXG4ubm9ybWFsIC5wcm9ncmVzcy1iYXIge1xuICAgIGhlaWdodDoyMHB4O1xufVxuXG4ubm9ybWFsIHNwYW4ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgY29sb3I6cmdiKDIwNiwgMjAzLCAyMDMpO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4udGhpbiAucHJvZ3Jlc3MtYmFyIHtcbiAgICBoZWlnaHQ6MTJweDtcbn1cblxuLnRoaW4gc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmUgLnByb2dyZXNzLWJhciB7XG4gICAgaGVpZ2h0OjVweDtcbn1cblxuLmxpbmUgc3BhbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-progress-bar/angui-progress-bar.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-progress-bar/angui-progress-bar.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"getClassName(type)\" >\n  <div class=\"progress-bar\" [style.width.%] = \"percentage\">\n  </div>\n  <span> {{percentage}} % </span>\n\n</div>"

/***/ }),

/***/ "./src/app/an-gui-components/angui-progress-bar/angui-progress-bar.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-progress-bar/angui-progress-bar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AnguiProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiProgressBarComponent", function() { return AnguiProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiProgressBarComponent = /** @class */ (function () {
    function AnguiProgressBarComponent() {
        this.percentage = 0;
        this.type = "line";
    }
    AnguiProgressBarComponent.prototype.ngOnInit = function () {
    };
    AnguiProgressBarComponent.prototype.getClassName = function (type) {
        var className = " progress-bar-container ";
        className += type == "normal" ? 'normal' : '';
        className += type == "thin" ? 'thin' : '';
        className += type == "line" ? 'line' : '';
        className += type == "" ? 'hide-bar' : '';
        return className;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AnguiProgressBarComponent.prototype, "percentage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiProgressBarComponent.prototype, "type", void 0);
    AnguiProgressBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-progress-bar',
            template: __webpack_require__(/*! ./angui-progress-bar.component.html */ "./src/app/an-gui-components/angui-progress-bar/angui-progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./angui-progress-bar.component.css */ "./src/app/an-gui-components/angui-progress-bar/angui-progress-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiProgressBarComponent);
    return AnguiProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-radio-button/angui-radio-button.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-radio-button/angui-radio-button.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    -webkit-tap-highlight-color: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    -webkit-tap-highlight-color: transparent;\n    -ms-tap-highlight-color: transparent;\n    -khtml-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n\n}\n.radio{\n    position: relative;\n    display:inline-block;\n    width:auto;\n}\n.radio label{\n    color: rgb(7, 168, 248);\n    font-family: roboto;\n    font-size: 16px;\n    letter-spacing: 1px;\n    line-height: 16px;\n      /* padding: 8px; */\n      width: auto;\n      height: 30px;\n}\n.radio input[type=\"radio\"]:checked,\n.radio input[type=\"radio\"]:not(:checked){\n    position: absolute;\n    left: -5000px;\n}\n.radio input[type=\"radio\"]:checked + label,\n.radio input[type=\"radio\"]:not(:checked) + label {\n    position: relative;\n    padding-left: 30px;\n    width:auto;\n    margin-left: 10px;\n}\n.radio input[type=\"radio\"]:checked + label:before,\n.radio input[type=\"radio\"]:not(:checked) + label:before {\n    position: absolute;\n    content: \"\";\n    border: 1px solid;\n    /* margin: 0px 8px; */\n    background: white;\n    color: #d2c9c9;\n    border-radius: 100%;\n    box-sizing: border-box;\n    height: 16px;\n    width: 16px;\n    left: 0px;\n    top: 0px;\n}\n.radio input[type=\"radio\"]:checked + label:after,\n.radio input[type=\"radio\"]:not(:checked) + label:after {\n    position: absolute;\n    content: \"\";\n    background: rgb(7, 168, 248);\n    color: rgb(7, 168, 248);\n    border-radius: 100%;\n    height: 12px;\n    width: 12px;\n    left: 2px;\n    top: 2px;\n    transition: all .3s ease;\n    -webkit-transition: all .3s ease;\n\n}\n.radio input[type=\"radio\"]:not(:checked) + label:after {\n    opacity: 0;\n    transform: scale(0);\n}\n.radio input[type=\"radio\"]:checked + label:before {\n    color: rgb(7, 168, 248);\n}\n.radio input[type=\"radio\"]:checked + label:after {\n    opacity: 1;\n    transform: scale(.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktcmFkaW8tYnV0dG9uL2FuZ3VpLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLDRCQUE0QixDQUFDLGdCQUFnQjtJQUM3QywwQkFBMEIsQ0FBQyxZQUFZLENBQ1osb0JBQW9CO09BQzVDLHVCQUF1QixDQUFDLGFBQWE7UUFDcEMsc0JBQXNCLENBQUMsNEJBQTRCO1lBQy9DLGtCQUFrQixDQUFDO2tFQUNtQztJQUM5RCx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QyxzQ0FBc0M7O0NBRXpDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtNQUNoQixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGFBQWE7Q0FDbEI7QUFFRDs7SUFFSSxtQkFBbUI7SUFDbkIsY0FBYztDQUNqQjtBQUdEOztJQUVJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtDQUNyQjtBQUdEOztJQUVJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztDQUNaO0FBR0Q7O0lBRUksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGlDQUFpQzs7Q0FFcEM7QUFFRDtJQUNJLFdBQVc7SUFFWCxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksV0FBVztJQUVYLHFCQUFxQjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLXJhZGlvLWJ1dHRvbi9hbmd1aS1yYWRpby1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiBub25lO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tcy10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAta2h0bWwtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLW1vei10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxufVxuLnJhZGlve1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB3aWR0aDphdXRvO1xufVxuLnJhZGlvIGxhYmVse1xuICAgIGNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAvKiBwYWRkaW5nOiA4cHg7ICovXG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogMzBweDtcbn1cblxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkLFxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNTAwMHB4O1xufVxuXG5cbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsLFxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgd2lkdGg6YXV0bztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuXG4ucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXG4ucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIC8qIG1hcmdpbjogMHB4IDhweDsgKi9cbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogI2QyYzljOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbn1cblxuXG4ucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIGNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGxlZnQ6IDJweDtcbiAgICB0b3A6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG5cbn1cblxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG4ucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICAgIGNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xufVxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-radio-button/angui-radio-button.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-radio-button/angui-radio-button.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"radio\">\n  <input type = \"radio\" id = \"radioButton\" name = \"radioButton\"/>\n  <label for = \"radioButton\" >{{text}}</label>\n</div>\n\n<div class=\"radio\">\n  <input type = \"radio\" id = \"radioButton2\" name = \"radioButton\"/>\n  <label for = \"radioButton2\" >{{text}}</label>\n</div>\n\n<!-- add disbaled state -->"

/***/ }),

/***/ "./src/app/an-gui-components/angui-radio-button/angui-radio-button.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-radio-button/angui-radio-button.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AnguiRadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiRadioButtonComponent", function() { return AnguiRadioButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiRadioButtonComponent = /** @class */ (function () {
    function AnguiRadioButtonComponent() {
        this.text = "Radio Button";
    }
    AnguiRadioButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiRadioButtonComponent.prototype, "text", void 0);
    AnguiRadioButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-radio-button',
            template: __webpack_require__(/*! ./angui-radio-button.component.html */ "./src/app/an-gui-components/angui-radio-button/angui-radio-button.component.html"),
            styles: [__webpack_require__(/*! ./angui-radio-button.component.css */ "./src/app/an-gui-components/angui-radio-button/angui-radio-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiRadioButtonComponent);
    return AnguiRadioButtonComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-slider/angui-slider.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-slider/angui-slider.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    -webkit-tap-highlight-color: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    -webkit-tap-highlight-color: transparent;\n    -ms-tap-highlight-color: transparent;\n    -khtml-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n\n}\n.slide-option-contianer{\n    width: 100%;\n    height:45px;\n    display: flex;\n    align-items: flex-start;\n    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04)\n\n}\n.slide-option-contianer.bottom-slide{\n    border:none !important;\n    box-shadow: none !important;\n    padding-bottom: 1px;\n    position: absolute;\n    z-index: 10000;\n    bottom: 0px;\n    background-color: transparent!important;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n}\n.slide-option-contianer.bottom-slide .slide-options.active {\n    color: rgb(7, 168, 248);\n    text-align: center;\n    border-bottom: none !important;\n    background-color: rgb(7, 168, 248);\n \n    border-radius: 20px;\n    width: 5px;\n    height: 2px;\n}\n.slide-options{\n    display: block;\n    float:left;\n    width: 5px;\n    height: 5px;\n    margin:10px;\n    text-align: center;\n    color:grey;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.slide-options.active{\n    color: rgb(7, 168, 248);\n    text-align: center;\n    padding: 2px 0px;\n    /* padding-left: 3px; */\n    /* padding-bottom: 15px; */\n    border-bottom: 1px solid rgb(7, 168, 248);\n    background-color: rgba(0, 0, 0, 0.1);\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    }\n.slide-option-contianer.bottom-slide{\n        box-shadow:none;\n        border-bottom: none;\n        background-color:white;\n        border-radius:0px;\n        background-color: rgba(0, 0, 0, 0.1) !important;\n\n    }\n.slides-container{\n    background-color:  white;\n    width: 100%;\n    height: 500px;\n    position: relative;\n    box-sizing: border-box;\n    overflow: hidden;\n    display: flex;\n    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04)\n}\n.slide-content{\n    background-color:  white;\n    display: inline-block;\n    float:left;\n    left:0px;\n    position: relative;\n    width: 100%;\n    height:100%;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    height: 100%;\n  overflow: auto;\n\n}\n.slide-content-place{\n    background-color:  white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    flex-basis: 100%;\n}\n.content{\n    background-color:  white;\n    display: flex;\n    height: 100%;\n    padding: 0px 10px;\n}\n.slide1{\n    background-color:  white;\n}\n.slide2{\n    background-color:  white;\n}\n.slide3{\n    background-color:  white;\n}\n.image-slide-show-container {\n    list-style: none;\n    padding: 0;\n    margin: 10px;\n        overflow: hidden;\n    min-height:400px;\n    max-height:400px;\n    display: flex;\n    flex-grow: 1;\n  }\n.slide-show-image-container {\n      width:calc(100% - 20px);\n      position: absolute;\n      height: 100%;\n      max-height:400px;\n      display: flex;\n      flex-grow: 1;\n  }\n.slide-show-image-container img{\n    /* position: absolute; */\n    /* padding:0px 10px; */\n    display: flex;\n    flex-grow: 1;\n    border-radius: 3px;\n    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04);\n}\n.content > img{\n    width:99%;\n    height: 500px;\n    display: flex;\n    flex-grow: 1;\n    /* position: absolute; */\n    border-radius: 3px;\n    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04);\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktc2xpZGVyL2FuZ3VpLXNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLDRCQUE0QixDQUFDLGdCQUFnQjtJQUM3QywwQkFBMEIsQ0FBQyxZQUFZLENBQ1osb0JBQW9CO09BQzVDLHVCQUF1QixDQUFDLGFBQWE7UUFDcEMsc0JBQXNCLENBQUMsNEJBQTRCO1lBQy9DLGtCQUFrQixDQUFDO2tFQUNtQztJQUM5RCx5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QyxzQ0FBc0M7O0NBRXpDO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsaUZBQWlGOztDQUVwRjtBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtDQUMzQjtBQUdEO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsbUNBQW1DOztJQUVuQyxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFDQUFxQztDQUN4QztBQUVHO0lBQ0Esd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7S0FDNUI7QUFFRDtRQUNJLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixnREFBZ0Q7O0tBRW5EO0FBR0w7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUZBQWlGO0NBQ3BGO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2YsZUFBZTs7Q0FFaEI7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO1FBQ1QsaUJBQWlCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7R0FDZDtBQUNEO01BQ0ksd0JBQXdCO01BQ3hCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxhQUFhO0dBQ2hCO0FBQ0Q7SUFDRSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtGQUFrRjtDQUNyRjtBQUdEO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0ZBQWtGO0NBQ3JGIiwiZmlsZSI6InNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktc2xpZGVyL2FuZ3VpLXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IG5vbmU7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLW1zLXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1raHRtbC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAtbW96LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG59XG4uc2xpZGUtb3B0aW9uLWNvbnRpYW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6NDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0KVxuXG59XG5cbi5zbGlkZS1vcHRpb24tY29udGlhbmVyLmJvdHRvbS1zbGlkZXtcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwMDtcbiAgICBib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4uc2xpZGUtb3B0aW9uLWNvbnRpYW5lci5ib3R0b20tc2xpZGUgLnNsaWRlLW9wdGlvbnMuYWN0aXZlIHtcbiAgICBjb2xvcjogcmdiKDcsIDE2OCwgMjQ4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCAxNjgsIDI0OCk7XG4gXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMnB4O1xufVxuXG4uc2xpZGUtb3B0aW9uc3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOmdyZXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4gICAgLnNsaWRlLW9wdGlvbnMuYWN0aXZle1xuICAgIGNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycHggMHB4O1xuICAgIC8qIHBhZGRpbmctbGVmdDogM3B4OyAqL1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAxNXB4OyAqL1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNywgMTY4LCAyNDgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICB9XG5cbiAgICAuc2xpZGUtb3B0aW9uLWNvbnRpYW5lci5ib3R0b20tc2xpZGV7XG4gICAgICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czowcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuXG4gICAgfVxuXG5cbi5zbGlkZXMtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNClcbn1cbi5zbGlkZS1jb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBsZWZ0OjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG59XG4uc2xpZGUtY29udGVudC1wbGFjZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG59XG4uY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4uc2xpZGUxe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB3aGl0ZTtcbn1cbi5zbGlkZTJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHdoaXRlO1xufVxuLnNsaWRlM3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG59XG5cbi5pbWFnZS1zbGlkZS1zaG93LWNvbnRhaW5lciB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtaW4taGVpZ2h0OjQwMHB4O1xuICAgIG1heC1oZWlnaHQ6NDAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnNsaWRlLXNob3ctaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDo0MDBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnNsaWRlLXNob3ctaW1hZ2UtY29udGFpbmVyIGltZ3tcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgLyogcGFkZGluZzowcHggMTBweDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG5cbi5jb250ZW50ID4gaW1ne1xuICAgIHdpZHRoOjk5JTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-slider/angui-slider.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-slider/angui-slider.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div [ngClass]=\"getslidesContainerClassName(autoPlay)\"  *ngIf = \"this.autoPlay && !this.zoomImageSlideShow && imageSlideItems.length == 0\">\n  <div class=\"slide-content-place\" *ngFor=\"let slides of slidesList; let i = index\" [@slideMove] =\"slides.state\" \n   [id]=\"slides.slideName\">\n      <div class=\"slide-content slide1\"  *ngIf=\"currentslide == slides.slideName\" >\n          <ng-template [ngIf]=\"currentslide == slides.slideName\"  >\n            <div class=\"content\">\n                {{slides.slideName}}\n            </div>\n          </ng-template>\n        </div>\n  </div>\n  <div [ngClass]=\"getContainerClassName(autoPlay)\" >\n    <div [ngClass]=\"getClassName(i)\" (click)=\"showslide(i,slides)\" *ngFor=\"let slides of slidesList; let i = index\">\n    </div>\n  </div>\n</div>\n\n<div class=\"image-slide-show-container\"  *ngIf = \"this.zoomImageSlideShow && !this.autoPlay  && imageSlideItems.length != 0\">\n  <div class=\"slide-show-image-container\" *ngFor=\"let item of imageSlideItems;let i = index\">\n    <img  *ngIf=\"i == counterImageSlideShow\"  @fade-in-image [src]=\"item.src\" alt=\"item.title\">\n  </div>\n</div>\n\n\n\n\n\n<div [ngClass]=\"getslidesContainerClassName(autoPlay)\"  *ngIf = \"this.autoPlay  && imageSlideItems.length != 0\">\n  <div class=\"slide-content-place\" *ngFor=\"let slides of slidesList; let i = index\" [@slideMove] =\"slides.state\" \n   [id]=\"slides.slideName\">\n      <div class=\"slide-content slide1\"  *ngIf=\"currentslide == slides.slideName\" >\n          <ng-template [ngIf]=\"currentslide == slides.slideName\"  >\n            <div class=\"content\">\n              <img [src]=\"imageSlideItems[i].src\" alt=\"imageSlideItems[i].title\">\n            </div>\n          </ng-template>\n        </div>\n  </div>\n  <div [ngClass]=\"getContainerClassName(autoPlay)\" >\n    <div [ngClass]=\"getClassName(i)\" (click)=\"showslide(i,slides)\" *ngFor=\"let slides of slidesList; let i = index\">\n    </div>\n  </div>\n</div>\n\n<!-- -->\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-slider/angui-slider.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-slider/angui-slider.component.ts ***!
  \**************************************************************************/
/*! exports provided: AnguiSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiSliderComponent", function() { return AnguiSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnguiSliderComponent = /** @class */ (function () {
    function AnguiSliderComponent() {
        this.imageSlideItems = [];
        this.numberOfSlides = 5;
        this.currentSlider = 0;
        this.slidesList = [{ slideName: "slide1", active: true, state: 'center' }, { slideName: "slide2", active: false, state: 'first' },
            { slideName: "slide3", active: false, state: 'first' }, { slideName: "slide4", active: false, state: 'first' }, { slideName: "slide5", active: false, state: 'first' }];
        this.autoPlayInterVal = null;
        this.slideShowPlayInterval = null;
        this.currentslide = "";
        this.previousIndex = 0;
        this.counterImageSlideShow = 0;
        this.slideShowPlayIntervalTime = 4000;
        this.showslide(this.currentSlider, this.slidesList[this.currentSlider]);
    }
    AnguiSliderComponent.prototype.ngOnInit = function () {
        // if((this.autoPlay &&  this.imageSlideItems.length != 0)) {
        this.callAutoPlay();
        // }
        if (this.zoomImageSlideShow && !this.autoPlay) {
            this.callSlideShowPlay();
        }
    };
    AnguiSliderComponent.prototype.callAutoPlay = function () {
        var _this = this;
        if (this.autoPlayInterVal != null) {
            this.stopAutoPlay();
        }
        this.autoPlayInterVal = setInterval(function () {
            _this.currentSlider += 1;
            if (_this.currentSlider >= _this.numberOfSlides) {
                _this.currentSlider = 0;
                _this.showslide(_this.currentSlider, _this.slidesList[_this.currentSlider]);
            }
            else {
                _this.showslide(_this.currentSlider, _this.slidesList[_this.currentSlider]);
            }
        }, 4000);
    };
    AnguiSliderComponent.prototype.stopAutoPlay = function () {
        clearInterval(this.autoPlayInterVal);
        this.autoPlayInterVal = null;
    };
    AnguiSliderComponent.prototype.getClassName = function (i) {
        return this.slidesList[i].active ? "slide-options active" : "slide-options";
    };
    AnguiSliderComponent.prototype.getContainerClassName = function (autoPlay) {
        return autoPlay ? "slide-option-contianer bottom-slide" : "slide-option-contianer  bottom-slide";
    };
    AnguiSliderComponent.prototype.getslidesContainerClassName = function (autoPlay) {
        return autoPlay ? "slides-container bottom-slide" : "slides-container bottom-slide ";
    };
    AnguiSliderComponent.prototype.slideClick = function (selectedslide) {
        var _this = this;
        this.slidesList.forEach(function (slide) {
            if (selectedslide.slideName == slide.slideName) {
                slide.active = true;
                _this.currentslide = slide.slideName;
            }
            else {
                slide.active = false;
            }
        });
    };
    AnguiSliderComponent.prototype.showslide = function (index, selectedslide) {
        var _this = this;
        var counter = 0;
        this.slidesList.forEach(function (slide) {
            if (selectedslide.slideName == slide.slideName) {
                slide.active = true;
                _this.currentslide = slide.slideName;
            }
            else {
                slide.active = false;
            }
            if (index == 0) {
                _this.slidesList[index].state = 'center';
                counter += 1;
                _this.previousIndex = 0;
                if (_this.slidesList.length > counter) {
                    _this.slidesList[counter].state = 'first';
                }
            }
        });
        if (this.previousIndex > index) {
            this.slidesList[index].state = 'center';
            this.slidesList[this.previousIndex].state = 'first';
        }
        else if (this.previousIndex < index && this.slidesList[this.previousIndex].state != 'last') {
            this.slidesList[this.previousIndex].state = 'last';
            this.slidesList[index].state = 'center';
        }
        else {
            this.slidesList[this.previousIndex].state = 'first';
            this.slidesList[index].state = 'center';
        }
        this.currentSlider = index;
        this.previousIndex = index;
    };
    AnguiSliderComponent.prototype.callSlideShowPlay = function () {
        var _this = this;
        if (this.slideShowPlayInterval != null) {
            this.stopSlideShowPlay();
        }
        this.slideShowPlayInterval = setInterval(function () {
            _this.slideShowNextImage();
        }, this.slideShowPlayIntervalTime);
    };
    AnguiSliderComponent.prototype.stopSlideShowPlay = function () {
        clearInterval(this.slideShowPlayInterval);
        this.slideShowPlayInterval = null;
    };
    AnguiSliderComponent.prototype.slideShowNextImage = function () {
        if (this.counterImageSlideShow < this.imageSlideItems.length - 1) {
            this.counterImageSlideShow += 1;
            this.slideShowPlayIntervalTime += this.counterImageSlideShow;
        }
        else {
            this.counterImageSlideShow = 0;
            this.slideShowPlayIntervalTime = 4000;
        }
        this.callSlideShowPlay();
    };
    AnguiSliderComponent.prototype.slideShowPreviousImage = function () {
        if (this.counterImageSlideShow >= 1) {
            this.counterImageSlideShow = this.counterImageSlideShow - 1;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiSliderComponent.prototype, "autoPlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiSliderComponent.prototype, "zoomImageSlideShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AnguiSliderComponent.prototype, "imageSlideItems", void 0);
    AnguiSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-sliders',
            template: __webpack_require__(/*! ./angui-slider.component.html */ "./src/app/an-gui-components/angui-slider/angui-slider.component.html"),
            styles: [__webpack_require__(/*! ./angui-slider.component.css */ "./src/app/an-gui-components/angui-slider/angui-slider.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideMove', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('first', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(100%, 0, 0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('last', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-100%, 0, 0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('center => first, center => last, first => center, last => center', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1500ms ease')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fade-in-image", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, zoom: 0, transform: 'scale(0) translate3d(-10%, -10%, 0)',
                        width: 0, height: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("*", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, zoom: 1, zIndex: 1000, transform: 'scale(1) translate3d(0%, 0%, 0)',
                        width: '100%', height: '100%' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void <=> *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("3s ease")]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("* <=> void", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("1s ease")])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiSliderComponent);
    return AnguiSliderComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-table/angui-table.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-table/angui-table.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\n    padding-bottom: 10px;\n    padding-bottom: 10px;\n    margin: 10px;\n    flex-grow: 1;\n}\n.table-scroll-container {\n    /* background: red; */\n    overflow: auto;\n    max-height: 450px;\n    /* margin: 10px 10px; */\n    display: flex;\n    flex-grow: 1;\n    /* border-radius: 4px; */\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09), 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 1px -2px rgba(0,0,0,.12);\n    /* border: 1px solid rgba(255,255,255,0.3); */\n\n    /* width: calc(100% - 0px); */\n  }\ntable {\n    position: relative;\n    font-family: Roboto;\n    border-collapse: collapse;\n    width: calc(100% - 0px);\n    /* font-variant: all-small-caps; */\n    /* font-variant: titling-caps; */\n  }\n.stickyTable thead {\n    position: relative;\n    display: block;\n    z-index: 1000000;\n  }\n.stickyTable tbody {\n    position: relative;\n    display: block;\n  }\n.stickyTable thead tr th:nth-child(1),\n  .stickyTable tbody tr td:nth-child(1) {\n    position: relative;\n    z-index: 1000;\n  }\ntbody {\n    overflow: hidden;\n  }\ntd, th {\n    text-align: left;\n    height: 14px;\t\n    min-width: 100px;\n    max-width:200px;\n    color: #3C3C3C;\t\n    font-family: Roboto;\t\n    font-size: 12px;\t\n    font-weight: 500;\t\n    letter-spacing: 1.1px;\t\n    line-height: 14px;\n    padding: 15px 10px;\n  }\nth{ \n    background-color:rgba(236, 236, 236, 0.97);\n    text-transform: uppercase;\n  }\ntd{\n    vertical-align:middle;\n    border-bottom: solid 1px rgba(228, 224, 224, 0.56);\n  }\ntbody tr:hover {\n    background: rgba(228, 224, 224, 0.20);\n  }\ntr.dataRow:nth-child(even) td {\n    background-color: rgba(255, 255, 255, 0.87);\n  }\ntr.dataRow:nth-child(odd) td {\n  background-color: rgba(255, 255, 255, 0.95)\n  }\n.text-link{\n    color: #007AB7;\n    text-decoration: underline;\n    cursor: pointer;\n    font-size: 13px;\n  }\n.min-col-table{\n    min-width: 180px;\n    /* border-left: 1px solid rgba(234, 227, 227, 0.36) */\n  }\n.min-5 { min-width: 5px; }\n.min-10 { min-width: 10px; }\n.min-25 { min-width: 25px; }\n.min-50 { min-width: 50px; }\n.min-75 { min-width: 75px; }\n.min-100 { min-width: 100px; }\n.min-125 { min-width: 125px; }\n.min-150 { min-width: 150px; }\n.min-175 { min-width: 175px; }\n.min-180{min-width: 180px;}\n.min-200 { min-width: 200px; }\nh1{\n    text-transform: uppercase;\n    margin-bottom: 10px;\n    text-align: left;\n    /* padding: 8px; */\n    height: 14px;\t\n    min-width: 150px;\n    max-width:250px;\n    color: #3C3C3C;\t\n    font-family: Roboto;\t\n    font-size: 14px;\t\n    font-weight: 500;\t\n    letter-spacing: 1.1px;\t\n    line-height: 14px;\n  }\n.thead{\n    background-color: rgba(255,255,255,0.3);\n   }\n.tbl-content{\n    height:300px;\n    overflow-x:auto;\n    margin-top: 0px;\n    border: 1px solid rgba(255,255,255,0.3);\n  }\n/* demo styles */\n/*  menu overlay for table */\n.table-menu-overlay{\n    position: absolute;\n    display: flex;\n    flex-grow: 1;\n    max-height: 450px;\n    width: 100%;\n    width: calc(100% - 18px);\n    height: 100%;\n    background: rgba(179, 179, 179, 0.48);\n    z-index: 100000000;\n}\n.table-menu-container{\n    width:240px;\n    height: 100%;\n    background: rgba(179, 179, 179, 0.48);\n    overflow-y: auto;\n}\n.table-menu-items{\n  height: 20px;\n  vertical-align: middle;\n  background: rgba(48, 50, 50, 0.35);\n  padding: 12px 10px;\n  color: whitesmoke;\n  border-bottom: 1px solid rgba(181, 179, 179, 0.5);\n  position: relative;\n  font-family: Roboto;\n  border-collapse: collapse;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 1.1px;\n}\n/*  Top and Bottom Option */\n.table-top-option-container,\n  .table-bottom-option-container{\n    background: white;\n    position: relative;\n    height: 40px;\n    padding: 1px 10px;\n    display: flex;\n  }\n.table-top-option-container{\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09), 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 1px -2px rgba(0,0,0,.12);\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n  }\n.table-bottom-option-container{\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09), 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 1px -2px rgba(0,0,0,.12);\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n/*  percentage graph available */\n.percentage-graph-conainer{\n      min-width: 100px;\n      overflow: hidden;\n      height: 20px;\n      min-height: 20px;\n      padding: 1px 2px;\n      margin-top: -10px;\n      margin-bottom: -10px;\n      border: 1px solid rgba(128, 128, 128, 0.23921568627450981);\n    }\n.percentage-graph-text{\n      margin-top: -20px;\n      height: 20px;\n      width: 100%;\n      z-index: 1;\n      color: grey;\n      text-align: center;\n      /* padding: 3px; */\n      display: flex;\n      flex-grow: 1;\n      align-items: center;\n      justify-content: center;\n    }\n/* Icon Field with text css */\n.table-row-td-icon{\n      z-index: 100;\n    border-radius: 20px;\n    padding: 5px 8px;\n    height: 20px;\n    width: 20px;\n    margin-top: -9px;\n    margin-bottom: -8px;\n    }\n.table-row-selected-color{\n      background: rgba(228, 224, 224, 0.20);\n      box-shadow: inset 1px 1px 2px 3px rgba(208, 200, 200, 0.21), \n      inset 0px -4px 5px 2px rgba(232, 227, 227, 0.15), \n      inset 3px -4px 1px 1px rgba(165, 155, 155, 0.06)\n    }\n.table-row-td-selection-color{\n      box-shadow: inset -1px 0px 5px 5px rgba(208, 200, 200, 0.21), \n      inset 0px 8px 13px 9px rgba(232, 227, 227, 0.15), \n      inset -1px 4px 1px 1px rgba(165, 155, 155, 0.06);\n    }\n/* Sorting Order */\n.header-with-sorting.ascending:after{\n      content: '\\25B2';\n      font-size: 10px;\n      vertical-align: middle;\n      position: absolute;\n      color: rgba(178, 186, 189, 0.6);\n      font-family: Roboto;\n      float: right;\n      margin-left: 20px;\n        /* padding: 1px; */\n        padding-left: 3px;\n        width: 13px;\n        height: 15px;\n      display: inline-block;\n      top: calc((100% - 14px) / 2 );\n      /* border: 1px solid rgba(208, 192, 192, 0.72); */\n      border-radius: 22px;\n    }\n.header-with-sorting.descending:after{\n      content: '\\25B2';\n      font-size: 10px;\n      vertical-align: middle;\n      position: absolute;\n      color: rgba(178, 186, 189, 0.6);\n      font-family: Roboto;\n      float: right;\n      margin-left: 20px;\n         /* padding: 1px; */\n    padding-left: 3px;\n    width: 13px;\n    height: 15px;\n      display: inline-block;\n      top: calc((100% - 14px) / 2 );\n      /* border: 1px solid rgba(208, 192, 192, 0.72); */\n      border-radius: 22px;\n      transform: rotate(180deg);\n    }\n.header-with-sorting.active.ascending:after{\n      content: '\\25B2';\n      font-size: 10px;\n      vertical-align: middle;\n      position: absolute;\n      color: rgba(101, 120, 128, 0.6);\n      font-family: Roboto;\n      float: right;\n      margin-left: 20px;\n        /* padding: 1px; */\n        padding-left: 3px;\n        width: 13px;\n        height: 15px;\n      display: inline-block;\n      top: calc((100% - 14px) / 2 );\n      /* border: 1px solid rgba(45, 142, 183, 0.6); */\n      border-radius: 22px;\n    }\n/* .header-with-sorting.ascending:before{\n      content: '\\25BC';\n      opacity: .8;\n      font-size: 9.5px;\n      vertical-align: middle;\n      position: relative;\n      padding-top: 12px;\n      color: rgba(0, 122, 183, 0.6);\n      font-family: Roboto;\n      float: right;\n      right: 10.5px;\n\n  \n  } */\n/* for custom scrollbar for webkit browser*/\n::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.13);\n        border-radius: 10px;\n  }\n::-webkit-scrollbar-thumb {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.30);\n    border-radius: 10px;\n  }\n.table-input{\n    border: 1px solid #ddd5d5;\n    border-radius: 3px;\n    height: 35px;\n    margin-top: -15px;\n    margin-left: -6px;\n    width: calc(100% - 10px);\n    display: flex;\n    margin-bottom: -15px;\n    outline: none;\n    font-size: 16px;\n    font-weight: normal;\n    font-family: Roboto;\n    font-size: 13px;\n    font-weight: 500;\n    letter-spacing: 1.1px;\n    padding-left: 10px;\n    padding-right: 10px;\n    flex-grow: 1;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktdGFibGUvYW5ndWktdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw0R0FBNEc7SUFDNUcsOENBQThDOztJQUU5Qyw4QkFBOEI7R0FDL0I7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsaUNBQWlDO0dBQ2xDO0FBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtHQUNsQjtBQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7R0FDaEI7QUFFRDs7SUFFRSxtQkFBbUI7SUFDbkIsY0FBYztHQUNmO0FBRUQ7SUFDRSxpQkFBaUI7R0FDbEI7QUFFRDtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7QUFDRDtJQUNFLDJDQUEyQztJQUMzQywwQkFBMEI7R0FDM0I7QUFDRDtJQUNFLHNCQUFzQjtJQUN0QixtREFBbUQ7R0FDcEQ7QUFFRDtJQUNFLHNDQUFzQztHQUN2QztBQUVEO0lBQ0UsNENBQTRDO0dBQzdDO0FBRUQ7RUFDQSwyQ0FBMkM7R0FDMUM7QUFDRDtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtHQUNqQjtBQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLHNEQUFzRDtHQUN2RDtBQUVILFNBQVMsZUFBZSxFQUFFO0FBQzFCLFVBQVUsZ0JBQWdCLEVBQUU7QUFDNUIsVUFBVSxnQkFBZ0IsRUFBRTtBQUM1QixVQUFVLGdCQUFnQixFQUFFO0FBQzVCLFVBQVUsZ0JBQWdCLEVBQUU7QUFDNUIsV0FBVyxpQkFBaUIsRUFBRTtBQUM5QixXQUFXLGlCQUFpQixFQUFFO0FBQzlCLFdBQVcsaUJBQWlCLEVBQUU7QUFDOUIsV0FBVyxpQkFBaUIsRUFBRTtBQUM5QixTQUFTLGlCQUFpQixDQUFDO0FBQzNCLFdBQVcsaUJBQWlCLEVBQUU7QUFFOUI7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7R0FDbkI7QUFFRDtJQUNFLHdDQUF3QztJQUN4QztBQUNGO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsd0NBQXdDO0dBQ3pDO0FBR0QsaUJBQWlCO0FBRWpCLDZCQUE2QjtBQUUvQjtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxpQkFBaUI7Q0FDcEI7QUFDRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0RBQWtEO0VBQ2xELG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0NBQ3ZCO0FBS0QsNEJBQTRCO0FBQzFCOztJQUVFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0dBQ2Y7QUFFRDtJQUNFLDRHQUE0RztJQUM1Ryw0QkFBNEI7SUFDNUIsNkJBQTZCO0dBQzlCO0FBRUQ7SUFDRSw0R0FBNEc7SUFDNUcsK0JBQStCO0lBQy9CLGdDQUFnQztHQUNqQztBQUlILGlDQUFpQztBQUU3QjtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQiwyREFBMkQ7S0FDNUQ7QUFFRDtNQUNFLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsWUFBWTtNQUNaLFdBQVc7TUFDWCxZQUFZO01BQ1osbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsYUFBYTtNQUNiLG9CQUFvQjtNQUNwQix3QkFBd0I7S0FDekI7QUFFRCw4QkFBOEI7QUFDOUI7TUFDRSxhQUFhO0lBQ2Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7S0FDbkI7QUFFRDtNQUNFLHNDQUFzQztNQUN0Qzs7c0RBRWdEO0tBQ2pEO0FBQ0Q7TUFDRTs7dURBRWlEO0tBQ2xEO0FBRUQsbUJBQW1CO0FBQ25CO01BQ0UsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGdDQUFnQztNQUNoQyxvQkFBb0I7TUFDcEIsYUFBYTtNQUNiLGtCQUFrQjtRQUNoQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixhQUFhO01BQ2Ysc0JBQXNCO01BQ3RCLDhCQUE4QjtNQUM5QixrREFBa0Q7TUFDbEQsb0JBQW9CO0tBQ3JCO0FBQ0Q7TUFDRSxpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsZ0NBQWdDO01BQ2hDLG9CQUFvQjtNQUNwQixhQUFhO01BQ2Isa0JBQWtCO1NBQ2YsbUJBQW1CO0lBQ3hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtNQUNYLHNCQUFzQjtNQUN0Qiw4QkFBOEI7TUFDOUIsa0RBQWtEO01BQ2xELG9CQUFvQjtNQUtwQiwwQkFBMEI7S0FDM0I7QUFFRDtNQUNFLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixnQ0FBZ0M7TUFDaEMsb0JBQW9CO01BQ3BCLGFBQWE7TUFDYixrQkFBa0I7UUFDaEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osYUFBYTtNQUNmLHNCQUFzQjtNQUN0Qiw4QkFBOEI7TUFDOUIsZ0RBQWdEO01BQ2hELG9CQUFvQjtLQUNyQjtBQUNEOzs7Ozs7Ozs7Ozs7O01BYUU7QUFFSiw0Q0FBNEM7QUFFNUM7SUFDRSxXQUFXO0lBQ1gsWUFBWTtHQUNiO0FBQ0Q7SUFFRSw4Q0FBOEM7UUFDMUMsb0JBQW9CO0dBQ3pCO0FBQ0Q7SUFFRSw4Q0FBOEM7SUFDOUMsb0JBQW9CO0dBQ3JCO0FBQ0Q7SUFDRSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7R0FDZCIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLXRhYmxlL2FuZ3VpLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4udGFibGUtc2Nyb2xsLWNvbnRhaW5lciB7XG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICAgIC8qIG1hcmdpbjogMTBweCAxMHB4OyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDApLCAwcHggMHB4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7ICovXG5cbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTsgKi9cbiAgfVxuIFxuICB0YWJsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KTtcbiAgICAvKiBmb250LXZhcmlhbnQ6IGFsbC1zbWFsbC1jYXBzOyAqL1xuICAgIC8qIGZvbnQtdmFyaWFudDogdGl0bGluZy1jYXBzOyAqL1xuICB9XG4gIFxuICAuc3RpY2t5VGFibGUgdGhlYWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xuICB9XG4gIFxuICAuc3RpY2t5VGFibGUgdGJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLnN0aWNreVRhYmxlIHRoZWFkIHRyIHRoOm50aC1jaGlsZCgxKSxcbiAgLnN0aWNreVRhYmxlIHRib2R5IHRyIHRkOm50aC1jaGlsZCgxKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIHRib2R5IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICB0ZCwgdGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgaGVpZ2h0OiAxNHB4O1x0XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6MjAwcHg7XG4gICAgY29sb3I6ICMzQzNDM0M7XHRcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1x0XG4gICAgZm9udC1zaXplOiAxMnB4O1x0XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjFweDtcdFxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgfVxuICB0aHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzNiwgMjM2LCAyMzYsIDAuOTcpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgdGR7XG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDIyOCwgMjI0LCAyMjQsIDAuNTYpO1xuICB9XG4gIFxuICB0Ym9keSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjgsIDIyNCwgMjI0LCAwLjIwKTtcbiAgfVxuICBcbiAgdHIuZGF0YVJvdzpudGgtY2hpbGQoZXZlbikgdGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XG4gIH1cbiAgXG4gIHRyLmRhdGFSb3c6bnRoLWNoaWxkKG9kZCkgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpXG4gIH1cbiAgLnRleHQtbGlua3tcbiAgICBjb2xvcjogIzAwN0FCNztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5taW4tY29sLXRhYmxle1xuICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDIzNCwgMjI3LCAyMjcsIDAuMzYpICovXG4gIH1cblxuLm1pbi01IHsgbWluLXdpZHRoOiA1cHg7IH1cbi5taW4tMTAgeyBtaW4td2lkdGg6IDEwcHg7IH1cbi5taW4tMjUgeyBtaW4td2lkdGg6IDI1cHg7IH1cbi5taW4tNTAgeyBtaW4td2lkdGg6IDUwcHg7IH1cbi5taW4tNzUgeyBtaW4td2lkdGg6IDc1cHg7IH1cbi5taW4tMTAwIHsgbWluLXdpZHRoOiAxMDBweDsgfVxuLm1pbi0xMjUgeyBtaW4td2lkdGg6IDEyNXB4OyB9XG4ubWluLTE1MCB7IG1pbi13aWR0aDogMTUwcHg7IH1cbi5taW4tMTc1IHsgbWluLXdpZHRoOiAxNzVweDsgfVxuLm1pbi0xODB7bWluLXdpZHRoOiAxODBweDt9XG4ubWluLTIwMCB7IG1pbi13aWR0aDogMjAwcHg7IH1cblxuaDF7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLyogcGFkZGluZzogOHB4OyAqL1xuICAgIGhlaWdodDogMTRweDtcdFxuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOjI1MHB4O1xuICAgIGNvbG9yOiAjM0MzQzNDO1x0XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcdFxuICAgIGZvbnQtc2l6ZTogMTRweDtcdFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgICBsZXR0ZXItc3BhY2luZzogMS4xcHg7XHRcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgfVxuXG4gIC50aGVhZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gICB9XG4gIC50YmwtY29udGVudHtcbiAgICBoZWlnaHQ6MzAwcHg7XG4gICAgb3ZlcmZsb3cteDphdXRvO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gIH1cbiAgXG4gIFxuICAvKiBkZW1vIHN0eWxlcyAqL1xuXG4gIC8qICBtZW51IG92ZXJsYXkgZm9yIHRhYmxlICovXG4gIFxuLnRhYmxlLW1lbnUtb3ZlcmxheXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LWhlaWdodDogNDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE4cHgpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3OSwgMTc5LCAxNzksIDAuNDgpO1xuICAgIHotaW5kZXg6IDEwMDAwMDAwMDtcbn1cbi50YWJsZS1tZW51LWNvbnRhaW5lcntcbiAgICB3aWR0aDoyNDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNzksIDE3OSwgMTc5LCAwLjQ4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnRhYmxlLW1lbnUtaXRlbXN7XG4gIGhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogcmdiYSg0OCwgNTAsIDUwLCAwLjM1KTtcbiAgcGFkZGluZzogMTJweCAxMHB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTgxLCAxNzksIDE3OSwgMC41KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjFweDtcbn1cblxuXG5cblxuLyogIFRvcCBhbmQgQm90dG9tIE9wdGlvbiAqL1xuICAudGFibGUtdG9wLW9wdGlvbi1jb250YWluZXIsXG4gIC50YWJsZS1ib3R0b20tb3B0aW9uLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDFweCAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC50YWJsZS10b3Atb3B0aW9uLWNvbnRhaW5lcntcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDApLCAwcHggMHB4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIC50YWJsZS1ib3R0b20tb3B0aW9uLWNvbnRhaW5lcntcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDkpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDApLCAwcHggMHB4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgfVxuXG5cblxuLyogIHBlcmNlbnRhZ2UgZ3JhcGggYXZhaWxhYmxlICovXG5cbiAgICAucGVyY2VudGFnZS1ncmFwaC1jb25haW5lcntcbiAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgIHBhZGRpbmc6IDFweCAycHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIzOTIxNTY4NjI3NDUwOTgxKTtcbiAgICB9XG5cbiAgICAucGVyY2VudGFnZS1ncmFwaC10ZXh0e1xuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBjb2xvcjogZ3JleTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC8qIHBhZGRpbmc6IDNweDsgKi9cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyogSWNvbiBGaWVsZCB3aXRoIHRleHQgY3NzICovXG4gICAgLnRhYmxlLXJvdy10ZC1pY29ue1xuICAgICAgei1pbmRleDogMTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICAgIH1cblxuICAgIC50YWJsZS1yb3ctc2VsZWN0ZWQtY29sb3J7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyOCwgMjI0LCAyMjQsIDAuMjApO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggM3B4IHJnYmEoMjA4LCAyMDAsIDIwMCwgMC4yMSksIFxuICAgICAgaW5zZXQgMHB4IC00cHggNXB4IDJweCByZ2JhKDIzMiwgMjI3LCAyMjcsIDAuMTUpLCBcbiAgICAgIGluc2V0IDNweCAtNHB4IDFweCAxcHggcmdiYSgxNjUsIDE1NSwgMTU1LCAwLjA2KVxuICAgIH1cbiAgICAudGFibGUtcm93LXRkLXNlbGVjdGlvbi1jb2xvcntcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMHB4IDVweCA1cHggcmdiYSgyMDgsIDIwMCwgMjAwLCAwLjIxKSwgXG4gICAgICBpbnNldCAwcHggOHB4IDEzcHggOXB4IHJnYmEoMjMyLCAyMjcsIDIyNywgMC4xNSksIFxuICAgICAgaW5zZXQgLTFweCA0cHggMXB4IDFweCByZ2JhKDE2NSwgMTU1LCAxNTUsIDAuMDYpO1xuICAgIH1cblxuICAgIC8qIFNvcnRpbmcgT3JkZXIgKi9cbiAgICAuaGVhZGVyLXdpdGgtc29ydGluZy5hc2NlbmRpbmc6YWZ0ZXJ7XG4gICAgICBjb250ZW50OiAnXFwyNUIyJztcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb2xvcjogcmdiYSgxNzgsIDE4NiwgMTg5LCAwLjYpO1xuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAvKiBwYWRkaW5nOiAxcHg7ICovXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdG9wOiBjYWxjKCgxMDAlIC0gMTRweCkgLyAyICk7XG4gICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwOCwgMTkyLCAxOTIsIDAuNzIpOyAqL1xuICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICB9XG4gICAgLmhlYWRlci13aXRoLXNvcnRpbmcuZGVzY2VuZGluZzphZnRlcntcbiAgICAgIGNvbnRlbnQ6ICdcXDI1QjInO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbG9yOiByZ2JhKDE3OCwgMTg2LCAxODksIDAuNik7XG4gICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAvKiBwYWRkaW5nOiAxcHg7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdG9wOiBjYWxjKCgxMDAlIC0gMTRweCkgLyAyICk7XG4gICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwOCwgMTkyLCAxOTIsIDAuNzIpOyAqL1xuICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIH1cblxuICAgIC5oZWFkZXItd2l0aC1zb3J0aW5nLmFjdGl2ZS5hc2NlbmRpbmc6YWZ0ZXJ7XG4gICAgICBjb250ZW50OiAnXFwyNUIyJztcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb2xvcjogcmdiYSgxMDEsIDEyMCwgMTI4LCAwLjYpO1xuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAvKiBwYWRkaW5nOiAxcHg7ICovXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdG9wOiBjYWxjKCgxMDAlIC0gMTRweCkgLyAyICk7XG4gICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ1LCAxNDIsIDE4MywgMC42KTsgKi9cbiAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgfVxuICAgIC8qIC5oZWFkZXItd2l0aC1zb3J0aW5nLmFzY2VuZGluZzpiZWZvcmV7XG4gICAgICBjb250ZW50OiAnXFwyNUJDJztcbiAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgZm9udC1zaXplOiA5LjVweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDEyMiwgMTgzLCAwLjYpO1xuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHJpZ2h0OiAxMC41cHg7XG5cbiAgXG4gIH0gKi9cblxuICAvKiBmb3IgY3VzdG9tIHNjcm9sbGJhciBmb3Igd2Via2l0IGJyb3dzZXIqL1xuICBcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgfSBcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9IFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMwKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAudGFibGUtaW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDVkNTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS4xcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgZmxleC1ncm93OiAxO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-table/angui-table.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-table/angui-table.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\n\t<div class=\"table-top-option-container\">\n\t\t<h1 (click)=\"taggleTableMenu()\">Fixed Table header</h1>\n\t</div>\n\t<div class=\"table-scroll-container\" (scroll)=\"divScroll($event)\">\n\t\t<div class=\"table-menu-overlay\" [@fade-in-overlay] *ngIf=\"expanded\">\n\t\t\t<!-- <div >close</div> -->\n\t\t\t<div class=\"table-menu-container\" [@toggleMenu]=\"expanded ? 'expanded': 'collapsed'\">\n\t\t\t\t<div class=\"table-menu-items\" (click)=\"taggleTableMenu()\"> Menu 1</div>\n\t\t\t\t<div class=\"table-menu-items\" (click)=\"taggleTableMenu()\"> Menu 2</div>\n\t\t\t\t<div class=\"table-menu-items\" (click)=\"taggleTableMenu()\"> Menu 3</div>\n\t\t\t\t<div class=\"table-menu-items\" (click)=\"taggleTableMenu()\"> Menu 4</div>\n\t\t\t\t<div class=\"table-menu-items\" (click)=\"taggleTableMenu()\"> Menu 5</div>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<table #dataTable class=\"stickyTable\">\n\t\t\t<thead [style.top.px]=\"headFixPosition\">\n\t\t\t\t<tr class=\"header\" #theadTable>\n\t\t\t\t\t<th [style.left.px]=\"leftPos\" class=\"min-col-table\"\n\t\t\t\t\t\t*ngFor=\"let config of tableDataConfigs;let i= index;\">\n\t\t\t\t\t\t<div class=\"header-with-sorting ascending\">{{config.headerName}}</div>\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr class=\"dataRow\" (click)=\"emitOnRowSelect(response,i)\" [id]=\"tableName+'tableBodyRow'+i\"\n\t\t\t\t\t[ngClass]=\"onRowSelectionColor(disableBody,indexSelectedRow,indexSerachSelectedRow,i)\"\n\t\t\t\t\t*ngFor=\"let dataModel of dataSetForTable;trackBy: trackByIds; let i = index; let first = first;\">\n\t\t\t\t\t<td  class=\"sticky-column\"[style.left.px]=\"leftPos\" class=\"min-col-table\"\n\t\t\t\t\t(click)=\"selectedRowCol(i,j)\" [id]=\"'tableBodyRow'+tableName+i+j\"\n\t\t\t\t\t\t*ngFor=\"let config of tableDataConfigs;trackBy: trackByIds;let j= index;\">\n\n\t\t\t\t\t\t<img *ngIf=\"config.isIconAvailable\" class=\"table-row-td-icon\"\n\t\t\t\t\t\t\ttooltip=\"this will be displayed as a tooltip\" style=\"z-index: 100;  border-radius: 20px;\"\n\t\t\t\t\t\t\t[src]=\"config.iconUrl\" />\n\t\t\t\t\t\t<img *ngIf=\"config.showOnlyIcon\" class=\"table-row-td-icon\"\n\t\t\t\t\t\t\ttooltip=\"this will be displayed as a tooltip\" style=\"z-index: 100;  border-radius: 20px;\"\n\t\t\t\t\t\t\t[src]=\"config.iconUrl\" />\n\t\t\t\t\t\t<span *ngIf=\"config.isLinkField && !config.showOnlyIcon\" class=\"text-link\"\n\t\t\t\t\t\t\t(click)=\"clickOnLink(config.linkURL)\"\n\t\t\t\t\t\t\tstyle=\"vertical-align: middle;\">{{dataModel[config.rowColField]}}</span>\n\n\t\t\t\t\t\t<span *ngIf=\"config.isLabelFeild\" [style.color]=\"config.textColor\" (click)=\"clickOnLink(config.linkURL)\"\n\t\t\t\t\t\t\tstyle=\"vertical-align: middle;\">{{dataModel[config.rowColField]}}</span>\n\n\t\t\t\t\t\t<div *ngIf=\"config.isGrapghField\" class=\"percentage-graph-conainer\">\n\t\t\t\t\t\t\t<div style=\"height:100%;\" [style.width.%]=\"dataModel[config.rowColField]\"\n\t\t\t\t\t\t\t\t[style.background-color]=\"getGraphFeldColor(dataModel[config.rowColField])\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"percentage-graph-text\">{{dataModel[config.rowColField]}}%</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input *ngIf = \"config.isEditableFiled\" \n\t\t\t\t\t\t(focus) = \"onInputFocus($event,dataModel,config.rowColField,dataModel[config.rowColField])\"\n\t\t\t\t\t\t(keyup) = \"onInputKeyUp($event,dataModel,config.rowColField,dataModel[config.rowColField])\"\n\t\t\t\t\t\t(blur) = \"onInputFeildBlur($event,dataModel,config.rowColField, dataModel[config.rowColField])\" class=\"table-input\"  [value]= \"dataModel[config.rowColField]\"/>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t\t<!-- <tfoot [style.top.px]=\"headFixPosition\">\n      <tr class=\"dataRow\">\n\t\t\t\t<td [style.left.px]=\"leftPos\" *ngFor=\"let config of tableConfigs;let i= index;let first = first;\">\n           <span *ngIf=\"config.isLinkField\" class=\"text-link\" (click)=\"clickOnLink(config.linkURL)\" style=\"vertical-align: middle;\">{{config.headerName}}</span>\n           <span *ngIf=\"!config.isLinkField\"  (click)=\"clickOnLink(config.linkURL)\" style=\"vertical-align: middle;\">{{config.headerName}}</span>\n\t\t\t\t</td>\n\t\t\t</tr>\n    </tfoot> -->\n\t\t</table>\n\t</div>\n\t<div class=\"table-bottom-option-container\">\n\t\t<div style=\"width:20px;height:20px;\">\n\t\t\t<svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\"  style=\"pointer-events: none; display: block;\">\n\t\t\t\t<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path>\n\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<div style=\"width:20px;height:20px;\">\n\t\t\t\t<svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\"  style=\"pointer-events: none; display: block;\">\n\t\t\t\t\t\t<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t\t<div style=\"width:20px;height:20px;\">\n\t\t\t\t\t<svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\"  style=\"pointer-events: none; display: block;\">\n\t\t\t\t\t\t\t<path d=\"M7 6 v12 h2 v-12 h-2z M17.41 7.41L16 6l-6 6 6 6 1.41-1.41L12.83 12z\"></path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"width:20px;height:20px;\">\n\t\t\t\t\t\t<svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\"  style=\"pointer-events: none; display: block;\">\n\t\t\t\t\t\t\t\t<path d=\"M15 6 v12 h2 v-12 h-2z M8 6L6.59 7.41 11.17 12l-4.58 4.59L8 18l6-6z\"></path>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-table/angui-table.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-table/angui-table.component.ts ***!
  \************************************************************************/
/*! exports provided: AnguiTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiTableComponent", function() { return AnguiTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _an_gui_components_angui_table_table_models_table_dummy_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../an-gui-components/angui-table/table-models/table-dummy-configuration */ "./src/app/an-gui-components/angui-table/table-models/table-dummy-configuration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnguiTableComponent = /** @class */ (function () {
    function AnguiTableComponent(zone) {
        this.zone = zone;
        this.tableName = "";
        this.linkTextClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.name = 'Angular';
        this.bodyWidth = 0;
        this.leftPos = 0;
        this.headFixPosition = 0;
        this.headFixPositionTop = 0;
        this.expanded = false;
        this.rowselectionColrNeeded = true;
        this.indexSelectedRow = -1;
        this.rowselectionColr = true;
        this.selectedRowColIndex = "";
    }
    AnguiTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dummyConfig = new _an_gui_components_angui_table_table_models_table_dummy_configuration__WEBPACK_IMPORTED_MODULE_2__["DummyTableConfig"]();
        this.tableDataConfigs = dummyConfig.tableConfigs;
        this.dataSetForTable = dummyConfig.dataModelForTableSmall;
        setInterval(function () {
            // this.zone.runOutsideAngular(() => {
            _this.dataSetForTable.push(dummyConfig.dataModelForTableSmall[0]);
            // });
            //  },8000);
            //  setInterval(() =>{
            //   this.zone.runOutsideAngular(() => {
            //   this.dataSetForTable.forEach(element => {
            //     console.log(element)
            //     element['lane8'] = element['lane8']+1
            //   });
            // });
        }, 2000);
    };
    AnguiTableComponent.prototype.trackByIds = function (index, item) {
        return item.id;
    };
    AnguiTableComponent.prototype.divScroll = function ($event) {
        var _this = this;
        try {
            this.zone.runOutsideAngular(function () {
                _this.headFixPosition = $event.srcElement.scrollTop;
                _this.headFixPositionTop = -$event.srcElement.scrollTop;
                _this.leftPos = $event.srcElement.scrollLeft;
                _this.leftHeadPos = -$event.srcElement.scrollLeft;
            });
        }
        catch (err) {
        }
    };
    AnguiTableComponent.prototype.clickOnLink = function (colField, link) {
        this.linkTextClicked.emit({ colField: colField, link: link });
    };
    AnguiTableComponent.prototype.taggleTableMenu = function () {
        this.expanded = !this.expanded;
    };
    AnguiTableComponent.prototype.getGraphFeldColor = function (fieldValue) {
        // if (this.graphFeildThreshold != null && this.graphFeildThreshold != "") {
        //   return (parseFloat(fieldValue) >= parseFloat(this.graphFeildThreshold)) ? 'red' : 'black'
        // }
        return (parseFloat(fieldValue) >= 21) ? 'red' : 'black';
    };
    AnguiTableComponent.prototype.emitOnRowSelect = function (response, index) {
        if (this.rowselectionColrNeeded) {
            this.indexSelectedRow = index;
            // this.emitSelectedData.emit(response);
            // this.rowselectionColr = !this.rowselectionColr;
        }
    };
    AnguiTableComponent.prototype.onRowSelectionColor = function (disableBody, indxSelectedRow, indxSerachSelectedRow, i) {
        var colorClass = '';
        if (disableBody == true) {
            colorClass += ' enableClass';
        }
        else {
            colorClass += ' disableClass';
        }
        if (this.rowselectionColrNeeded) {
            if (indxSelectedRow == i || indxSerachSelectedRow == i) {
                colorClass += ' table-row-selected-color';
            }
            else {
                colorClass += '';
            }
        }
        return colorClass;
    };
    AnguiTableComponent.prototype.selectedRowCol = function (i, j) {
        var currentSelectedColId = 'tableBodyRow' + this.tableName + i + j;
        document.getElementById('tableBodyRow' + this.tableName + i + j).style.boxShadow = "inset rgba(39, 94, 121, 0.13) 0px 1px 2px 1px";
        if (this.previousIdColSelecedId != "" && this.previousIdColSelecedId != null && currentSelectedColId != this.previousIdColSelecedId) {
            document.getElementById(this.previousIdColSelecedId).style.boxShadow = "none";
        }
        // console.log( document.getElementById('tableBodyRow'+i+j).style.boxShadow )
        this.previousIdColSelecedId = 'tableBodyRow' + this.tableName + i + j;
    };
    AnguiTableComponent.prototype.getSelectedRowColumnColor = function (selectedRowColIndex, j) {
        var colorClass = '';
        if (this.rowselectionColrNeeded) {
            if (selectedRowColIndex == j) {
                colorClass += ' table-row-selected-color';
            }
            else {
                colorClass += '';
            }
        }
        return colorClass;
    };
    AnguiTableComponent.prototype.showNoDataAvaiable = function (dataModel) {
        if (dataModel == null || dataModel == undefined) {
            return true;
        }
        else {
            if (dataModel.length == 0) {
                return true;
            }
            return false;
        }
    };
    AnguiTableComponent.prototype.showDataAvaiableMsg = function (dataModel) {
        if (dataModel == null || dataModel == undefined) {
            return "Fetching Data from Server. Please Wait.";
        }
        else {
            if (dataModel.length == 0) {
                return "No Data Available";
            }
            return "Fetching Data from Server. Please Wait.";
        }
    };
    AnguiTableComponent.prototype.onInputFocus = function ($event, rowResponse, rowColumnField, currentFieldValue) {
    };
    AnguiTableComponent.prototype.onInputFeildBlur = function (event, rowResponse, rowColumnField, currentFieldValue) {
    };
    AnguiTableComponent.prototype.onInputKeyUp = function (event, rowResponse, rowColumnField, currentFieldValue) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiTableComponent.prototype, "tableName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AnguiTableComponent.prototype, "linkTextClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AnguiTableComponent.prototype, "divScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiTableComponent.prototype, "rowselectionColrNeeded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiTableComponent.prototype, "indexSelectedRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiTableComponent.prototype, "rowselectionColr", void 0);
    AnguiTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-table',
            template: __webpack_require__(/*! ./angui-table.component.html */ "./src/app/an-gui-components/angui-table/angui-table.component.html"),
            styles: [__webpack_require__(/*! ./angui-table.component.css */ "./src/app/an-gui-components/angui-table/angui-table.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggleMenu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0,
                        width: 0, height: '100%' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, width: '220px', height: '100%' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.2,0.0,0.1,.5)')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fade-in-overlay", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, width: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("*", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, width: 'calc(100% - 18px)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void <=> *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".2s ease")]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("* <=> void", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".1s ease")])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AnguiTableComponent);
    return AnguiTableComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-table/table-models/table-dummy-configuration.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-table/table-models/table-dummy-configuration.ts ***!
  \*****************************************************************************************/
/*! exports provided: DummyTableConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyTableConfig", function() { return DummyTableConfig; });
var DummyTableConfig = /** @class */ (function () {
    function DummyTableConfig() {
        this.tableMainConfigs = [
            {
                headerConfig: {
                    headerSection: 100
                }
            },
            {
                headerConfig: {
                    headerWidth: 100
                }
            },
            {
                headerConfig: {
                    headerWidth: 100
                }
            }
        ];
        this.tableConfigs = [
            {
                headerName: 'Feature Number 1',
                rowColField: 'lane1',
                isLabelFeild: true,
                isLinkField: false,
                linkURL: '',
                sortingEnbled: true,
                currentSortType: 'sortNumber',
                isGrapghField: false,
                showOnlyIcon: false,
                isIconAvailable: true,
                iconUrl: 'assets/icons/tick-light-green.ico',
                textColor: 'black',
                width: 100,
            },
            {
                headerName: 'Feature Number 2',
                rowColField: 'lane2',
                isLinkField: false,
                isLabelFeild: false,
                linkURL: '',
                sortingEnbled: true,
                currentSortType: 'sortNumber',
                isGrapghField: false,
                showOnlyIcon: true,
                iconUrl: 'assets/icons/tick-light-green.ico',
                textColor: 'black',
                width: 100,
            },
            {
                headerName: 'Feature Number 3',
                rowColField: 'lane3',
                isLinkField: true,
                isLabelFeild: false,
                linkURL: '',
                sortingEnbled: true,
                currentSortType: 'sortNumber',
                isGrapghField: false,
                showOnlyIcon: false,
                iconUrl: '',
                textColor: 'Blue',
                width: 100,
            },
            {
                headerName: 'Feature Number 4',
                rowColField: 'lane4',
                isLinkField: false,
                isLabelFeild: true,
                linkURL: '',
                sortingEnbled: true,
                currentSortType: 'sortNumber',
                isGrapghField: false,
                showOnlyIcon: false,
                iconUrl: '',
                textColor: 'Red',
                width: 100,
            },
            {
                headerName: 'Feature Number 5',
                rowColField: 'lane5',
                isLinkField: false,
                isLabelFeild: false,
                linkURL: '',
                sortingEnbled: true,
                currentSortType: 'sortNumber',
                isGrapghField: false,
                showOnlyIcon: false,
                isEditableFiled: true,
                iconUrl: '',
                textColor: 'Blue',
                width: 100,
            },
            {
                headerName: 'Feature Number 6',
                rowColField: 'lane6',
                isLinkField: false,
                isLabelFeild: true,
                linkURL: '',
                sortingEnbled: true,
                currentSortType: 'sortNumber',
                isGrapghField: false,
                showOnlyIcon: false,
                iconUrl: '',
                textColor: 'Blue',
                width: 100,
            },
            {
                headerName: 'Feature Number 7',
                rowColField: 'lane7',
                isLinkField: true,
                isLabelFeild: false,
                linkURL: '',
                sortingEnbled: true,
                currentSortType: 'sortNumber',
                isGrapghField: false,
                showOnlyIcon: false,
                width: 100,
            },
            {
                headerName: 'Feature Number 8',
                rowColField: 'lane8',
                isLinkField: false,
                isLabelFeild: false,
                linkURL: '',
                sortingEnbled: true,
                currentSortType: 'sortNumber',
                isGrapghField: true,
                showOnlyIcon: false,
                iconUrl: '',
                textColor: 'Blue',
                width: 100,
            },
        ];
        this.dropDownBoxConfigs = [{
                isDropDownEnabled: false, rowColField: 'lane',
                dropDownValues: '', isKeyValuePairData: false,
                selectedValue: '', dropDownSelectedField: ''
            }];
        this.dataModelForTableSmall = [
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }
        ];
        this.dataModelForTable = [
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Color',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
            {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            }, {
                lane1: "Text with Icon",
                lane2: 2,
                lane3: 'This is link',
                lane4: 'Text Colo',
                lane5: 5,
                lane6: 6,
                lane7: 7,
                lane8: 8
            },
        ];
    }
    DummyTableConfig.prototype.DummyTableConfig = function () {
    };
    return DummyTableConfig;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-tabs/angui-tabs.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/an-gui-components/angui-tabs/angui-tabs.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    -webkit-tap-highlight-color: none;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n    -webkit-tap-highlight-color: transparent;\n    -ms-tap-highlight-color: transparent;\n    -khtml-tap-highlight-color: transparent;\n    -moz-tap-highlight-color: transparent;\n\n}\n.tab-option-contianer{\n    width: 100%;\n    height:45px;\n    display: flex;\n    align-items: flex-start;\n    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04)\n\n}\n.tab-option-contianer.bottom-tab{\n    border-top: 1px solid #e0dddd;\n    border-bottom: 1px solid #e0dddd !important;\n    box-shadow: none !important;\n    padding-bottom: 1px;\n}\n.tab-option-contianer.bottom-tab .tab-options{\n    padding:12px 10px;\n}\n.tab-option-contianer.bottom-tab .tab-options.active[_ngcontent-c10] {\n    color: rgb(7, 168, 248);\n    margin: 3px 10px;\n    text-align: center;\n    padding: 9px 0px 13px 0px;\n    border-bottom: none !important;\n    background-color: rgba(0, 0, 0, 0.1);\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    border-radius: 20px;\n}\n.tab-options{\n   display: block;\n   float:left;\n    flex-grow: 1;\n    padding:10px;\n    /* margin: 3px 10px; */\n    text-align: center;\n    color:grey;\n}\n.tab-options.active{\n    color: rgb(7, 168, 248);\n    margin: 3px 10px;\n    text-align: center;\n    padding: 7px 0px 15px 0px;\n    /* padding-left: 3px; */\n    /* padding-bottom: 15px; */\n    border-bottom: 1px solid rgb(7, 168, 248);\n    background-color: rgba(0, 0, 0, 0.1);\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    }\n.tab-option-contianer.bottom-tab{\n        box-shadow:none;\n        border-bottom: none;\n        background-color:white;\n        border-radius:0px;\n    }\n.tabs-container.bottom-tab{\n        border-top: 1px solid #e0dddd;\n        /* border-bottom: 1px solid #e0dddd; */\n                box-shadow: none !important;\n    }\n.tabs-container{\n    background-color:  white;\n    width: 100%;\n    height: 500px;\n    position: relative;\n    box-sizing: border-box;\n    overflow: hidden;\n    display: flex;\n    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04)\n}\n.tab-content{\n    background-color:  white;\n    display: inline-block;\n    float:left;\n    left:0px;\n    position: relative;\n    width: 100%;\n    height:100%;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    height: 100%;\n  overflow: auto;\n\n}\n.tab-content-place{\n    background-color:  white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    flex-basis: 100%;\n}\n.content{\n    background-color:  white;\n    display: flex;\n    height: 100%;\n    padding: 0px 10px;\n}\n.Tab1{\n    background-color:  white;\n}\n.Tab2{\n    background-color:  white;\n}\n.Tab3{\n    background-color:  white;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWktdGFicy9hbmd1aS10YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsNEJBQTRCLENBQUMsZ0JBQWdCO0lBQzdDLDBCQUEwQixDQUFDLFlBQVksQ0FDWixvQkFBb0I7T0FDNUMsdUJBQXVCLENBQUMsYUFBYTtRQUNwQyxzQkFBc0IsQ0FBQyw0QkFBNEI7WUFDL0Msa0JBQWtCLENBQUM7a0VBQ21DO0lBQzlELHlDQUF5QztJQUN6QyxxQ0FBcUM7SUFDckMsd0NBQXdDO0lBQ3hDLHNDQUFzQzs7Q0FFekM7QUFDRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLHdCQUF3QjtJQUN4QixpRkFBaUY7O0NBRXBGO0FBRUQ7SUFDSSw4QkFBOEI7SUFDOUIsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1QixvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixvQkFBb0I7Q0FDdkI7QUFFRDtHQUNHLGVBQWU7R0FDZixXQUFXO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDtBQUVHO0lBQ0Esd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsNkJBQTZCO0tBQzVCO0FBRUQ7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixrQkFBa0I7S0FDckI7QUFDRDtRQUNJLDhCQUE4QjtRQUM5Qix1Q0FBdUM7Z0JBQy9CLDRCQUE0QjtLQUN2QztBQUVMO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlGQUFpRjtDQUNwRjtBQUNEO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmLGVBQWU7O0NBRWhCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9hbi1ndWktY29tcG9uZW50cy9hbmd1aS10YWJzL2FuZ3VpLXRhYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiBub25lO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tcy10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAta2h0bWwtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLW1vei10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxufVxuLnRhYi1vcHRpb24tY29udGlhbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDo0NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpXG5cbn1cblxuLnRhYi1vcHRpb24tY29udGlhbmVyLmJvdHRvbS10YWJ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGRkZGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGRkZGQgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cblxuLnRhYi1vcHRpb24tY29udGlhbmVyLmJvdHRvbS10YWIgLnRhYi1vcHRpb25ze1xuICAgIHBhZGRpbmc6MTJweCAxMHB4O1xufVxuXG4udGFiLW9wdGlvbi1jb250aWFuZXIuYm90dG9tLXRhYiAudGFiLW9wdGlvbnMuYWN0aXZlW19uZ2NvbnRlbnQtYzEwXSB7XG4gICAgY29sb3I6IHJnYig3LCAxNjgsIDI0OCk7XG4gICAgbWFyZ2luOiAzcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOXB4IDBweCAxM3B4IDBweDtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi50YWItb3B0aW9uc3tcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgZmxvYXQ6bGVmdDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIC8qIG1hcmdpbjogM3B4IDEwcHg7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOmdyZXk7XG59XG5cbiAgICAudGFiLW9wdGlvbnMuYWN0aXZle1xuICAgIGNvbG9yOiByZ2IoNywgMTY4LCAyNDgpO1xuICAgIG1hcmdpbjogM3B4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDdweCAwcHggMTVweCAwcHg7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAzcHg7ICovXG4gICAgLyogcGFkZGluZy1ib3R0b206IDE1cHg7ICovXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig3LCAxNjgsIDI0OCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgIC50YWItb3B0aW9uLWNvbnRpYW5lci5ib3R0b20tdGFie1xuICAgICAgICBib3gtc2hhZG93Om5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MHB4O1xuICAgIH1cbiAgICAudGFicy1jb250YWluZXIuYm90dG9tLXRhYntcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGRkZGQ7XG4gICAgICAgIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBkZGRkOyAqL1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbi50YWJzLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpXG59XG4udGFiLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDpsZWZ0O1xuICAgIGxlZnQ6MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbn1cbi50YWItY29udGVudC1wbGFjZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG59XG4uY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4uVGFiMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG59XG4uVGFiMntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG59XG4uVGFiM3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGU7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-tabs/angui-tabs.component.html":
/*!************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-tabs/angui-tabs.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"getContainerClassName(pageNavBottom)\" *ngIf=\"pageNavBottom\">\n  <div [ngClass]=\"getClassName(i)\" (click)=\"showTab(i,tabs)\" *ngFor=\"let tabs of tabsList; let i = index\">\n    {{tabs.tabName}}\n  </div>\n</div>\n\n<!-- <ng-content>\n\n      </ng-content> -->\n<div [ngClass]=\"getTabsContainerClassName(pageNavBottom)\">\n  <div class=\"tab-content-place\" *ngFor=\"let tabs of tabsList; let i = index\" [@tabMove] =\"tabs.state\" \n   [id]=\"tabs.tabName\">\n      <div class=\"tab-content Tab1\"  *ngIf=\"currentTab == tabs.tabName\" >\n          <ng-template [ngIf]=\"currentTab == tabs.tabName\"  >\n            <div class=\"content\">\n                {{tabs.tabName}}\n            </div>\n          </ng-template>\n        </div>\n  </div>\n\n  <!-- <div class=\"tab-content Tab2\" *ngIf=\"currentTab == 'Tab2'\" [@tabMove] (@tabMove.start)=\"onStart()\" (@tabMove.done)=\"onDone()\"  id=\"Tab2\">\n    <ng-template   [ngIf]=\"currentTab == 'Tab2'\">\n      <div class=\"content\">\n        tab 1\n      </div>\n    </ng-template>\n  </div>\n  <div class=\"tab-content Tab3\" *ngIf=\"currentTab == 'Tab3'\" [@tabMove] (@tabMove.start)=\"onStart()\" (@tabMove.done)=\"onDone()\"  id=\"Tab3\">\n    <ng-template  [ngIf]=\"currentTab == 'Tab3'\">\n      <div class=\"content\">\n        tab 1\n      </div>\n    </ng-template>\n  </div> -->\n</div>\n<div [ngClass]=\"getContainerClassName(pageNavBottom)\" *ngIf=\"!pageNavBottom\">\n  <div [ngClass]=\"getClassName(i)\" (click)=\"showTab(i,tabs)\" *ngFor=\"let tabs of tabsList; let i = index\">\n    {{tabs.tabName}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-tabs/angui-tabs.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/an-gui-components/angui-tabs/angui-tabs.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnguiTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiTabsComponent", function() { return AnguiTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnguiTabsComponent = /** @class */ (function () {
    function AnguiTabsComponent() {
        this.pageNavBottom = false;
        this.tabsList = [{ tabName: "Tab1", active: true, state: 'center' }, { tabName: "Tab2", active: false, state: 'first' },
            { tabName: "Tab3", active: false, state: 'first' }, { tabName: "Tab4", active: false, state: 'first' }, { tabName: "Tab5", active: false, state: 'first' }];
        this.currentTab = "";
        this.previousIndex = 0;
    }
    AnguiTabsComponent.prototype.ngOnInit = function () {
        this.showTab(0, this.tabsList[0]);
    };
    AnguiTabsComponent.prototype.getClassName = function (i) {
        return this.tabsList[i].active ? "tab-options active" : "tab-options";
    };
    AnguiTabsComponent.prototype.getContainerClassName = function (pageNavBottom) {
        return pageNavBottom ? "tab-option-contianer" : "tab-option-contianer  bottom-tab";
    };
    AnguiTabsComponent.prototype.getTabsContainerClassName = function (pageNavBottom) {
        return pageNavBottom ? "tabs-container" : "tabs-container bottom-tab";
    };
    AnguiTabsComponent.prototype.tabClick = function (selectedTab) {
        var _this = this;
        this.tabsList.forEach(function (tab) {
            if (selectedTab.tabName == tab.tabName) {
                tab.active = true;
                _this.currentTab = tab.tabName;
            }
            else {
                tab.active = false;
            }
        });
    };
    AnguiTabsComponent.prototype.showTab = function (index, selectedTab) {
        var _this = this;
        var counter = 0;
        this.tabsList.forEach(function (tab) {
            if (selectedTab.tabName == tab.tabName) {
                tab.active = true;
                _this.currentTab = tab.tabName;
            }
            else {
                tab.active = false;
            }
            if (index == 0) {
                _this.tabsList[index].state = 'center';
                counter += 1;
                _this.previousIndex = 0;
                if (_this.tabsList.length > counter) {
                    _this.tabsList[counter].state = 'first';
                }
            }
        });
        if (this.previousIndex > index) {
            this.tabsList[index].state = 'center';
            this.tabsList[this.previousIndex].state = 'first';
        }
        else if (this.previousIndex < index && this.tabsList[this.previousIndex].state != 'last') {
            this.tabsList[this.previousIndex].state = 'last';
            this.tabsList[index].state = 'center';
        }
        else {
            this.tabsList[this.previousIndex].state = 'first';
            this.tabsList[index].state = 'center';
        }
        this.previousIndex = index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AnguiTabsComponent.prototype, "pageNavBottom", void 0);
    AnguiTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-tabs',
            template: __webpack_require__(/*! ./angui-tabs.component.html */ "./src/app/an-gui-components/angui-tabs/angui-tabs.component.html"),
            styles: [__webpack_require__(/*! ./angui-tabs.component.css */ "./src/app/an-gui-components/angui-tabs/angui-tabs.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('tabMove', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('first', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(100%, 0, 0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('last', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate3d(-100%, 0, 0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('center => first, center => last, first => center, last => center', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiTabsComponent);
    return AnguiTabsComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-toggle-nav-header/angui-toggle-nav-header.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-toggle-nav-header/angui-toggle-nav-header.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLXRvZ2dsZS1uYXYtaGVhZGVyL2FuZ3VpLXRvZ2dsZS1uYXYtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-toggle-nav-header/angui-toggle-nav-header.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-toggle-nav-header/angui-toggle-nav-header.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angui-toggle-nav-header works!\n</p>\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-toggle-nav-header/angui-toggle-nav-header.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-toggle-nav-header/angui-toggle-nav-header.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AnguiToggleNavHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiToggleNavHeaderComponent", function() { return AnguiToggleNavHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnguiToggleNavHeaderComponent = /** @class */ (function () {
    function AnguiToggleNavHeaderComponent() {
    }
    AnguiToggleNavHeaderComponent.prototype.ngOnInit = function () {
    };
    AnguiToggleNavHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angui-toggle-nav-header',
            template: __webpack_require__(/*! ./angui-toggle-nav-header.component.html */ "./src/app/an-gui-components/angui-toggle-nav-header/angui-toggle-nav-header.component.html"),
            styles: [__webpack_require__(/*! ./angui-toggle-nav-header.component.css */ "./src/app/an-gui-components/angui-toggle-nav-header/angui-toggle-nav-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnguiToggleNavHeaderComponent);
    return AnguiToggleNavHeaderComponent;
}());



/***/ }),

/***/ "./src/app/an-gui-components/angui-you-tube-video-player/angui-you-tube-video-player.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-you-tube-video-player/angui-you-tube-video-player.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-player-youtube-container{\n    \n    min-height:100px;\n    height: 500px;\n    display: flex;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    padding: 0px 10px;\n    margin: 10px 0px;\n    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.04);\n}\n\n.video-player-youtube-container iframe{\ndisplay:flex;\nflex-grow: 1;\n\n}\n\n.video-player-youtube-container video{\n    display:flex;\n    flex-grow: 1;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW4tZ3VpLWNvbXBvbmVudHMvYW5ndWkteW91LXR1YmUtdmlkZW8tcGxheWVyL2FuZ3VpLXlvdS10dWJlLXZpZGVvLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrRkFBa0Y7Q0FDckY7O0FBRUQ7QUFDQSxhQUFhO0FBQ2IsYUFBYTs7Q0FFWjs7QUFFRDtJQUNJLGFBQWE7SUFDYixhQUFhOztDQUVoQiIsImZpbGUiOiJzcmMvYXBwL2FuLWd1aS1jb21wb25lbnRzL2FuZ3VpLXlvdS10dWJlLXZpZGVvLXBsYXllci9hbmd1aS15b3UtdHViZS12aWRlby1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1wbGF5ZXIteW91dHViZS1jb250YWluZXJ7XG4gICAgXG4gICAgbWluLWhlaWdodDoxMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLnZpZGVvLXBsYXllci15b3V0dWJlLWNvbnRhaW5lciBpZnJhbWV7XG5kaXNwbGF5OmZsZXg7XG5mbGV4LWdyb3c6IDE7XG5cbn1cblxuLnZpZGVvLXBsYXllci15b3V0dWJlLWNvbnRhaW5lciB2aWRlb3tcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/an-gui-components/angui-you-tube-video-player/angui-you-tube-video-player.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-you-tube-video-player/angui-you-tube-video-player.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-player-youtube-container\" [style.height.px]= \"height\"  *ngIf = \"type == 'YouTube'\">\n  <iframe  [src]=\"getUrl()\"\n  frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n  </iframe>\n</div>\n\n<div class=\"video-player-youtube-container\"  *ngIf = \"type != 'YouTube'\"  [style.height.px]= \"height\">\n  <video controls>\n    <source [src]=\"getUrl()\"  type=\"video/webm\">\n      <source [src]=\"getUrl()\" type=\"video/ogg\">\n        \n        <div >\n          Your browser doesn't support the video format!\n        </div>\n      </video>    \n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/an-gui-components/angui-you-tube-video-player/angui-you-tube-video-player.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/an-gui-components/angui-you-tube-video-player/angui-you-tube-video-player.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AnguiYouTubeVideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiYouTubeVideoPlayerComponent", function() { return AnguiYouTubeVideoPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnguiYouTubeVideoPlayerComponent = /** @class */ (function () {
    function AnguiYouTubeVideoPlayerComponent(sanitizer, cd) {
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.url = "";
        this.height = '';
        this.type = 'YouTube';
        this.bypassedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url.toString());
    }
    AnguiYouTubeVideoPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.cd.detach();
        }, 5000);
    };
    AnguiYouTubeVideoPlayerComponent.prototype.getUrl = function () {
        if (this.type == 'YouTube') {
            return this.bypassedUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.url.toString());
        }
        else {
            return this.bypassedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url.toString());
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiYouTubeVideoPlayerComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AnguiYouTubeVideoPlayerComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnguiYouTubeVideoPlayerComponent.prototype, "type", void 0);
    AnguiYouTubeVideoPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-you-tube-video-player',
            template: __webpack_require__(/*! ./angui-you-tube-video-player.component.html */ "./src/app/an-gui-components/angui-you-tube-video-player/angui-you-tube-video-player.component.html"),
            styles: [__webpack_require__(/*! ./angui-you-tube-video-player.component.css */ "./src/app/an-gui-components/angui-you-tube-video-player/angui-you-tube-video-player.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AnguiYouTubeVideoPlayerComponent);
    return AnguiYouTubeVideoPlayerComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_pages_professional_app_themes_professional_app_themes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/pages/professional-app-themes/professional-app-themes.component */ "./src/app/pages/professional-app-themes/professional-app-themes.component.ts");
/* harmony import */ var _app_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_angui_table_exmples_talble_component_example1_talble_component_example1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/angui-table-exmples/talble-component-example1/talble-component-example1.component */ "./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.ts");
/* harmony import */ var _pages_angui_tabs_exmples_tabs_example1_tabs_example1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/angui-tabs-exmples/tabs-example1/tabs-example1.component */ "./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.ts");
/* harmony import */ var _pages_angui_Buttons_exmples_buttons_radio_check_box_example1_buttons_radio_check_box_example1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component */ "./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.ts");
/* harmony import */ var _pages_angui_label_examples_labels_example1_labels_example1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/angui-label-examples/labels-example1/labels-example1.component */ "./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.ts");
/* harmony import */ var _pages_angui_slider_examples_slider_example1_slider_example1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/angui-slider-examples/slider-example1/slider-example1.component */ "./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.ts");
/* harmony import */ var _pages_angui_alert_examples_alert_example1_alert_example1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/angui-alert-examples/alert-example1/alert-example1.component */ "./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.ts");
/* harmony import */ var _pages_angui_card_examples_card_example1_card_example1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/angui-card-examples/card-example1/card-example1.component */ "./src/app/pages/angui-card-examples/card-example1/card-example1.component.ts");
/* harmony import */ var _pages_angui_slide_show_examples_slide_show_example1_slide_show_example1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component */ "./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.ts");
/* harmony import */ var _pages_angui_input_examples_input_feild_example1_input_feild_example1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/angui-input-examples/input-feild-example1/input-feild-example1.component */ "./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.ts");
/* harmony import */ var _pages_angui_popup_menu_examples_popup_menu_example1_popup_menu_example1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component */ "./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.ts");
/* harmony import */ var _pages_angui_popup_options_examples_popup_options_example1_popup_options_example1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component */ "./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.ts");
/* harmony import */ var _pages_angui_badges_examples_badges_example1_badges_example1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/angui-badges-examples/badges-example1/badges-example1.component */ "./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.ts");
/* harmony import */ var _pages_angui_action_sheet_examples_action_sheet_example1_action_sheet_example1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component */ "./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.ts");
/* harmony import */ var _pages_angui_loader_examples_loader_example1_loader_example1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/angui-loader-examples/loader-example1/loader-example1.component */ "./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.ts");
/* harmony import */ var _pages_angui_toast_examples_toast_example1_toast_example1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/angui-toast-examples/toast-example1/toast-example1.component */ "./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.ts");
/* harmony import */ var _pages_angui_select_examples_select_example1_select_example1_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/angui-select-examples/select-example1/select-example1.component */ "./src/app/pages/angui-select-examples/select-example1/select-example1.component.ts");
/* harmony import */ var _pages_angui_popinpoput_examples_pop_pin_pop_out_example1_pop_pin_pop_out_example1_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component */ "./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.ts");
/* harmony import */ var _pages_angui_EntryPage_examples_entry_page_example1_entry_page_example1_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component */ "./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.ts");
/* harmony import */ var _pages_angui_progressbar_examples_progress_bar_example1_progress_bar_example1_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component */ "./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.ts");
/* harmony import */ var _pages_angui_video_player_examples_youtube_video_player_example1_youtube_video_player_example1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component */ "./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.ts");
/* harmony import */ var _pages_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/navigation-menu/navigation-menu.component */ "./src/app/pages/navigation-menu/navigation-menu.component.ts");
/* harmony import */ var _pages_jumbo_text_animation_jumbo_text_animation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/jumbo-text-animation/jumbo-text-animation.component */ "./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.ts");
/* harmony import */ var _pages_flash_screen_flash_screen_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/flash-screen/flash-screen.component */ "./src/app/pages/flash-screen/flash-screen.component.ts");
/* harmony import */ var _pages_landing_page_animation_landing_page_animation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/landing-page-animation/landing-page-animation.component */ "./src/app/pages/landing-page-animation/landing-page-animation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
    },
    { path: 'PrefessionalThemes', component: _app_pages_professional_app_themes_professional_app_themes_component__WEBPACK_IMPORTED_MODULE_2__["ProfessionalAppThemesComponent"] },
    { path: 'TalbleExample1', component: _pages_angui_table_exmples_talble_component_example1_talble_component_example1_component__WEBPACK_IMPORTED_MODULE_4__["TalbleComponentExample1Component"] },
    { path: 'ActionSheetExample1', component: _pages_angui_action_sheet_examples_action_sheet_example1_action_sheet_example1_component__WEBPACK_IMPORTED_MODULE_16__["ActionSheetExample1Component"] },
    { path: 'AlertExample1', component: _pages_angui_alert_examples_alert_example1_alert_example1_component__WEBPACK_IMPORTED_MODULE_9__["AlertExample1Component"] },
    { path: 'BadgesExample1', component: _pages_angui_badges_examples_badges_example1_badges_example1_component__WEBPACK_IMPORTED_MODULE_15__["BadgesExample1Component"] },
    { path: 'ButtonsRadioCheckBoxExample1', component: _pages_angui_Buttons_exmples_buttons_radio_check_box_example1_buttons_radio_check_box_example1_component__WEBPACK_IMPORTED_MODULE_6__["ButtonsRadioCheckBoxExample1Component"] },
    { path: 'CardExample1', component: _pages_angui_card_examples_card_example1_card_example1_component__WEBPACK_IMPORTED_MODULE_10__["CardExample1Component"] },
    { path: 'InputFeildExample1', component: _pages_angui_input_examples_input_feild_example1_input_feild_example1_component__WEBPACK_IMPORTED_MODULE_12__["InputFeildExample1Component"] },
    { path: 'LabelsExample1', component: _pages_angui_label_examples_labels_example1_labels_example1_component__WEBPACK_IMPORTED_MODULE_7__["LabelsExample1Component"] },
    { path: 'LoaderExample1', component: _pages_angui_loader_examples_loader_example1_loader_example1_component__WEBPACK_IMPORTED_MODULE_17__["LoaderExample1Component"] },
    { path: 'PopupMenuExample1', component: _pages_angui_popup_menu_examples_popup_menu_example1_popup_menu_example1_component__WEBPACK_IMPORTED_MODULE_13__["PopupMenuExample1Component"] },
    { path: 'PopupOptionsExample1', component: _pages_angui_popup_options_examples_popup_options_example1_popup_options_example1_component__WEBPACK_IMPORTED_MODULE_14__["PopupOptionsExample1Component"] },
    { path: 'SelectExample1', component: _pages_angui_select_examples_select_example1_select_example1_component__WEBPACK_IMPORTED_MODULE_19__["SelectExample1Component"] },
    { path: 'SlideShowExample1', component: _pages_angui_slide_show_examples_slide_show_example1_slide_show_example1_component__WEBPACK_IMPORTED_MODULE_11__["SlideShowExample1Component"] },
    { path: 'SliderExample1', component: _pages_angui_slider_examples_slider_example1_slider_example1_component__WEBPACK_IMPORTED_MODULE_8__["SliderExample1Component"] },
    { path: 'TabsExample1', component: _pages_angui_tabs_exmples_tabs_example1_tabs_example1_component__WEBPACK_IMPORTED_MODULE_5__["TabsExample1Component"] },
    { path: 'ToastExample1', component: _pages_angui_toast_examples_toast_example1_toast_example1_component__WEBPACK_IMPORTED_MODULE_18__["ToastExample1Component"] },
    { path: 'PopPinPopOutExample1', component: _pages_angui_popinpoput_examples_pop_pin_pop_out_example1_pop_pin_pop_out_example1_component__WEBPACK_IMPORTED_MODULE_20__["PopPinPopOutExample1Component"] },
    { path: 'EntryPageExample1', component: _pages_angui_EntryPage_examples_entry_page_example1_entry_page_example1_component__WEBPACK_IMPORTED_MODULE_21__["EntryPageExample1Component"] },
    { path: 'ProgressBarExample1', component: _pages_angui_progressbar_examples_progress_bar_example1_progress_bar_example1_component__WEBPACK_IMPORTED_MODULE_22__["ProgressBarExample1Component"] },
    { path: 'YoutubeVideoPlayerExample1', component: _pages_angui_video_player_examples_youtube_video_player_example1_youtube_video_player_example1_component__WEBPACK_IMPORTED_MODULE_23__["YoutubeVideoPlayerExample1Component"] },
    { path: 'NavigationMenuExample1', component: _pages_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_24__["NavigationMenuComponent"] },
    { path: 'JumboTextAnimationExample1', component: _pages_jumbo_text_animation_jumbo_text_animation_component__WEBPACK_IMPORTED_MODULE_25__["JumboTextAnimationComponent"] },
    { path: 'FlashScreenExample1', component: _pages_flash_screen_flash_screen_component__WEBPACK_IMPORTED_MODULE_26__["FlashScreenComponent"] },
    { path: 'LandingPageAnimationExample1', component: _pages_landing_page_animation_landing_page_animation_component__WEBPACK_IMPORTED_MODULE_27__["LandingPageAnimationComponent"] },
    { path: 'Home', component: _app_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <angui-components></angui-components> -->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AnGuiFrame';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _an_gui_components_an_gui_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./an-gui-components/an-gui-module.module */ "./src/app/an-gui-components/an-gui-module.module.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_angui_components_list_angui_components_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/angui-components-list/angui-components.component */ "./src/app/pages/angui-components-list/angui-components.component.ts");
/* harmony import */ var _pages_professional_app_themes_professional_app_themes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/professional-app-themes/professional-app-themes.component */ "./src/app/pages/professional-app-themes/professional-app-themes.component.ts");
/* harmony import */ var _pages_new_themes_new_themes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/new-themes/new-themes.component */ "./src/app/pages/new-themes/new-themes.component.ts");
/* harmony import */ var _pages_angui_table_exmples_talble_component_example1_talble_component_example1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/angui-table-exmples/talble-component-example1/talble-component-example1.component */ "./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.ts");
/* harmony import */ var _pages_angui_tabs_exmples_tabs_example1_tabs_example1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/angui-tabs-exmples/tabs-example1/tabs-example1.component */ "./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.ts");
/* harmony import */ var _pages_angui_Buttons_exmples_buttons_radio_check_box_example1_buttons_radio_check_box_example1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component */ "./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.ts");
/* harmony import */ var _pages_angui_label_examples_labels_example1_labels_example1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/angui-label-examples/labels-example1/labels-example1.component */ "./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.ts");
/* harmony import */ var _pages_angui_slider_examples_slider_example1_slider_example1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/angui-slider-examples/slider-example1/slider-example1.component */ "./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.ts");
/* harmony import */ var _pages_angui_alert_examples_alert_example1_alert_example1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/angui-alert-examples/alert-example1/alert-example1.component */ "./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.ts");
/* harmony import */ var _pages_angui_card_examples_card_example1_card_example1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/angui-card-examples/card-example1/card-example1.component */ "./src/app/pages/angui-card-examples/card-example1/card-example1.component.ts");
/* harmony import */ var _pages_angui_slide_show_examples_slide_show_example1_slide_show_example1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component */ "./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.ts");
/* harmony import */ var _pages_angui_input_examples_input_feild_example1_input_feild_example1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/angui-input-examples/input-feild-example1/input-feild-example1.component */ "./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.ts");
/* harmony import */ var _pages_angui_popup_menu_examples_popup_menu_example1_popup_menu_example1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component */ "./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.ts");
/* harmony import */ var _pages_angui_popup_options_examples_popup_options_example1_popup_options_example1_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component */ "./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.ts");
/* harmony import */ var _pages_angui_badges_examples_badges_example1_badges_example1_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/angui-badges-examples/badges-example1/badges-example1.component */ "./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.ts");
/* harmony import */ var _pages_angui_action_sheet_examples_action_sheet_example1_action_sheet_example1_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component */ "./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.ts");
/* harmony import */ var _pages_angui_loader_examples_loader_example1_loader_example1_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/angui-loader-examples/loader-example1/loader-example1.component */ "./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.ts");
/* harmony import */ var _pages_angui_toast_examples_toast_example1_toast_example1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/angui-toast-examples/toast-example1/toast-example1.component */ "./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.ts");
/* harmony import */ var _pages_angui_select_examples_select_example1_select_example1_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/angui-select-examples/select-example1/select-example1.component */ "./src/app/pages/angui-select-examples/select-example1/select-example1.component.ts");
/* harmony import */ var _pages_angui_popinpoput_examples_pop_pin_pop_out_example1_pop_pin_pop_out_example1_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component */ "./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.ts");
/* harmony import */ var _pages_angui_EntryPage_examples_entry_page_example1_entry_page_example1_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component */ "./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.ts");
/* harmony import */ var _pages_angui_progressbar_examples_progress_bar_example1_progress_bar_example1_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component */ "./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.ts");
/* harmony import */ var _pages_angui_video_player_examples_youtube_video_player_example1_youtube_video_player_example1_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component */ "./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.ts");
/* harmony import */ var _pages_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/navigation-menu/navigation-menu.component */ "./src/app/pages/navigation-menu/navigation-menu.component.ts");
/* harmony import */ var _pages_jumbo_text_animation_jumbo_text_animation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/jumbo-text-animation/jumbo-text-animation.component */ "./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.ts");
/* harmony import */ var _pages_flash_screen_flash_screen_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/flash-screen/flash-screen.component */ "./src/app/pages/flash-screen/flash-screen.component.ts");
/* harmony import */ var _pages_landing_page_animation_landing_page_animation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/landing-page-animation/landing-page-animation.component */ "./src/app/pages/landing-page-animation/landing-page-animation.component.ts");
/* harmony import */ var _pages_logo_types_logo_types_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/logo-types/logo-types.component */ "./src/app/pages/logo-types/logo-types.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _pages_angui_components_list_angui_components_component__WEBPACK_IMPORTED_MODULE_6__["AnguiComponentsComponent"],
                _pages_professional_app_themes_professional_app_themes_component__WEBPACK_IMPORTED_MODULE_7__["ProfessionalAppThemesComponent"],
                _pages_new_themes_new_themes_component__WEBPACK_IMPORTED_MODULE_8__["NewThemesComponent"],
                _pages_angui_table_exmples_talble_component_example1_talble_component_example1_component__WEBPACK_IMPORTED_MODULE_9__["TalbleComponentExample1Component"],
                _pages_angui_tabs_exmples_tabs_example1_tabs_example1_component__WEBPACK_IMPORTED_MODULE_10__["TabsExample1Component"],
                _pages_angui_Buttons_exmples_buttons_radio_check_box_example1_buttons_radio_check_box_example1_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsRadioCheckBoxExample1Component"],
                _pages_angui_label_examples_labels_example1_labels_example1_component__WEBPACK_IMPORTED_MODULE_12__["LabelsExample1Component"],
                _pages_angui_slider_examples_slider_example1_slider_example1_component__WEBPACK_IMPORTED_MODULE_13__["SliderExample1Component"],
                _pages_angui_alert_examples_alert_example1_alert_example1_component__WEBPACK_IMPORTED_MODULE_14__["AlertExample1Component"],
                _pages_angui_card_examples_card_example1_card_example1_component__WEBPACK_IMPORTED_MODULE_15__["CardExample1Component"],
                _pages_angui_slide_show_examples_slide_show_example1_slide_show_example1_component__WEBPACK_IMPORTED_MODULE_16__["SlideShowExample1Component"],
                _pages_angui_input_examples_input_feild_example1_input_feild_example1_component__WEBPACK_IMPORTED_MODULE_17__["InputFeildExample1Component"],
                _pages_angui_popup_menu_examples_popup_menu_example1_popup_menu_example1_component__WEBPACK_IMPORTED_MODULE_18__["PopupMenuExample1Component"],
                _pages_angui_popup_options_examples_popup_options_example1_popup_options_example1_component__WEBPACK_IMPORTED_MODULE_19__["PopupOptionsExample1Component"],
                _pages_angui_badges_examples_badges_example1_badges_example1_component__WEBPACK_IMPORTED_MODULE_20__["BadgesExample1Component"],
                _pages_angui_action_sheet_examples_action_sheet_example1_action_sheet_example1_component__WEBPACK_IMPORTED_MODULE_21__["ActionSheetExample1Component"],
                _pages_angui_loader_examples_loader_example1_loader_example1_component__WEBPACK_IMPORTED_MODULE_22__["LoaderExample1Component"],
                _pages_angui_toast_examples_toast_example1_toast_example1_component__WEBPACK_IMPORTED_MODULE_23__["ToastExample1Component"],
                _pages_angui_select_examples_select_example1_select_example1_component__WEBPACK_IMPORTED_MODULE_24__["SelectExample1Component"],
                _pages_angui_popinpoput_examples_pop_pin_pop_out_example1_pop_pin_pop_out_example1_component__WEBPACK_IMPORTED_MODULE_25__["PopPinPopOutExample1Component"],
                _pages_angui_EntryPage_examples_entry_page_example1_entry_page_example1_component__WEBPACK_IMPORTED_MODULE_26__["EntryPageExample1Component"],
                _pages_angui_progressbar_examples_progress_bar_example1_progress_bar_example1_component__WEBPACK_IMPORTED_MODULE_27__["ProgressBarExample1Component"],
                _pages_angui_video_player_examples_youtube_video_player_example1_youtube_video_player_example1_component__WEBPACK_IMPORTED_MODULE_28__["YoutubeVideoPlayerExample1Component"],
                _pages_navigation_menu_navigation_menu_component__WEBPACK_IMPORTED_MODULE_29__["NavigationMenuComponent"],
                _pages_jumbo_text_animation_jumbo_text_animation_component__WEBPACK_IMPORTED_MODULE_30__["JumboTextAnimationComponent"],
                _pages_flash_screen_flash_screen_component__WEBPACK_IMPORTED_MODULE_31__["FlashScreenComponent"],
                _pages_landing_page_animation_landing_page_animation_component__WEBPACK_IMPORTED_MODULE_32__["LandingPageAnimationComponent"],
                _pages_logo_types_logo_types_component__WEBPACK_IMPORTED_MODULE_33__["LogoTypesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _an_gui_components_an_gui_module_module__WEBPACK_IMPORTED_MODULE_4__["AnGuiModuleModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.css":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLUJ1dHRvbnMtZXhtcGxlcy9idXR0b25zLXJhZGlvLWNoZWNrLWJveC1leGFtcGxlMS9idXR0b25zLXJhZGlvLWNoZWNrLWJveC1leGFtcGxlMS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<angui-button [text]=\"'Primary Button'\"></angui-button>\n<angui-button [text]=\"'Primary Outline'\" [buttonType]=\"'primaryOutline'\"></angui-button>\n<angui-button [text]=\"'Secondary'\" [buttonType]=\"'secondary'\"></angui-button>\n<angui-button [text]=\"'Secondary Outline'\" [buttonType]=\"'secondaryOutline'\"></angui-button>\n<angui-button [text]=\"'Secondary Plane'\" [buttonType]=\"'plane'\"></angui-button>\n<angui-button [text]=\"'Secondary Plane Disabled'\" [disabled]=\"true\" [buttonType]=\"'plane'\"></angui-button>\n<angui-button [text]=\"'Secondary Outline Disabled'\" [disabled]=\"true\" [buttonType]=\"'secondaryOutline'\"></angui-button>\n<angui-button [text]=\"'Secondary Outline Disabled'\" [disabled]=\"true\" [buttonType]=\"'secondary'\"></angui-button>\n<angui-button [text]=\"'Secondary Outline Active'\" [active]=\"true\" [buttonType]=\"'secondary'\"></angui-button>\n<angui-button [text]=\"'Primary Button Active'\" [active]=\"true\"></angui-button>\n\n<angui-horizondal-line></angui-horizondal-line>\n\n\n\n<angui-radio-button></angui-radio-button>\n\n<angui-horizondal-line></angui-horizondal-line>\n\n<angui-check-box></angui-check-box>\n\n<angui-horizondal-line></angui-horizondal-line>"

/***/ }),

/***/ "./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ButtonsRadioCheckBoxExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsRadioCheckBoxExample1Component", function() { return ButtonsRadioCheckBoxExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsRadioCheckBoxExample1Component = /** @class */ (function () {
    function ButtonsRadioCheckBoxExample1Component() {
    }
    ButtonsRadioCheckBoxExample1Component.prototype.ngOnInit = function () {
    };
    ButtonsRadioCheckBoxExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons-radio-check-box-example1',
            template: __webpack_require__(/*! ./buttons-radio-check-box-example1.component.html */ "./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.html"),
            styles: [__webpack_require__(/*! ./buttons-radio-check-box-example1.component.css */ "./src/app/pages/angui-Buttons-exmples/buttons-radio-check-box-example1/buttons-radio-check-box-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsRadioCheckBoxExample1Component);
    return ButtonsRadioCheckBoxExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLUVudHJ5UGFnZS1leGFtcGxlcy9lbnRyeS1wYWdlLWV4YW1wbGUxL2VudHJ5LXBhZ2UtZXhhbXBsZTEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  entry-page-example1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EntryPageExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPageExample1Component", function() { return EntryPageExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntryPageExample1Component = /** @class */ (function () {
    function EntryPageExample1Component() {
    }
    EntryPageExample1Component.prototype.ngOnInit = function () {
    };
    EntryPageExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-page-example1',
            template: __webpack_require__(/*! ./entry-page-example1.component.html */ "./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.html"),
            styles: [__webpack_require__(/*! ./entry-page-example1.component.css */ "./src/app/pages/angui-EntryPage-examples/entry-page-example1/entry-page-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EntryPageExample1Component);
    return EntryPageExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLWFjdGlvbi1zaGVldC1leGFtcGxlcy9hY3Rpb24tc2hlZXQtZXhhbXBsZTEvYWN0aW9uLXNoZWV0LWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  action-sheet-example1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ActionSheetExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetExample1Component", function() { return ActionSheetExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionSheetExample1Component = /** @class */ (function () {
    function ActionSheetExample1Component() {
    }
    ActionSheetExample1Component.prototype.ngOnInit = function () {
    };
    ActionSheetExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'action-sheet-example1',
            template: __webpack_require__(/*! ./action-sheet-example1.component.html */ "./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.html"),
            styles: [__webpack_require__(/*! ./action-sheet-example1.component.css */ "./src/app/pages/angui-action-sheet-examples/action-sheet-example1/action-sheet-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionSheetExample1Component);
    return ActionSheetExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLWFsZXJ0LWV4YW1wbGVzL2FsZXJ0LWV4YW1wbGUxL2FsZXJ0LWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angui-button [text]=\"'Show Alert'\" (click)=\"openAlert()\"></angui-button>\n\n<angui-button [text]=\"'Open Confirm Alert'\" (click)=\"openConfirmAlert()\"></angui-button>\n"

/***/ }),

/***/ "./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AlertExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertExample1Component", function() { return AlertExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _an_gui_components_angui_alert_model_services_angui_alert_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../an-gui-components/angui-alert-model-services/angui-alert-controller.service */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertExample1Component = /** @class */ (function () {
    function AlertExample1Component(angiuiAlertControler) {
        this.angiuiAlertControler = angiuiAlertControler;
    }
    AlertExample1Component.prototype.ngOnInit = function () {
    };
    AlertExample1Component.prototype.openAlert = function () {
        var angiuiAlertControlerRef = this.angiuiAlertControler.openAlert("Incorrect Name", "Please Enter Your Name");
        angiuiAlertControlerRef.onClose.subscribe(function (result) {
            console.log('Alert Popup closed', result);
        });
    };
    AlertExample1Component.prototype.openConfirmAlert = function () {
        var angiuiAlertControlerRef = this.angiuiAlertControler.openConfirmAlert("Incorrect Name", "Please Enter Your Name", 100);
        angiuiAlertControlerRef.onClose.subscribe(function (result) {
            console.log('Confirmation Popup Result : ', result);
        });
    };
    AlertExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-example1',
            template: __webpack_require__(/*! ./alert-example1.component.html */ "./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.html"),
            styles: [__webpack_require__(/*! ./alert-example1.component.css */ "./src/app/pages/angui-alert-examples/alert-example1/alert-example1.component.css")]
        }),
        __metadata("design:paramtypes", [_an_gui_components_angui_alert_model_services_angui_alert_controller_service__WEBPACK_IMPORTED_MODULE_1__["AngiuiAlertControlerService"]])
    ], AlertExample1Component);
    return AlertExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLWJhZGdlcy1leGFtcGxlcy9iYWRnZXMtZXhhbXBsZTEvYmFkZ2VzLWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  badges-example1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.ts ***!
  \******************************************************************************************/
/*! exports provided: BadgesExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesExample1Component", function() { return BadgesExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgesExample1Component = /** @class */ (function () {
    function BadgesExample1Component() {
    }
    BadgesExample1Component.prototype.ngOnInit = function () {
    };
    BadgesExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-badges-example1',
            template: __webpack_require__(/*! ./badges-example1.component.html */ "./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.html"),
            styles: [__webpack_require__(/*! ./badges-example1.component.css */ "./src/app/pages/angui-badges-examples/badges-example1/badges-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BadgesExample1Component);
    return BadgesExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-card-examples/card-example1/card-example1.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/angui-card-examples/card-example1/card-example1.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLWNhcmQtZXhhbXBsZXMvY2FyZC1leGFtcGxlMS9jYXJkLWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-card-examples/card-example1/card-example1.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/angui-card-examples/card-example1/card-example1.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<angui-card>\n    <angui-card-header>\n\n        <angui-label [text]=\"'Application Of Card'\"></angui-label>\n\n    </angui-card-header>\n    <angui-card-content>\n        Angui card is common place holder to display some beautiful content with Header Name ,\n        descriptive area that is the content area, and footer which can contain some actions items also.\n    </angui-card-content>\n</angui-card>\n\n<angui-horizondal-line></angui-horizondal-line>\n\n<angui-card>\n    <angui-card-header>\n\n        <angui-label [text]=\"'Application Of Card'\"></angui-label>\n\n    </angui-card-header>\n    <angui-card-content>\n        <p>Angui card is common place holder to display some beautiful content with Header Name ,\n        descriptive area that is the content area, and footer which can contain some actions items also.\n        Angui card is common place holder to display some beautiful content with Header Name ,\n        descriptive area that is the content area, and footer which can contain some actions items also.\n        Angui card is common place holder to display some beautiful content with Header Name ,\n        descriptive area that is the content area, and footer which can contain some actions items also.\n        Angui card is common place holder to display some beautiful content with Header Name ,\n        descriptive area that is the content area, and footer which can contain some actions items also.\n        Angui card is common place holder to display some beautiful content with Header Name ,\n        descriptive area that is the content area, and footer which can contain some actions items also.\n    </p><p>\n        Angui card is common place holder to display some beautiful content with Header Name ,\n        descriptive area that is the content area, and footer which can contain some actions items also.\n        Angui card is common place holder to display some beautiful content with Header Name ,\n        descriptive area that is the content area, and footer which can contain some actions items also.\n        Angui card is common place holder to display some beautiful content with Header Name ,\n        descriptive area that is the content area, and footer which can contain some actions items also.\n    </p>\n    </angui-card-content>\n    <angui-card-footer>\n        <angui-label [likeLink]=\"true\" [text]=\"'I Hope You Like It'\" [hover]=\"true\"></angui-label>\n    </angui-card-footer>\n</angui-card>\n\n<angui-horizondal-line></angui-horizondal-line>"

/***/ }),

/***/ "./src/app/pages/angui-card-examples/card-example1/card-example1.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/angui-card-examples/card-example1/card-example1.component.ts ***!
  \************************************************************************************/
/*! exports provided: CardExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardExample1Component", function() { return CardExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardExample1Component = /** @class */ (function () {
    function CardExample1Component() {
    }
    CardExample1Component.prototype.ngOnInit = function () {
    };
    CardExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-example1',
            template: __webpack_require__(/*! ./card-example1.component.html */ "./src/app/pages/angui-card-examples/card-example1/card-example1.component.html"),
            styles: [__webpack_require__(/*! ./card-example1.component.css */ "./src/app/pages/angui-card-examples/card-example1/card-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardExample1Component);
    return CardExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-components-list/angui-components.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/angui-components-list/angui-components.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLWNvbXBvbmVudHMtbGlzdC9hbmd1aS1jb21wb25lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-components-list/angui-components.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/angui-components-list/angui-components.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/angui-components-list/angui-components.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/angui-components-list/angui-components.component.ts ***!
  \***************************************************************************/
/*! exports provided: AnguiComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnguiComponentsComponent", function() { return AnguiComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _an_gui_components_angui_alert_model_services_angui_alert_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../an-gui-components/angui-alert-model-services/angui-alert-controller.service */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnguiComponentsComponent = /** @class */ (function () {
    // constructor(public dialog: ModelService) {
    function AnguiComponentsComponent(angiuiAlertControler) {
        this.angiuiAlertControler = angiuiAlertControler;
        this.showHide = true;
    }
    AnguiComponentsComponent.prototype.ngOnInit = function () {
    };
    AnguiComponentsComponent.prototype.openAlert = function () {
        var angiuiAlertControlerRef = this.angiuiAlertControler.openAlert("Incorrect Name", "Please Enter Your Name");
        angiuiAlertControlerRef.onClose.subscribe(function (result) {
            console.log('Alert Popup closed', result);
        });
    };
    AnguiComponentsComponent.prototype.openConfirmAlert = function () {
        var angiuiAlertControlerRef = this.angiuiAlertControler.openConfirmAlert("Incorrect Name", "Please Enter Your Name", 100);
        angiuiAlertControlerRef.onClose.subscribe(function (result) {
            console.log('Confirmation Popup Result : ', result);
        });
    };
    AnguiComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'angui-components',
            template: __webpack_require__(/*! ./angui-components.component.html */ "./src/app/pages/angui-components-list/angui-components.component.html"),
            styles: [__webpack_require__(/*! ./angui-components.component.css */ "./src/app/pages/angui-components-list/angui-components.component.css")]
        }),
        __metadata("design:paramtypes", [_an_gui_components_angui_alert_model_services_angui_alert_controller_service__WEBPACK_IMPORTED_MODULE_1__["AngiuiAlertControlerService"]])
    ], AnguiComponentsComponent);
    return AnguiComponentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLWlucHV0LWV4YW1wbGVzL2lucHV0LWZlaWxkLWV4YW1wbGUxL2lucHV0LWZlaWxkLWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<angui-horizondal-line></angui-horizondal-line>\n<angui-input [noBorder]=\"true\" [inlineInputName]=true [placeholder]=\"'Enter Text'\" [inputName]=\"'Login'\"></angui-input>\n<angui-input [noBorder]=\"true\" [inlineInputName]=true [validationMessage]=\"'Validation Success'\"\n    [inputName]=\"'Password'\" [validationSuccess]=\"true\"></angui-input>\n\n<angui-horizondal-line></angui-horizondal-line>\n\n<angui-input [noBorder]=\"true\" [placeholder]=\"'Enter Text'\" [validationMessage]=\"'Validation Failed'\"\n    [validationFailed]=\"true\" [inputName]=\"'Login'\"></angui-input>\n<angui-input [noBorder]=\"true\" [validationMessage]=\"'Validation Success'\" [inputName]=\"'Password'\"\n    [validationSuccess]=\"true\"></angui-input>\n\n<angui-horizondal-line></angui-horizondal-line>\n\n<angui-input [inputName]=\"'Login'\"></angui-input>\n<angui-input [validationMessage]=\"'Validation Success'\" [inputName]=\"'Password'\" [validationSuccess]=\"true\">\n</angui-input>\n"

/***/ }),

/***/ "./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: InputFeildExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFeildExample1Component", function() { return InputFeildExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputFeildExample1Component = /** @class */ (function () {
    function InputFeildExample1Component() {
    }
    InputFeildExample1Component.prototype.ngOnInit = function () {
    };
    InputFeildExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-feild-example1',
            template: __webpack_require__(/*! ./input-feild-example1.component.html */ "./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.html"),
            styles: [__webpack_require__(/*! ./input-feild-example1.component.css */ "./src/app/pages/angui-input-examples/input-feild-example1/input-feild-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputFeildExample1Component);
    return InputFeildExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLWxhYmVsLWV4YW1wbGVzL2xhYmVscy1leGFtcGxlMS9sYWJlbHMtZXhhbXBsZTEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<angui-label [text]=\"'Home Screen'\" [mainHeader]=\"true\" [texColor]=\"'rgb(57, 60, 64)'\"></angui-label>\n<angui-label [text]=\"'Home Screen'\" [subHeader]=\"true\" [texColor]=\"'rgb(57, 60, 64)'\"></angui-label>\n<angui-horizondal-line></angui-horizondal-line>\n\n\n<angui-label [text]=\"'Edit'\" [hover]=\"true\"></angui-label>\n<angui-label [text]=\"'Create'\" [hover]=\"true\"></angui-label>\n<angui-label [text]=\"'Delete'\"> </angui-label>\n<angui-horizondal-line></angui-horizondal-line>\n\n\n<angui-label [text]=\"'Refresh'\" [refreshLink]=true></angui-label>\n<angui-label [text]=\"'Previous Page'\" [previousButtonLink]=true></angui-label>\n<angui-label [text]=\"'Next Page'\" [nextButtonLink]=true></angui-label>\n<angui-label [text]=\"'Add'\" [addButtonLink]=true></angui-label>\n<angui-label [text]=\"'Delete'\" [deleteButtonLink]=true></angui-label>\n<angui-label [text]=\"'Open Page'\" [disabled]=true [openPageButtonLink]=true></angui-label>\n<angui-label [text]=\"'Open Floder'\" [folderButtonLink]=true></angui-label>\n<angui-label [text]=\"'Open Galary'\" [galaryButtonLink]=true></angui-label>\n<angui-label [text]=\"'Navigate To Home'\" [homeButtonLink]=true></angui-label>\n<angui-label [text]=\"'Download File'\" [downloadButtonLink]=true></angui-label>\n<angui-label [text]=\"'Upload File'\" [uploadButtonLink]=true></angui-label>\n<angui-label [text]=\"'Open Pages'\" [pagesButtonLink]=true></angui-label>\n<angui-label [text]=\"'List Item'\" [listLink]=true></angui-label>\n<angui-horizondal-line></angui-horizondal-line>\n"

/***/ }),

/***/ "./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LabelsExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsExample1Component", function() { return LabelsExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelsExample1Component = /** @class */ (function () {
    function LabelsExample1Component() {
    }
    LabelsExample1Component.prototype.ngOnInit = function () {
    };
    LabelsExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-labels-example1',
            template: __webpack_require__(/*! ./labels-example1.component.html */ "./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.html"),
            styles: [__webpack_require__(/*! ./labels-example1.component.css */ "./src/app/pages/angui-label-examples/labels-example1/labels-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LabelsExample1Component);
    return LabelsExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLWxvYWRlci1leGFtcGxlcy9sb2FkZXItZXhhbXBsZTEvbG9hZGVyLWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  loader-example1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LoaderExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderExample1Component", function() { return LoaderExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderExample1Component = /** @class */ (function () {
    function LoaderExample1Component() {
    }
    LoaderExample1Component.prototype.ngOnInit = function () {
    };
    LoaderExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader-example1',
            template: __webpack_require__(/*! ./loader-example1.component.html */ "./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.html"),
            styles: [__webpack_require__(/*! ./loader-example1.component.css */ "./src/app/pages/angui-loader-examples/loader-example1/loader-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderExample1Component);
    return LoaderExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXBvcGlucG9wdXQtZXhhbXBsZXMvcG9wLXBpbi1wb3Atb3V0LWV4YW1wbGUxL3BvcC1waW4tcG9wLW91dC1leGFtcGxlMS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pop-pin-pop-out-example1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PopPinPopOutExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopPinPopOutExample1Component", function() { return PopPinPopOutExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopPinPopOutExample1Component = /** @class */ (function () {
    function PopPinPopOutExample1Component() {
    }
    PopPinPopOutExample1Component.prototype.ngOnInit = function () {
    };
    PopPinPopOutExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pop-pin-pop-out-example1',
            template: __webpack_require__(/*! ./pop-pin-pop-out-example1.component.html */ "./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.html"),
            styles: [__webpack_require__(/*! ./pop-pin-pop-out-example1.component.css */ "./src/app/pages/angui-popinpoput-examples/pop-pin-pop-out-example1/pop-pin-pop-out-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopPinPopOutExample1Component);
    return PopPinPopOutExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXBvcHVwLW1lbnUtZXhhbXBsZXMvcG9wdXAtbWVudS1leGFtcGxlMS9wb3B1cC1tZW51LWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  popup-menu-example1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PopupMenuExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuExample1Component", function() { return PopupMenuExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupMenuExample1Component = /** @class */ (function () {
    function PopupMenuExample1Component() {
    }
    PopupMenuExample1Component.prototype.ngOnInit = function () {
    };
    PopupMenuExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup-menu-example1',
            template: __webpack_require__(/*! ./popup-menu-example1.component.html */ "./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.html"),
            styles: [__webpack_require__(/*! ./popup-menu-example1.component.css */ "./src/app/pages/angui-popup-menu-examples/popup-menu-example1/popup-menu-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupMenuExample1Component);
    return PopupMenuExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXBvcHVwLW9wdGlvbnMtZXhhbXBsZXMvcG9wdXAtb3B0aW9ucy1leGFtcGxlMS9wb3B1cC1vcHRpb25zLWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  popup-options-example1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PopupOptionsExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupOptionsExample1Component", function() { return PopupOptionsExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupOptionsExample1Component = /** @class */ (function () {
    function PopupOptionsExample1Component() {
    }
    PopupOptionsExample1Component.prototype.ngOnInit = function () {
    };
    PopupOptionsExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup-options-example1',
            template: __webpack_require__(/*! ./popup-options-example1.component.html */ "./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.html"),
            styles: [__webpack_require__(/*! ./popup-options-example1.component.css */ "./src/app/pages/angui-popup-options-examples/popup-options-example1/popup-options-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupOptionsExample1Component);
    return PopupOptionsExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXByb2dyZXNzYmFyLWV4YW1wbGVzL3Byb2dyZXNzLWJhci1leGFtcGxlMS9wcm9ncmVzcy1iYXItZXhhbXBsZTEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angui-horizondal-line></angui-horizondal-line>\n<angui-progress-bar [type]=\"'normal'\" [percentage]=\"66\"></angui-progress-bar>\n<angui-horizondal-line></angui-horizondal-line>\n\n<angui-progress-bar [type]=\"'thin'\" [percentage]=\"60\"></angui-progress-bar>\n<angui-horizondal-line></angui-horizondal-line>\n\n<angui-progress-bar [type]=\"'line'\" [percentage]=\"80\"></angui-progress-bar>"

/***/ }),

/***/ "./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProgressBarExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarExample1Component", function() { return ProgressBarExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarExample1Component = /** @class */ (function () {
    function ProgressBarExample1Component() {
    }
    ProgressBarExample1Component.prototype.ngOnInit = function () {
    };
    ProgressBarExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-bar-example1',
            template: __webpack_require__(/*! ./progress-bar-example1.component.html */ "./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar-example1.component.css */ "./src/app/pages/angui-progressbar-examples/progress-bar-example1/progress-bar-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarExample1Component);
    return ProgressBarExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-select-examples/select-example1/select-example1.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/angui-select-examples/select-example1/select-example1.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXNlbGVjdC1leGFtcGxlcy9zZWxlY3QtZXhhbXBsZTEvc2VsZWN0LWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-select-examples/select-example1/select-example1.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/angui-select-examples/select-example1/select-example1.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<angui-drop-down></angui-drop-down>\n"

/***/ }),

/***/ "./src/app/pages/angui-select-examples/select-example1/select-example1.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/angui-select-examples/select-example1/select-example1.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SelectExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectExample1Component", function() { return SelectExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectExample1Component = /** @class */ (function () {
    function SelectExample1Component() {
    }
    SelectExample1Component.prototype.ngOnInit = function () {
    };
    SelectExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-example1',
            template: __webpack_require__(/*! ./select-example1.component.html */ "./src/app/pages/angui-select-examples/select-example1/select-example1.component.html"),
            styles: [__webpack_require__(/*! ./select-example1.component.css */ "./src/app/pages/angui-select-examples/select-example1/select-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectExample1Component);
    return SelectExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXNsaWRlLXNob3ctZXhhbXBsZXMvc2xpZGUtc2hvdy1leGFtcGxlMS9zbGlkZS1zaG93LWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<angui-horizondal-line></angui-horizondal-line>\n\n<angui-sliders [imageSlideItems] =\"imageSlideItems\" [zoomImageSlideShow] = \"true\" [autoPlay] = \"false\"></angui-sliders>\n\n<angui-horizondal-line></angui-horizondal-line>\n\n<angui-sliders [imageSlideItems] =\"imageSlideItems2\" [zoomImageSlideShow] = \"false\" [autoPlay] = \"true\"></angui-sliders>\n\n<angui-horizondal-line></angui-horizondal-line>\n"

/***/ }),

/***/ "./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SlideShowExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideShowExample1Component", function() { return SlideShowExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideShowExample1Component = /** @class */ (function () {
    function SlideShowExample1Component() {
        this.imageSlideItems = [
            { src: 'http://kayraholidaymaps.com/wp-content/uploads/2019/04/maldives2.jpg', title: 'Title 1', subTitle: 'Sub Title 1' },
            { src: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg', title: 'Title 2', subTitle: 'Sub Title 1' },
            { src: 'https://robbreportedit.files.wordpress.com/2019/09/intercontinental-maldives-full-aerial-view-3-bedroom-overwater-residence.jpg?w=1000', title: 'Title 3', subTitle: 'Sub Title 1' },
            { src: 'https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/Hotel%20Management-1508949476/mercuremaldiveskoodooresortmaldivesexterior.jpg?WWgDUsRsMcW_pe0hMJIE2bW06qaPPNMI&amp;itok=U5WkdR5g', title: 'Title 4', subTitle: 'Sub Title 1' },
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfpNFqapFRZm02ZWTXtkp5H01Z1eD1UBiZdjuS9zhSVTOWtJxn', title: 'Title 5', subTitle: 'Sub Title 1' }
        ];
        this.imageSlideItems2 = [
            { src: 'http://kayraholidaymaps.com/wp-content/uploads/2019/04/maldives2.jpg', title: 'Title 1', subTitle: 'Sub Title 1' },
            { src: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg', title: 'Title 2', subTitle: 'Sub Title 1' },
            { src: 'http://kayraholidaymaps.com/wp-content/uploads/2019/04/maldives2.jpg', title: 'Title 1', subTitle: 'Sub Title 1' },
            { src: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg', title: 'Title 2', subTitle: 'Sub Title 1' },
            { src: 'http://kayraholidaymaps.com/wp-content/uploads/2019/04/maldives2.jpg', title: 'Title 1', subTitle: 'Sub Title 1' },
            { src: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg', title: 'Title 2', subTitle: 'Sub Title 1' }
        ];
    }
    SlideShowExample1Component.prototype.ngOnInit = function () {
    };
    SlideShowExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slide-show-example1',
            template: __webpack_require__(/*! ./slide-show-example1.component.html */ "./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.html"),
            styles: [__webpack_require__(/*! ./slide-show-example1.component.css */ "./src/app/pages/angui-slide-show-examples/slide-show-example1/slide-show-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideShowExample1Component);
    return SlideShowExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXNsaWRlci1leGFtcGxlcy9zbGlkZXItZXhhbXBsZTEvc2xpZGVyLWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<angui-sliders [autoPlay] = \"true\"></angui-sliders>\n"

/***/ }),

/***/ "./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SliderExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderExample1Component", function() { return SliderExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderExample1Component = /** @class */ (function () {
    function SliderExample1Component() {
    }
    SliderExample1Component.prototype.ngOnInit = function () {
    };
    SliderExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider-example1',
            template: __webpack_require__(/*! ./slider-example1.component.html */ "./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.html"),
            styles: [__webpack_require__(/*! ./slider-example1.component.css */ "./src/app/pages/angui-slider-examples/slider-example1/slider-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderExample1Component);
    return SliderExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXRhYmxlLWV4bXBsZXMvdGFsYmxlLWNvbXBvbmVudC1leGFtcGxlMS90YWxibGUtY29tcG9uZW50LWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angui-table [tableName] = \"'t1'\"></angui-table>\n<angui-table [tableName] = \"'t2'\"></angui-table>\n"

/***/ }),

/***/ "./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: TalbleComponentExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalbleComponentExample1Component", function() { return TalbleComponentExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TalbleComponentExample1Component = /** @class */ (function () {
    function TalbleComponentExample1Component() {
    }
    TalbleComponentExample1Component.prototype.ngOnInit = function () {
    };
    TalbleComponentExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'talble-component-example1',
            template: __webpack_require__(/*! ./talble-component-example1.component.html */ "./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.html"),
            styles: [__webpack_require__(/*! ./talble-component-example1.component.css */ "./src/app/pages/angui-table-exmples/talble-component-example1/talble-component-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TalbleComponentExample1Component);
    return TalbleComponentExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXRhYnMtZXhtcGxlcy90YWJzLWV4YW1wbGUxL3RhYnMtZXhhbXBsZTEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<angui-horizondal-line></angui-horizondal-line>\n\n\n<angui-tabs [pageNavBottom]=\"true\">\n\n    <!-- here i need add some tabs -->\n\n</angui-tabs>\n<angui-horizondal-line></angui-horizondal-line>\n\n<angui-tabs [pageNavBottom]=\"false\">\n\n    <!-- here i need add some tabs -->\n\n</angui-tabs>\n\n\n<angui-horizondal-line></angui-horizondal-line>"

/***/ }),

/***/ "./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TabsExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsExample1Component", function() { return TabsExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsExample1Component = /** @class */ (function () {
    function TabsExample1Component() {
    }
    TabsExample1Component.prototype.ngOnInit = function () {
    };
    TabsExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs-example1',
            template: __webpack_require__(/*! ./tabs-example1.component.html */ "./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.html"),
            styles: [__webpack_require__(/*! ./tabs-example1.component.css */ "./src/app/pages/angui-tabs-exmples/tabs-example1/tabs-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsExample1Component);
    return TabsExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXRvYXN0LWV4YW1wbGVzL3RvYXN0LWV4YW1wbGUxL3RvYXN0LWV4YW1wbGUxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  toast-example1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ToastExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastExample1Component", function() { return ToastExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastExample1Component = /** @class */ (function () {
    function ToastExample1Component() {
    }
    ToastExample1Component.prototype.ngOnInit = function () {
    };
    ToastExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toast-example1',
            template: __webpack_require__(/*! ./toast-example1.component.html */ "./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.html"),
            styles: [__webpack_require__(/*! ./toast-example1.component.css */ "./src/app/pages/angui-toast-examples/toast-example1/toast-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToastExample1Component);
    return ToastExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.css":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuZ3VpLXZpZGVvLXBsYXllci1leGFtcGxlcy95b3V0dWJlLXZpZGVvLXBsYXllci1leGFtcGxlMS95b3V0dWJlLXZpZGVvLXBsYXllci1leGFtcGxlMS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<angui-you-tube-video-player [height] = \"'500'\" [url]=\"'https://www.youtube.com/watch?v=uT3SBzmDxGk&list=RDXj3gU3jACe8&index=3'\"></angui-you-tube-video-player>\n\n<angui-you-tube-video-player [height] = \"'500'\" [type]= \"'YouTube'\" [url]=\"'https://www.youtube.com/watch?v=uT3SBzmDxGk&list=RDXj3gU3jACe8&index=3'\"></angui-you-tube-video-player>\n\n<angui-you-tube-video-player [height] = \"'500'\" [type]=\"any\" [url]=\"'https://www.youtube.com/watch?v=x8yymm3DtVA'\"></angui-you-tube-video-player>\n"

/***/ }),

/***/ "./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: YoutubeVideoPlayerExample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVideoPlayerExample1Component", function() { return YoutubeVideoPlayerExample1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YoutubeVideoPlayerExample1Component = /** @class */ (function () {
    function YoutubeVideoPlayerExample1Component() {
    }
    YoutubeVideoPlayerExample1Component.prototype.ngOnInit = function () {
    };
    YoutubeVideoPlayerExample1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtube-video-player-example1',
            template: __webpack_require__(/*! ./youtube-video-player-example1.component.html */ "./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.html"),
            styles: [__webpack_require__(/*! ./youtube-video-player-example1.component.css */ "./src/app/pages/angui-video-player-examples/youtube-video-player-example1/youtube-video-player-example1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YoutubeVideoPlayerExample1Component);
    return YoutubeVideoPlayerExample1Component;
}());



/***/ }),

/***/ "./src/app/pages/flash-screen/flash-screen.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/flash-screen/flash-screen.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZsYXNoLXNjcmVlbi9mbGFzaC1zY3JlZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/flash-screen/flash-screen.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/flash-screen/flash-screen.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angui-flash-screen></angui-flash-screen>"

/***/ }),

/***/ "./src/app/pages/flash-screen/flash-screen.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/flash-screen/flash-screen.component.ts ***!
  \**************************************************************/
/*! exports provided: FlashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashScreenComponent", function() { return FlashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashScreenComponent = /** @class */ (function () {
    function FlashScreenComponent() {
    }
    FlashScreenComponent.prototype.ngOnInit = function () {
    };
    FlashScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flash-screen',
            template: __webpack_require__(/*! ./flash-screen.component.html */ "./src/app/pages/flash-screen/flash-screen.component.html"),
            styles: [__webpack_require__(/*! ./flash-screen.component.css */ "./src/app/pages/flash-screen/flash-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlashScreenComponent);
    return FlashScreenComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- toggle button -->\n<!-- check box list -->\n<!-- radio button list -->\n<!-- popup -->\n<!-- alert -->\n<!-- input alert -->\n<!-- popup with drop down , input, buttons ,list-->\n<!-- list of icons and text ,List Dividers-->\n<!-- badges, cards, msg card ,card with header -->\n\n<!-- fab menus -->\n<!-- popover menu, nav bar -->\n\n<!-- rangebar, progress bar, search bar, Searchbar in Toolbars -->\n<!-- segmanets ,slides, tabs-->\n<!-- toast, badge -->\n<!-- header , footer, simple header, nav bar -->\n<!-- action sheet -->\n\n<angui-navigation-bar [url]=\"'/PrefessionalThemes'\">Navigate To Professional App Themes</angui-navigation-bar>\n\n\n<!-- <iframe width=\"876\" height=\"493\" src=\"https://www.youtube.com/embed/Xj3gU3jACe8?list=RDXj3gU3jACe8\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> -->"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2p1bWJvLXRleHQtYW5pbWF0aW9uL2p1bWJvLXRleHQtYW5pbWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angui-jumbo-text-animation>{{textLogo}}</angui-jumbo-text-animation>"

/***/ }),

/***/ "./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.ts ***!
  \******************************************************************************/
/*! exports provided: JumboTextAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumboTextAnimationComponent", function() { return JumboTextAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JumboTextAnimationComponent = /** @class */ (function () {
    function JumboTextAnimationComponent() {
    }
    JumboTextAnimationComponent.prototype.ngOnInit = function () {
    };
    JumboTextAnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jumbo-text-animation',
            template: __webpack_require__(/*! ./jumbo-text-animation.component.html */ "./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.html"),
            styles: [__webpack_require__(/*! ./jumbo-text-animation.component.css */ "./src/app/pages/jumbo-text-animation/jumbo-text-animation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JumboTextAnimationComponent);
    return JumboTextAnimationComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing-page-animation/landing-page-animation.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/landing-page-animation/landing-page-animation.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmctcGFnZS1hbmltYXRpb24vbGFuZGluZy1wYWdlLWFuaW1hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/landing-page-animation/landing-page-animation.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/landing-page-animation/landing-page-animation.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  landing-page-animation works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/landing-page-animation/landing-page-animation.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/landing-page-animation/landing-page-animation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LandingPageAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageAnimationComponent", function() { return LandingPageAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageAnimationComponent = /** @class */ (function () {
    function LandingPageAnimationComponent() {
    }
    LandingPageAnimationComponent.prototype.ngOnInit = function () {
    };
    LandingPageAnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page-animation',
            template: __webpack_require__(/*! ./landing-page-animation.component.html */ "./src/app/pages/landing-page-animation/landing-page-animation.component.html"),
            styles: [__webpack_require__(/*! ./landing-page-animation.component.css */ "./src/app/pages/landing-page-animation/landing-page-animation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageAnimationComponent);
    return LandingPageAnimationComponent;
}());



/***/ }),

/***/ "./src/app/pages/logo-types/logo-types.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/logo-types/logo-types.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ28tdHlwZXMvbG9nby10eXBlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/logo-types/logo-types.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/logo-types/logo-types.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logo-types works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/logo-types/logo-types.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/logo-types/logo-types.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoTypesComponent", function() { return LogoTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoTypesComponent = /** @class */ (function () {
    function LogoTypesComponent() {
    }
    LogoTypesComponent.prototype.ngOnInit = function () {
    };
    LogoTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo-types',
            template: __webpack_require__(/*! ./logo-types.component.html */ "./src/app/pages/logo-types/logo-types.component.html"),
            styles: [__webpack_require__(/*! ./logo-types.component.css */ "./src/app/pages/logo-types/logo-types.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoTypesComponent);
    return LogoTypesComponent;
}());



/***/ }),

/***/ "./src/app/pages/navigation-menu/navigation-menu.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/navigation-menu/navigation-menu.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24tbWVudS9uYXZpZ2F0aW9uLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/navigation-menu/navigation-menu.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/navigation-menu/navigation-menu.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angui-expander-menu></angui-expander-menu>"

/***/ }),

/***/ "./src/app/pages/navigation-menu/navigation-menu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/navigation-menu/navigation-menu.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigationMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationMenuComponent", function() { return NavigationMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationMenuComponent = /** @class */ (function () {
    function NavigationMenuComponent() {
    }
    NavigationMenuComponent.prototype.ngOnInit = function () {
    };
    NavigationMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-menu',
            template: __webpack_require__(/*! ./navigation-menu.component.html */ "./src/app/pages/navigation-menu/navigation-menu.component.html"),
            styles: [__webpack_require__(/*! ./navigation-menu.component.css */ "./src/app/pages/navigation-menu/navigation-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationMenuComponent);
    return NavigationMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-themes/new-themes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/new-themes/new-themes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy10aGVtZXMvbmV3LXRoZW1lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/new-themes/new-themes.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/new-themes/new-themes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-themes works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/new-themes/new-themes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/new-themes/new-themes.component.ts ***!
  \**********************************************************/
/*! exports provided: NewThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewThemesComponent", function() { return NewThemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewThemesComponent = /** @class */ (function () {
    function NewThemesComponent() {
    }
    NewThemesComponent.prototype.ngOnInit = function () {
    };
    NewThemesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-themes',
            template: __webpack_require__(/*! ./new-themes.component.html */ "./src/app/pages/new-themes/new-themes.component.html"),
            styles: [__webpack_require__(/*! ./new-themes.component.css */ "./src/app/pages/new-themes/new-themes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewThemesComponent);
    return NewThemesComponent;
}());



/***/ }),

/***/ "./src/app/pages/professional-app-themes/professional-app-themes.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/professional-app-themes/professional-app-themes.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Zlc3Npb25hbC1hcHAtdGhlbWVzL3Byb2Zlc3Npb25hbC1hcHAtdGhlbWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/professional-app-themes/professional-app-themes.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/professional-app-themes/professional-app-themes.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<angui-page-navigation-bar [url]=\"'/Home'\">Controll Panel</angui-page-navigation-bar>\n<angui-navigation-bar [url]=\"'/LabelsExample1'\">Label Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/ButtonsRadioCheckBoxExample1'\">Buttons Radio CheckBox Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/InputFeildExample1'\">Input Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/SelectExample1'\">Select Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/AlertExample1'\">Alert Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/CardExample1'\">Card Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/TabsExample1'\">Tabs Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/SlideShowExample1'\">Slide Show Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/SliderExample1'\">Slider Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/ProgressBarExample1'\">Progress Bar Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/YoutubeVideoPlayerExample1'\">Youtube And Video Player Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/TalbleExample1'\">Table Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/NavigationMenuExample1'\">Navigation Menu Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/JumboTextAnimationExample1'\">Jumbo Text Animation Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/FlashScreenExample1'\">Flash Screen Animation Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/LandingPageAnimationExample1'\">Landing Page Animation Example 1</angui-navigation-bar>\n\n<!-- fadein- fadeout popup -->\n<!-- click and show full page  -->\n<!-- slide-in slide out overlay -->\n<!-- dynamic nav menu cretion -->\n\n<!-- different page naigation animation -->\n \n<!-- \n<angui-navigation-bar [url]=\"'/ActionSheetExample1'\">ActionSheet Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/BadgesExample1'\">Badges Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/LoaderExample1'\">Loader Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/PopupMenuExample1'\">Popup Menu Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/PopupOptionsExample1'\">Popup Options Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/ToastExample1'\">Toast Component Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/PopPinPopOutExample1'\">PopPin PopOut Example 1</angui-navigation-bar>\n<angui-navigation-bar [url]=\"'/EntryPageExample1'\">Entry Page Example 1</angui-navigation-bar> -->\n\n\n\n<div style=\"height:50px;width:100%;position: relative;\">\n\n</div>"

/***/ }),

/***/ "./src/app/pages/professional-app-themes/professional-app-themes.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/professional-app-themes/professional-app-themes.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfessionalAppThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalAppThemesComponent", function() { return ProfessionalAppThemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _an_gui_components_angui_alert_model_services_angui_alert_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../an-gui-components/angui-alert-model-services/angui-alert-controller.service */ "./src/app/an-gui-components/angui-alert-model-services/angui-alert-controller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfessionalAppThemesComponent = /** @class */ (function () {
    // constructor(public dialog: ModelService) {
    function ProfessionalAppThemesComponent(angiuiAlertControler) {
        this.angiuiAlertControler = angiuiAlertControler;
        this.showHide = true;
    }
    ProfessionalAppThemesComponent.prototype.ngOnInit = function () {
    };
    ProfessionalAppThemesComponent.prototype.openAlert = function () {
        var angiuiAlertControlerRef = this.angiuiAlertControler.openAlert("Incorrect Name", "Please Enter Your Name");
        angiuiAlertControlerRef.onClose.subscribe(function (result) {
            console.log('Alert Popup closed', result);
        });
    };
    ProfessionalAppThemesComponent.prototype.openConfirmAlert = function () {
        var angiuiAlertControlerRef = this.angiuiAlertControler.openConfirmAlert("Incorrect Name", "Please Enter Your Name", 100);
        angiuiAlertControlerRef.onClose.subscribe(function (result) {
            console.log('Confirmation Popup Result : ', result);
        });
    };
    ProfessionalAppThemesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'professional-app-themes',
            template: __webpack_require__(/*! ./professional-app-themes.component.html */ "./src/app/pages/professional-app-themes/professional-app-themes.component.html"),
            styles: [__webpack_require__(/*! ./professional-app-themes.component.css */ "./src/app/pages/professional-app-themes/professional-app-themes.component.css")]
        }),
        __metadata("design:paramtypes", [_an_gui_components_angui_alert_model_services_angui_alert_controller_service__WEBPACK_IMPORTED_MODULE_1__["AngiuiAlertControlerService"]])
    ], ProfessionalAppThemesComponent);
    return ProfessionalAppThemesComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Sai/GUI_FRAME/AnGuiFrame/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/Sai/GUI_FRAME/AnGuiFrame/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map