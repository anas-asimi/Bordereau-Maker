import logger from './utils/logger.js'
import { isValid } from './utils/validator.js'
import { requestLogger } from './utils/middleware.js'
import express from 'express'

const app = express()

app.use(express.static('static'))
app.use(express.json())
app.use(requestLogger)

app.post('', async (request, response) => {

    let info = request.body
    
    if (isValid(info)) {
        return response.status(200).send()
    }
    else {
        return response.status(400).send()
    }
})




const PORT = 5555
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
    logger.info(`go to http://localhost:${PORT}`)
})