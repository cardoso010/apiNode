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
const Perfil_1 = require("./../models/Perfil");
const routing_controllers_1 = require("routing-controllers");
let PerfilController = class PerfilController {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Perfil_1.PerfilSchema.find();
        });
    }
    getOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Perfil_1.PerfilSchema.findById(_id);
        });
    }
    post(req, perfil) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Perfil_1.PerfilSchema.create(perfil);
        });
    }
    put(req, _id, perfil) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Perfil_1.PerfilSchema.findByIdAndUpdate(_id, perfil);
        });
    }
    remove(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Perfil_1.PerfilSchema.findByIdAndRemove(_id);
        });
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get("/:_id"),
    __param(0, routing_controllers_1.Param("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "getOne", null);
__decorate([
    routing_controllers_1.Post("/"),
    __param(0, routing_controllers_1.Req()), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "post", null);
__decorate([
    routing_controllers_1.Put("/:_id"),
    __param(0, routing_controllers_1.Req()), __param(1, routing_controllers_1.Param("_id")), __param(2, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "put", null);
__decorate([
    routing_controllers_1.Delete("/:_id"),
    __param(0, routing_controllers_1.Param("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerfilController.prototype, "remove", null);
PerfilController = __decorate([
    routing_controllers_1.JsonController("/perfil")
], PerfilController);
exports.PerfilController = PerfilController;
//# sourceMappingURL=PerfilController.js.map