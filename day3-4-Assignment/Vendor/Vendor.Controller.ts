import { Controller, Get, Param, Post, Body, Delete, Put } from "@nestjs/common"; 
import { VendorService } from './Vendor.Service';
import { VendorDTO } from "./Vendor.DTO";

@Controller('/vendor')
export class VendorController{
    constructor (private vendorService : VendorService) { }

    @Post()
    async create(@Body() createVendorDTO: VendorDTO){     
        this.vendorService.createVendor(createVendorDTO);
    }

    @Get()
    async getAllVendor(){
        return this.vendorService.getAllVendor();
    }

    @Get(':vid')
    async getVendor(@Param('vid') vid:string){
        return this.vendorService.getVendor(vid);
    }

    @Delete(':id')
    async deleteVendor(@Param('id') id:string) {
        return this.vendorService.deleteVendor(id);
    }

    @Put(':id')
    async update(@Body() updateVendorDto: VendorDTO, @Param('id') id: string)
    {
        return this.vendorService.update(id, updateVendorDto)
    }

    
}