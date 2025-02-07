import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// interface for JWT payload
interface JwtPayload {
    username: string;
}

// Extend the Request interface to include the user property (Co-pilot suggestion)
declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}

//Middleware to authenticate the JWT token. Kinda boilerplate. First, get the authorzation header from the request and verify that the header is present.
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    //First, get the authorzation header from the request
    // const authHeader  = req.header.authorization;
    console.log("Inside Middleware");
    const authHeader = req.header('authorization');
    //Split the authorization header on the space and get the second value from the array.
    console.log(authHeader)
    if (authHeader) {
        const token = authHeader.split(' ')[1];
    //store the secret key as a variable from the porcess environment    
        const secretKey = process.env.JWT_SECRET_KEY || '';
    //Call the jwt verify function and pass the arguments needed for this.
        jwt.verify(token, secretKey, (err, user) => {
          // If there's an error, toss back a 403 Forbidden error.
            if (err) {
            return res.sendStatus(403);
          }
          //
          req.user = user as JwtPayload;
          return next();
        });
        // If there's no header, kick back a 401 error to the front end.
      } else {
        res.sendStatus(401);
      }
}