System.register(["angular2/core", "../models/mock.user"], function(exports_1, context_1) {
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
    var core_1, mock_user_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_user_1_1) {
                mock_user_1 = mock_user_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                    this.users = mock_user_1.USERS;
                    this._dbName = "users";
                    this._db = window.localStorage.getItem && window.localStorage;
                }
                UserService.prototype.getUsers = function () {
                    var _dbName = this._dbName, _db = this._db, _USERS = _db.getItem(_dbName);
                    if (typeof _USERS !== null) {
                        return Promise.resolve(JSON.parse(_USERS));
                    }
                    else {
                        return Promise.resolve(this.users);
                    }
                };
                UserService.prototype.getUserBy = function (list, key, value) {
                    var _currentUser;
                    list.map(function (elem, index) {
                        if (elem[key] == value) {
                            _currentUser = elem;
                        }
                    });
                    if (_currentUser) {
                        return _currentUser;
                    }
                    return false;
                };
                UserService.prototype.updateUserById = function (updatedUser) {
                    var _result, _users = this.users, _db = this._db, _dbName = this._dbName;
                    _users.map(function (elem, index) {
                        if (elem["id"] == updatedUser["id"]) {
                            _users[index] = updatedUser;
                        }
                    });
                    _result = _users;
                    if (_result && _result.length && (_db)) {
                        var _success = _db.setItem(_dbName, JSON.stringify(_result));
                        if (_success !== null) {
                            return true;
                        }
                    }
                    return false;
                };
                UserService.prototype.addUser = function (newUser) {
                    var _dbName = this._dbName, _db = this._db, _USERS = this.users, oldUsers = _db.getItem(_dbName);
                    console.log("here");
                    if (_db) {
                        if (oldUsers !== null) {
                            _USERS = JSON.parse(oldUsers);
                            _USERS.push(newUser);
                        }
                        else {
                            _USERS.push(newUser);
                        }
                        _db.setItem(_dbName, JSON.stringify(_USERS));
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                UserService.prototype.getCurrentUser = function (callbacks) {
                    var _users = this.getUsers(), _currentUser = this.currentUser;
                    if (typeof _currentUser != "undefined" && typeof callbacks == "undefined") {
                        return _currentUser;
                    }
                    else {
                        _users.then(callbacks);
                    }
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map