import logger from './utils/logger.js'
import { isValid } from './utils/validator.js'
import { requestLogger } from './utils/middleware.js'
import express from 'express'
import { pageGenerator } from './utils/pageGenerator.js'

const app = express()

app.use(express.static('static'))
app.use(express.json())
app.use(requestLogger)
app.set('view engine','ejs')

app.post('', async (request, response) => {

    let data = request.body
    if (isValid(data)) return response.status(200).send()
    return response.status(400).send()
})

app.get('/test', async (request, response) => {
    console.time();
    let pdf = await pageGenerator()
    // response.contentType("application/pdf");
    console.timeEnd()
    response.send();

})




const PORT = 5555
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
    logger.info(`go to http://localhost:${PORT}`)
})