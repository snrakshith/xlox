import { Router } from "express";
import container from "../config/di";
import UserController from "../controllers/userController";
import { AuthGuard } from "../guards/auth.guard";
import { ValidationPipe } from "../pipes/validation.pipe";
import { CreateUserDto } from "../dtos/user.dto";

const router: Router = Router();
const userController = container.get<UserController>(UserController);

router.get("/users", AuthGuard, userController.getUsers.bind(userController));
router.post(
  "/users",
  AuthGuard,
  ValidationPipe(CreateUserDto),
  userController.createUser.bind(userController)
);

module.exports = router;
