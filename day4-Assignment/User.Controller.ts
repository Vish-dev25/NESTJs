import { Controller, Get, Param, Post, Body, Delete, Put } from "@nestjs/common";

@Controller('/user')
export class UserController{
    constructor () { }

    @Get()
    async getAllUser(){
        return "user controller"
    }
}