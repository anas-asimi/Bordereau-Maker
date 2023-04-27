import logger from './utils/logger.js'
import {requestLogger} from './utils/middleware.js'
import express from 'express'

const app = express()

app.use(express.static('static'))
app.use(requestLogger)
const PORT = 5555
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
    logger.info(`go to http://localhost:${PORT}`)
})