const puppeteer = require('puppeteer');

const reportUrl = 'http://localhost:3000';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(reportUrl);
  await page.pdf({
    path: `tmp/report-${new Date().getTime()}.pdf`,
    printBackground: true,
    width: '209.55mm',
    height: '298.45mm',
  });
  await browser.close();
})();
