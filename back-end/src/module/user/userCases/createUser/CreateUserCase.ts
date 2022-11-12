import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt"

interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export class CreateUserUseCase {

    async execute({name, email, password}: ICreateUser) {

        const UserExist = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive"
                }
            }
        })

        if(UserExist) {
           throw new Error("User already exists") 
        }

        const hashpassword = await hash(password, 10);

       const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashpassword 
            },
        })

        return user 
    }
}