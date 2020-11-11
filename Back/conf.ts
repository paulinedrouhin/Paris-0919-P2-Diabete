import mysql from 'mysql'
import dotenv from 'dotenv'

const path = process.cwd() + '/.env'
dotenv.config({path})

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DB,
})