import { Injectable } from "@nestjs/common";     
import { InjectModel } from "@nestjs/mongoose";  
import { Model } from "mongoose";                
import { VendorSchema } from "./Vendor.Schema";
import { VendorDTO } from "./Vendor.DTO";

@Injectable()
export class VendorService{
    constructor(@InjectModel('Vendor') private readonly vendorModel : Model<typeof VendorSchema >) { }

    async getAllVendor() {
        const result = await this.vendorModel.find().exec();
        console.log(result);
        return result;
    }
    
    async deleteVendor(id:string)
    {
        const result = await this.vendorModel.findByIdAndRemove({_id:id}).exec();
        return result;
    }
    
    async getVendor(vid:string)
    {
        const result = await this.vendorModel.findOne({_id:vid}).exec();
        return result;
    }

    async createVendor(vendorDto: VendorDTO)
    {
        return await this.vendorModel.create(vendorDto)
    }

    async update(id:string, vendorDto: VendorDTO)
    {
        return await this.vendorModel.create(vendorDto)
    }
}