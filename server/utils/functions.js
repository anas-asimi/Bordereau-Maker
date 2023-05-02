import ejs from 'ejs'
import browser from './browserFactory.js';
import { TEMPLATE_PATH, PORT } from './config.js'
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs'

// create folder
export function createFolder(folderName) {
    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }
    } catch (err) {
        console.error(err);
    }
}

// create link to static file
export function pathtoLink(path) {
    return path.slice(6)
}

// pdf generator function
export async function htmlToPdf(html) {
    try {
        const folderName = 'static/pdfs';
        createFolder(folderName)
        let pdfOptions = {
            path: `static/pdfs/bordereau-${uuidv4()}.pdf`,
            format: "A4"
        }
        let page = await browser.newPage()
        await page.setContent(html);
        await page.pdf(pdfOptions);
        await page.close()
        setTimeout(() => {
            fs.unlinkSync(pdfOptions.path)
            console.log(pdfOptions.path + ' had deleted');
        }, 1000 * 60 * 15)
        return pathtoLink(pdfOptions.path)
    } catch (error) {
        console.log(error);
    }
}

// html generator function
export async function dataToHtml(data) {
    let html = await ejs.renderFile(TEMPLATE_PATH, { ...data, PORT });
    return html

}

// create pdf from data
export async function dataToPDf(data) {
    let html = await dataToHtml(data)
    console.time('created in')
    let pdf = await htmlToPdf(html)
    console.timeEnd('created in')
    return pdf

}

// function to make execution stop for amount of time
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// clean and sanitize data
export function dataSanitization(params) {
    return {
        ...params,
        date: params.date.replaceAll('-', '/'),
        sender: params.sender.toUpperCase(),
        receiver: params.receiver.toUpperCase(),
    }
}