
import { Request, Response } from "express";
import { AuthenticateUserCase } from "./AuthenticateUserCase";

export class AuthenticateUserController {
    async handle(request: Request, response: Response){
        const { name, email, password} = request.body;

        const authenticateUserCase = new AuthenticateUserCase();
        const result = await authenticateUserCase.execute({
            name,
            email,
            password

        })
        return response.json(result);
         }
    }