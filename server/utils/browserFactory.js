import puppeteer from "puppeteer";

let browser;

const params = {
    headless: 'new',
    defaultViewport: null,
    args: ["--start-maximized"]
};

if (!browser) {
    browser = await puppeteer.launch(params);
}

export default browser