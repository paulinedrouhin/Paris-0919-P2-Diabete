import express from 'express'
import {routes} from './index'
import cors from 'cors'

// Then use it before your routes are set up:
const app = express()

const port = 4000

app.use(cors());
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})