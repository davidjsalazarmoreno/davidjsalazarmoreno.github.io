System.register(["angular2/core", "../../services/id-generator.service", "../../services/user.service", "./todo-new.component", "./todo-list.component", "./todo-filter.component", "../../pipes/todo-list-filter-pipe", "../../pipes/todo-list-counter-pipe"], function(exports_1, context_1) {
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
    var core_1, id_generator_service_1, user_service_1, todo_new_component_1, todo_list_component_1, todo_filter_component_1, todo_list_filter_pipe_1, todo_list_counter_pipe_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (id_generator_service_1_1) {
                id_generator_service_1 = id_generator_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (todo_new_component_1_1) {
                todo_new_component_1 = todo_new_component_1_1;
            },
            function (todo_list_component_1_1) {
                todo_list_component_1 = todo_list_component_1_1;
            },
            function (todo_filter_component_1_1) {
                todo_filter_component_1 = todo_filter_component_1_1;
            },
            function (todo_list_filter_pipe_1_1) {
                todo_list_filter_pipe_1 = todo_list_filter_pipe_1_1;
            },
            function (todo_list_counter_pipe_1_1) {
                todo_list_counter_pipe_1 = todo_list_counter_pipe_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent(_idGeneratorService, _userService) {
                    this._idGeneratorService = _idGeneratorService;
                    this._userService = _userService;
                    this.defaultStatus = "active";
                    this.filterStatus = "all";
                    this.saveTodos = new core_1.EventEmitter();
                }
                TodoComponent.prototype.addTodo = function () {
                    var newID = this._idGeneratorService.newID, 
                    /**
                     * Estatus por defecto para las todos
                     * @type {string}
                     */
                    defaultStatus = this.defaultStatus;
                    /**
                     * Comprobando que el input no esté vacio
                     */
                    if (this.newTodo && this.newTodo.length > 0) {
                        var newTodo = {
                            id: newID(),
                            content: this.newTodo,
                            status: defaultStatus
                        };
                        /**
                         * Agregando la nueva tarea al modelo todos
                         */
                        this.todos.push(newTodo);
                        /**
                         * Emitiendo evento para guardar la lista de TODOS en la "base de datos"
                         */
                        this.saveTodos.emit();
                        /**
                         * Reseteando el modelo del input
                         * @type {String}
                         */
                        this.newTodo = "";
                        /**
                         * Modificando el filtro para que se muestren todas las tareas
                         * @type {String}
                         */
                        this.filterStatus = "active";
                    }
                };
                TodoComponent.prototype.removeTodo = function (todo) {
                    var _this = this;
                    this.todos.filter(function (elem, index) {
                        if (elem["id"] == todo["id"]) {
                            _this.todos.splice(index, 1);
                            _this.saveTodos.emit();
                            console.warn("Atención, será eliminado");
                        }
                    });
                };
                TodoComponent.prototype.toggleStatus = function (todo) {
                    var _filterStatusBackup = this.filterStatus + "";
                    if (todo.status == "active") {
                        todo.status = "completed";
                    }
                    else {
                        todo.status = "active";
                    }
                    /**
                     * Emitiendo evento para guardar la lista de TODOS en la "base de datos"
                     */
                    this.saveTodos.emit();
                };
                TodoComponent.prototype.toggleFilter = function (newStatus) {
                    this.filterStatus = newStatus;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TodoComponent.prototype, "todos", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoComponent.prototype, "saveTodos", void 0);
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: "todo",
                        templateUrl: "/templates/todo/todo.component.html",
                        pipes: [todo_list_filter_pipe_1.TodoListFilterPipe, todo_list_counter_pipe_1.TodoListCounterPipe],
                        directives: [
                            todo_new_component_1.TodoNewComponent,
                            todo_list_component_1.TodoListComponent,
                            todo_filter_component_1.TodoFilterComponent
                        ],
                        providers: [id_generator_service_1.IdGeneratorService]
                    }), 
                    __metadata('design:paramtypes', [id_generator_service_1.IdGeneratorService, user_service_1.UserService])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map