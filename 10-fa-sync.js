// FS(sync)

// FS(Async)

const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./content/third.txt",
  `This is the file behind ${first} and ${second}`,
  { flag: "a" },
);
