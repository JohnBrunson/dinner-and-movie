import { Router, Request, Response } from 'express';

const router = Router();

const baseURL = 'http://www.omdbapi.com/?'
const apiKey = process.env.MOVIE_API_KEY


router.get ('/search/:title', async (req: Request, res: Response) => {
    const { title } = req.params;
    try {
        const response = await fetch (`${baseURL}s=${title}&apiKey=${apiKey}`);
        //console.log(`You sent: ${title}`)
        //console.log(response)
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error(`ERROR: Backend OMDB API Fetch Error:`, err);
        res.status(500).json({ error: 'Failed to fetch data from OMDB API'})
    }
});

export default router;