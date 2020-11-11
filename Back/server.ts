import express from 'express'
import {routes} from './index'
const app = express()

const port = 4000

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})