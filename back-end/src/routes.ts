import { Router } from "express";
import { AuthenticateUserController } from "./module/account/authenticateUser/AuthenticateUserController";
import { CreateClientController } from "./module/user/userCases/createUser/CreateUserController";


const routes = Router();

//////////////////////// Chamada //////////////////////////

//Criando um Usuário
const createUserController = new CreateClientController();
const authenticateUserController = new AuthenticateUserController();

////////////////////////////////////////////////////////////////

//////////////////////POST GET PUT DELETE ///////////////////////

routes.post("/user/", createUserController.handle);


routes.post("/auth/", authenticateUserController.handle)
//////////////////////////////////////////////////////////////////////////

export { routes };