import { prisma } from "../../../database/prismaClient";

interface ICreateTransfers {
    title: string;
    description: string;
    amount: string;
}

export class CreateTransactionUseCase {

    async execute({title, description, amount}: ICreateTransfers) {


       const user = await prisma.transfers.create({
            data: {
                title,
                description,
                amount, 
            },
        })

        return user 
    }
}