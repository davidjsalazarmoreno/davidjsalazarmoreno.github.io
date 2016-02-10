System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoListFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoListFilterPipe = (function () {
                function TodoListFilterPipe() {
                }
                TodoListFilterPipe.prototype.transform = function (value, filterStatus) {
                    var _filterStatus = filterStatus[0] || "all";
                    if (_filterStatus == "all") {
                        return value;
                    }
                    console.log(_filterStatus);
                    return value.filter(function (item) {
                        console.log(item.status);
                        return item.status == _filterStatus && item;
                    });
                };
                TodoListFilterPipe = __decorate([
                    core_1.Pipe({
                        name: "todoListFilterPipe",
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListFilterPipe);
                return TodoListFilterPipe;
            }());
            exports_1("TodoListFilterPipe", TodoListFilterPipe);
        }
    }
});
//# sourceMappingURL=todo-list-filter-pipe.js.map