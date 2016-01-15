System.register(["angular2/core", "./drawing-data", "./property.component", "./stage.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drawing_data_1, property_component_1, stage_component_1;
    var template, modal, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drawing_data_1_1) {
                drawing_data_1 = drawing_data_1_1;
            },
            function (property_component_1_1) {
                property_component_1 = property_component_1_1;
            },
            function (stage_component_1_1) {
                stage_component_1 = stage_component_1_1;
            }],
        execute: function() {
            template = "\n<div class=\"container\">\n    <div class=\"col-sm-7 col-xs-12\">\n        <stage [drawingData]=\"drawingData\"></stage>\n    </div>\n    <div class=\"col-sm-5 col-xs-12\">\n        <property-panel [drawingData]=\"drawingData\"></property-panel>\n    </div>\n</div>\n";
            modal = "\n<div class=\"modal fade\" id=\"ShapeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n          aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Shapes</h4>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"col-sm-3\">\n          \u2606\n        </div>\n        <div class=\"col-sm-3\">\n          \u2661\n        </div>\n        <div class=\"col-sm-3\">\n          \u3020\n        </div>\n        <div class=\"col-sm-3\">\n          \u3012\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
            AppComponent = (function () {
                function AppComponent() {
                    this.drawingData = new drawing_data_1.DrawingData();
                    this.drawingData.color = "0xFF0000";
                    this.drawingData.width = 500;
                    this.drawingData.height = 500;
                    this.drawingData.startX = 250;
                    this.drawingData.startXVariance = 50;
                    this.drawingData.startY = 250;
                    this.drawingData.startYVariance = 50;
                    this.drawingData.lifeSpan = 500;
                    this.drawingData.lifeSpanVariance = 30;
                    this.drawingData.angle = 0;
                    this.drawingData.angleVariance = 360;
                    this.drawingData.speed = 0.5;
                    this.drawingData.speedVariance = 0.5;
                    this.drawingData.startAlpha = 0;
                    this.drawingData.startAlphaVariance = 1;
                    this.drawingData.finishAlpha = 1;
                    this.drawingData.finishAlphaVariance = 0.5;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: template + modal,
                        directives: [stage_component_1.StageComponent, property_component_1.PropertyPanel]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map