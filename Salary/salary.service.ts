import { Injectable } from "@nestjs/common";
import { SalaryDTO } from "./salary.dto";
import { EmpAllService } from "Services/all.service";

@Injectable()
export class SalaryService {
    constructor(private readonly logger: EmpAllService) { }
    client: SalaryDTO = {
        empId: 102, 
        workingdays: 5, 
        msalary: 50000, 
    };

    calculateSalary(): any {
        this.logger.loggerservice('Salary', 'CalculateSalary')
        return "Calulated Salary : 600000";
    }
}    