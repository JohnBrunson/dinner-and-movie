import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { initMealModel } from './meal.js';
import { initMovieModel } from './movie.js';
import { initFavoriteMovieModel } from './favoriteMovie.js';
import { initFavoriteMealModel } from './favoriteMeal.js';
import { initFavoritePairingModel } from './favoritePairing.js';

const User = UserFactory(sequelize);
const Meal = initMealModel(sequelize);
const Movie = initMovieModel(sequelize);
const FavoriteMovie = initFavoriteMovieModel(sequelize);
const FavoriteMeal = initFavoriteMealModel(sequelize);
const FavoritePairing = initFavoritePairingModel(sequelize);

// Define associations
User.hasMany(FavoriteMovie, {  });
User.hasMany(FavoriteMeal, {  });
User.hasMany(FavoritePairing, {  });
Meal.hasMany(FavoriteMeal, {  });
Meal.hasMany(FavoritePairing, {  });
Movie.hasMany(FavoriteMovie, {  });
Movie.hasMany(FavoritePairing, {  });
FavoriteMovie.belongsTo(User, {  });
FavoriteMovie.belongsTo(Movie, {  });
FavoriteMeal.belongsTo(User, {  });
FavoriteMeal.belongsTo(Meal, {  });
FavoritePairing.belongsTo(User, {  });
FavoritePairing.belongsTo(Meal, {  });
FavoritePairing.belongsTo(Movie, {  });
// User.hasMany(FavoriteMovie, { foreignKey: 'userId' });
// User.hasMany(FavoriteMeal, { foreignKey: 'userId' });
// User.hasMany(FavoritePairing, { foreignKey: 'userId' });
// Meal.hasMany(FavoriteMeal, { foreignKey: 'mealId' });
// Meal.hasMany(FavoritePairing, { foreignKey: 'mealId' });
// Movie.hasMany(FavoriteMovie, { foreignKey: 'movieId' });
// Movie.hasMany(FavoritePairing, { foreignKey: 'movieId' });
// FavoriteMovie.belongsTo(User, { foreignKey: 'userId' });
// FavoriteMovie.belongsTo(Movie, { foreignKey: 'movieId' });
// FavoriteMeal.belongsTo(User, { foreignKey: 'userId' });
// FavoriteMeal.belongsTo(Meal, { foreignKey: 'mealId' });
// FavoritePairing.belongsTo(User, { foreignKey: 'userId' });
// FavoritePairing.belongsTo(Meal, { foreignKey: 'mealId' });
// FavoritePairing.belongsTo(Movie, { foreignKey: 'movieId' });

export { User, Meal, Movie, FavoriteMovie, FavoriteMeal, FavoritePairing };