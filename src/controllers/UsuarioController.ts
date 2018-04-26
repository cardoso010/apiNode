import { UsuarioSchema, Usuario } from './../models/Usuario';
import {JsonController, Param, Body, Get, Post, Put, Delete, NotFoundError, Req} from "routing-controllers";


@JsonController("/usuario")
export class UsuarioController {

    @Get("/")
    async getAll(): Promise<any> {
        return await UsuarioSchema.find().populate('perfil');
    }
    
    @Get("/:_id")
    async getOne(@Param("_id") _id: string): Promise<any> {
        return await UsuarioSchema.findById(_id);
    }

    @Post("/")
    async post(@Req() req: any, @Body() usuario: Usuario): Promise<any> {

        return await UsuarioSchema.create(usuario);
    }

    @Put("/:_id")
    async put(@Req() req: any, @Param("_id") _id: string, @Body() usuario: Usuario): Promise<any> {

        return await UsuarioSchema.findByIdAndUpdate(_id, usuario);
    }

    @Delete("/:_id")
    async remove(@Param("_id") _id: string): Promise<any> {
        return await UsuarioSchema.findByIdAndRemove(_id);
    }

}