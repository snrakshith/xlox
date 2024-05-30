import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import UserService from "../services/userService";
import { CreateUserDto } from "../dtos/user.dto";
import { plainToClass } from "class-transformer";

@injectable()
class UserController {
  constructor(@inject(UserService) private userService: UserService) {}

  public async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const createUserDto: CreateUserDto = plainToClass(
        CreateUserDto,
        req.body
      );
      const newUser = await this.userService.createUser(createUserDto);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default UserController;
