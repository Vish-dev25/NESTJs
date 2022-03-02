import { Injectable } from "@nestjs/common";
import { EmployeeDTO } from "./emp.dto";
import { EmpAllService } from "Services/all.service";

@Injectable()
export class EmployeeService {
    constructor(private readonly logger: EmpAllService) { }
    client: EmployeeDTO = {
        empName: 'Vishakha', 
        designation: 'Developer', 
        salary: 50000, 
    }
    getHello(): string {
        return 'Hello World';
    }
    empAdd(): string {
        this.logger.loggerservice('Employee', 'addEmployee')
        return 'New Employee Added Successfully!';
    }
    empUpdate(): string {
        this.logger.loggerservice('Employee', 'UpdateEmployee')
        return 'Employee Updated Successfully!';
    }
    empDelete(): string {
        this.logger.loggerservice('Employee', 'DeleteEmployee')
        return 'Employee Deleted!';
    }
    getAll(): string {
        this.logger.loggerservice('Employee', 'AllEmployees')
        return 'All Employee List';
    }
    
    
}
