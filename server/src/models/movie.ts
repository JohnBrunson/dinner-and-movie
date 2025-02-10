// import {  Model,  type InferAttributes,  type InferCreationAttributes,  type CreationOptional,  DataTypes,  type Sequelize,} from 'sequelize';

// export class Movie extends Model <InferAttributes <Movie>, InferCreationAttributes<Movie>> {
//     declare id: CreationOptional<number>;
//     declare Title: string;
//     declare Year: CreationOptional<number>;
//     declare Rated: CreationOptional<string>;
//     declare Released: CreationOptional<string>;
//     declare Runtime: CreationOptional<string>;
//     declare Genre: CreationOptional<string>;
//     declare Director: CreationOptional<string>;
//     declare Writer: CreationOptional<string>;
//     declare Actors: CreationOptional<string>;
//     declare Plot: CreationOptional<string>;
//     declare Language: CreationOptional<string>;
//     declare Country: CreationOptional<string>;
//     declare Awards: CreationOptional<string>;
//     declare Poster: CreationOptional<string>;
//     declare Metascore: CreationOptional<string>;
//     declare imdbRating: CreationOptional<string>;
//     declare imdbVotes: CreationOptional<string>;
//     declare imdbID: CreationOptional<string>;
//     declare Type: CreationOptional<string>;
//     declare DVD: CreationOptional<string>;
//     declare BoxOffice: CreationOptional<string>;
//     declare Production: CreationOptional<string>;
//     declare Website: CreationOptional<string>;
//     declare Response: CreationOptional<string>;
// }
// export const initMovieModel = (sequelize: Sequelize) => {
//     Movie.init(
//       {
//         id: {
//           type: DataTypes.INTEGER,
//           autoIncrement: true,
//           primaryKey: true,
//         },
//         Title: {
//           type: DataTypes.STRING,
//           allowNull: false,
//         },
//         Year: {
//           type: DataTypes.INTEGER,
//           allowNull: true,
//         },
//         Rated: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Released: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Runtime: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Genre: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Director: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Writer: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Actors: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Plot: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Language: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Country: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Awards: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Poster: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Metascore: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         imdbRating: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         imdbVotes: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         imdbID: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Type: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         DVD: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         BoxOffice: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Production: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Website: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//         Response: {
//           type: DataTypes.STRING,
//           allowNull: true,
//         },
//       },
//       {
//         sequelize,
//         tableName: 'Movies',
//       }
//     );
//     return Movie;
//   };

import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, Sequelize } from 'sequelize';

export class Movie extends Model<InferAttributes<Movie>, InferCreationAttributes<Movie>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare year: CreationOptional<number>;
  declare rated: CreationOptional<string>;
  declare released: CreationOptional<string>;
  declare runtime: CreationOptional<string>;
  declare genre: CreationOptional<string>;
  declare director: CreationOptional<string>;
  declare writer: CreationOptional<string>;
  declare actors: CreationOptional<string>;
  declare plot: CreationOptional<string>;
  declare language: CreationOptional<string>;
  declare country: CreationOptional<string>;
  declare awards: CreationOptional<string>;
  declare poster: CreationOptional<string>;
  declare metascore: CreationOptional<string>;
  declare imdbRating: CreationOptional<string>;
  declare imdbVotes: CreationOptional<string>;
  declare imdbID: CreationOptional<string>;
  declare type: CreationOptional<string>;
  declare dvd: CreationOptional<string>;
  declare boxOffice: CreationOptional<string>;
  declare production: CreationOptional<string>;
  declare website: CreationOptional<string>;
  declare response: CreationOptional<string>;
}

export const initMovieModel = (sequelize: Sequelize) => {
  Movie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rated: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      released: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      runtime: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      director: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      writer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      actors: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      plot: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      awards: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      poster: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      metascore: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imdbRating: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imdbVotes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imdbID: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dvd: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      boxOffice: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      production: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      response: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'Movies',
    }
  );
  return Movie;
};