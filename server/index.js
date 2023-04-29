import express from 'express'
import route from './routes/route.js'
import cors from 'cors'
import { requestLogger } from './utils/middleware.js'
import logger from './utils/logger.js'
import ip from 'ip'
import { PORT } from './utils/config.js'

const app = express()

app.use(cors())
app.use(express.static('static'))
app.use(express.json())
app.use(requestLogger)
app.set('view engine', 'ejs')

app.use('', route)

app.listen(PORT, () => {
    logger.info(`Server running`)
    logger.info(`go to :`)
    logger.info(`   http://localhost:${PORT}`)
    logger.info(`   http://${ip.address()}:${PORT}`)
})