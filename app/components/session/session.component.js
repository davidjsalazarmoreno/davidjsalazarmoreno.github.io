System.register(["angular2/core", "angular2/router", "angular2/common", "../../services/user.service", "../../services/session.service"], function(exports_1, context_1) {
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
    var core_1, core_2, router_1, common_1, user_service_1, session_service_1;
    var SessionComponent;
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
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            }],
        execute: function() {
            SessionComponent = (function () {
                function SessionComponent(_userService, _sessionService, _router, _routeParams) {
                    this._userService = _userService;
                    this._sessionService = _sessionService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = {};
                }
                SessionComponent.prototype.ngOnInit = function () {
                    var logout = this._routeParams.get("logout");
                    if (logout !== null && logout == 1) {
                        console.log("Logout");
                        this.logOut();
                    }
                };
                SessionComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(arguments);
                    var _users = this._userService.getUsers(), _getUserBy = this._userService.getUserBy, _user = this.user;
                    _users.then(function (result) {
                        var currentUser = _getUserBy(result, "email", _user.email);
                        _this.logIn(currentUser);
                        return true;
                    }, function (result) {
                        console.warn("Error getting users");
                        console.log(result);
                    });
                };
                SessionComponent.prototype.logIn = function (currentUser) {
                    var _user = this.user;
                    if (typeof currentUser == "object" && (currentUser.password == _user.password)) {
                        this.logOut();
                        this._sessionService.addSession("currentUser", currentUser.id);
                        console.log(this);
                        console.info("added session");
                        this._router.navigate(["User", { id: parseInt(currentUser.id) }]);
                        return true;
                    }
                    this.error = true;
                    console.warn("Passwords does not match");
                    return false;
                };
                SessionComponent.prototype.logOut = function () {
                    this._sessionService.removeSession("currentUser");
                };
                SessionComponent = __decorate([
                    core_1.Component({
                        selector: "session",
                        templateUrl: "/templates/session/session.component.html",
                        directives: [common_1.NgForm, router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService, session_service_1.SessionService]
                    }),
                    __param(0, core_2.Inject(user_service_1.UserService)),
                    __param(1, core_2.Inject(session_service_1.SessionService)),
                    __param(2, core_2.Inject(router_1.Router)), 
                    __metadata('design:paramtypes', [user_service_1.UserService, session_service_1.SessionService, router_1.Router, router_1.RouteParams])
                ], SessionComponent);
                return SessionComponent;
            }());
            exports_1("SessionComponent", SessionComponent);
        }
    }
});
//# sourceMappingURL=session.component.js.map