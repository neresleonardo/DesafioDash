import { Router } from "express";
import { AuthenticateUserController } from "./module/account/authenticateUser/AuthenticateUserController";
import { DeleteTrasfersController } from "./module/transfers/deleteTransfers/DeleteTrasfersController";
import { FindAllTrasfersController } from "./module/transfers/findAllTransfers/FindAllTrasfersController";
import { CreateTransactionController } from "./module/transfers/createTransfers/TransfersUserController";
import { CreateClientController } from "./module/user/createUser/CreateUserController";
import { CreateAnnotationsController } from "./module/annotations/createAnnotations/CreateAnnotationsController";
import { FindAnnotationController } from "./module/annotations/findAllAnnotations/FindAnnotationController";
import { DeleteAnnotationsController } from "./module/annotations/deleteAnnotations/DeleteAnnotationsController";


const routes = Router();

//////////////////////// Chamada //////////////////////////

//Usuário

const createUserController = new CreateClientController();

// Autenticação

const authenticateUserController = new AuthenticateUserController();

// Transação

const createTransactionController = new CreateTransactionController();
const findAllTrasfersController = new FindAllTrasfersController();
const deleteTrasfersController = new DeleteTrasfersController();

// Anotações

const createAnnotationsController = new CreateAnnotationsController();
const findAnnotationController = new FindAnnotationController();
const deleteAnnotationsController = new DeleteAnnotationsController();

////////////////////////////////////////////////////////////////

//////////////////////POST GET PUT DELETE ///////////////////////

routes.post("/user/", createUserController.handle);

routes.post("/auth/", authenticateUserController.handle);

routes.post("/transaction", createTransactionController.handle);
routes.get("/transaction", findAllTrasfersController.handle);
routes.delete("/deletetransaction/:id", deleteTrasfersController.handle);

routes.post("/annotations", createAnnotationsController.handle);
routes.get("/annotations", findAnnotationController.handle);
routes.delete("/deleteannotations/:id", deleteAnnotationsController.handle);
//////////////////////////////////////////////////////////////////////////

export { routes };