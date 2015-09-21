for (var i=1; i<=100; i++) {
  if (i % 15 === 0)
    console.log("FizzBuzz");
  else if (i % 5 === 0)
    console.log("Buzz");
  else if (i % 3 === 0)
    console.log("Fizz");
  else
    console.log(i);
}


// function fizzBuzz (num) {
//   if (num === 0) {
//     return;
//   } else if (num % 15 === 0) {
//     console.log('FizzBuzz');
//     fizzBuzz(num -1);
//   } else if (num % 3 === 0) {
//     console.log("Buzz");
//     fizzBuzz(num -1);
//   } else if (num % 5 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(num);
//     fizzBuzz(num -1);
//   }
// }

function fizzbuzz(num) {
  if (num === 0) {
    return -1
  }
  var output = "";
    if(num % 5 === 0) output += 'fizz';
    if(num % 3 === 0) output += 'buzz';

  console.log(output || num);
  fizzbuzz(num -1);
}
