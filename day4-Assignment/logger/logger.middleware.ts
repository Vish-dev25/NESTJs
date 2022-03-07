import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable() 
export class LoggerMiddleware implements NestMiddleware{                  //implements used for inheritance
    use(req: Request, res: Response, next: NextFunction)
    {
        console.log("Request... Middleware", res);              //It releases your control from current scope to process next request and you will be connected to the middleware. If we not make use of next then the process gets hold on current request. Next says that the current process is complete lets work on next request.
        next();
    }

}