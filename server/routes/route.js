import express, { request } from 'express'
import { dataToHtml, dataSanitization, dataToPDf } from '../utils/functions.js'
import { isValid } from '../utils/validator.js'
import { fakeData } from '../utils/config.js'



const route = express.Router()

route.post('', async (request, response) => {

    let { body } = request

    // return bad request if body data not valid
    if (!isValid(body)) return response.status(400).send()

    // format body data
    let data = dataSanitization(body)

    // return pdf
    let pdfLink = await dataToPDf(data)
    console.log(pdfLink);
    response.send(pdfLink)
})


// this test endpoint return the generated page as html
route.get('/html', async (request, response) => {
    let html = await dataToHtml(fakeData)
    response.send(html);
})


// this test endpoint return the generated page as pdf in new tap
route.get('/pdf', async (request, response) => {
    let pdfLink = await dataToPDf(fakeData)
    response.redirect(307, pdfLink);
})

export default route