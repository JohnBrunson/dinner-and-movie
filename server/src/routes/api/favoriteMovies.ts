// import { Router, Request, Response } from 'express';
// import { FavoriteMovie } from '../../models/favoriteMovie.js';
// import { authenticateToken } from '../../middleware/auth.js';

// const router = Router();

// // Post favorite movie
// router.post('/', authenticateToken, async (req: Request, res: Response) => {
//   const { imdbId } = req.body;
//   const userId = req.user?.id;

//   try {
//     const favoriteMovie = await FavoriteMovie.create({ userId, imdbId });
//     res.status(201).json(favoriteMovie);
//   } catch (error) {
//     console.error('ERROR: Failed to create favorite movie:', error);
//     res.status(500).json({ error: 'Failed to create favorite movie' });
//   }
// });

// // Get all favorite movies for the authenticated user
// router.get('/', authenticateToken, async (req: Request, res: Response) => {
//   const userId = req.user?.id;

//   try {
//     const favoriteMovies = await FavoriteMovie.findAll({ where: { userId } });
//     res.json(favoriteMovies);
//   } catch (error) {
//     console.error('ERROR: Failed to fetch favorite movies:', error);
//     res.status(500).json({ error: 'Failed to fetch favorite movies' });
//   }
// });

// export default router;

// This is too complex. Second Draft Above, but it doesn't seem to work properly.
// import { Router, Request, Response } from 'express';
// import { FavoriteMovie } from '../../models/favoriteMovie.js';
// import { authenticateToken } from '../../middleware/auth.js';

// const router = Router();

// router.post('/', authenticateToken, async (req: Request, res: Response) => {
//     const { movieId } = req.body;
//     const userId = req.user?.id;

//     try {
//         const favoriteMovie = await FavoriteMovie.create ({ userId, movieId });
//         //201 because we successfully created a new entry into the database.
//         res.status(201).json(favoriteMovie);
//     }catch (error) { 
//         res.status(500).json({ error: 'Failed to create favorite movie.'});
//     }
// });

// //Get all favorite movies for the authenticated user
// router.get('/', authenticateToken, async (req: Request, res: Response) => {
//     const userId = req.user?.id;
//     try {
//         const favoriteMovies = await FavoriteMovie.findAll({ where: { userId } });
//         res.json(favoriteMovies);
//     } catch (error) {
//         console.error ('ERROR: Failed to fetch favorite movies: ', error);
//         res.status(500).json({ error: 'Failed to fetch favorite movies'});
//     }
// });

// export default router;


//experiment
import { Router, Request, Response } from 'express';
import { FavoriteMovie } from '../../models/favoriteMovie.js';
import { Movie } from '../../models/movie.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = Router();

router.post('/', authenticateToken, async (req: Request, res: Response) => {
    const { movieId, title, year, rated, released, runtime, genre, director, writer, actors, plot, language, country, awards, poster, metascore, imdbRating, imdbVotes, imdbID, type, dvd, boxOffice, production, website, response } = req.body;
    const userId = req.user?.id;

    try {
        // Ensure that the movie exists in the Movie table
        let movie = await Movie.findOne({ where: { id: movieId } });
        if (!movie) {
            // If the movie does not exist, create it
            movie = await Movie.create({
                id: movieId,
                title,
                year,
                rated,
                released,
                runtime,
                genre,
                director,
                writer,
                actors,
                plot,
                language,
                country,
                awards,
                poster,
                metascore,
                imdbRating,
                imdbVotes,
                imdbID,
                type,
                dvd,
                boxOffice,
                production,
                website,
                response
            });
        }

        // Create the favorite movie entry
        const favoriteMovie = await FavoriteMovie.create({ userId, movieId });
        res.status(201).json(favoriteMovie);
    } catch (error) {
        console.error('ERROR: Failed to create favorite movie:', error);
        res.status(500).json({ error: 'Failed to create favorite movie.' });
    }
});

// Get all favorite movies for the authenticated user
router.get('/', authenticateToken, async (req: Request, res: Response) => {
    const userId = req.user?.id;
    try {
        const favoriteMovies = await FavoriteMovie.findAll({ where: { userId } });
        res.json(favoriteMovies);
    } catch (error) {
        console.error('ERROR: Failed to fetch favorite movies:', error);
        res.status(500).json({ error: 'Failed to fetch favorite movies' });
    }
});

export default router;