import { Request, Response } from "express";
import { FindAllTrasfersCase } from "./FindAllTrasfersCase";

export class FindAllTrasfersController{
    async handle(request: Request, response: Response){

        const findAllTrasfersCase = new FindAllTrasfersCase;

        const transaction = await findAllTrasfersCase.execute();

        return response.json(transaction);
    }
}