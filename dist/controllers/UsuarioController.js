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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("./../models/Usuario");
const routing_controllers_1 = require("routing-controllers");
let UsuarioController = class UsuarioController {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Usuario_1.UsuarioSchema.find().populate('perfil');
        });
    }
    getOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Usuario_1.UsuarioSchema.findById(_id);
        });
    }
    post(req, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Usuario_1.UsuarioSchema.create(usuario);
        });
    }
    put(req, _id, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Usuario_1.UsuarioSchema.findByIdAndUpdate(_id, usuario);
        });
    }
    remove(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Usuario_1.UsuarioSchema.findByIdAndRemove(_id);
        });
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get("/:_id"),
    __param(0, routing_controllers_1.Param("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getOne", null);
__decorate([
    routing_controllers_1.Post("/"),
    __param(0, routing_controllers_1.Req()), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "post", null);
__decorate([
    routing_controllers_1.Put("/:_id"),
    __param(0, routing_controllers_1.Req()), __param(1, routing_controllers_1.Param("_id")), __param(2, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "put", null);
__decorate([
    routing_controllers_1.Delete("/:_id"),
    __param(0, routing_controllers_1.Param("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "remove", null);
UsuarioController = __decorate([
    routing_controllers_1.JsonController("/usuario")
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map