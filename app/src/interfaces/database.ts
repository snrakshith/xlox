export interface IDatabase {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}

export interface IUserRepository {
  getAllUsers(): Promise<any[]>;
  createUser(userData: { name: string; email: string }): Promise<any>;
}
