import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateUserUseCase from '../usecases/CreateUserUseCase';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { login, name, password } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute({ login, name, password });

    return response.json(instanceToPlain(user));
  }
}
