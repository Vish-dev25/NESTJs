import { Injectable } from "@nestjs/common";
import { ClientDTO } from './client.dto';
import { LoggerService } from './logger.service';
import { UserService } from "../services/user.service";


@Injectable()
export class ClientService {
    constructor(private readonly logger : LoggerService, private readonly userService : UserService) {}
    client: ClientDTO = {
        clientName: 'PVC', 
        address:'H.No 123', 
        phone: 526891, 
        areacode: 411033,
    };

    getAllClient(): any {
        console.log(this.client.clientName);
        console.log(this.client.phone);
        this.logger.LogWritting();
        return this.client;
    }
}
