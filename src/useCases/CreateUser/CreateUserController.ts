import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserRepository {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.createUserUseCase.execute({
        email,

        name,
        password,
      });

      return response.status(201);
    } catch (err: any) {
      return response.status(404).json({ error: err.message });
    }
  }
}
