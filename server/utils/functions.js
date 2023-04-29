import ejs from 'ejs'
import browser from './browserFactory.js';
import {TEMPLATE_PATH , PORT} from './config.js'


export async function htmlToPdf(html) {
    console.time()
    let page = await browser.newPage()
    await page.setContent(html);
    let pdf = await page.pdf({ format: "A4" });
    await page.close()
    console.timeEnd()
    return pdf
}

export async function dataToHtml(data) {
    let html = await ejs.renderFile(TEMPLATE_PATH, {...data,PORT});
    return html

}

export async function dataToPDf(data){
    let html = await dataToHtml(data)
    let pdf = await htmlToPdf(html)
    return pdf

}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }