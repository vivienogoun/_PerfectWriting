import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

interface DecodedUser {
    id: number
    email: string
}
  
declare global {
    namespace Express {
        interface Request {
            user?: DecodedUser
        }
    }
}

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader?.split(' ')[1]
        const decoded = jwt.verify(token as string, process.env.TOKEN_SECRET as string) as DecodedUser
        req.user = decoded
        next()
    } catch (err) {
        console.error(err)
        res.status(401).json({ message: 'Invalid or expired token' })
    }
}

export default verifyAuthToken