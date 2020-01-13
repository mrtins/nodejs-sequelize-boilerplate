import express from 'express';

import baseController from './baseController.controller';

import { User } from '../models';

const router = express.Router();

/* You can either define every single method or define all CRUD methods */
baseController.insert(router, User);
baseController.findOne(router, User)

/* Implement new methods above */
/* You can set all basic CRUD methods with the following line:
baseController.setAllCrudMethods(router, User); */

export default router;