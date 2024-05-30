import { getRepository } from "typeorm";
import { User } from "../entities/user";
import { IUserRepository } from "../interfaces/database";

export class TypeORMUserRepository implements IUserRepository {
  private userRepository = getRepository(User);

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(userData: { name: string; email: string }): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }
}
