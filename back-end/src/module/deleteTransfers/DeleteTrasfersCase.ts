import { prisma } from "../../../src/database/prismaClient";

interface ICreateTransfers {
    id: string;
}

export class DeleteTrasfersCase {

    async execute({id}: ICreateTransfers) {


       const user = await prisma.transfers.deleteMany({
            where: {
                id: {
                    equals: id
                }
            }
        })

        return user 
    }
}