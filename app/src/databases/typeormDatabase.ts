import { createConnection } from "typeorm";
import { IDatabase } from "../interfaces/database";
import { User } from "../entities/user";

export class TypeORMDatabase implements IDatabase {
  async connect(): Promise<void> {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "your_username",
      password: "your_password",
      database: "your_database",
      entities: [User],
      synchronize: true,
    });
  }

  async disconnect(): Promise<void> {
    const connection = await createConnection();
    await connection.close();
  }
}
