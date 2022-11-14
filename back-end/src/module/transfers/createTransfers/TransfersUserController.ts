
import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./TransfersUserCase";

export class CreateTransactionController {
    async handle(request: Request, response: Response){
        const { title, description, amount} = request.body;
        const { id_user } = request;

        const createTransactionUseCase = new CreateTransactionUseCase();

        const transaction = await createTransactionUseCase.execute({
            title,
            description,
            amount,
            
        })
        return response.json(transaction)
    }
}