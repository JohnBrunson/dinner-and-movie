import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import bcrypt from 'bcrypt';

interface UserAttributes {
    id: number;
    username: string;
    // email: string;
    password: string;
}
//Define optional attributes for creating a new user. (Should this be, though?)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

//User closs will extend Sequelize's Model.
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    // public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    
    //Set a password, salt and hash it.
    public async setPassword(password: string) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }
}

//Making an army of users! 
export function UserFactory (sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            // email: {
            //     type: DataTypes.STRING,
            //     allowNull: false,
            // },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'users',
            sequelize,
            hooks: {
                //Before creating a user, hash and set the password.
                beforeCreate: async (user: User) => {
                    await user.setPassword(user.password);
                },
                //Before updating a user, if the user has changed their password. hash and set the new password.
                beforeUpdate:  async (user: User) => {
                    if (user.changed('password')) {
                        await user.setPassword(user.password);
                    }
                },
                
            }
        }
    );
    return User; // return the initialized user model
}