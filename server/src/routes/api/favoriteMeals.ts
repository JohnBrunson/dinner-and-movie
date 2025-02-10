// import { Router, Request, Response } from 'express';
// import { FavoriteMeal } from '../../models/favoriteMeal.js';
// import { authenticateToken } from '../../middleware/auth.js';

// const router = Router();

// // Post favorite meal
// router.post('/', authenticateToken, async (req: Request, res: Response) => {
//   const { idMeal } = req.body;
//   const userId = req.user?.id;

//   try {
//     const favoriteMeal = await FavoriteMeal.create({ userId, idMeal });
//     res.status(201).json(favoriteMeal);
//   } catch (error) {
//     console.error('ERROR: Failed to create favorite meal:', error);
//     res.status(500).json({ error: 'Failed to create favorite meal' });
//   }
// });

// // Get all favorite meals for the authenticated user
// router.get('/', authenticateToken, async (req: Request, res: Response) => {
//   const userId = req.user?.id;

//   try {
//     const favoriteMeals = await FavoriteMeal.findAll({ where: { userId } });
//     res.json(favoriteMeals);
//   } catch (error) {
//     console.error('ERROR: Failed to fetch favorite meals:', error);
//     res.status(500).json({ error: 'Failed to fetch favorite meals' });
//   }
// });

// export default router;

// // This is too complex. Second Draft Above, but it doesn't seem to work properly.
import { Router, Request, Response } from 'express';
import { FavoriteMeal } from '../../models/favoriteMeal.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();

//post favorite meal
router.post ('/', authenticateToken, async (req: Request, res: Response) => {
    const { mealId } = req.body;
    const userId = req.user?.id;

    try {
        const favoriteMeal = await FavoriteMeal.create ({ userId, mealId });
        res.status(201).json(favoriteMeal);
    }catch (error) {
        console.error ('ERROR: Failed to create favorite meal:', error);
        res.status(500).json({ error: 'Failed to create favorite meal' });
    }
});

//Get all favorite meals
router.get ('/', authenticateToken, async (req: Request, res: Response) => {
    const userId = req.user?.id;

    try {
        const favoriteMeals = await FavoriteMeal.findAll({ where: { userId } });
        res.json(favoriteMeals);
    } catch (error) {
        console.error ('ERROR: Failed to fetch favorite meals:', error);
        res.status(500).json({ error: 'Failed to fetch favorite meals' });
    }
});

export default router;