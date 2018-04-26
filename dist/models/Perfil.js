"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
;
exports.PerfilSchema = mongoose.model('Perfil', new mongoose.Schema({
    nome: { type: String, required: true },
    datacadastro: { type: Date, default: Date.now() },
    dataatualizado: { type: Date, default: Date.now() },
}));
//# sourceMappingURL=Perfil.js.map