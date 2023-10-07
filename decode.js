'use strict';

const fs = require('fs');



fs.readFile('./data.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)



let data1 = data;

let buff = new Buffer(data1, 'base64');
fs.writeFileSync('stack-abuse-logo-out.png', buff);

console.log('Base64 image data converted to file: stack-abuse-logo-out.png');
console.log('"' + data1 + '" converted from Base64 to ASCII is "' + text + '"');

})