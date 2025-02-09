const fs = require('fs');
const path = require('path');

// console.log(path.join(__dirname, 'files' ,'starter.text'))

fs.readFile(path.join(__dirname, 'files' ,'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('operation read complete',data);
  });


//writing file 

fs.writeFile(path.join(__dirname, 'files' ,'reply.txt'), 'Hey I am writing using node', (err) => {
    if (err) throw err;
    console.log("Operation write complete");
  });


// Append file

fs.appendFile(path.join(__dirname, 'files' ,'test.txt'), 'Hey I am writing using node', (err) => {
    if (err) throw err;
    console.log("Operation Append complete");
  });


//Exit on uncaught error

process.on("uncaughtException", error =>{
    console.log(`uncaught error ${error}`)
    process.exit(1);
})