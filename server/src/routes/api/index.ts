import { Router } from 'express';
import mealRoutes from './mealroutes.js'

const router = Router();

router.use('/meal', mealRoutes);
// router.use('/volunteers', volunteerRouter);
// router.use('/works', workRouter);

export default router;
