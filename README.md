# Dinner and a movie

## Description

Dinner and a Movie is for the time pressed individual who wants an easy way to plan out a night's entertainment. Whether it's the single person or someone trying to come up with date night ideas, this app is for you!

![Picture of Dinner and a Movie](/readme-images/dinner-and-a-movie.png)

## Installation

The production version of the application can be found [here](https://dinner-and-movie.onrender.com). If you want to tinker with the code, simply clone the repository. ```npm start run:dev``` will get you started. 

## Usage

To use the productions version application, you can use the link [here](https://dinner-and-movie.onrender.com). 

At present, the product's interaction is simply being able to refresh the page and this will allow a new random movie to be pulled from the API.

Login will return a token, but is not required to see random movies. Eventually, this will be used to save favorite meals and movies.

### API Reference
#### Meals
|Endpoint   | HTTP Method  | Brief Description and notes |
|-----------|-------|--------------------------|
|/api/meal/random  |GET| Get a random meal|
|/api/meal/save-favorite|POST| Save a meal object from random|
|/api/favorite-meals|POST|Save a favorite meal object. (Not in UI, relies on meals saved via save-favorites API mentioned above.)

#### Movies
|Endpoint   | HTTP Method  | Brief Description and notes |
|-----------|-------|--------------------------|
|/api/movie/random  |GET| Get a random movie|
|/api/movie/search |GET| Search for a movie. Will attempt to match movies using search API |

#### Authorization Routes
|Endpoint   | HTTP Method  | Brief Description and notes |
|-----------|-------|--------------------------|
|/auth/login  |POST| Login functionality. Will return JWT Token. Not presently used in this iteration, but future usage anticipated.|

There are other routes in the code, but they are untested or do not work (yet). Only known working routes are listed above. They may be tested with Insomnia, Postman, and the like.

## Credits

|Name       | Link  |
|-----------|-------|
|James Raney |https://github.com/jamesgraney|
|Carlos Garibay|https://github.com/Carlosgaribay691|

Resource: Seed Data for Random Movie API:  https://www.reddit.com/r/movies/comments/164ougo/these_are_the_100_greatest_movies_of_all_time/

## License
[MIT](https://choosealicense.com/licenses/mit/)

---

