import { Request, Response } from 'express';
import { getErrorMessage } from '../utils/errors.util';
import { AppDataSource } from "./../database/app-data-source"
//import { User } from "../models/user.model"
//import * as userServices from '../services/user.service';

export const loginOne = async (req: Request, res: Response) => {
 try {
   //const foundUser = await userServices.login(req.body);
   //AppDataSource.manager.find(User)
   res.status(200).send('foundUser');
 } catch (error) {
   return res.status(500).send(getErrorMessage(error));
 }
};

export const registerOne = async (req: Request, res: Response) => {
 try {
   //await userServices.register(req.body);
   //res.status(200).send('Inserted successfully');
 } catch (error) {
   return res.status(500).send(getErrorMessage(error));
 }
};