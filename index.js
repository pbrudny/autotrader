const puppeteer = require('puppeteer');
 
console.log('starting async');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.autotrader.co.uk/car-search?sort=monthly-price-asc&radius=1500&postcode=w54bl&onesearchad=Used&onesearchad=Nearly%20New&make=RENAULT&model=MEGANE&deposit=1000&term=36&yearly-mileage=10000&year-from=2013');
  const pricesTags = await page.$x("//div[contains(@class,'vehicle-price')]");
//   let prices = pricesTags.map(price => {
//       return {
//           priceResult: await price.textContent
//       }
//   });
  let text0 = await page.evaluate(div => div.textContent, pricesTags[0]);
  console.log(text0);
  let text1 = await page.evaluate(div => div.textContent, pricesTags[1]);
  console.log(text1);
  let text2 = await page.evaluate(div => div.textContent, pricesTags[2]);
  console.log(text2);

  let text3 = await page.evaluate(div => div.textContent, pricesTags[3]);
  console.log(text3);

  let text4 = await page.evaluate(div => div.textContent, pricesTags[4]);
  console.log(text4);

  let text5 = await page.evaluate(div => div.textContent, pricesTags[5]);
  console.log(text5);

//   console.log(pricesTags[0].textContent);

  // console.log(document.querySelectorAll('.vehicle-price'));
//   await page.waitForSelector('.search-page__results')
//   const cars = await page.evaluate(() => {
//   const results = Array.from(document.querySelectorAll('.vehicle-price'));
//   return results.map(result => {
//      return {
//        price: result.querySelector('.vehicle-price').textContent
//      }
//    });
//   return results;
//  });

//  console.log("HERE is the result: ", cars);
  //div[contains(@class,'vehicle-price')]
//   await page.screenshot({path: 'example.png'});
 
  await browser.close();
})();