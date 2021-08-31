const fs = require('fs');
const csv = require('csvtojson');

const csvPath = 'C:\\Users\\etaylor\\Desktop\\backend_services\\database\\raw\\healthcare.csv';
const jsonFilePath = 'C:\\Users\\etaylor\\Desktop\\backend_services\\database\\processed\\healthcare.json'

csv()
  .fromFile(csvPath)
  .then(writeJSON);

function writeJSON(jsonObj) {
  fs.writeFile(jsonFilePath, JSON.stringify(jsonObj), function(err, result) {
    if(err) console.log('error', err);
  });
}
