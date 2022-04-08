import { AppDataSource } from '../../../database/ormconfig';
import User from '../entities/User';
import HashProvider from '../providers/HashProvider';

interface IRequest {
  name: string
  login: string
  password: string
}

export default class CreateUserUseCase {
  public async execute({ name, login, password }: IRequest): Promise<User> {
    const usersRepository = AppDataSource.getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { login },
    });

    if (checkUserExists) {
      throw new Error('O login informado já se encontra em uso');
    }

    const hashedPassword = await new HashProvider().generateHash(password);

    const user = await usersRepository.save({
      name,
      login,
      password: hashedPassword,
    });

    return user;
  }
}
