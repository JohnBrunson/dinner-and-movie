import { Router } from 'express';
import mealRoutes from './mealroutes.js';
import movieRoutes from './movieRoutes.js';
import favoriteMovieRoutes from './favoriteMovies.js';
import favoriteMealRoutes from './favoriteMeals.js';
import favoritePairingRoutes from './favoritePairings.js';

const router = Router();

router.use('/meal', mealRoutes);
router.use('/movie', movieRoutes);
router.use('/favorite-movies', favoriteMovieRoutes);
router.use('/favorite-meals', favoriteMealRoutes);
router.use('/favorite-pairings', favoritePairingRoutes);

export default router;
