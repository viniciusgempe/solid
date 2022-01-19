import { User } from "../entities/User";

interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    save(user: User): Promise<void>;
}

export { IUserRepository };