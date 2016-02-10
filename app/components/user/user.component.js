System.register(["angular2/core", "../../models/mock.todo", "../../services/user.service", "../../services/session.service", "../../components/todo/todo.component", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, core_2, mock_todo_1, user_service_1, session_service_1, todo_component_1, router_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (mock_todo_1_1) {
                mock_todo_1 = mock_todo_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (session_service_1_1) {
                session_service_1 = session_service_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(_userService, _sessionService) {
                    this._userService = _userService;
                    this._sessionService = _sessionService;
                    this.title = "Add todo";
                }
                UserComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    /**
                     * Obteniendo usuarios luego de inicializada la vista
                     */
                    this._userService.getCurrentUser(function (result) {
                        var _currentUserId = parseInt(_this._sessionService.getSession("currentUser"));
                        console.log(result);
                        _this._userService.currentUser = _this._userService.getUserBy(result, "id", _currentUserId);
                        /**
                         * Agregando tareas de prueba en caso de no existir en el usuario actual
                         */
                        if (!_this._userService.currentUser.hasOwnProperty("todos")) {
                            _this._userService.currentUser.todos = mock_todo_1.TODOS;
                        }
                        _this.user = _this._userService.currentUser;
                        _this.setTitle();
                    }, function (result) {
                        console.error("Error getting users");
                        console.log(result);
                    });
                };
                UserComponent.prototype.setTitle = function () {
                    var name = this.user.name;
                    this.title = "Hello " + name + ", please add a todo";
                };
                UserComponent.prototype.saveTodos = function () {
                    var _this = this;
                    var _currentUser = this._userService.currentUser, _users = this._userService.getUsers(), _updatedUsers;
                    _users.then(function (result) {
                        _updatedUsers = _this._userService.updateUserById(result, _currentUser);
                        console.group("Save todos");
                        console.log(_updatedUsers);
                        console.log("emitter");
                        console.groupEnd();
                    }, function (result) {
                        console.error("Error getting users");
                        console.log(result);
                    });
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: "user",
                        templateUrl: "/templates/user/user.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES, todo_component_1.TodoComponent],
                        providers: [user_service_1.UserService, session_service_1.SessionService]
                    }),
                    __param(0, core_2.Inject(user_service_1.UserService)),
                    __param(1, core_2.Inject(session_service_1.SessionService)), 
                    __metadata('design:paramtypes', [user_service_1.UserService, session_service_1.SessionService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map