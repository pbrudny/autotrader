const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.autotrader.co.uk/car-search?sort=monthly-price-asc&radius=1500&postcode=w54bl&onesearchad=Used&onesearchad=Nearly%20New&make=RENAULT&model=MEGANE&deposit=1000&term=36&yearly-mileage=10000&year-from=2013');
  await page.screenshot({path: 'example.png'});
 
  await browser.close();
})();