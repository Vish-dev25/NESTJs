import { Module } from '@nestjs/common';
import { VendorModule } from './Vendor/Vendor.Module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [VendorModule, MongooseModule.forRoot('mongodb://localhost:27017/newDb')],

})
export class AppModule {}
