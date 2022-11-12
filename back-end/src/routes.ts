import { Router } from "express";
import { AuthenticateUserController } from "./module/account/authenticateUser/AuthenticateUserController";
import { FindAllTrasfersController } from "./module/FindAllTransfers/FindAllTrasfersController";
import { CreateTransactionController } from "./module/transfers/TransfersUserController";
import { CreateClientController } from "./module/user/userCases/createUser/CreateUserController";


const routes = Router();

//////////////////////// Chamada //////////////////////////

//Criando um Usuário
const createUserController = new CreateClientController();
// Autenticação
const authenticateUserController = new AuthenticateUserController();
//Criando uma transação
const createTransactionController = new CreateTransactionController();

const findAllTrasfersController = new FindAllTrasfersController();

////////////////////////////////////////////////////////////////

//////////////////////POST GET PUT DELETE ///////////////////////

routes.post("/user/", createUserController.handle);

routes.post("/auth/", authenticateUserController.handle);

routes.post("/transaction", createTransactionController.handle);

routes.get("/transaction", findAllTrasfersController.handle);
//////////////////////////////////////////////////////////////////////////

export { routes };