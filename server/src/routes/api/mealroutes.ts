import { Router, Request, Response } from 'express';
import axios from 'axios'

const router = Router();

//get a random meal
router.get('/random', async (_req: Request, res: Response) => {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        res.json(response.data);
    } catch (error) {
        console.error('ERROR: TheMealDB backend fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch data from Meal DB API. Location: api/random'});
    }
});

export default router;