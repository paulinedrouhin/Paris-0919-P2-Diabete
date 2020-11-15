import { connection} from './conf'
import { Request, Response, Router } from "express"
const router: Router = Router()

// search food
router.get('/search', (req:Request, res:Response) => {
    try {
        const name = req.query.name
        name ? connection.query(`SELECT * FROM food WHERE name LIKE '%${name}%'`, (err, result) => {
        res.status(200).json(result)
        }) : res.status(500)
    } catch (err) {
        res.status(500)
    }
  })

// get food info with id
router.get('/food/:id', (req:Request, res:Response) => {
    try {
        const id = req.params.id
        connection.query(`SELECT * FROM food WHERE id = ${id}`, (err, result) => {
        result ? res.status(200).json(result[0]) : res.status(400)
        })
    } catch (err) {
        res.status(500)
    }
  })

// get food info with category
router.get('/food/category/:categoryName', (req:Request, res:Response) => {
    try {
        const categoryName = req.params.categoryName
        connection.query(`SELECT * FROM food WHERE category = '${categoryName}'`, (err, result) => {
        res.status(200).json(result)
        })
    } catch (err) {
        res.status(500)
    }
  })

export const routes: Router = router