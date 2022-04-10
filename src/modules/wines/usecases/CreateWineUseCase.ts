import { AppDataSource } from '../../../database/ormconfig';
import Wine from '../entities/Wine';
import DiskStorageProvider from '../providers/DiskStorageProvider';

interface IRequest {
  title: string
  description: string
  imageName: string
  price: number
}

export default class CreateWineUseCase {
  public async execute({
    title, description, price, imageName,
  }: IRequest): Promise<Wine> {
    const wineImageName = await new DiskStorageProvider().saveFile(imageName);

    return AppDataSource.getRepository(Wine).save({
      title,
      description,
      price,
      img: wineImageName,
    });
  }
}
