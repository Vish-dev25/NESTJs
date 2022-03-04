import { Controller, Get, Param, Post, Body, Delete } from "@nestjs/common"; 
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
    async getVendor(@Param('vid') cid:string){
        return this.vendorService.getVendor(cid);
    }

    @Delete(':id')
    async deleteVendor(@Param('id') id:string) {
        return this.vendorService.deleteVendor(id);
    }
}