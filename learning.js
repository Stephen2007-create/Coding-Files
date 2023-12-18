console.log (
    318-775-5068
)

console.log (
    "318-775-5068"
)

console.log ("Hello" + " " + "World" + "!")

const treeHeight = 7;
for (let i = 1; i <= treeHeight; i++) {
    let branches = '';
    for (let j = 1; j <= i; j++) {
      branches += '#';
    }
    console.log(branches);
  }
  console.log('#');

  let cl = console.log

  for (let index = 1; index < 101; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        cl("FizzBuzz");
    } else if (index % 3 === 0) {
        cl("Fizz");
    } else if (index % 5 === 0) {
        cl("Buzz");
    } else {
        cl(index);
    }
}

let fun = function() {
    cl("Function says hello");
};
fun();

let greet = function(name) {
    return "Hello" + name;
}

cl(greet("Bob"));

