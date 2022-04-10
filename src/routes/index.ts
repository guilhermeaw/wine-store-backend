import { Router } from 'express';
import multer from 'multer';

import { uploadConfig } from '../config/upload';

// import ensureAuthenticated from '../modules/users/middlewares/ensureAuthenticated';

import UserController from '../modules/users/controllers/UserController';
import SessionController from '../modules/users/controllers/SessionController';
import WinesController from '../modules/wines/controllers/WinesController';

export const routes = Router();

// routes.use(ensureAuthenticated);
const upload = multer(uploadConfig.multer);

const sessionController = new SessionController();
const userController = new UserController();
const wineController = new WinesController();

routes.post('/session', sessionController.create);

routes.get('/wines', wineController.list);
routes.post('/wines', upload.single('wineImage'), wineController.create);

routes.post('/users', userController.create);
