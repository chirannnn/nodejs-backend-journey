const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error in reading file :", err);
    return;
  }

  const modifiedData = data.toUpperCase();

  fs.writeFile("output.txt", modifiedData, (err) => {
    if (err) {
      console.log("Error in write file :", err);
      return;
    }

    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) {
        console.log("Error in readfile :", err);
        return;
      }

      console.log(data);
    });
  });
});
