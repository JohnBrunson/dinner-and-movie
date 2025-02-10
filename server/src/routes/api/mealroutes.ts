//Future Development: Just convert this to axios or fetch. This is messy. But for requirements, we'll do it this way.
//Expect this code to change for Sequelize.
import { Router, Request, Response } from 'express';
import https from 'https';
import { Meal } from '../../models/meal.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();

//get a random meal
router.get('/random', async (_req: Request, res: Response) => {
    https.get('https://www.themealdb.com/api/json/v1/1/random.php', (apiRes) => {
        let data = '';

        apiRes.on('data', (chunk) => {
            data += chunk;
        });

    apiRes.on('end', () => {
        try {
            const parsedData = JSON.parse(data);
            res.json(parsedData.meals);
        } catch (error) {
            console.error('ERROR: TheMealDB backend fetch error:', error);
            res.status(500).json({ error: 'Failed to fetch data from Meal DB API. Location: api/random'});
        }
    });
//FIX ME: Not dry enough.
    }).on('error', (error) => {
        console.error('ERROR: TheMealDB backend fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch data from Meal DB API. Location: api/random' });
    });
});

// POST: Save favorite recipe details
router.post('/save-favorite', authenticateToken, async (req: Request, res: Response) => {
    const {
        idMeal,
        strMeal,
        strDrinkAlternate,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
        strMeasure16,
        strMeasure17,
        strMeasure18,
        strMeasure19,
        strMeasure20,
        strSource,
        strImageSource,
        strCreativeCommonsConfirmed,
        dateModified
    } = req.body;

    try {
        const meal = await Meal.create({
            idMeal,
            strMeal,
            strDrinkAlternate,
            strCategory,
            strArea,
            strInstructions,
            strMealThumb,
            strTags,
            strYoutube,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
            strMeasure16,
            strMeasure17,
            strMeasure18,
            strMeasure19,
            strMeasure20,
            strSource,
            strImageSource,
            strCreativeCommonsConfirmed,
            dateModified
        });
        res.status(201).json(meal);
    } catch (error) {
        console.error('ERROR: Failed to save favorite meal:', error);
        res.status(500).json({ error: 'Failed to save favorite meal' });
    }
});



export default router;