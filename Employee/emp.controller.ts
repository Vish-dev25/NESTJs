import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './emp.service';

@Controller()
export class EmployeeController {
    constructor(private readonly empService: EmployeeService) { }

    @Get('/')
    getHello(): string {
        return this.empService.getHello();
    }

    @Get('/addemp')
    empAdd(): string {
        return this.empService.empAdd();
    }

    @Get('/upemp')
    empUpdate(): string {
        return this.empService.empUpdate();
    }
    @Get('/delemp')
    empDelete(): string {
        return this.empService.empDelete();
    }
    @Get('/allemp')
    getAll(): string {
        return this.empService.getAll();
    }

}