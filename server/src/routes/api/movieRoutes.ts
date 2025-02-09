import { Router, Request, Response } from 'express';
// import { promises as fs } from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
import { titleOMDBResponse } from '../../types/movie';
import { moviesList } from '../../data/moviesList.js';

const router = Router();

const baseURL = 'http://www.omdbapi.com/?'
const apiKey = process.env.MOVIE_API_KEY

//Since OMDB does not have a random generator, we're going to create a Pseudo Random ay of doing this...

//Helper functions to read the movies from a JSON file for the pseudo random generator. This probably should be moved off into a service or other thing, but for MVP this is probably fine.

// setting up for an easy fetch from the API. Using t for the title because we only want one object back.
const fetchMovieDetails = async (title: string): Promise<titleOMDBResponse> => {
    const response =  await fetch(`${baseURL}t=${title}&apiKey=${apiKey}`);
    return response.json();
}

//For file import... if I ever figure out how to get the json to play nice with src/data

// const readMovieListFromFile = async (): Promise<Movie[]> => {
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = path.dirname(__filename);
//     const filePath = path.join(__dirname, '../../data/moviesList.json');
//     const data = await fs.readFile(filePath, 'utf-8');
//     return JSON.parse(data);
// };

//Then Define the route with the work of selecting the movie in it...
router.get ('/random', async (_req: Request, res: Response) => {
    try {
        const randomMovie = moviesList[Math.floor(Math.random() * moviesList.length)];
        //console.log(`Random Movie selected was: ${randomMovie}`)
        const data = await fetchMovieDetails(randomMovie.title);
        res.json(data);
    } catch (err) {
        console.error('ERROR: Backend OMDB API Fetch error from Random Selection:', err)
    }
    });

router.get ('/search/:title', async (req: Request, res: Response) => {
    const { title } = req.params;
    try {
        const response = await fetch (`${baseURL}s=${title}&apiKey=${apiKey}`);
        //uncomment if troubleshooting is needed.
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