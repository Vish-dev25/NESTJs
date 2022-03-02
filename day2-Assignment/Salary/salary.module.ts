import { Module } from '@nestjs/common';
import { EmpAllService } from 'Services/all.service';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';

@Module({
    imports: [],
    controllers: [SalaryController],
    providers: [SalaryService, EmpAllService],
  })
  export class SalaryModule {}