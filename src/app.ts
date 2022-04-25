import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import 'express-async-errors';

import { uploadConfig } from './config/upload';
import { AppDataSource } from './database/ormconfig';
import { routes } from './routes';

AppDataSource.initialize()
  .then(() => { console.log('Data Source has been initialized!'); })
  .catch((err) => { console.error('Error during Data Source initialization:', err); });

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(uploadConfig.uploadsFolder));

export default app;
