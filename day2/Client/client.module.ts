import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { LoggerService } from './logger.service';
import { UserService } from '../services/user.service';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [ClientService, LoggerService, UserService],
})
export class ClientModule {}