import { prisma } from "../../../database/prismaClient";


export class FindAllTrasfersCase{
    async execute(){

        const transaction = await prisma.transfers.findMany({})

        return transaction;
    }
}