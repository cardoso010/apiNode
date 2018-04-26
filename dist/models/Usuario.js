"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
;
exports.UsuarioSchema = mongoose.model('Usuario', new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String },
    senha: { type: String, required: true },
    perfil: { type: Schema.ObjectId, ref: 'Perfil' },
    ativo: Boolean,
    datacadastro: { type: Date, default: Date.now() },
    dataatualizado: { type: Date, default: Date.now() },
}));
//# sourceMappingURL=Usuario.js.map