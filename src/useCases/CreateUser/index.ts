import { MailtrapProvider } from "../../providers/implementations/MailtrapPrivoder";
import { PostgressUsersRepository } from "../../repositories/implementations/PostgressUsersRepositry";
import { CreateUserRepository } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapProvider();
const postgressUsersRepository = new PostgressUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgressUsersRepository, mailtrapProvider);

const createUserController = new CreateUserRepository(createUserUseCase);

export { createUserController, createUserUseCase };