const fs = require("fs");

function person(name, callbackFn) {
  console.log(`Hii, im ${name}`);
  callbackFn();
}

function address() {
  console.log("Dictionary");
}

person("Chirannn", address);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) console.log("Error in reading FIle :", err);

  console.log(data);
});
