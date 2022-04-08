import { AppDataSource } from '../../../database/ormconfig';
import Wine from '../entities/Wine';

export default class ListWinesUseCase {
  public async execute(): Promise<Wine[]> {
    return AppDataSource.getRepository(Wine).find();
  }
}
