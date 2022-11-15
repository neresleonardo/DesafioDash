import { prisma } from "../../../database/prismaClient";
import { compare} from "bcrypt" // Para comparar a senhas
import { sign} from "jsonwebtoken";

// Criando uma interface

interface IAuthenticateClient {
    email: string;
    password: string;
}

export class AuthenticateUserCase {
    // Receber informações de usuário e senha,
    async execute({email, password}: IAuthenticateClient) {
    // Comparar se está cadastrado no banco de dados com username,
    const client = await prisma.user.findFirst({
        where: {
            email,
        }
    })
    //Se username não existir( retonar erro)
    if(!client) {
        throw new Error("Usuário ou Senha estão erradas!") //error
    }
    // Verificcar se senha bate com a do banco de dados
    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch) {
        throw new Error("Usuário ou Senha estão erradas!") //error
    }
    // Gerar um Token
    const token = sign({email},"2556f99570e59c0418d6137b848e4238", {
        subject: client.id, // passando o id do usuário
        expiresIn: "1d" // Tempo
    })
    
    return { token, client};
    }
}
