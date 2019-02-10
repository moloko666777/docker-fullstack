import express from 'express';
const router = express.Router();

import { HomeController } from '../app/controllers/home'

router.get('/', HomeController.index);

export { router as HomeRouter }
