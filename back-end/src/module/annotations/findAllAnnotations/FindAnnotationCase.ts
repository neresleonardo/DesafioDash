import { prisma } from "../../../database/prismaClient";


export class FindAnnotationCase{
    async execute(){

        const annotations = await prisma.annotations.findMany({})

        return annotations;
    }
}