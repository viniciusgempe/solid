import { Connection } from "mongoose";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgressUsersRepository implements IUserRepository {
    private users: User[] = [];


    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.users.find(user => user.email === email);

        return user;
    }

    public async save(user: User): Promise<void> {
        await this.users.push(user);
    }
}