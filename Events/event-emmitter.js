const EventEmitter = require("events");

const customEmitter = new EventEmitter();
// on - listen for an event
// emit - emit an event

customEmitter.on("response", (name, age) => {
  console.log(`data received successfully from ${name}, age ${age}`);
});
customEmitter.on("response", () => {
  console.log(`data received Now`);
});

customEmitter.emit("response", "john", 34);
