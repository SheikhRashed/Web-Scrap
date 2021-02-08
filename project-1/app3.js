const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('Price.csv');

// Write Headers
writeStream.write(`Price \n`);

request('https://misdangraphics.com/price.html', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        $('.price_container').each((i, el) => {
            const price = $(el).find('.row').text();
            console.log(`${price} \n`);
            // const title = $(el).find('h2 a').text().replace(/\→\→+/g, '');
            // // console.log(title);
            // const made = $(el)
            //     .find('.made-with a')
            //     .text()
            //     .replace(/\s\s+/g, '');
            // // console.log(made);
            // const link = $(el).find('a').attr('href');
            // writeStream.write(`${title} \n`);
            writeStream.write(`${price} \n`);
        });
        console.log('Scrapping Done...');
    }
});
