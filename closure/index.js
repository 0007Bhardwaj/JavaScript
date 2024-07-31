// "Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.
//  Lexical scoping is the process used to define the scope of a variable by its position in the source code

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

for (var id = 0; id < 3; id++) {
    // The setTimeout function uses a callback, and by the time the callback is executed,
    // the loop has already completed, so 'id' will always be 3 in all setTimeout callbacks.
    setTimeout(function () {
      console.log('seconds: ' + id);
    }, id * 1000);
  }
     
  for (let id = 0; id < 3; id++) {
    // The use of 'let' creates a block-scoped variable, fixing the closure issue.
    // Now each setTimeout callback captures the correct value of 'id'.
    setTimeout(function () {
      console.log('seconds: ' + id);
    }, id * 1000);
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

// "IIFE and Closures"

// "Another way to avoid this issue with closures in a loop is to use the IIFE (Immediately Invoked Function Expression) syntax, which forces an immediate invocation of the setTimeout function as soon as the loop runs. 
// So instead of essentially stacking the setTimeout function and waiting for the loop to finish, then execute the code, the setTimeout runs as soon as the loop starts, which is the expected behavior. Let's see what the syntax for IIFE looks like below."

for (var id = 1; id <= 3; id++) {
    // Using an immediately-invoked function expression (IIFE) to create a new scope for each iteration.
    // This helps avoid the closure issue with setTimeout.
    (function (id) {
      setTimeout(function () {
        console.log('seconds: ' + id);
      }, id * 3000);
    })(id);
  }
     