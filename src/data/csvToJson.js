/* eslint-disable no-alert, no-console */

const csv = require('csvtojson');
const fs = require('fs');

const csvFilePath = './src/data/top-1m.csv';
const data = {
  sites: [],
};

csv({ noheader: true })
  .fromFile(csvFilePath)
  .on('json', (jsonObj) => {
    if (jsonObj.field1 < 500) {
      const url = jsonObj.field2;
      console.log(`adding url: ${url}`);
      data.sites.push(url);
    }
  })
  .on('done', () => {
    console.log(data);
    fs.writeFile('./src/data/data.json', JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File has been created');
    });
  });
