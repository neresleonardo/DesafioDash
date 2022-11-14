
import { Request, Response } from "express";
import * as CreateUserUseCase from "./CreateUserCase";

export class CreateClientController {
    async handle(request: Request, response: Response){
        const { name, email, password} = request.body;

        const createUserUseCase = new CreateUserUseCase.CreateUserUseCase();

        const result = await createUserUseCase.execute({
            name,
            email,
            password,
        });

        response.json(result);
    }
}