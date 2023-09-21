const helloWorld = require('./hello-world.js');

test("Returning 'Hello, World!' as a string", () => {
  const result = helloWorld();
expect(result).toBe('Hello, World!');     // expect is a function that takes a value, and returns an "expectation" object.        
});
