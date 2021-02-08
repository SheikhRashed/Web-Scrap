const request = require('request');
const cheerio = require('cheerio');

request(
    'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States',
    (error, response, html) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(html);
            const siteHeading = $('.title');
            // console.log(siteHeading.html());
            // console.log(siteHeading.text());
            // const output = siteHeading.find('h1').text();
            // const output = siteHeading.children('h1').next().html();
            // const output = siteHeading.children('h1').parent().text();

            // console.log(output);

            // dropdown menu
            // $('nav ul li a').each((i, el) => {
            //     const item = $(el).text();
            //     console.log(item);
            // });

            // post title
            // $('.example-website .sticky-bar h2 a').each((i, el) => {
            //     const item = $(el).text();
            //     console.log(item.trim());
            // });
            $('table.wikitable tbody tr td b a').each((i, el) => {
                const title = $(el).text();
                console.log(`${i} no of President ${title}`);
            });
        }
    }
);
