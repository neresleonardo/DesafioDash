import { prisma } from "../../../database/prismaClient";

interface ICreateAnnotations {
    title: string;
    description: string;
}

export class CreateAnnotationsCase {

    async execute({title, description}: ICreateAnnotations) {


       const user = await prisma.annotations.create({
            data: {
                title,
                description,
            },
        })

        return user 
    }
}