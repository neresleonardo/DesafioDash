import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt"

// Inteface com os types
interface ICreateUser {
    name: string;
    email: string;
    password: string;
}
// xlass que vai ser exportada 
export class CreateUserUseCase {

    async execute({name, email, password}: ICreateUser) {
        // Validar se o usuário existe
        const UserExist = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive"
                }
            }
        })
        // Caso ele exista retornando o erro
        if(UserExist) {
           throw new Error("Deliveryman already exists") 
        }
        //Criptografar a senha com bcrypt
        const hashpassword = await hash(password, 10);

        //Salvar o Usuario
       const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashpassword // passando a criptográfia
            },
        })
        //retornando user
        return user // retornando os dados
    }
}