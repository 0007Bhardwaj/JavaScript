// Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function. Lexical scoping is the process used to define the scope of a variable by its position in the source code

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(); // Mozilla

//   Emulating private methods with closures

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.



// Closure scope chain
// Every closure has three scopes:

//     Local scope (Own scope)
//     Enclosing scope (can be block, function, or module scope)
//     Global scope


// InterView Questions

for (var i = 0; i < 5; i++) { // using var i is refering to the same variable
  setTimeout(function () {
    console.log(i); // 5 5 5 5 5
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 0 1 2 3 4
  }, 1000);
}


// we have to get the output same as let but using for

for (var i = 0; i < 5; i++) {
  function inner(index) {  // using closure index is now the local variable and new memory location is created each new time
    setTimeout(function () {
      console.log(index); // 0 1 2 3 4
    }, 1000);
  }
  inner(i);
}