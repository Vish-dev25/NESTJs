import { Module } from '@nestjs/common';
import { ClientModule } from './Clients/client.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ ClientModule, MongooseModule.forRoot('mongodb://localhost:27017/myDb')],

})
export class AppModule {}
