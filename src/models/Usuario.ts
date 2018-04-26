import * as mongoose from 'mongoose';
const Schema:any = mongoose.Schema;

export interface Usuario{
    _id:any,
    nome:String,
    email:String,
    senha:String,
    ativo:Boolean,

    datacadastro:Date,
    dataatualizado:Date
};

export const UsuarioSchema = mongoose.model(
    'Usuario', 
    new mongoose.Schema({
        nome:{ type:String, required : true },
        email:{type:String},
        senha:{ type:String, required : true },
        perfil:{type:Schema.ObjectId, ref: 'Perfil'},
        ativo:Boolean,

        datacadastro: { type : Date, default : Date.now() },
        dataatualizado: { type : Date, default : Date.now() },
    })
);