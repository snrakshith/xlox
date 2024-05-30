import { Container } from "inversify";
import "reflect-metadata";
import { IDatabase, IUserRepository } from "../interfaces/database";
import { TypeORMDatabase } from "../databases/typeormDatabase";
import { TypeORMUserRepository } from "../repositories/typeormUserRepository";
import { MongooseDatabase } from "../databases/mongooseDatabase";
import { MongooseUserRepository } from "../repositories/mongooseUserRepository";

const container = new Container();

// Toggle between TypeORM and Mongoose
const useTypeORM = true;

if (useTypeORM) {
  container.bind<IDatabase>("IDatabase").to(TypeORMDatabase);
  container.bind<IUserRepository>("IUserRepository").to(TypeORMUserRepository);
} else {
  container.bind<IDatabase>("IDatabase").to(MongooseDatabase);
  container.bind<IUserRepository>("IUserRepository").to(MongooseUserRepository);
}

export default container;
