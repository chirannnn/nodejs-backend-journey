const lodash = require("lodash");

const names = ["chirannn", "bob", "david"];

const capitalize = lodash.map(names, lodash.capitalize);
console.log(capitalize);
