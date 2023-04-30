import ejs from 'ejs'
import browser from './browserFactory.js';
import { TEMPLATE_PATH, PORT } from './config.js'


export async function htmlToPdf(html) {

    console.time('create new page');
    let page = await browser.newPage()
    console.timeEnd('create new page');

    console.time('set content');
    await page.setContent(html);
    console.timeEnd('set content');

    console.time('print to pdf');
    let pdf = await page.pdf({ format: "A4" });
    console.timeEnd('print to pdf');

    console.time('close new page');
    await page.close()
    console.timeEnd('close new page');

    return pdf
}

export async function dataToHtml(data) {
    let html = await ejs.renderFile(TEMPLATE_PATH, { ...data, PORT });
    return html

}

export async function dataToPDf(data) {
    let html = await dataToHtml(data)

    console.time('total')
    let pdf = await htmlToPdf(html)
    console.timeEnd('total')
    return pdf

}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function dataSanitization(params) {
    return {
        ...params,
        date : params.date.replaceAll('-', '/'),
        sender : params.sender.toUpperCase(),
        receiver : params.receiver.toUpperCase(),
    }
}