import {Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientController } from './Client.Controller';
import { ClientService } from './Client.Service';
import { ClientSchema } from './Client.Schema';

@Module({
    imports: [MongooseModule.forFeature([{name:'Client', schema: ClientSchema}])],
    controllers: [ClientController],
    providers: [ClientService],
})

export class ClientModule { };