webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this.organizationId = "570d824f-f2b2-454e-bdea-3663cbc59597";
    }
    ApiService.prototype.getContractToEdit = function (id) {
        return this._http.get("assets/editcontract.mock.json");
    };
    ApiService.prototype.getAutoVars = function () {
        return this._http.get("assets/autovars.mock.json");
    };
    ApiService.prototype.comparePolitics = function (contractBody) {
        return this._http.get("assets/comparepolitics.mock.json");
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketplace_marketplace_component__ = __webpack_require__("./src/app/marketplace/marketplace.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modelpreview_modelpreview_component__ = __webpack_require__("./src/app/modelpreview/modelpreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fillcontract_fillcontract_component__ = __webpack_require__("./src/app/fillcontract/fillcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mycontracts_mycontracts_component__ = __webpack_require__("./src/app/mycontracts/mycontracts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__newcontract_newcontract_component__ = __webpack_require__("./src/app/newcontract/newcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mymodels_mymodels_component__ = __webpack_require__("./src/app/mymodels/mymodels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mypolitics_mypolitics_component__ = __webpack_require__("./src/app/mypolitics/mypolitics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editcontract_editcontract_component__ = __webpack_require__("./src/app/editcontract/editcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__previewcontract_previewcontract_component__ = __webpack_require__("./src/app/previewcontract/previewcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__layout_layout_component__["a" /* LayoutComponent */],
        children: [
            {
                path: 'marketplace',
                component: __WEBPACK_IMPORTED_MODULE_2__marketplace_marketplace_component__["a" /* MarketplaceComponent */],
            }, {
                path: 'mymodels',
                component: __WEBPACK_IMPORTED_MODULE_8__mymodels_mymodels_component__["a" /* MymodelsComponent */],
            }, {
                path: 'modelpreview',
                component: __WEBPACK_IMPORTED_MODULE_3__modelpreview_modelpreview_component__["a" /* ModelpreviewComponent */],
            }, {
                path: 'fillcontract',
                component: __WEBPACK_IMPORTED_MODULE_5__fillcontract_fillcontract_component__["a" /* FillcontractComponent */],
            }, {
                path: 'mycontracts',
                component: __WEBPACK_IMPORTED_MODULE_6__mycontracts_mycontracts_component__["a" /* MycontractsComponent */],
            }, {
                path: 'newcontract',
                component: __WEBPACK_IMPORTED_MODULE_7__newcontract_newcontract_component__["a" /* NewcontractComponent */]
            }, {
                path: 'mypolitics',
                component: __WEBPACK_IMPORTED_MODULE_9__mypolitics_mypolitics_component__["a" /* MypoliticsComponent */],
            }, {
                path: 'editcontract',
                component: __WEBPACK_IMPORTED_MODULE_10__editcontract_editcontract_component__["a" /* EditcontractComponent */],
            }, {
                path: 'previewcontract',
                component: __WEBPACK_IMPORTED_MODULE_11__previewcontract_previewcontract_component__["a" /* PreviewcontractComponent */],
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReplaceUnderscore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReplaceUnderscore = /** @class */ (function () {
    function ReplaceUnderscore() {
    }
    ReplaceUnderscore.prototype.transform = function (value) {
        var newValue = "";
        if (value)
            newValue = value.replace(/_/g, ' ');
        return "" + newValue;
    };
    ReplaceUnderscore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'replaceUnderscore' })
    ], ReplaceUnderscore);
    return ReplaceUnderscore;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__ = __webpack_require__("./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__marketplace_marketplace_component__ = __webpack_require__("./src/app/marketplace/marketplace.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modelpreview_modelpreview_component__ = __webpack_require__("./src/app/modelpreview/modelpreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fillcontract_fillcontract_component__ = __webpack_require__("./src/app/fillcontract/fillcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mycontracts_mycontracts_component__ = __webpack_require__("./src/app/mycontracts/mycontracts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__newcontract_newcontract_component__ = __webpack_require__("./src/app/newcontract/newcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mymodels_mymodels_component__ = __webpack_require__("./src/app/mymodels/mymodels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mypolitics_mypolitics_component__ = __webpack_require__("./src/app/mypolitics/mypolitics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__editcontract_editcontract_component__ = __webpack_require__("./src/app/editcontract/editcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__previewcontract_previewcontract_component__ = __webpack_require__("./src/app/previewcontract/previewcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__marketplace_marketplace_component__["a" /* MarketplaceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__modelpreview_modelpreview_component__["a" /* ModelpreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__fillcontract_fillcontract_component__["a" /* FillcontractComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mycontracts_mycontracts_component__["a" /* MycontractsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_component__["b" /* ReplaceUnderscore */],
                __WEBPACK_IMPORTED_MODULE_13__newcontract_newcontract_component__["a" /* NewcontractComponent */],
                __WEBPACK_IMPORTED_MODULE_14__mymodels_mymodels_component__["a" /* MymodelsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__mypolitics_mypolitics_component__["a" /* MypoliticsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__editcontract_editcontract_component__["a" /* EditcontractComponent */],
                __WEBPACK_IMPORTED_MODULE_17__previewcontract_previewcontract_component__["a" /* PreviewcontractComponent */],
                __WEBPACK_IMPORTED_MODULE_18__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/editcontract/editcontract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditcontractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// let ECjs = require('./editcontract')
// declare var ECjs : any;
var EditcontractComponent = /** @class */ (function () {
    function EditcontractComponent(_apiService, _modalService, _router) {
        this._apiService = _apiService;
        this._modalService = _modalService;
        this._router = _router;
        this.options = {
            heightMin: 400,
            heightMax: 400,
            pluginsEnabled: ['align', 'colors', 'lists']
        };
        this.politics = [];
        this.autovars = [];
        this.contract = {
            name: null,
            body: "Nuevo Documento",
            type: null
        };
        this.usedAutoVars = [];
        this.newAutoVar = {
            name: "",
            type: null,
            valuesString: "",
            values: []
        };
        this.email = null;
        this.modelDescription = null;
        this.modelPrice = null;
    }
    EditcontractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.getContractToEdit(1).subscribe(function (data) { _this.politics = data["politics"]; _this.autovars = data["autovars"]; _this.contract = data["contract"]; });
    };
    EditcontractComponent.prototype.addAutoVar = function (autovar) {
        this.contract.body = this.contract.body + autovar.syntax;
        this.usedAutoVars.push(autovar);
    };
    EditcontractComponent.prototype.openFile = function (event) {
        var _this = this;
        var input = event.target;
        var _loop_1 = function () {
            var reader = new FileReader();
            reader.onload = function () {
                // this 'text' is the content of the file
                _this.contract.body = reader.result;
            };
            reader.readAsText(input.files[index]);
        };
        for (var index = 0; index < input.files.length; index++) {
            _loop_1();
        }
        ;
    };
    EditcontractComponent.prototype.sendEmail = function (content) {
        var _this = this;
        this._modalService.open(content).result.then(function (result) {
            var data = {
                contract: _this.contract,
                email: _this.email
            };
            //TODO send email
            _this._router.navigate(['/mycontracts']);
        }, function (reason) {
        });
    };
    EditcontractComponent.prototype.open = function (content) {
        var _this = this;
        this._modalService.open(content, { size: 'lg' }).result.then(function (result) {
            console.log(result);
            if (result == "final" || result == "draft") {
                _this.contract.type = result;
                //TODO send contract
                _this._router.navigate(['/mycontracts']);
            }
            else {
                _this.saveAsModel(result);
            }
        }, function (reason) {
        });
    };
    EditcontractComponent.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    EditcontractComponent.prototype.saveAsModel = function (content) {
        var _this = this;
        this._modalService.open(content).result.then(function (result) {
            var mock = {
                contract: _this.contract,
                type: result,
                price: _this.modelPrice,
                description: _this.modelDescription
            };
            //TODO send model
            var data = {
                "id": _this.newGuid(),
                "name": _this.contract.name,
                "description": _this.modelDescription,
                "price": _this.modelPrice,
                "ownerId": "68d5cb8c-1351-4776-bce2-9b360f4cd216",
                "stars": 0,
                "body": _this.contract.body,
                "dynamicFields": [
                    {
                        "name": "string",
                        "placeHolder": "string",
                        "fieldType": "string",
                        "values": [
                            {}
                        ]
                    }
                ],
                "type": result
            };
            _this._router.navigate(['/mymodels']);
        }, function (reason) {
        });
    };
    EditcontractComponent.prototype.addVar = function (content) {
        var _this = this;
        this._modalService.open(content).result.then(function (result) {
            _this.newAutoVar.values = _this.newAutoVar.valuesString.split(',');
            //TODO send var
            _this.newAutoVar = {
                name: "",
                type: null,
                valuesString: "",
                values: []
            };
            _this._apiService.getAutoVars().subscribe(function (data) { _this.autovars = data; });
        }, function (reason) {
        });
    };
    EditcontractComponent.prototype.comparePolitics = function () {
        var _this = this;
        this._apiService.comparePolitics(this.contract.body).subscribe(function (data) { _this.politics = data; });
    };
    EditcontractComponent.prototype.compareLastVersion = function (content) {
        this._modalService.open(content, { size: 'lg', windowClass: 'compare-version-modal' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    EditcontractComponent.prototype.delete = function () {
        //TODO send delete
        this._router.navigate(['/mycontracts']);
    };
    EditcontractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editcontract',
            template: __webpack_require__("./src/app/editcontract/editcontract.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], EditcontractComponent);
    return EditcontractComponent;
}());



/***/ }),

/***/ "./src/app/editcontract/editcontract.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <div class=\"float-right mt-3\">\r\n        <button class=\"btn btn-outline-secondary\" (click)=\"compareLastVersion(compareModal)\">Historial</button>\r\n        <button class=\"btn btn-outline-danger ml-2\" (click)=\"delete()\">Eliminar</button>\r\n    </div>\r\n    <h1>\r\n        Editar\r\n        <span [hidden]=\"contract.type != 'draft'\">Borrador</span>\r\n        <span [hidden]=\"contract.type != 'private-model'\">Modelo Privado</span>\r\n        <span [hidden]=\"contract.type != 'public-model'\">Modelo Público</span>\r\n    </h1>\r\n    <div class=\"container row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"mb-2\">\r\n                <div class=\"float-right\">\r\n                    <button (click)=\"file.click()\" class=\"btn btn-outline-primary mb-2\">Cargar Documento</button>\r\n                    <input type=\"file\" #file (change)='openFile($event)' accept=\"text/plain\" style=\"display:none;\">\r\n                </div>\r\n                <div class=\"d-flex pr-3\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Nombre del Contrato\" [(ngModel)]=\"contract.name\">\r\n                </div>\r\n            </div>\r\n            <div [froalaEditor]=\"options\" [(froalaModel)]=\"contract.body\"></div>\r\n            <div class=\"mt-2\">\r\n                <h4>Agregar Variables Automáticas</h4>\r\n                <div>\r\n                    <div class=\"autovars mb-1\">\r\n                        <button *ngFor=\"let autovar of autovars\" class=\"btn btn-outline-secondary btn-sm m-1\" (click)=\"addAutoVar(autovar)\">{{autovar.name}}</button>\r\n                    </div>\r\n                    <button class=\"btn btn-link\" (click)=\"addVar(addvar)\">+ Agregar nueva variable</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 pt-5\">\r\n            <button class=\"btn btn-primary btn-block\" (click)=\"comparePolitics()\">Comparar Clausulas</button>\r\n            <ul class=\"mt-3 pb-3 bb-1\" style=\"list-style: none;\">\r\n                <li class=\"politic\" *ngFor=\"let politic of politics\" [ngClass]=\"politic.apply? 'text-success' : (politic.apply === false && politic.required)? 'text-danger' : ''\">\r\n                    <i [hidden]=\"!politic.apply\" class=\"fas fa-check-square mr-1\"></i>\r\n                    <i [hidden]=\"politic.apply\" class=\"far fa-square mr-1\"></i>\r\n                    {{politic.name}}\r\n                    <span [hidden]=\"!politic.required\" class=\"text-danger\">*</span>\r\n                </li>\r\n            </ul>\r\n            <div [hidden]=\"contract.type == 'draft'\" class=\"bb-1 pb-3 mb-3\">\r\n                <label for=\"\">Descripción</label>\r\n                <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"contract.description\"></textarea>\r\n                <div class=\"form-inline mt-2\" [hidden]=\"contract.type != 'public-model'\">\r\n                    <label for=\"\">Precio $</label>\r\n                    <input type=\"number\" step=\"any\" class=\"form-control ml-1\" [(ngModel)]=\"contract.price\">\r\n                </div>\r\n            </div>\r\n            <div [hidden]=\"!contract.usedBuyedModel\" class=\"bb-1 pb-3 mb-3\">\r\n                <div class=\"form-inline mt-2\">\r\n                    <label for=\"\">Valoración del Modelo Comprado</label>\r\n                    <select [(ngModel)]=\"buyedStars\" class=\"custom-select d-inline ml-1\" style=\"width:50px\">\r\n                        <option value=\"1\">1</option>\r\n                        <option value=\"2\">2</option>\r\n                        <option value=\"3\">3</option>\r\n                        <option value=\"4\">4</option>\r\n                        <option value=\"5\">5</option>\r\n                    </select>\r\n                </div>\r\n                <label for=\"\">Opinion</label>\r\n                <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"buyedReview\"></textarea>\r\n            </div>\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-primary my-1\" (click)=\"open(content)\">Guardar</button>\r\n                <button class=\"btn btn-primary my-1\" (click)=\"open(content)\">Guardar Como...</button>\r\n                <button class=\"btn btn-secondary my-1\" (click)=\"sendEmail(sendemail)\">Enviar por Correo</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #privateModel let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Guardar Modelo Privado</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Descripcion</label>\r\n            <textarea class=\"form-control px-2\" [(ngModel)]=\"modelDescription\" rows=\"3\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c('private-model')\">Guardar</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #publicModel let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Publicar Modelo</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Descripcion</label>\r\n            <textarea class=\"form-control px-2\" [(ngModel)]=\"modelDescription\" rows=\"3\"></textarea>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <label>Precio ($)</label>\r\n            <input type=\"number\" step=\"any\" class=\"form-control\" [(ngModel)]=\"modelPrice\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c('private-model')\">Publicar</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #sendemail let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Enviar por Mail</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Dirección de Email</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c()\">Enviar</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #addvar let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Nueva Variable Automática</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newAutoVar.name\">\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <label>Tipo</label>\r\n            <select class=\"custom-select\" [(ngModel)]=\"newAutoVar.type\">\r\n                <option value=\"text\">Texto</option>\r\n                <option value=\"int\">Número entero</option>\r\n                <option value=\"float\">Número con coma</option>\r\n                <option value=\"date\">Fecha</option>\r\n                <option value=\"list\">Lista</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"mt-2\" [hidden]=\"newAutoVar.type != 'list'\">\r\n            <label>Valores de la lista (separarlos con una coma)</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newAutoVar.valuesString\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c('add')\">Agregar</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Guardar como...</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <button type=\"button\" class=\"mb-2 btn btn-outline-secondary\" (click)=\"c('draft')\">Borrador</button>\r\n        <button type=\"button\" class=\"mb-2 btn btn-primary\" (click)=\"c(privateModel)\">Modelo Privado</button>\r\n        <button type=\"button\" class=\"mb-2 btn btn-primary\" (click)=\"c(publicModel)\">Modelo Publico</button>\r\n        <button type=\"button\" class=\"mb-2 btn btn-success\" (click)=\"c('final')\">Contrato Final</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #compareModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Comparar</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n       \r\n        <div class=\"mergely-full-screen-8\">\r\n            <div class=\"mergely-resizer\">\r\n                <div id=\"mergely\"></div>\r\n            </div>\r\n        </div>\r\n       \r\n        <div style=\"display:none\" class=\"row\">\r\n           <div class=\"col-md-6\">\r\n               <h5 class=\"bb-1 pb-2\">Actual</h5>\r\n               <div id=\"#contractNow\" [innerHTML]=\"contract.body\"></div>\r\n           </div>\r\n           <div class=\"col-md-6\">\r\n                <h5 class=\"bb-1 pb-2\">Anterior</h5>\r\n                <div id=\"#contractBefore\" [innerHTML]=\"contract.body\"></div>\r\n           </div>\r\n       </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/fillcontract/fillcontract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillcontractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FillcontractComponent = /** @class */ (function () {
    function FillcontractComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.data = {};
    }
    FillcontractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get("assets/fillcontract.mock.json").subscribe(function (data) { _this.data = data; });
    };
    FillcontractComponent.prototype.send = function () {
        //TODO send fill
        this._router.navigate(['/editcontract']);
    };
    FillcontractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fillcontract',
            template: __webpack_require__("./src/app/fillcontract/fillcontract.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], FillcontractComponent);
    return FillcontractComponent;
}());



/***/ }),

/***/ "./src/app/fillcontract/fillcontract.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <h1 class=\"mb-4\">Completar //\r\n        <b>Contrato de Alquiler de Inmueble</b>\r\n    </h1>\r\n    <div class=\"row container\">\r\n        <div class=\"col-md-6 people-data\">\r\n            <div class=\"bg-light p-3 mb-4\" *ngFor=\"let person of data.people\">\r\n                <h4 class=\"pb-3 mb-3 bb-1\">{{person.name}}</h4>\r\n                <div class=\"container\">\r\n                    <div class=\"field-container mt-1\" *ngFor=\"let field of person.fields\">\r\n                        <small>{{field.name | replaceUnderscore}}</small>\r\n                        <input [hidden]=\"field.type != 'string'\" type=\"text\" class=\"form-control\">\r\n                        <input [hidden]=\"field.type != 'int'\" type=\"number\" class=\"form-control\">\r\n                        <input [hidden]=\"field.type != 'float'\" step=\"any\" type=\"number\" class=\"form-control\">\r\n                        <input [hidden]=\"field.type != 'date'\" type=\"date\" class=\"form-control\">\r\n                        <div [hidden]=\"field.type != 'combo'\">\r\n                            <select class=\"custom-select\" style=\"height: 37px; width: 50%;\">\r\n                                <option value=\"0\" disabled style=\"display:none;\" selected>Seleccionar</option>\r\n                                <option *ngFor=\"let option of field.options\" value=\"{{option}}\">{{option | replaceUnderscore}}</option>\r\n                            </select>\r\n                            <input type=\"text\" class=\"form-control\" style=\"width:49%; display: inline-block; vertical-align: bottom;\">\r\n                        </div>\r\n                        <select [hidden]=\"field.type != 'list'\" class=\"custom-select\" style=\"display:block; height: 37px;\">\r\n                            <option value=\"0\" disabled style=\"display:none;\" selected>Seleccionar</option>\r\n                            <option *ngFor=\"let option of field.options\" value=\"{{option}}\">{{option | replaceUnderscore}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 people-data\">\r\n            <div class=\"bg-light p-3 mb-3\">\r\n                <h4 class=\"pb-3 mb-3 bb-1\">{{data.extra?.name}}</h4>\r\n                <div class=\"container\">\r\n                    <div class=\"field-container mt-1\" *ngFor=\"let field of data.extra?.fields\">\r\n                        <small>{{field.name | replaceUnderscore}}</small>\r\n                        <input [hidden]=\"field.type != 'string'\" type=\"text\" class=\"form-control\">\r\n                        <input [hidden]=\"field.type != 'int'\" type=\"number\" class=\"form-control\">\r\n                        <input [hidden]=\"field.type != 'float'\" step=\"any\" type=\"number\" class=\"form-control\">\r\n                        <input [hidden]=\"field.type != 'date'\" type=\"date\" class=\"form-control\">\r\n                        <div [hidden]=\"field.type != 'combo'\">\r\n                            <select class=\"custom-select\" style=\"height: 37px; width: 50%;\">\r\n                                <option value=\"0\" disabled style=\"display:none;\" selected>Seleccionar</option>\r\n                                <option *ngFor=\"let option of field.options\" value=\"{{option}}\">{{option | replaceUnderscore}}</option>\r\n                            </select>\r\n                            <input type=\"text\" class=\"form-control\" style=\"width:49%; display: inline-block; vertical-align: bottom;\">\r\n                        </div>\r\n                        <select [hidden]=\"field.type != 'list'\" class=\"custom-select\" style=\"display:block; height: 37px;\">\r\n                            <option value=\"0\" disabled style=\"display:none;\" selected>Seleccionar</option>\r\n                            <option *ngFor=\"let option of field.options\" value=\"{{option}}\">{{option | replaceUnderscore}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container text-right\">\r\n        <button class=\"btn btn-primary\" (click)=\"send()\">Enviar y continuar</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layout/layout.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.template.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <div class=\"container\">\r\n\r\n        <a class=\"navbar-brand text-primary\" href=\"#\">Atticus</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/mycontracts\" routerLinkActive=\"active\">Mis Contratos</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/mymodels\" routerLinkActive=\"active\">Mis Modelos</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/mypolitics\" routerLinkActive=\"active\">Mis Políticas</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/marketplace\" routerLinkActive=\"active\">Marketplace</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"my-1\">\r\n                <i class=\"fas fa-2x fa-user-circle text-primary\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router) {
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this._router.navigate(['/mycontracts']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light\" style=\"height: 100vh;\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-4 pt-5\">\r\n                <h1 class=\"text-center mb-4 text-primary\">\r\n                    Atticus\r\n                </h1>\r\n                <div class=\"card\">\r\n                    <h5 class=\"card-header text-center bg-light\">\r\n                        <span>¡Bienvenido!</span>\r\n                    </h5>\r\n                    <div class=\"card-body\">\r\n                        <label>\r\n                            <small>Usuario</small>\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control mb-3\">\r\n                        <!-- <label>\r\n                            <small>Email</small>\r\n                        </label>\r\n                        <input type=\"email\" class=\"form-control mb-3\"> -->\r\n                        <label>\r\n                            <small>Contraseña</small>\r\n                        </label>\r\n                        <input type=\"password\" class=\"form-control mb-3\">\r\n                        <div class=\"text-center\">\r\n                            <button class=\"btn btn-primary btn-block\" (click)=\"login()\">Iniciar Sesión</button>\r\n                            <button class=\"btn btn-link\">Registrarse</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/marketplace/marketplace.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketplaceComponent = /** @class */ (function () {
    function MarketplaceComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.models = [];
        this.Arr = Array;
    }
    MarketplaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get("http://52.203.241.165:8000/marketplace/").subscribe(function (data) { console.log(data); _this.models = data; });
    };
    MarketplaceComponent.prototype.buy = function (model) {
        //TODO buy
        this._router.navigate(['/mymodels']);
    };
    MarketplaceComponent.prototype.preview = function (model) {
        //TODO buy
        this._router.navigate(['/modelpreview', { id: model.id }]);
    };
    MarketplaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-marketplace',
            template: __webpack_require__("./src/app/marketplace/marketplace.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MarketplaceComponent);
    return MarketplaceComponent;
}());



/***/ }),

/***/ "./src/app/marketplace/marketplace.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <h1>Marketplace</h1>\r\n    <div class=\"container row\">\r\n        <div class=\"col-md-4 my-3\" *ngFor=\"let model of models\">\r\n            <div class=\"model-card bg-light p-4\">\r\n                <div class=\"model-card-first-row\">\r\n                    <div class=\"float-right\">\r\n                        <small class=\"text-warning\" *ngFor=\"let star of Arr(model.stars).fill(1)\">\r\n                            <i class=\"fas fa-star\"></i>\r\n                        </small>\r\n                        <small class=\"text-warning\" *ngFor=\"let star of Arr(5 - model.stars).fill(1)\">\r\n                            <i class=\"far fa-star\"></i>\r\n                        </small>\r\n                    </div>\r\n                    <h5 class=\"model-card-title font-weight-bold\">{{model.name}}</h5>\r\n                </div>\r\n                <div class=\"model-card-second-row\">\r\n                    <p class=\"model-card-description\">{{model.description}}</p>\r\n                </div>\r\n                <div class=\"model-card-buttons\">\r\n                    <button class=\"btn btn-primary\" (click)=\"buy(model)\">\r\n                        <i class=\"fa fa-shopping-cart mr-1\"></i>\r\n                        ${{model.price}}</button>\r\n                    <button class=\"btn btn-outline-secondary float-right\" (click)=\"preview(model)\">Ver</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center\" style=\"display:none;\">\r\n        <nav aria-label=\"Page navigation example\" class=\"d-inline-block\">\r\n            <ul class=\"pagination pagination-lg\">\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n                        <span aria-hidden=\"true\">&laquo;</span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">2</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">3</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n                        <span aria-hidden=\"true\">&raquo;</span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modelpreview/modelpreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelpreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModelpreviewComponent = /** @class */ (function () {
    function ModelpreviewComponent(_http, _router, _modalService) {
        this._http = _http;
        this._router = _router;
        this._modalService = _modalService;
        this.contract = {};
        this.Arr = Array;
        this.reviews = [];
    }
    ModelpreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get("assets/modelpreview.mock.json").subscribe(function (data) { _this.contract = data; });
    };
    ModelpreviewComponent.prototype.buy = function () {
        //TODO buy
        this._router.navigate(['/mymodels']);
    };
    ModelpreviewComponent.prototype.edit = function () {
        //TODO send edit
        this._router.navigate(['/editcontract', { id: this.contract["id"] }]);
    };
    ModelpreviewComponent.prototype.seeReviews = function (content) {
        var _this = this;
        this._http.get("assets/reviews.mock.json").subscribe(function (data) {
            _this.reviews = data;
            _this._modalService.open(content).result.then(function (result) {
                // this.closeResult = `Closed with: ${result}`;
                if (result == "no-model") {
                    console.log("no-model");
                    _this._router.navigate(['/newcontract']);
                }
                else {
                    _this._router.navigate(['/fillcontract', { id: result }]);
                }
            }, function (reason) {
                // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        });
    };
    ModelpreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modelpreview',
            template: __webpack_require__("./src/app/modelpreview/modelpreview.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], ModelpreviewComponent);
    return ModelpreviewComponent;
}());



/***/ }),

/***/ "./src/app/modelpreview/modelpreview.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <h1>Preview //\r\n        <b>{{contract.name}}</b>\r\n    </h1>\r\n    <div class=\"container mt-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div>\r\n                    <label class=\"font-weight-bold\" for=\"\">Vendedor</label>\r\n                    <span>{{contract.creatorName}}</span>\r\n                    <small class=\"text-muted\">{{contract.creatorRole}}</small>\r\n                </div>\r\n                <div class=\"description-container bg-light p-3\">\r\n                    <h5>Descripción</h5>\r\n                    <p>{{contract.description}}</p>\r\n                </div>\r\n                <div class=\"text-center\" [hidden]=\"contract.type == 'private'\">\r\n                    <label for=\"\">Rating del Contrato:</label>\r\n                    <small class=\"text-warning\" *ngFor=\"let star of Arr(contract.stars).fill(1)\">\r\n                        <i class=\"fas fa-star\"></i>\r\n                    </small>\r\n                    <small class=\"text-warning\" *ngFor=\"let star of Arr(5 - contract.stars).fill(1)\">\r\n                        <i class=\"far fa-star\"></i>\r\n                    </small>\r\n                </div>\r\n                <div class=\"text-center\" [hidden]=\"contract.type == 'private'\">\r\n                    <button class=\"btn btn-link\" (click)=\"seeReviews(content)\">Ver Opiniones ({{contract.reviewsNumber}})</button>\r\n                </div>\r\n                <div class=\"text-center mt-3\">\r\n                    <button class=\"btn btn-primary btn-lg\" [hidden]=\"contract.owned\" (click)=\"buy()\">\r\n                        <i class=\"fa fa-shopping-cart mr-1\"></i>\r\n                        Comprar\r\n                    </button>\r\n                    <button class=\"btn btn-primary btn-lg\" [hidden]=\"!contract.owned\" (click)=\"edit()\">\r\n                        Editar\r\n                    </button>\r\n                </div>\r\n                <div class=\"text-center mt-1\" [hidden]=\"contract.owned\">\r\n                    <h5 class=\"text-primary font-weight-bold\">${{contract.price}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h4>Cuerpo del Contrato</h4>\r\n                <p class=\"contract-body pl-4 py-3 pr-3 text-justify\" [innerHTML]=\"contract.body\">\r\n                </p>\r\n                <div class=\"required-info bg-light px-3 py-2\">\r\n                    <h5>Datos Necesarios</h5>\r\n                    <div class=\"row px-2\">\r\n                        <div class=\"col-md-4\" *ngFor=\"let dataRequired of contract.dataRequired\">\r\n                            <span class=\"font-weight-bold\" for=\"\">{{dataRequired.name}}</span>\r\n                            <small>\r\n                                <ul class=\"pl-0\" style=\"list-style: none;\">\r\n                                    <li *ngFor=\"let field of dataRequired.fields\">{{field}}</li>\r\n                                </ul>\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Opiniones</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div *ngFor=\"let review of reviews\" class=\"bb-1 py-2\">\r\n            <div>\r\n                <small class=\"text-warning\" *ngFor=\"let star of Arr(review.stars).fill(1)\">\r\n                    <i class=\"fas fa-star\"></i>\r\n                </small>\r\n                <small class=\"text-warning\" *ngFor=\"let star of Arr(5 - review.stars).fill(1)\">\r\n                    <i class=\"far fa-star\"></i>\r\n                </small>\r\n            </div>\r\n            {{review.comment}}\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/mycontracts/mycontracts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycontractsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MycontractsComponent = /** @class */ (function () {
    function MycontractsComponent(_http, _modalService, _router, _apiService) {
        this._http = _http;
        this._modalService = _modalService;
        this._router = _router;
        this._apiService = _apiService;
        this.contracts = [];
        this.models = [];
    }
    MycontractsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get("http://52.203.241.165:8000/organization/" + this._apiService.organizationId + "/contract").subscribe(function (data) { _this.contracts = data; });
    };
    MycontractsComponent.prototype.newContract = function (content) {
        var _this = this;
        this._http.get("http://52.203.241.165:8000/organization/" + this._apiService.organizationId + "/marketplace").subscribe(function (data) { _this.models = data; });
        this._modalService.open(content, { size: 'lg' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
            if (result == "no-model") {
                console.log("no-model");
                _this._router.navigate(['/newcontract']);
            }
            else {
                _this._router.navigate(['/fillcontract', { id: result }]);
            }
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    MycontractsComponent.prototype.randomDate = function (start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };
    MycontractsComponent.prototype.dateDiff = function (date) {
        // let date1 = new Date(date);
        var today = new Date();
        var date1 = this.randomDate(new Date(2018, 0, 1), new Date(2024, 0, 1));
        return this.calcDate(date1, today);
        // return date1;
    };
    MycontractsComponent.prototype.calcDate = function (date1, date2) {
        if (date2 > date1) {
            return "Vencido";
        }
        var diff = Math.floor(date1.getTime() - date2.getTime());
        var day = 1000 * 60 * 60 * 24;
        // console.log(date1);
        // console.log(date2)
        var days = Math.floor(diff / day);
        var months = Math.floor(days / 31);
        var years = Math.floor(months / 12);
        months = months - years * 12;
        days = days - months * 31 - years * 12 * 31;
        var message = "";
        message += "";
        if (years)
            message += years + " años ";
        if (months)
            message += months + " meses ";
        if (days)
            if (days == 1)
                message += days + " día ";
            else
                message += days + " días ";
        return message;
    };
    MycontractsComponent.prototype.selectContract = function (contract) {
        if (contract.type == "final") {
            this._router.navigate(['/previewcontract', { id: contract.id }]);
        }
        else {
            this._router.navigate(['/editcontract', { id: contract.id }]);
        }
    };
    MycontractsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mycontracts',
            template: __webpack_require__("./src/app/mycontracts/mycontracts.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]])
    ], MycontractsComponent);
    return MycontractsComponent;
}());



/***/ }),

/***/ "./src/app/mycontracts/mycontracts.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <div class=\"float-right mt-1\">\r\n        <button class=\"btn btn-primary rounded-circle btn-lg\" (click)=\"newContract(content)\">\r\n            <i class=\"fa fa-plus\"></i>\r\n        </button>\r\n    </div>\r\n    <h1 class=\"mb-4\">Mis Contratos</h1>\r\n    <div class=\"container\">\r\n        <div class=\"contracts-table text-center rounded\" style=\"overflow:hidden\">\r\n            <div class=\"row mycontracts-header bg-light py-3\">\r\n                <!-- <div class=\"col-md-4\">Parte</div> -->\r\n                <!-- <div class=\"col-md-2\">Plazo</div>\r\n                <div class=\"col-md-2\">Monto</div>\r\n                <div class=\"col-md-2\">Area</div>\r\n                <div class=\"col-md-2\">Vto.</div> -->\r\n                <div class=\"col-md-8 pl-5\">Nombre</div>\r\n                <div class=\"col-md-4\">Vencimiento</div>\r\n            </div>\r\n            <div class=\"row mycontracts-row selectable py-2 bb-1\" *ngFor=\"let contract of contracts\" (click)=\"selectContract(contract)\">\r\n                <div class=\"col-md-8\">\r\n                    <i [hidden]=\"contract.statusType=='draft'\" class=\"col-md-1 far fa-check-square mt-1 float-left\" placement=\"right\" ngbTooltip=\"Final\"></i>\r\n                    <i [hidden]=\"contract.statusType=='final'\" class=\"col-md-1 far fa-square mt-1 float-left\" placement=\"right\" ngbTooltip=\"Borrador\"></i>\r\n                    <!-- {{contract.part}} -->\r\n                    {{contract.name}}\r\n                </div>\r\n                <!-- <div class=\"col-md-2\">{{contract.term}}</div> -->\r\n                <!-- <div class=\"col-md-2\">${{contract.amount}}</div> -->\r\n                <!-- <div class=\"col-md-2\">{{contract.area}}</div> -->\r\n                <div class=\"col-md-4 text-success\">{{dateDiff(contract.versions[contract.versions.length - 1].date)}}</div>\r\n            </div>\r\n            <div class=\"row mycontracts-row selectable py-2 bb-1\">\r\n                <div class=\"col-md-8\">\r\n                    <i class=\"col-md-1 far fa-check-square mt-1 float-left\" placement=\"right\" ngbTooltip=\"Final\"></i>\r\n                    <!-- {{contract.part}} -->\r\n                    Envasadora Provincial M&A\r\n                </div>\r\n                <!-- <div class=\"col-md-2\">{{contract.term}}</div> -->\r\n                <!-- <div class=\"col-md-2\">${{contract.amount}}</div> -->\r\n                <!-- <div class=\"col-md-2\">{{contract.area}}</div> -->\r\n                <div class=\"col-md-4 text-danger\">Vencido</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center mt-4\" style=\"display:none;\">\r\n        <nav aria-label=\"Page navigation example\" class=\"d-inline-block\">\r\n            <ul class=\"pagination\">\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n                        <span aria-hidden=\"true\">&laquo;</span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">2</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">3</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n                        <span aria-hidden=\"true\">&raquo;</span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Elegir Modelo</h4>\r\n        <button type=\"button\" class=\"ml-3 my-1 btn btn-outline-secondary btn-sm\" (click)=\"c('no-model')\">No Usar Modelo</button>        \r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let model of models\" class=\"col-md-4 my-2\">\r\n                <button type=\"button\" style=\"white-space: normal;\" class=\"btn btn-outline-primary btn-block\" (click)=\"c(model.id)\">\r\n                    {{model.name}}\r\n                </button>\r\n                <small class=\"text-justify d-block px-1\">\r\n                    {{model.description}}\r\n                </small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/mymodels/mymodels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MymodelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MymodelsComponent = /** @class */ (function () {
    function MymodelsComponent(_http, _modalService, _router, _apiService) {
        this._http = _http;
        this._modalService = _modalService;
        this._router = _router;
        this._apiService = _apiService;
        this.models = [];
        this.Arr = Array;
    }
    MymodelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get("http://52.203.241.165:8000/organization/" + this._apiService.organizationId + "/marketplace").subscribe(function (data) { _this.models = data; });
    };
    MymodelsComponent.prototype.newContract = function (content) {
        var _this = this;
        this._modalService.open(content, { size: 'lg' }).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
            if (result == "no-model") {
                console.log("no-model");
                _this._router.navigate(['/newcontract']);
            }
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    MymodelsComponent.prototype.preview = function () {
        this._router.navigate(['/modelpreview']);
    };
    MymodelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mymodels',
            template: __webpack_require__("./src/app/mymodels/mymodels.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]])
    ], MymodelsComponent);
    return MymodelsComponent;
}());



/***/ }),

/***/ "./src/app/mymodels/mymodels.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <div class=\"float-right mt-1\">\r\n        <button class=\"btn btn-primary rounded-circle btn-lg\" (click)=\"newContract(content)\">\r\n            <i class=\"fa fa-plus\"></i>\r\n        </button>\r\n    </div>\r\n    <h1>Mis Modelos</h1>\r\n    <div class=\"container row\">\r\n        <div class=\"col-md-4 my-3\" *ngFor=\"let model of models\">\r\n            <div class=\"model-card bg-light p-4\">\r\n                <div class=\"model-card-first-row\">\r\n                    <div class=\"float-right\">\r\n                        <div [hidden]=\"model.type=='private'\">\r\n                            <small class=\"text-warning\" *ngFor=\"let star of Arr(model.stars).fill(1)\">\r\n                                <i class=\"fas fa-star\"></i>\r\n                            </small>\r\n                            <small class=\"text-warning\" *ngFor=\"let star of Arr(5 - model.stars).fill(1)\">\r\n                                <i class=\"far fa-star\"></i>\r\n                            </small>\r\n                        </div>\r\n                        <div class=\"text-right\">\r\n                            <span [hidden]=\"model.source != 'own'\" class=\"badge badge-secondary\">Creado</span>\r\n                            <span [hidden]=\"model.source != 'buyed'\" class=\"badge badge-secondary\">Comprado</span>\r\n                        </div>\r\n                    </div>\r\n                    <h5 class=\"model-card-title font-weight-bold\">{{model.name}}</h5>\r\n                </div>\r\n                <div class=\"model-card-second-row\">\r\n                    <p class=\"model-card-description\">{{model.description}}</p>\r\n                </div>\r\n                <div class=\"model-card-buttons text-right\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"preview()\">Ver</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center\" style=\"display:none;\">\r\n        <nav aria-label=\"Page navigation example\" class=\"d-inline-block\">\r\n            <ul class=\"pagination pagination-lg\">\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n                        <span aria-hidden=\"true\">&laquo;</span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">2</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">3</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n                        <span aria-hidden=\"true\">&raquo;</span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Elegir Modelo</h4>\r\n        <button type=\"button\" class=\"ml-3 my-1 btn btn-outline-secondary btn-sm\" (click)=\"c('no-model')\">No Usar Modelo</button>        \r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let model of models\" class=\"col-md-4 my-2\">\r\n                <button type=\"button\" style=\"white-space: normal;\" class=\"btn btn-outline-primary btn-block\" (click)=\"c(model.id)\">\r\n                    {{model.name}}\r\n                </button>\r\n                <small class=\"text-justify d-block px-1\">\r\n                    {{model.description}}\r\n                </small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/mypolitics/mypolitics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypoliticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("./src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MypoliticsComponent = /** @class */ (function () {
    function MypoliticsComponent(_http, _modalService, _apiService) {
        this._http = _http;
        this._modalService = _modalService;
        this._apiService = _apiService;
        this.politicData = {
            // id: null,
            clause: null,
            description: null,
            type: null
        };
        this.politics = [];
    }
    MypoliticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get("http://52.203.241.165:8000/organization/" + this._apiService.organizationId).subscribe(function (data) { _this.politics = data["clauses"]; });
    };
    MypoliticsComponent.prototype.editPolitic = function (content, politic) {
        var _this = this;
        this.politicData = {
            // id: politic.id,
            description: politic.description,
            clause: politic.clause,
            type: politic.type
        };
        this._modalService.open(content).result.then(function (result) {
            if (result == "remove") {
                //TODO remove
            }
            else if (result == "save") {
                //TODO save changes
            }
            _this._http.get("assets/mypolitics.mock.json").subscribe(function (data) { _this.politics = data; });
        }, function (reason) {
        });
    };
    MypoliticsComponent.prototype.newPolitic = function (content) {
        var _this = this;
        this.politicData = {
            clause: null,
            description: null,
            type: null
        };
        this._modalService.open(content).result.then(function (result) {
            //TODO send politic
            _this._http.get("assets/mypolitics.mock.json").subscribe(function (data) { _this.politics = data; });
        }, function (reason) {
        });
    };
    MypoliticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mypolitics',
            template: __webpack_require__("./src/app/mypolitics/mypolitics.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]])
    ], MypoliticsComponent);
    return MypoliticsComponent;
}());



/***/ }),

/***/ "./src/app/mypolitics/mypolitics.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <div class=\"float-right mt-1\">\r\n        <button class=\"btn btn-primary rounded-circle btn-lg\" (click)=\"newPolitic(newPoliticModal)\">\r\n            <i class=\"fa fa-plus\"></i>\r\n        </button>\r\n    </div>\r\n    <h1 class=\"mb-4\">Mis Políticas</h1>\r\n    <div class=\"container\">\r\n        <div class=\"politics-table text-center rounded\" style=\"overflow:hidden\">\r\n            <div class=\"row mypolitics-header bg-light py-3\">\r\n                <div class=\"col-md-3\">Nombre</div>\r\n                <div class=\"col-md-8\">Clausula</div>\r\n                <div class=\"col-md-1\">Tipo</div>\r\n            </div>\r\n            <div class=\"row mypolitics-row selectable py-2 bb-1\" *ngFor=\"let politic of politics\">\r\n                <div class=\"col-md-3\">{{politic.description}}</div>\r\n                <div class=\"col-md-8\">{{politic.clause}}</div>\r\n                <div class=\"col-md-1\">\r\n                    <span [hidden]=\"politic.type != 'strict'\">E</span>\r\n                    <span [hidden]=\"politic.type != 'negotiable'\">N</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center mt-4\" style=\"display:none;\">\r\n        <nav aria-label=\"Page navigation example\" class=\"d-inline-block\">\r\n            <ul class=\"pagination\">\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n                        <span aria-hidden=\"true\">&laquo;</span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">1</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">2</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\">3</a>\r\n                </li>\r\n                <li class=\"page-item\">\r\n                    <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n                        <span aria-hidden=\"true\">&raquo;</span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<ng-template #newPoliticModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">\r\n            <span> Nueva Política </span>\r\n        </h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"politicData.description\">\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <label>Clausula</label>\r\n            <textarea class=\"form-control\" [(ngModel)]=\"politicData.clause\"></textarea>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <label>Tipo de Política</label>\r\n            <select class=\"custom-select\" [(ngModel)]=\"politicData.type\">\r\n                <option value=\"\"></option>\r\n                <option value=\"strict\">Estricta</option>\r\n                <option value=\"negotiable\">Negociable</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c('add')\">Agregar</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #editPoliticModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">\r\n            <span> Editar Política </span>\r\n        </h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"politicData.description\">\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <label>Clausula</label>\r\n            <textarea class=\"form-control\" [(ngModel)]=\"politicData.clause\"></textarea>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <label>Tipo de Política</label>\r\n            <select class=\"custom-select\" [(ngModel)]=\"politicData.type\">\r\n                <option value=\"\"></option>\r\n                <option value=\"strict\">Estricta</option>\r\n                <option value=\"negotiable\">Negociable</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c('save')\">Guardar</button>\r\n        <button class=\"btn btn-outline-danger\" (click)=\"c('remove')\">Eliminar</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/newcontract/newcontract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewcontractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    crossDomain: true,
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/jsonp',
        'cache-control': 'no-cache'
    }),
    dataType: 'jsonp'
};

var NewcontractComponent = /** @class */ (function () {
    function NewcontractComponent(_http, _modalService, _router) {
        this._http = _http;
        this._modalService = _modalService;
        this._router = _router;
        this.options = {
            heightMin: 400,
            heightMax: 400,
            pluginsEnabled: ['align', 'colors', 'lists']
        };
        this.politics = [];
        this.autovars = [
            {
                "name": "[[plazo]]",
                "placeHolder": "Plazo",
                "fieldType": "int",
            }, {
                "name": "[[monto]]",
                "placeHolder": "Monto",
                "fieldType": "float",
            }
        ];
        this.contract = {
            name: null,
            body: "Nuevo Documento",
            type: null
        };
        this.usedAutoVars = [];
        this.newAutoVar = {
            name: "",
            fieldType: "",
            valuesString: "",
            placeHolder: "",
            values: []
        };
        this.email = null;
        this.modelDescription = null;
        this.modelPrice = null;
    }
    NewcontractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get("assets/newcontract.mock.json").subscribe(function (data) { _this.politics = data["politics"]; });
    };
    NewcontractComponent.prototype.addAutoVar = function (autovar) {
        this.contract.body = this.contract.body + autovar.syntax;
    };
    NewcontractComponent.prototype.openFile = function (event) {
        var _this = this;
        var input = event.target;
        var _loop_1 = function () {
            var reader = new FileReader();
            reader.onload = function () {
                // this 'text' is the content of the file
                _this.contract.body = reader.result;
            };
            reader.readAsText(input.files[index]);
        };
        for (var index = 0; index < input.files.length; index++) {
            _loop_1();
        }
        ;
    };
    NewcontractComponent.prototype.sendEmail = function (content) {
        var _this = this;
        this._modalService.open(content).result.then(function (result) {
            var data = {
                contract: _this.contract,
                email: _this.email
            };
            //TODO send email
            _this._router.navigate(['/mycontracts']);
        }, function (reason) {
        });
    };
    NewcontractComponent.prototype.open = function (content) {
        var _this = this;
        this._modalService.open(content, { size: 'lg' }).result.then(function (result) {
            console.log(result);
            if (result == "final" || result == "draft") {
                _this.contract.type = result;
                //TODO send contract
                _this._router.navigate(['/mycontracts']);
            }
            else {
                _this.saveAsModel(result);
            }
        }, function (reason) {
        });
    };
    NewcontractComponent.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    NewcontractComponent.prototype.saveAsModel = function (content) {
        var _this = this;
        this._modalService.open(content).result.then(function (result) {
            var mock = {
                contract: _this.contract,
                type: result,
                price: _this.modelPrice,
                description: _this.modelDescription
            };
            // let data = {
            //   id: "",
            //   name: this.contract.name,
            //   description: this.modelDescription,
            //   price: this.modelPrice,
            //   ownerId: "68d5cb8c-1351-4776-bce2-9b360f4cd216",
            //   stars: 0,
            //   body: this.contract.body,
            //   dynamicFields: [],
            //   type: result
            // }
            // let data = {
            //   "id": "",
            //   "name": "GIANLUCA",
            //   "description": "Este es un contrato.",
            //   "price": 100,
            //   "ownerId": "68d5cb8c-1351-4776-bce2-9b360f4cd216",
            //   "stars": 0,
            //   "body": "loep dfsdfds loep dfsdfdsloep dfsdfdsloep dfsdfdsloep dfsdfds loep dfsdfdsloep dfsdfdsloep dfsdfds",
            //   "dynamicFields": [],
            //   "type": "public"
            // }
            // console.log(data)
            // debugger
            // this._http.post("http://52.203.241.165:8000/marketplace/", data, httpOptions).subscribe(data => {this._router.navigate(['/mymodels']);});
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.203.241.165:8000/marketplace/",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                "processData": false,
                "data": "{\n  \"id\": \"\",\n  \"name\": \"GIANLUCA\",\n  \"description\": \"Este es un contrato.\",\n  \"price\": 100,\n  \"ownerId\": \"68d5cb8c-1351-4776-bce2-9b360f4cd216\",\n  \"stars\": 0,\n  \"body\": \"loep dfsdfds loep dfsdfdsloep dfsdfdsloep dfsdfdsloep dfsdfds loep dfsdfdsloep dfsdfdsloep dfsdfds\",\n  \"dynamicFields\": [],\n  \"type\": \"public\"\n}"
            };
            $.ajax(settings).done(function (response) {
                console.log(response);
            });
            //TODO send model
        }, function (reason) {
        });
    };
    NewcontractComponent.prototype.addVar = function (content) {
        var _this = this;
        this._modalService.open(content).result.then(function (result) {
            _this.newAutoVar.values = _this.newAutoVar.valuesString.split(',');
            _this.autovars.push(_this.newAutoVar);
            _this.newAutoVar = {
                name: "",
                fieldType: "",
                placeHolder: "",
                valuesString: "",
                values: []
            };
        }, function (reason) {
        });
    };
    NewcontractComponent.prototype.comparePolitics = function () {
        var _this = this;
        this._http.get("assets/comparepolitics.mock.json").subscribe(function (data) { _this.politics = data; });
    };
    NewcontractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newcontract',
            template: __webpack_require__("./src/app/newcontract/newcontract.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NewcontractComponent);
    return NewcontractComponent;
}());



/***/ }),

/***/ "./src/app/newcontract/newcontract.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <h1>Nuevo Contrato</h1>\r\n    <div class=\"container row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"mb-2\">\r\n                <div class=\"float-right\">\r\n                    <button (click)=\"file.click()\" class=\"btn btn-outline-primary mb-2\">Cargar Documento</button>\r\n                    <input type=\"file\" #file (change)='openFile($event)' accept=\"text/plain\" style=\"display:none;\">\r\n                </div>\r\n                <div class=\"d-flex pr-3\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Nombre del Contrato\" [(ngModel)]=\"contract.name\">\r\n                </div>\r\n            </div>\r\n            <div [froalaEditor]=\"options\" [(froalaModel)]=\"contract.body\"></div>\r\n            <div class=\"mt-2\">\r\n                <h4>Agregar Variables Automáticas</h4>\r\n                <div>\r\n                    <div class=\"autovars mb-1\">\r\n                        <button *ngFor=\"let autovar of autovars\" class=\"btn btn-outline-secondary btn-sm m-1\" (click)=\"addAutoVar(autovar)\">{{autovar.placeHolder}}</button>\r\n                    </div>\r\n                    <button class=\"btn btn-link\" (click)=\"addVar(addvar)\">+ Agregar nueva variable</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 pt-5\">\r\n            <button class=\"btn btn-primary btn-block\" (click)=\"comparePolitics()\">Comparar Clausulas</button>\r\n            <ul class=\"mt-3 pb-3 bb-1\" style=\"list-style: none;\">\r\n                <li class=\"politic\" *ngFor=\"let politic of politics\" [ngClass]=\"politic.apply? 'text-success' : (politic.apply === false && politic.required)? 'text-danger' : ''\">\r\n                    <i [hidden]=\"!politic.apply\" class=\"fas fa-check-square mr-1\"></i>\r\n                    <i [hidden]=\"politic.apply\" class=\"far fa-square mr-1\"></i>\r\n                    {{politic.name}}\r\n                    <span [hidden]=\"!politic.required\" class=\"text-danger\">*</span>\r\n                </li>\r\n            </ul>\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-primary\" (click)=\"open(content)\">Guardar Como...</button>\r\n                <button class=\"btn btn-secondary\" (click)=\"sendEmail(sendemail)\">Enviar por Correo</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #privateModel let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Guardar Modelo Privado</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Descripcion</label>\r\n            <textarea class=\"form-control px-2\" [(ngModel)]=\"modelDescription\" rows=\"3\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c('private')\">Guardar</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #publicModel let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Publicar Modelo</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Descripcion</label>\r\n            <textarea class=\"form-control px-2\" [(ngModel)]=\"modelDescription\" rows=\"3\"></textarea>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <label>Precio ($)</label>\r\n            <input type=\"number\" step=\"any\" class=\"form-control\" [(ngModel)]=\"modelPrice\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c('public')\">Publicar</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #sendemail let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Enviar por Mail</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Dirección de Email</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c()\">Enviar</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #addvar let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Nueva Variable Automática</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-left\">\r\n        <div>\r\n            <label>Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newAutoVar.name\">\r\n        </div>\r\n        <div class=\"mt-2\">\r\n            <label>Tipo</label>\r\n            <select class=\"custom-select\" [(ngModel)]=\"newAutoVar.type\">\r\n                <option value=\"text\">Texto</option>\r\n                <option value=\"int\">Número entero</option>\r\n                <option value=\"float\">Número con coma</option>\r\n                <option value=\"date\">Fecha</option>\r\n                <option value=\"list\">Lista</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"mt-2\" [hidden]=\"newAutoVar.type != 'list'\">\r\n            <label>Valores de la lista (separarlos con una coma)</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newAutoVar.valuesString\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" (click)=\"c('add')\">Agregar</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Guardar como...</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body text-center\">\r\n        <button type=\"button\" class=\"mb-2 btn btn-outline-secondary\" (click)=\"c('draft')\">Borrador</button>\r\n        <button type=\"button\" class=\"mb-2 btn btn-primary\" (click)=\"c(privateModel)\">Modelo Privado</button>\r\n        <button type=\"button\" class=\"mb-2 btn btn-primary\" (click)=\"c(publicModel)\">Modelo Publico</button>\r\n        <button type=\"button\" class=\"mb-2 btn btn-success\" (click)=\"c('final')\">Contrato Final</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/previewcontract/previewcontract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewcontractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreviewcontractComponent = /** @class */ (function () {
    function PreviewcontractComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.contract = {};
        this.Arr = Array;
    }
    PreviewcontractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get("assets/modelpreview.mock.json").subscribe(function (data) { _this.contract = data; });
    };
    PreviewcontractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-previewcontract',
            template: __webpack_require__("./src/app/previewcontract/previewcontract.template.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PreviewcontractComponent);
    return PreviewcontractComponent;
}());



/***/ }),

/***/ "./src/app/previewcontract/previewcontract.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n    <h1>Preview //\r\n        <b>{{contract.name}}</b>\r\n    </h1>\r\n    <div class=\"container mt-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                \r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <h4>Cuerpo del Contrato</h4>\r\n                <p class=\"contract-body pl-4 py-3 pr-3 text-justify\" [innerHTML]=\"contract.body\">\r\n                </p>\r\n                <div class=\"required-info bg-light px-3 py-2\">\r\n                    <h5>Datos Necesarios</h5>\r\n                    <div class=\"row px-2\">\r\n                        <div class=\"col-md-4\" *ngFor=\"let dataRequired of contract.dataRequired\">\r\n                            <span class=\"font-weight-bold\" for=\"\">{{dataRequired.name}}</span>\r\n                            <small>\r\n                                <ul class=\"pl-0\" style=\"list-style: none;\">\r\n                                    <li *ngFor=\"let field of dataRequired.fields\">{{field}}</li>\r\n                                </ul>\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map