import logger from './utils/logger.js'
import { isValid } from './utils/validator.js'
import { requestLogger } from './utils/middleware.js'
import express from 'express'
import { pageGenerator } from './utils/pageGenerator.js'

const app = express()

app.use(express.static('static'))
app.use(express.json())
app.use(requestLogger)
app.set('view engine', 'ejs')

app.post('', async (request, response) => {

    let data = request.body
    if (isValid(data)) {
        response.contentType("application/pdf");
        let pdf = await pageGenerator(data)
        return response.send(pdf);    
    }
    return response.status(400).send()
})


let data = {
    number: '305',
    date: '2023-04-28',
    sender: 'LE SERVICE DE MISE EN ŒUVRE DES PROJETS',
    receiver: 'LE SERVICE DES AIDES ET INCITATIONS',
    content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin',
    quantite: '1'
}

// this test endpoint return the generated page as html
app.get('/test', async (request, response) => {
    response.render('borderaux',data)
})


// this test endpoint return the generated page as pdf
app.get('/pdf-test', async (request, response) => {
    let pdf = await pageGenerator(data)
    response.contentType("application/pdf");
    response.send(pdf);

})




const PORT = 5555
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
    logger.info(`go to http://localhost:${PORT}`)
})