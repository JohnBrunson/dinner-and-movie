// import { Model, DataTypes, Sequelize } from 'sequelize';

// export class FavoriteMeal extends Model {
//   declare userId: number;
//   declare idMeal: string;
// }

// export const initFavoriteMealModel = (sequelize: Sequelize) => {
//   FavoriteMeal.init(
//     {
//       userId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       idMeal: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       tableName: 'FavoriteMeals',
//     }
//   );
//   return FavoriteMeal;
// };
// This is likely too complex. Second Draft Above, but it doesn't seem to work properly.

import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from './user.js';
import { Meal } from './meal.js';

export class FavoriteMeal extends Model {
  declare id: number;
  declare userId: string;
  declare mealId: string;
}

export const initFavoriteMealModel = (sequelize: Sequelize) => {
  FavoriteMeal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
      },
      mealId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: Meal,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'FavoriteMeals',
    }
  );
  return FavoriteMeal;
};