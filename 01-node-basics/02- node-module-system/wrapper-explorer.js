console.log("Node js wrapper exporer file");

console.log("File name in wrapper explorer", __filename);
console.log("dir name in wrapper explorer", __dirname);

module.exports.greet = function (name) {
  console.log(`Hello ${name}`);
};
