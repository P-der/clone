const puppteer = require('puppeteer');

(async ()=> {
    const testPath = `file://${__dirname}/index.html`;
    const browser = await puppteer.launch();
    const page = await browser.newPage();
    await page.goto(testPath)

    await page.waitFor('.suite');
    const passNode = await page.$$('.pass');
    const failNode = await page.$$('.fail');

    if(passNode && passNode.length) {
        console.log(`通过 ${passNode.length}项`);
    }

    if(failNode && failNode.length) {
        console.log(`失败 ${failNode.length}项`);
        await browser.close();
        process.exit(1)
    }


    const pngPath = `${__dirname}/browser.png`;
    await page.screenshot({
        path: pngPath,
        fullPage: true
    })
    await browser.close();
})()