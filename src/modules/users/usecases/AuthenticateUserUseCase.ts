import { sign } from 'jsonwebtoken';

import AppError from 'shared/errors/AppError';
import { authConfig } from '../../../config/auth';
import { AppDataSource } from '../../../database/ormconfig';
import User from '../entities/User';
import HashProvider from '../providers/HashProvider';

interface IRequest {
  login: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

export default class AuthenticateUserUseCase {
  public async execute({ login, password }: IRequest): Promise<IResponse> {
    const user = await AppDataSource.getRepository(User).findOne({
      where: { login },
    });

    if (!user) {
      throw new AppError('Combinação incorreta de usuário e senha.');
    }

    const passwordMatched = await new HashProvider().compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('Combinação incorreta de usuário e senha.');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id.toString(),
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
