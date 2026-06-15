const { readFile } = require("fs");

console.log("Started a new task!");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Finished reading file");
});

console.log("Starting next task");
