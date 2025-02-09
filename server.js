console.log(global)
const os = require("os");
const path = require("path");
const calc = require('./math');

// console.log("os", os.type());
// console.log("os", os.version());
// console.log("os", os.homedir());
// console.log("os", os.hostname());
// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

console.log("hello", calc.add(2,2))