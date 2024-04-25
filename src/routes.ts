import { Router } from 'express';
import * as userController from './controllers/user.controller';

export const routes = Router();

routes.post('/login', userController.loginOne);
routes.post('/register', userController.registerOne);

//https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1