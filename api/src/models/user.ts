// @ts-ignore
import client from "../database";
import bcrypt from 'bcrypt';

export type User = {
    id?: number;
    lastname: string;
    firstname: string;
    email: string;
    password: string;
}

export class UserStore {
    async index(): Promise<User[]> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM users'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        } catch (err) {
            console.error('Error occurred while fetching users', err)
            throw new Error(`Could not get users. Error: ${err}`)
        }
    }

    async show(id: number): Promise<User> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'SELECT * FROM users WHERE id=($1)'
            const result = await conn.query(sql, [id])
            conn.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Could not find user ${id}. Error: ${err}`)
        }
    }

    async create(u: User): Promise<User> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'INSERT INTO users (lastname, firstname, email, password_digest) VALUES ($1, $2, $3, $4) RETURNING *'
            const hash = bcrypt.hashSync(
                u.password + process.env.BCRYPT_PASSWORD,
                parseInt(process.env.SALT_ROUNDS as unknown as string)
            );
            const result = await conn.query(sql, [u.lastname, u.firstname, u.email, hash])
            const user = result.rows[0]
            conn.release()
            return user
        } catch (err) {
            throw new Error(`Could not create user of email ${u.email}. Error: ${err}`)
        }
    }

    async authenticate(email: string, password: string): Promise<User | null> {
        let conn
        try {
            // @ts-ignore
            conn = await client.connect()
            const sql = 'SELECT password_digest FROM users WHERE email=($1)'
            const result = await conn.query(sql, [email])

            if (result.rows.length) {
                const user = result.rows[0]
                if (bcrypt.compareSync(password + process.env.BCRYPT_PASSWORD, user.password_digest)) {
                    return user
                } else {
                    throw new Error(`Password is incorrect for user of email ${email}`)
                }
            } else {
                return null
            }
        } catch (err) {
            console.error(`Could not authenticate user of email ${email}. Error: ${err}`)
            throw new Error(`Could not authenticate user of email ${email}`)
        } finally {
            if (conn) {
                conn.release()
            }
        }
    }

    async remove(id: number): Promise<User> {
        try {
            // @ts-ignore
            const conn = await client.connect()
            const sql = 'DELETE FROM users WHERE id=($1)'
            const result = await conn.query(sql, [id])
            const user = result.rows[0]
            conn.release()
            return user
        } catch (err) {
            throw new Error(`Could not delete user ${id}. Error: ${err}`)
        }
    }
}