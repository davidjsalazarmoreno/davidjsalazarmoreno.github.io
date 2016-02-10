System.register(["angular2/core", "angular2/router", "angular2/common", "../../services/user.service", "../../services/id-generator.service"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, core_2, router_1, common_1, user_service_1, id_generator_service_1;
    var RegistrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (id_generator_service_1_1) {
                id_generator_service_1 = id_generator_service_1_1;
            }],
        execute: function() {
            RegistrationComponent = (function () {
                function RegistrationComponent(_userService, _idGeneratorService) {
                    this._userService = _userService;
                    this._idGeneratorService = _idGeneratorService;
                    this.newUser = {};
                    this.active = true;
                }
                RegistrationComponent.prototype.onSubmit = function () {
                    var _newId = this._idGeneratorService.newID(), _newUser = {
                        "id": _newId,
                        "name": this.newUser["name"],
                        "email": this.newUser["email"],
                        "password": this.newUser["password"]
                    }, userAdded = this._userService.addUser(_newUser);
                    console.log(_newUser);
                    if (userAdded) {
                        this.newUser = {};
                        this.submitted = true;
                    }
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: "registration",
                        templateUrl: "/templates/registration/registration.component.html",
                        directives: [common_1.NgForm, router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService, id_generator_service_1.IdGeneratorService]
                    }),
                    __param(0, core_2.Inject(user_service_1.UserService)),
                    __param(1, core_2.Inject(id_generator_service_1.IdGeneratorService)), 
                    __metadata('design:paramtypes', [user_service_1.UserService, id_generator_service_1.IdGeneratorService])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map