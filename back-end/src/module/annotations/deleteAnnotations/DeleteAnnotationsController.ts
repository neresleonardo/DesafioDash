import { Request, Response } from "express";
import { DeleteAnnotationsCase } from "./DeleteAnnotationsCase";

export class DeleteAnnotationsController{
    async handle(request: Request, response: Response){
        const { id: id } = request.params

        const deleteAnnotationsCase = new DeleteAnnotationsCase;

        const annotations = await deleteAnnotationsCase.execute({
            id
        });

        return response.json(annotations);
    }
}