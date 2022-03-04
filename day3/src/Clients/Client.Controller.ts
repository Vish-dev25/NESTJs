import { Controller, Get, Param, Post, Body, Delete } from "@nestjs/common"; 
import { ClientService } from './Client.Service';
import { ClientDTO } from "./Client.DTO";

@Controller('/client')
export class ClientController{
    constructor (private clientService : ClientService) { }

    @Post()
    async create(@Body() createClientDTO: ClientDTO){     
        this.clientService.createClient(createClientDTO);
    }

    @Get()
    async getAllClient(){
        return this.clientService.getAllClient();
    }

    @Get(':cid')
    async getClient(@Param('cid') cid:string){
        return this.clientService.getClient(cid);
    }

    @Delete(':id')
    async deleteClient(@Param('id') id:string) {
        return this.clientService.deleteClient(id);
    }
}