import React, { useState, useEffect } from 'react';
import { Movie } from '../interfaces/Movie.js';

export default function Home() {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await fetch('/api/movie/random');
        const data = await response.json();
        console.log('Fetched movie data:', data); // Log the data to verify its structure
        setMovie(data);
      } catch (error) {
        console.error('Error fetching random movie:', error);
      }
    };

    fetchRandomMovie();
  }, []);

  useEffect(() => {
    console.log('Updated movie state:', movie); // Log the movie state whenever it changes
  }, [movie]);

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className="display-4">Dinner and a Movie</h1>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-primary mx-2">Movies</button>
        <button className="btn btn-secondary mx-2">Meals</button>
      </div>
{/* Important: The case for these items are important as they are not being rendered to lowercase. Therefore, it's not  */}
      <div className="row">
        {movie ? (
          <div className="col-md-3">
            <div className="card">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h2 className="card-title">{movie.Title}</h2>
                <p className="card-text">{movie.Plot}</p>
                <p className="card-text"><small className="text-muted">Directed by {movie.Director}</small></p>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">Loading...</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}