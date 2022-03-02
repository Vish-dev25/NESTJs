import { Injectable } from '@nestjs/common';
@Injectable()
export class EmpAllService {
    
    loggerservice(ModuleName, ActionName)
    {
        console.log("UserLog", ModuleName, ActionName)
    }
}