function greet(name) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Hello, " + name + "!");
    }, 1000);
  });
}
