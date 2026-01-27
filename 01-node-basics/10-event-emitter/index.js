const EventEmitter = require("events");

const myFirstEmitter = new EventEmitter();

// register a listener
myFirstEmitter.on("greet", (name) => {
  console.log(`My name is ${name}`);
});

myFirstEmitter.emit("greet", "Chirannn");
