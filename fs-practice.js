
 const fs = require('fs');

// const data = fs.readFileSync('message.txt', 'utf8');

// console.log(data);

// const fs = require('fs');

// fs.appendFileSync(
//   'message.txt',
//   '\nNew product added: Milk'
// );

// console.log('New content added!');
// fs.unlinkSync('message.txt');
// console.log("delted");
// if(fs.existsSync('message.txt')){
//     console.log("file exist ");}
// else{
//     console.log("empty");
// }

//const fs = require('fs');

// const info = fs.statSync('fs-practice.js');

// console.log('Is it a file?', info.isFile());
// console.log('Is it a folder?', info.isDirectory());
// console.log('Size in bytes:', info.size);


//const fs = require('fs');

fs.mkdirSync('uploads', { recursive: true });

fs.writeFileSync(
  'uploads/product.txt',
  'Product: Milk'
);

console.log('File created inside uploads!');
