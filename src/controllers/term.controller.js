import express from 'express';

import baseController from './baseController.controller';

import { Profile } from '../models';

const router = express.Router();

/* Implement new methods above */
/* You can set all basic CRUD methods with the following line */
baseController.setAllCrudMethods(router, Profile);

export default router;