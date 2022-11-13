import { Request, Response } from "express";
import { DeleteTrasfersCase } from "./DeleteTrasfersCase";

export class DeleteTrasfersController{
    async handle(request: Request, response: Response){
        const { id: id } = request.params

        const deleteTrasfersCase = new DeleteTrasfersCase;

        const transaction = await deleteTrasfersCase.execute({
            id
        });

        return response.json(transaction);
    }
}