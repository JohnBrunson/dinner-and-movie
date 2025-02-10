// import { Router, Request, Response } from 'express';
// import { FavoritePairing } from '../../models/favoritePairing.js';
// import { authenticateToken } from '../../middleware/auth.js';

// const router = Router();

// // Post favorite pairing
// router.post('/', authenticateToken, async (req: Request, res: Response) => {
//   const { idMeal, imdbId } = req.body;
//   const userId = req.user?.id;

//   try {
//     const favoritePairing = await FavoritePairing.create({ userId, idMeal, imdbId });
//     res.status(201).json(favoritePairing);
//   } catch (error) {
//     console.error('ERROR: Failed to create favorite pairing:', error);
//     res.status(500).json({ error: 'Failed to create favorite pairing' });
//   }
// });

// // Get all favorite pairings for the authenticated user
// router.get('/', authenticateToken, async (req: Request, res: Response) => {
//   const userId = req.user?.id;

//   try {
//     const favoritePairings = await FavoritePairing.findAll({ where: { userId } });
//     res.json(favoritePairings);
//   } catch (error) {
//     console.error('ERROR: Failed to fetch favorite pairings:', error);
//     res.status(500).json({ error: 'Failed to fetch favorite pairings' });
//   }
// });

// export default router;

// This is too complex. Second Draft Above, but it doesn't seem to work properly.
import { Router, Request, Response } from 'express';
import { FavoritePairing } from '../../models/favoritePairing.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();

// Create a new favorite pairing
router.post('/', authenticateToken, async (req: Request, res: Response) => {
  const { mealId, movieId } = req.body;
  const userId = req.user?.id;

  try {
    const favoritePairing = await FavoritePairing.create({ userId, mealId, movieId });
    res.status(201).json(favoritePairing);
  } catch (error) {
    console.error('ERROR: Failed to create favorite pairing:', error);
    res.status(500).json({ error: 'Failed to create favorite pairing' });
  }
});

// Get all favorite pairings for the authenticated user
router.get('/', authenticateToken, async (req: Request, res: Response) => {
  const userId = req.user?.id;

  try {
    const favoritePairings = await FavoritePairing.findAll({ where: { userId } });
    res.json(favoritePairings);
  } catch (error) {
    console.error('ERROR: Failed to fetch favorite pairings:', error);
    res.status(500).json({ error: 'Failed to fetch favorite pairings' });
  }
});

export default router;