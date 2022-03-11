// Function 1

function sum(...theArgs)  {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });

}

console.log(sum(1, 2, 3));
// expected output 6
console.log(sum(1, 2, 3, 4));
// expected output 10

// Function 2

function sum(x, y, z) {
    return x + y + z;

}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
// expected output 6


// solution by Winc 1
const sum = function(...args) {
    return args.reduce((acc,item) => {
            return acc + item;
    })
}

console.log(sum(1,2,3,4,5,6)); // expected result: 21

// solution by Winc 2
const sum = function(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  const digits = [1, 2, 3];
  
  console.log(sum(...digits));
  // expected result: 6