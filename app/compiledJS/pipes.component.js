"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PipesComponent = (function () {
    function PipesComponent() {
        this.myString = 'hello wdi4';
        this.myDate = new Date();
        // THESE ARE FOR CUSTOM PIPES SECTION
        this.team = [
            { name: 'Prima', grayhair: true },
            { name: 'Angeline', grayhair: false },
            { name: 'Curian', grayhair: false },
            { name: 'Junius', grayhair: false },
        ];
    }
    PipesComponent.prototype.isGray = function () {
        for (var _i = 0, _a = this.team; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.grayhair = !obj.grayhair;
        }
    };
    PipesComponent = __decorate([
        core_1.Component({
            selector: 'dd-pipes',
            templateUrl: 'app/html/pipes.html',
            styles: ["\n      .pipes {\n        margin: 30px;\n      }\n      .customPipes {\n        background-color: black;\n        color: white;\n      }\n      div {\n        margin: 20px;\n        padding: 20px;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], PipesComponent);
    return PipesComponent;
}());
exports.PipesComponent = PipesComponent;
//# sourceMappingURL=pipes.component.js.map