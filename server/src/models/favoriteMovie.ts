// import { Model, DataTypes, Sequelize } from 'sequelize';

// export class FavoriteMovie extends Model {
//   declare userId: number;
//   declare imdbId: string;
// }

// export const initFavoriteMovieModel = (sequelize: Sequelize) => {
//   FavoriteMovie.init(
//     {
//       userId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       imdbId: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       tableName: 'FavoriteMovies',
//     }
//   );
//   return FavoriteMovie;
// };

//This is likely too complex. Second Draft Above, but it doesn't seem to work properly.
import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from './user.js';
// import { Movie } from './movie.js';

export class FavoriteMovie extends Model {
  declare id: number;
  declare userId: number;
  declare movieId: number;
}

export const initFavoriteMovieModel = (sequelize: Sequelize) => {
  FavoriteMovie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
      },
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: Movie,
        //   key: 'id',
        // },
      },
    },
    {
      sequelize,
      tableName: 'FavoriteMovies',
    }
  );
  return FavoriteMovie;
};