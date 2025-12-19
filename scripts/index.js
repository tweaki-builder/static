const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const fs = require('fs');
const path = require('path');

const JSON_DIR = 'clone-urls';
const OUTPUT_DIR = 'sites';

(async () => {
  const files = fs.readdirSync(JSON_DIR).filter(f => f.endsWith('.json'));

  for (const file of files) {
    const { url } = require(path.join('..', JSON_DIR, file));
    const name = path.basename(file, '.json');
    const directory = path.resolve(OUTPUT_DIR, name);

    console.log(`🚀 Cloning ${url}`);
    console.log(`📂 Output → ${directory}`);

    await scrape({
      urls: [url],
      directory,

      recursive: true,
      maxDepth: 5,

      plugins: [
        new PuppeteerPlugin({
          launchOptions: {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
          },
          scrollToBottom: {
            timeout: 15000,
            viewportN: 10
          }
        })
      ],

      request: {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36'
        }
      }
    });

    console.log(`✅ Done ${url}`);
  }
})();
