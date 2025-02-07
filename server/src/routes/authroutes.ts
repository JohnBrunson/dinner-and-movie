import { Router, Request, Response} from 'express';
import { User } from '..models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
    // extract the username and password from the body.
    const { username, password} = req.body;
    // find the user in the database by username
    const user = await User.findOne ({
        where: { username },
    });
    
    // if we can't find the user, kick back a 401 response with a message of "Authentication failed."
    if (!user) {
        return res.status(401).json ({ message: 'Authentication Failed.' });
    }

    //Password compare -- Bcrypt compared its stored password with what the user provided
    const passwordIsValid = await bcrypt.compare (password, user.password);

    //if the password is not valid, return a 401 response with a message of "Authentication Failed."
    if (!passwordIsValid) {
        return res.status(401).json ({ message: 'Authentication Failed.' })
    }

    //Pull Secret key from server.
    const secretKey = process.env.JWT_SECRET_KEY || '';
    
    //generate a token for the user
    const token = jwt.sign({ username }, secretKey, {expiresIn: '5m'});
    return res.json ({ token });

};
const router = Router();
router.post('/login', login);
export default router;