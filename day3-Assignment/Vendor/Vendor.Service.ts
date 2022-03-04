import { Injectable } from "@nestjs/common";     //
import { InjectModel } from "@nestjs/mongoose";  //for creating models
import { Model } from "mongoose";                //help us to create model
import { VendorSchema } from "./Vendor.Schema";
import { VendorDTO } from "./Vendor.DTO";

@Injectable()
export class VendorService{
    constructor(@InjectModel('Vendor') private readonly vendorModel : Model<typeof VendorSchema >) { }

    async getAllVendor() {
        const Result = await this.vendorModel.find().exec();
        console.log(Result);
        return Result;

    }
    
    async deleteVendor(id:string)
    {
        const Result = await this.vendorModel.findByIdAndRemove({_id:id}).exec();
        return Result;
    }
    
    async getVendor(cid:string)
    {
        const Result = await this.vendorModel.findOne({_id:cid}).exec();
        return Result;
    }

    async createVendor(vendorDto: VendorDTO)
    {
        return await this.vendorModel.create(vendorDto)
    }
}