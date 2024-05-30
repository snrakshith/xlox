import { Request, Response, NextFunction } from "express";
import { validate, ValidationError } from "class-validator";
import { plainToClass } from "class-transformer";

export function ValidationPipe(type: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const dtoObj = plainToClass(type, req.body);
    validate(dtoObj).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        res.status(400).json({ errors });
      } else {
        next();
      }
    });
  };
}
