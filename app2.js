const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('Title.csv');

// Write Headers
writeStream.write(`Title \n`);

request(
    'https://www.sitebuilderreport.com/inspiration/blog-examples',
    (error, response, html) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(html);
            $('.example-website').each((i, el) => {
                const title = $(el).find('h2 a').text().replace(/\→\→+/g, '');
                // console.log(title);
                const made = $(el)
                    .find('.made-with a')
                    .text()
                    .replace(/\s\s+/g, '');
                // console.log(made);
                const link = $(el).find('a').attr('href');

                writeStream.write(`${title} \n`);
            });
            console.log('Scrapping Done...');
        }
    }
);
