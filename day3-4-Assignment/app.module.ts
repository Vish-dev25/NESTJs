import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { VendorModule } from './Vendor/Vendor.Module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './logger/logger.middleware';
import { UserController } from './User.Controller';

@Module({
  imports: [VendorModule, MongooseModule.forRoot('mongodb://localhost:27017/newDb')],
  controllers: [UserController],

})
export class AppModule implements NestModule
{
 configure(consumer: MiddlewareConsumer) {
   consumer
   .apply(LoggerMiddleware)
   .forRoutes('vendor');
 } 
}


//loggerMiddleware is called here to bind 
//functions and applications passes through middleware
//forRoutes - main route (vendor used in this application). Here route is binded with the middleware so that any request comes the route gets trigger