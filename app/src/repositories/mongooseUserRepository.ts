import { User } from "../models/mongooseUser";
import { IUserRepository } from "../interfaces/database";

export class MongooseUserRepository implements IUserRepository {
  async getAllUsers(): Promise<any[]> {
    return User.find({});
  }

  async createUser(userData: { name: string; email: string }): Promise<any> {
    const user = new User(userData);
    return user.save();
  }
}
