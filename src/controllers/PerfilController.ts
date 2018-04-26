import { PerfilSchema, Perfil } from './../models/Perfil';
import {JsonController, Param, Body, Get, Post, Put, Delete, NotFoundError, Req} from "routing-controllers";


@JsonController("/perfil")
export class PerfilController {

    @Get("/")
    async getAll(): Promise<any> {
        return await PerfilSchema.find();
    }
    
    @Get("/:_id")
    async getOne(@Param("_id") _id: string): Promise<any> {
        return await PerfilSchema.findById(_id);
    }

    @Post("/")
    async post(@Req() req: any, @Body() perfil: Perfil): Promise<any> {

        return await PerfilSchema.create(perfil);
    }

    @Put("/:_id")
    async put(@Req() req: any, @Param("_id") _id: string, @Body() perfil: Perfil): Promise<any> {

        return await PerfilSchema.findByIdAndUpdate(_id, perfil);
    }

    @Delete("/:_id")
    async remove(@Param("_id") _id: string): Promise<any> {
        return await PerfilSchema.findByIdAndRemove(_id);
    }

}