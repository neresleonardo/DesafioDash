
import { Request, Response } from "express";
import { CreateAnnotationsCase } from "./CreateAnnotationsCase";

export class CreateAnnotationsController {
    async handle(request: Request, response: Response){
        const { title, description} = request.body;

        const createAnnotationsCase = new CreateAnnotationsCase();

        const annotations = await createAnnotationsCase.execute({
            title,
            description,
            
        })
        return response.json(annotations)
    }
}