const path = require("path");

console.log("Directory name:", path.dirname(__filename));
console.log("File name:", path.basename(__filename));
console.log("File extension", path.extname(__filename));

const joinPath = path.join("users", "documents", "codeJourney", "NodeJS");
console.log(joinPath);

const resolvePath = path.resolve("users", "documents", "codeJourney", "NodeJS");
console.log(resolvePath);

const normalizepath = path.normalize("users//documents/../codeJourney/NodeJS");
console.log(normalizepath);
