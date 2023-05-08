import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User, UserStore } from '../models/user'
import verifyAuthToken from '../services/auth'

const store = new UserStore()

const index = async (_req: Request, res: Response) => {
    try {
        const users = await store.index()
        res.json(users)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const show = async (req: Request, res: Response) => {
    try {
        const user = await store.show(parseInt(req.params.id))
        res.json(user)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const create = async (req: Request, res: Response) => {
    try {
        const user: User = {
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            email: req.body.email,
            password: req.body.password
        }
        const newUser = await store.create(user)
        var token = jwt.sign({ user: newUser}, process.env.TOKEN_SECRET as unknown as string)
        res.json(token)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const authenticate = async (req: Request, res: Response) => {
    try {
        const user = await store.authenticate(req.body.email, req.body.password)
        if (!user) {
            res.status(401).json({ error: 'Invalid email or password' })
            return
        }
        const token = jwt.sign({ user }, process.env.TOKEN_SECRET as string)
        res.json({ token })
    } catch (err) {
        console.error(`Error authenticating user: ${err}`)
        res.status(500).json({ error: 'An error occurred when authenticating the user.'})
    }
}

const remove = async (req: Request, res: Response) => {
    try {
        const user = await store.remove(parseInt(req.params.id))
        res.json(user)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
}

const userRoutes = (app: express.Application) => {
    app.get('/users', verifyAuthToken, index)
    app.get('/users/:id', verifyAuthToken, show)
    app.post('/register', create)
    app.post('/login', authenticate)
    app.delete('/users/:id', verifyAuthToken, remove)
}

export default userRoutes