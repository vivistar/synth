// Renders the Anchorflight brief guides (HTML -> PDF + PNG) into ../../docs.
// Usage:
//   cd tools/brief-guides && npm install playwright && npx playwright install chromium
//   node render.js
// If Chromium is already installed elsewhere, point to it:
//   CHROME_PATH=/path/to/chrome node render.js
const { chromium } = require('playwright');
const path = require('path');

// [source html, output basename, page width px, page height px]
const SHEETS = [
  ['loop-brief-guide.html',   'anchorflight-method-guides-loop.png',        1123, 650],
  ['method-brief-guide.html', 'anchorflight-method-guides-reasoning.png', 1123, 840],
];

(async () => {
  const outDir = path.resolve(__dirname, '../../docs');
  const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
  for (const [src, pngName, w, h] of SHEETS) {
    const pdfName = pngName.replace(/\.png$/, '.pdf');
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
    const errs = [];
    page.on('pageerror', e => errs.push(String(e)));
    await page.goto('file://' + path.resolve(__dirname, src), { waitUntil: 'networkidle' });
    await page.waitForTimeout(600); // let webfonts settle if the network provided them
    const el = await page.$('.page');
    await el.screenshot({ path: path.join(outDir, pngName) });
    await page.pdf({ path: path.join(outDir, pdfName), width: w + 'px', height: h + 'px', printBackground: true, pageRanges: '1' });
    console.log(`${src} -> ${pngName} / ${pdfName}  errors: ${JSON.stringify(errs)}`);
    await page.close();
  }
  await browser.close();
  console.log('done');
})();
