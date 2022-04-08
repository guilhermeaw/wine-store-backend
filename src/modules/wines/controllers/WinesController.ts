import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateWineUseCase from '../usecases/CreateWineUseCase';
import ListWinesUseCase from '../usecases/ListWinesUseCase';

export default class WinesController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listWinesUseCase = new ListWinesUseCase();
    const wines = await listWinesUseCase.execute();

    return response.json(instanceToPlain(wines));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      title, description,
    } = request.body;

    const imageName = request.file!.filename;

    const createWineUseCase = new CreateWineUseCase();

    const wine = await createWineUseCase.execute({
      title,
      description,
      imageName,
    });

    return response.json(instanceToPlain(wine));
  }
}
