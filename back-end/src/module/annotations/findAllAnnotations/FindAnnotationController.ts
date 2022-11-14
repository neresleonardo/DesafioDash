import { Request, Response } from "express";
import { FindAnnotationCase } from "./FindAnnotationCase";

export class FindAnnotationController{
    async handle(request: Request, response: Response){

        const findAnnotationCase = new FindAnnotationCase;

        const annotation = await findAnnotationCase.execute();

        return response.json(annotation);
    }
}