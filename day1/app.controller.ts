import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}
  @Get('/hello')
  getHello(): string {
    return this.appService.GetHello();
  }
  @Get('/alluser')
  getAllUser(): any {
    return this.userService.GetAllUser();
  }
  @Get('/adduser')
  addUser(): string {
    return this.userService.AddUser();
  }
  @Get('/edituser')
  editUser(): string {
    return this.userService.EditUser();
  }
  @Get('/deleteuser')
  deleteUser(): any {
    return this.userService.DeleteUser();
  }
}
