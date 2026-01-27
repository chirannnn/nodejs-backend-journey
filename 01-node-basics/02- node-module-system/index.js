//module.exports
//require

const firstModule = require("./first-module");

console.log(firstModule.add(5, 5));

try {
  console.log("trying to divide by zero");

  console.log(firstModule.divide(5, 5));
} catch (error) {
  console.log("Caught an error", error.message);
}

// //module wrapper
// (
//     function(exports, require, module, __filename, __dirname){
//         //your module code goes here
//     }
// )
