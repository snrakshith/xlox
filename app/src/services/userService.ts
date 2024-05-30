import { inject, injectable } from "inversify";
import { IUserRepository } from "../interfaces/database";

@injectable()
class UserService {
  constructor(
    @inject("IUserRepository") private userRepository: IUserRepository
  ) {}

  public async getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  public async createUser(userData: { name: string; email: string }) {
    return this.userRepository.createUser(userData);
  }
}

export default UserService;
