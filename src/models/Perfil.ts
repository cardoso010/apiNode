import * as mongoose from 'mongoose';
const Schema:any = mongoose.Schema;

export interface Perfil{
    _id:any,
    nome:String,
    datacadastro:Date,
    dataatualizado:Date
};

export const PerfilSchema = mongoose.model(
    'Perfil', 
    new mongoose.Schema({
        nome:{ type:String, required : true },

        datacadastro: { type : Date, default : Date.now() },
        dataatualizado: { type : Date, default : Date.now() },
    })
);