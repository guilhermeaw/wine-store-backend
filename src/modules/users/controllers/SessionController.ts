import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import AuthenticateUserUseCase from '../usecases/AuthenticateUserUseCase';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { login, password } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    const { user, token } = await authenticateUserUseCase.execute({
      login,
      password,
    });

    return response.json({ user: instanceToPlain(user), token });
  }
}
