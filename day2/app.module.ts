import { Module } from '@nestjs/common';
import { ClientModule } from './Client/client.module';

@Module({
  imports: [ClientModule],
})
export class AppModule {}
