import { prisma } from "../../../database/prismaClient";

interface ICreateAnnotations {
    id: string;
}

export class DeleteAnnotationsCase {

    async execute({id}: ICreateAnnotations) {


       const annotations = await prisma.annotations.deleteMany({
            where: {
                id: {
                    equals: id
                }
            }
        })

        return annotations 
    }
}