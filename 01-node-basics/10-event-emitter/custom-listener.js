const EventEmitter = require("events");

class myCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting}, ${name}`);
  }
}

const myEmitter = new myCustomEmitter();

myEmitter.on("greeting", (input) => {
  console.log(`Greeting Event`, input);
});

myEmitter.greet("Chirannn");
