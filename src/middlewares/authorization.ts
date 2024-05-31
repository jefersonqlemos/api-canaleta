import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../entities/user.entity";

export const authorization = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userRepo = AppDataSource.getRepository(User);
    console.log(req)
    const user = await userRepo.findOne({
      where: { id: req["currentUser"].id },
    });
    console.log(user);
    if(user){
      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }
    }
    next();
  };
};