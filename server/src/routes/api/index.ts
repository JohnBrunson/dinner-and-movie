import { Router } from 'express';
import mealRoutes from './mealRoutes.js'
import movieRoutes from './movieRoutes.js'

const router = Router();

router.use('/meal', mealRoutes);
router.use('/movie', movieRoutes);


export default router;
