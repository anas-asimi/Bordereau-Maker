import express from 'express'
import { dataToHtml , dataSanitization, dataToPDf } from '../utils/functions.js'
import { isValid } from '../utils/validator.js'
import {fakeData} from '../utils/config.js'



const route = express.Router()

route.post('', async ({body}, response) => {
    // return bad request if body data not valid
    if (!isValid(body)) return response.status(400).send()
    // format body attribute
    body = dataSanitization(body)
    // return pdf
    let pdf = await dataToPDf(body)
    response.contentType("application/pdf");
    response.send(pdf);    
})


// this test endpoint return the generated page as html
route.get('/html', async (request, response) => {
    let html = await dataToHtml(fakeData)
    response.send(html);
})


// this test endpoint return the generated page as pdf in new tap
route.get('/pdf', async (request, response) => {
    let pdf = await dataToPDf(fakeData)
    response.contentType("application/pdf");
    response.send(pdf);    
})

export default route