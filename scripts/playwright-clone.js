const { chromium } = require('playwright');
const fs = require('fs-extra');
const path = require('path');
const fetch = require('node-fetch');

const CLONE_DIR = 'sites';
const JSON_DIR = 'clone-urls';

(async () => {
  const files = fs.readdirSync(JSON_DIR).filter(f => f.endsWith('.json'));

  for (const file of files) {
    const config = require(path.join('..', JSON_DIR, file));
    const url = config.url;
    const name = path.basename(file, '.json');
    const outputDir = path.join(CLONE_DIR, name);

    console.log(`🚀 Cloning ${url}`);
    await fs.ensureDir(outputDir);

    const browser = await chromium.launch();
    const page = await browser.newPage();

    const assets = new Map();

    page.on('response', async (response) => {
      try {
        const assetUrl = response.url().split('?')[0];
        const contentType = response.headers()['content-type'] || '';

        if (!assetUrl.startsWith('http')) return;
        if (
          contentType.includes('text/html') ||
          contentType.includes('text/css') ||
          contentType.includes('javascript') ||
          contentType.includes('image') ||
          contentType.includes('font')
        ) {
          const buffer = await response.body();
          assets.set(assetUrl, buffer);
        }
      } catch {}
    });

    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

    // Save HTML
    const html = await page.content();
    await fs.writeFile(path.join(outputDir, 'index.html'), html);

    // Save assets
    for (const [assetUrl, buffer] of assets.entries()) {
      try {
        const u = new URL(assetUrl);
        const filePath = path.join(outputDir, u.pathname);
        await fs.ensureDir(path.dirname(filePath));
        await fs.writeFile(filePath, buffer);
      } catch {}
    }

    await browser.close();
    console.log(`✅ Done ${url}`);
  }
})();
