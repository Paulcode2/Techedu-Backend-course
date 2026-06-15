// In Node.js, streams are used to handle data that is read or written in chunks instead of loading it all into memory at once.
// They are especially useful for large datasets or continuous data flows such as files, network requests, or real-time data processing.
// There are four types of streams in Node.js:
// Readable: Used for reading data from a source (e.g., file, network).
// Writable: Used for writing data to a destination (e.g., file, network).
// Duplex: A combination of both Readable and Writable streams, allowing for two-way communication.
// Transform: A type of Duplex stream that can modify or transform the data as it is read or written (e.g., compression, encryption).

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  // encoding: "utf-8",
});
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});
