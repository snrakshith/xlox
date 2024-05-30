import mongoose from "mongoose";
import { IDatabase } from "../interfaces/database";

export class MongooseDatabase implements IDatabase {
  async connect(): Promise<void> {
    await mongoose.connect("your_mongodb_uri", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}
