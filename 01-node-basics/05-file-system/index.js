const fs = require("fs");
const path = require("path");

const dataFoler = path.join(__dirname, "data");

//sync way of creating the file
if (!fs.existsSync(dataFoler)) {
  fs.mkdirSync(dataFoler);
  console.log("data folder created successfully");
}

const dataFile = path.join(dataFoler, "node.txt");
fs.writeFileSync(dataFile, "Welcome Node JS");
console.log("File created successfully");

const readile = fs.readFileSync(dataFile, "utf-8");
console.log(readile);

fs.appendFileSync(dataFile, "\n Something cookinggg");

//async way of creating the file

const asyncFilePath = path.join(dataFoler, "express.txt");
fs.writeFile(asyncFilePath, "Hello express Js", (err) => {
  if (err) throw err;
  console.log("File created successfullt");
});

fs.readFile(asyncFilePath, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("Content is : ", data);
});

fs.appendFile(asyncFilePath, "\nHeyyyyyyyyyyy", (err) => {
  if (err) throw err;
  console.log("New line added");
  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Updated content is : ", data);
  });
});
