import { User } from '../models/index.js'

export const seedUsers = async () => {
    await User.bulkCreate ([
        { username: 'JohnBrunson', password: 'Welcome@123' },
        { username: 'JamesRaney', password: 'Welcome@123' },
        { username: 'CarlosGaribay', password: 'Welcome@123' },
        { username: 'User01', password: 'Welcome@123' },
        { username: 'User02', password: 'Welcome@123' },
        { username: 'User03', password: 'Welcome@123' },
        { username: 'User04', password: 'Welcome@123' },
        { username: 'User05', password: 'Welcome@123' },
        { username: 'User06', password: 'Welcome@123' },
        { username: 'User07', password: 'Welcome@123' },
        { username: 'User08', password: 'Welcome@123' },
        { username: 'User09', password: 'Welcome@123' },
        { username: 'User10', password: 'Welcome@123' },
    ], { individualHooks: true });
}