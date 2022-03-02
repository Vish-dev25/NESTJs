import { Module } from '@nestjs/common';
import { EmpAllService } from 'Services/all.service';
import { EmployeeController } from './emp.controller';
import { EmployeeService } from './emp.service'

@Module({
    imports: [],
    controllers: [EmployeeController],
    providers: [EmployeeService, EmpAllService],
  })
  export class EmployeeModule {}