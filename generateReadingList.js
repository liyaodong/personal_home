const cheerio = require('cheerio');
const fs = require('fs');

const testFolder = './reading/';

const allHtmlFiles = fs.readdirSync(testFolder).filter(file => /\.html$/i.test(file));
const resultJson = { list: [] };

allHtmlFiles.forEach(file => {
  const result = fs.readFileSync(`./reading/${file}`, 'utf8');
  const $ = cheerio.load(result);
  const title = $('title').text();
  resultJson.list.push({ title, link: `/reading/${file}` });
});


fs.writeFileSync('./reading-list.json', JSON.stringify(resultJson));
