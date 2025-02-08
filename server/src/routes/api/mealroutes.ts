//Future Development: Just convert this to axios. This is messy. But for requirements, we'll do it this way.
//Expect this code to change for Sequelize.
import { Router, Request, Response } from 'express';
import https from 'https';

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
})
export default router;