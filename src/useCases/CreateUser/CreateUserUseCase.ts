import { User } from "../../entities/User";
import { IMailPRovider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository, private emailProvider: IMailPRovider) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        const userExists = await this.userRepository.findByEmail(data.email);

        if (userExists) {
            throw new Error('User already exists');
        }

        const user = new User(data);

        this.userRepository.save(user);

        this.emailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do meu app',
                email: 'vinicius@gempe.dev',
            },
            subject: 'Seja bem-vindo ao sistema',
            body: '<p>Você já pode fazer login em nossa plataforma</p>',
        })
    }
}