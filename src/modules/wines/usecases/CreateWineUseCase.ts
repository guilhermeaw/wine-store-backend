import { AppDataSource } from '../../../database/ormconfig';
import Wine from '../entities/Wine';
import DiskStorageProvider from '../providers/DiskStorageProvider';

interface IRequest {
  title: string
  description: string
  imageName: string
}

export default class CreateWineUseCase {
  public async execute({ title, description, imageName }: IRequest): Promise<Wine> {
    const wineImageName = await new DiskStorageProvider().saveFile(imageName);

    return AppDataSource.getRepository(Wine).save({
      title,
      description,
      img: wineImageName,
    });
  }
}
