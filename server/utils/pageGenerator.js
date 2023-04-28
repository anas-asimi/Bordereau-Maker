import puppeteer from "puppeteer";
import ejs from 'ejs'

const params = {
    headless: 'new',
    defaultViewport: null,
    args: ["--start-maximized"]
};

const browser = await puppeteer.launch(params);


export async function pageGenerator(data) {

    const FILE_PATH = `${process.cwd()}\\views\\borderaux.ejs`
    const page = await browser.newPage();
    const html = await ejs.renderFile(FILE_PATH, { data });
    await page.setContent(html);
    const pdf = await page.pdf({ format: "A4" });
    await page.close()
    return pdf

}