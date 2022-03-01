import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  GetHello(): any {
    return 'Hello Users!';
  }
}
