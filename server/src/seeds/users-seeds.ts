import { User } from '../models/user.js'

export const seedUsers = async () => {
    await User.bulkCreate ([
        { username: 'JohnBrunson', password: 'Welcome@123' },
        { username: 'JamesRaney', password: 'Welcome@123' },
        { username: 'CarlosGaribay', password: 'Welcome@123' },
    ], { individualHooks: true });
}