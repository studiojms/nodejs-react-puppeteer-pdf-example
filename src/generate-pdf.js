const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const reportUrl = 'http://localhost:3000';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(reportUrl, { waitUntil: 'networkidle0' });

  const dir = path.join(__dirname, '..', 'tmp');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const report = `${dir}/report-${new Date().getTime()}.pdf`;

  await page.pdf({
    path: report,
    printBackground: true,
    width: '209.55mm',
    height: '298.45mm',
  });
  await browser.close();

  console.log(`Report generated: ${report}`);
})();
